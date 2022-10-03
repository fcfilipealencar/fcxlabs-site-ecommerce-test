import { forwardRef } from "react";
import { LinkProps } from "../../types/LinkProps";
import { StyledLink } from "./style";

/* eslint-disable @typescript-eslint/no-explicit-any */
const CustomStyledLink = forwardRef<any, LinkProps>(
    (
        { onClick, href, target, mouseOver, children, ...props }: LinkProps,
        ref
    ) => {
        return (
            <StyledLink
                href={href}
                onClick={onClick}
                ref={ref}
                target={target || "_blank"}
                mouseOver={mouseOver}
                {...props}
            >
                {children}
            </StyledLink>
        );
    }
);

CustomStyledLink.displayName = "StyledLink";

export default CustomStyledLink;
