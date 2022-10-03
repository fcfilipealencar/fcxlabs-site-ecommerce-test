import React from "react";
import { BackdropContainer } from "./style";

interface BackdropProps {
    isOpen: boolean;
}

export const Backdrop: React.FC<BackdropProps> = ({ isOpen }) => {
    return <BackdropContainer isOpen={isOpen} />;
};
