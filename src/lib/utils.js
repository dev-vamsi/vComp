import { twMerge } from 'tailwind-merge';

export default function mergeClasses(defaultClasses, propClasses) {
    return twMerge(defaultClasses, propClasses);
}
