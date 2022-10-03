export default interface ImageDto {
    src: string;
    alt: string;
    width: string;
    height: string;
    layout?: "intrinsic" | "fixed" | "responsive" | "fill";
}
