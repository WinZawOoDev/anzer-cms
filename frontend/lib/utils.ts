import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getAvailableImgFirst = (image: ImageFormat) => {
  const prefix = process.env.NEXT_PUBLIC_DATA_URL;
  const ImageUrl =
    image.formats?.large?.url ||
    image.formats?.medium?.url ||
    image.formats?.small?.url ||
    image.formats?.thumbnail?.url;
  return `${prefix}${ImageUrl}`;
};
