import { clsx } from "clsx" // 1.2k (gzipped: 500)
import { twMerge } from "tailwind-merge" // 1.2k (gzipped: 500)



export const cn = (...inputs) => {
    return twMerge(
        clsx(inputs)
    )
};