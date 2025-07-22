import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combina clases de Tailwind CSS evitando conflictos
 */

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}