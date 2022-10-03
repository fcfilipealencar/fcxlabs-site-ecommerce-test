import IconDto from "./Icon";
import ImageDto from "./Image";
import LinkDto from "./Link";
import { Style } from "./Style";

export type Option = {
    title: string;
    link?: LinkDto;
    images?: ImageDto[];
};

export interface UtilInfoDto {
    title: string;
    icon?: IconDto;
    style?: Style;
    options: Option[];
}
