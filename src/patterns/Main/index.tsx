import { ReactNode } from "react";

export interface MainProps {
    children: ReactNode;
}

const Main = ({ children }: MainProps) => {
    return <main>{children}</main>;
};

export default Main;
