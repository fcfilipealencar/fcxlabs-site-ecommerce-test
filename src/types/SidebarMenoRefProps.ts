import { RefObject } from "react";

export type SidebarMenuRefProps =
    | ((instance: HTMLElement | null) => void)
    | RefObject<HTMLElement>
    | null
    | undefined;
