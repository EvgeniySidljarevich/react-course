import { baseTheme } from "../styles/theme";

// Function to get a fonts fragment
type TFonts = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export function getFontsFragment(size: TFonts) {
    return `
        font-size: ${baseTheme.fontSizes[`${size}`]};
        line-height: ${baseTheme.lineHeights[`${size}`]};
    `
};

// Function for media queries
// export function mediaMax(screen: string, content: string): string {
//     return `@media (max-width: ${screen}) {
//         ${content}
//     }`
// };

// Function to get a previous month
export const getPreviousMonth = (date: Date): Date => {
    const previousMonth = new Date(date.getTime());

    previousMonth.setMonth(date.getMonth() - 1);
    return previousMonth;
};

// Function to get window dimensions
export function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;

    return { width, height };
};

// Function to get a string with a capital letter
export function getCapitalLetter(str: string) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}

// Function to get a comparison for counter
export function getComparisonCounter(category: 'adults' | 'children' | 'rooms', route: 'increase' | 'decrease', count: number) {
    const condition = {
        increase: {
            adults: count < 30,
            children: count < 10,
            rooms: count < 30,
        },
        decrease: {
            adults: count > 0,
            children: count > 0,
            rooms: count > 1,
        }
    }

    return condition[route][category];
} 