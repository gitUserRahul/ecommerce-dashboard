# E-commerce Dashboard

  E-commerce Dashboard built with Next.js 16 and TypeScript, featuring dynamic product browsing, cart management, and seamless integration with the FakeStore API.

## Live Demo:

  https://ecommerce-dashboard-dbbnghzz8-gituserrahuls-projects.vercel.app/products

## Tech Stack

Framework: Next.js 16 (App Router)  
Language: TypeScript <br />
Styling: Tailwind CSS <br />
State Management: Zustand

## API Integration: 

  FakeStore API

## Deployment:

  Vercel

## Features:

  - Fetch and display products from FakeStore API 
  - Dynamic product listing page (/products) 
  - Add to Cart functionality 
  - Real-time cart state management 
  - Responsive UI 
  - Type-safe development with TypeScript 
  - Optimized routing using Next.js App Router 
  - Persistent cart using localStorage 
  - Product filtering by category, price range & search 

## Project Structure

```bash

ecommerce-dashboard/
├── app/                     
│   ├── cart/                
│   │   └── page.tsx
│   ├── products/
│   │   ├──  [id]/            
│   │   │  ├── page.tsx        
│   │   │  └── error.tsx      
│   │   ├── page.tsx           
│   │   ├── loading.tsx        
│   │   └── error.tsx           
│   ├── layout.tsx             
│   ├── globals.css            
│   └── page.tsx               
├── components/             
│   ├── products/           
│   ├── cart/                
│   ├── shared/             
│   └── ui/                 
├── lib/                    
│   ├── api/                
│   ├── utils/              
│   └── metadata/            
├── store/                   
│   └── cartStore.ts         
├── types/                   
│   ├── cart.types.ts        
│   └── product.types.ts     
├── hook/
    └── useAddToCart.ts                    
├── constant/
    └── constants.ts           


```
 
## Getting Started

  1. Clone the Repository 
  
```bash

git clone https://github.com/your-username/ecommerce-dashboard.git
cd ecommerce-dashboard

```
  2. Install Dependencies 
  
    npm install 
  3. Run Development Server 
  
    npm run dev 
    
  4. Visit 
  
    http://localhost:3000/products

### API Integration:
  This project uses the FakeStore API to fetch product data:

## Products Endpoint:

https://fakestoreapi.com/products

Data is fetched using async/await inside Server Components.

## Core Functionality

  - Product Listing
  - Fetches products dynamically from FakeStore API.
  - Displays title, price, category, rating and image.
  - Cart Management
  - Add products to cart.
  - Prevent duplicate cart entries.
  - Update cart quantity.
  - Calculate total price dynamically.

## Deployment: 

  The application is deployed on Vercel
  
  Live URL:
  
  https://ecommerce-dashboard-dbbnghzz8-gituserrahuls-projects.vercel.app/products

## To deploy your own:

  vercel

  
### Learnings & Implementation Highlights

  - Leveraged Next.js App Router for structured routing.
  - Used TypeScript for improved developer experience and scalability.
  - Implemented reusable UI components.
  - Maintained separation of concerns between API logic and UI components.
  - Followed clean folder structure for scalability.

## Future Improvements

  - Authentication (JWT / NextAuth)
  - Unit and  integration testing

## Author

  Rahul Chaudhary
  
  Frontend Developer | Next.js & TypeScript | React
