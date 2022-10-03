import NextLink from "next/link";
import CustomStyledLink from "../StyledLink";
import { LinkProps } from "../../types/LinkProps";

// export interface StyleSheetProps {
//   focus?: any;
//   hover?: any;
//   srOnly?: boolean;
//   [k: string]: any;
// }

const Link = ({ children, href, mouseOver, ...props }: LinkProps) => {
    return (
        <NextLink href={href} passHref>
            <CustomStyledLink mouseOver={mouseOver} href={href} {...props}>
                {children}
            </CustomStyledLink>
        </NextLink>
    );
};

export default Link;
