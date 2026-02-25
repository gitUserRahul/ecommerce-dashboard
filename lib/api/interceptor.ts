// baseurl
import { BASE_URL } from "@/constant/constants";

// custom error class
export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
    public endpoint?: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

interface FetchClientOptions extends RequestInit {
  next?: {
    revalidate?: number | false;
    tags?: string[];
  };

  serviceName?: string;
  timeout?: number;
}

export async function fetchClient<T>(
  endpoint: string,
  options: FetchClientOptions = {},
): Promise<T> {
  const { serviceName = "API", timeout = 10000, ...fetchOptions } = options;
  const url = `${BASE_URL}${endpoint}`;

  const controller = new AbortController();

  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      ...fetchOptions,
      headers: {
        "Content-Type": "application/json",
        ...fetchOptions.headers,
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new ApiError(response.status, `${response.statusText}`, endpoint);
    }

    const text = await response.text();
    return text ? JSON.parse(text) : ({} as T);
  } catch (error) {
    clearTimeout(timeoutId);
    const logPrefix = `[${serviceName}] ${endpoint}`;

    if (error instanceof ApiError) {
      console.error(`${logPrefix} - status: ${error.status}:`, error.message);
      throw error;
    }

    if (error instanceof Error && error.name === "AbortError") {
      const timeoutError = new Error(`request timeout after ${timeout}ms`);
      console.error(`${logPrefix} - timeout:`, timeoutError.message);
      throw timeoutError;
    }

    const networkError = new Error(
      error instanceof Error ? error.message : "Unknown network error",
    );
    console.error(`${logPrefix} - Network error:`, networkError.message);
    throw networkError;
  }
}
