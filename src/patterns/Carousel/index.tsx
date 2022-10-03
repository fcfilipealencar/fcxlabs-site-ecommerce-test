import ReactResponsiveCarousel from "../../infra/components/lib/ReactResponsiveCarousel";
import CarouselProps from "../../types/CarouselProps";

const Carousel = ({ children, ...props }: CarouselProps) => {
    return (
        <ReactResponsiveCarousel {...props}>{children}</ReactResponsiveCarousel>
    );
};

export default Carousel;
