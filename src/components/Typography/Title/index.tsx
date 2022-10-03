import { ReactNode, ElementType } from "react";
import { theme } from "../../../helpers/themes";

export interface TitleProps {
    children: ReactNode;
    as: ElementType;
    color?: string;
}

const Title = ({
    children,
    as,
    color = theme.colors.neutral["999"],
}: TitleProps) => {
    const Tag = as;
    return (
        <>
            <Tag>{children}</Tag>
            <style jsx>{`
                ${Tag} {
                    color: ${color};
                    font-size: ${theme.space.x4};
                }
            `}</style>
        </>
    );
};

export default Title;
