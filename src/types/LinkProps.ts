import { ReactNode } from "react";

export interface LinkProps {
    children: ReactNode;
    href: string;
    /* eslint-disable @typescript-eslint/no-explicit-any */
    ref?: any;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    textDecoration?: string;
    target?: string;
    rel?: string;
    mouseOver?: {
        color?: string;
        fontSize?: string;
    };
    // styleSheet?: StyleSheetProps;
}
