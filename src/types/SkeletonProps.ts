export interface SkeletonProps {
    count: number;
    type?: "basic" | "card" | "product" | "user";
    width?: string | number;
    height?: string | number;
    inline?: boolean;
    style?: { [key: string]: string | number };
}
