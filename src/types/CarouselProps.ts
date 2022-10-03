import { ReactChild } from "react";

export default interface CarouselProps {
    children: ReactChild[];
    axis?: "horizontal" | "vertical";
    autoPlay?: boolean;
    infiniteLoop?: boolean;
    showArrows?: boolean;
    showIndicators?: boolean;
}
