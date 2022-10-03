import React from "react";
import { ContainerSimplePopup, TexrSimplePopup } from "./style";

interface SimplePopupProps {
    isOpen: boolean;
    text: string;
}

export const SimplePopup: React.FC<SimplePopupProps> = ({ isOpen, text }) => {
    return (
        <ContainerSimplePopup>
            <TexrSimplePopup isOpen={isOpen}>{text}</TexrSimplePopup>
        </ContainerSimplePopup>
    );
};
