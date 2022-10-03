import React from "react";
import { StyledSnackbar } from "./style";

interface SnackbarProps {
    type: string;
    open: boolean;
    children: string;
}

const Snackbar = ({ type, open, children }: SnackbarProps) => {
    return (
        <StyledSnackbar>
            <div className={`snackbar ${open && "visible"} ${type}`}>
                <span>{children}</span>
            </div>
        </StyledSnackbar>
    );
};

export default Snackbar;
