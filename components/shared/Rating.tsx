import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { RatingProps } from "@/types";

const getStarIcon = (index: number, rate: number) => {
  if (rate >= index + 1) return <FaStar />;
  if (rate >= index + 0.5) return <FaStarHalfAlt />;
  return <FaRegStar />;
};

const Rating = ({ rate, count }: RatingProps) => {
  return (
    <div className="flex item-center gap-2">
      <div className="flex items-center">
        {[0, 1, 2, 3, 4].map((index) => (
          <span className="text-yellow-500" key={index}>
            {getStarIcon(index, rate)}
          </span>
        ))}
      </div>

      {}
      <span className="text-sm text-gray-500">({count})</span>
    </div>
  );
};

export default Rating;
