import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import React from "react";
import CarouselProps from "../../../../types/CarouselProps";

const ReactResponsiveCarousel = ({ children, ...props }: CarouselProps) => {
    return (
        <Carousel
            {...props}
            showStatus={false}
            showThumbs={false}
            // renderIndicator={renderIndicator}
        >
            {children}
        </Carousel>
    );
};

// const renderIndicator = (
//     clickHandler: (e: React.MouseEvent | React.KeyboardEvent) => void,
//     isSelected: boolean,
//     index: number,
//     label: string
// ): ReactNode => {
//     return (
//         <li
//             key={index}
//             style={{
//                 width: theme.space.x32,
//                 height: theme.space.x4,
//                 marginLeft: theme.space.x16,
//                 cursor: "pointer",
//                 borderRadius: theme.space["x1/1"],
//                 color: "transparent",
//                 background: isSelected
//                     ? theme.colors.primary["200"]
//                     : theme.colors.neutral["200"],
//             }}
//             onClick={clickHandler}
//             onKeyDown={clickHandler}
//             role="button"
//             tabIndex={0}
//             aria-label={`${label} ${index + 1}`}
//         >
//             teste
//         </li>
//     );
// };

export default ReactResponsiveCarousel;
