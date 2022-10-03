import CustomImage from "../../infra/components/next/Image";

export interface ImageProps {
    src: string;
    alt: string;
    width?: string;
    height?: string;
    layout?: "intrinsic" | "fixed" | "responsive" | "fill";
}

const Image = ({ src, width, height, alt, ...props }: ImageProps) => {
    return (
        <CustomImage
            src={src}
            width={width || "100%"}
            height={height || "100%"}
            alt={alt}
            {...props}
        />
    );
};

export default Image;
