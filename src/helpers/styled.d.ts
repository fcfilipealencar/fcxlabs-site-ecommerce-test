import "styled-components";

export type Breakpoint =
    | "Breakpoints.xs"
    | "Breakpoints.sm"
    | "Breakpoints.md"
    | "Breakpoints.lg"
    | "Breakpoints.xl"
    | string;
export type ColorVariantReduced =
    | "050"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | string;
export type ColorVariant =
    | ColorVariantReduced
    | "000"
    | "025"
    | "700"
    | "800"
    | "900"
    | "999"
    | string;
export type GridVariant =
    | "xxs"
    | "xs"
    | "ssm"
    | "sm"
    | "md"
    | "lg"
    | "xl"
    | string;
export type WeightVariant =
    | 100
    | 200
    | 300
    | 400
    | 500
    | 600
    | 700
    | 800
    | 900
    | "bold"
    | "bolder"
    | "normal"
    | number
    | string;
export type SpaceVariant =
    | "x0"
    | "xpx"
    | "x0.5"
    | "x1"
    | "x1.5"
    | "x2"
    | "x2.5"
    | "x3"
    | "x3.5"
    | "x4"
    | "x5"
    | "x6"
    | "x7"
    | "x8"
    | "x9"
    | "x10"
    | "x11"
    | "x12"
    | "x14"
    | "x16"
    | "x20"
    | "x24"
    | "x28"
    | "x32"
    | "x36"
    | "x40"
    | "x44"
    | "x48"
    | "x52"
    | "x56"
    | "x60"
    | "x64"
    | "x72"
    | "x80"
    | "x96"
    | string;
export type DeviceVariant =
    | "mobileS"
    | "mobileM"
    | "mobileL"
    | "tablet"
    | "laptop"
    | "laptopL"
    | "desktop"
    | string;

declare module "styled-components" {
    export interface DefaultTheme {
        breakpoints: { [key: Breakpoint]: string | number };
        colors: {
            primary: { [key: ColorVariantReduced]: string };
            secondary: { [key: ColorVariantReduced]: string };
            tertiary: { [key: ColorVariantReduced]: string };
            neutral: { [key: ColorVariant]: string };
        };
        typography: {
            fontFamily: string;
            fontSize: { [key: GridVariant]: string };
            fontWeight: { [key: WeightVariant]: string | number };
        };
        space: { [key: SpaceVariant]: string };
        device: {
            mobileFirst: { [key: DeviceVariant]: string };
            desktopFirst: { [key: DeviceVariant]: string };
        };
    }
}
