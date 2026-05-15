import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}
const rootStyles = getComputedStyle(document.documentElement);
export const css = (prop: string) => rootStyles.getPropertyValue(prop).trim();
