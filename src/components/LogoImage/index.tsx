import { Desk } from "../../ui/Desk";
import Image, { ImageProps } from "../Image";

const LogoImage = ({
    src = "https://d3gcmglegmnvz8.cloudfront.net/logo/logo_fc.svg",
    alt = "Ferreira Costa",
    width = "180px",
    height = "77px",
    layout = "fixed",
}: Partial<ImageProps>) => {
    return (
        <Desk>
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                layout={layout}
            />
        </Desk>
    );
};

export default LogoImage;
