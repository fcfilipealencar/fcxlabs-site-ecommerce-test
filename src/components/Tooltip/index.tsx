import { ReactNode } from "react";
import { TooltipContainer } from "./style";

export interface TooltipProps {
    icon?: JSX.Element;
    content?: string | JSX.Element;
    children?: ReactNode;
}

const Tooltip = ({ icon, content, children }: TooltipProps) => {
    return (
        <TooltipContainer>
            {children}
            {icon ?? null}
            {content && <span>{content}</span>}
        </TooltipContainer>
    );
};

export default Tooltip;
