import IconDto from "./Icon";
import LinkDto from "./Link";

type Icon = {
    title: string;
    width?: string;
    height?: string;
    color?: string;
    backgroundColor?: string;
    link?: string;
};

export default interface SupportContactDto {
    mainIcon: Icon;
    title: string;
    description?: string;
    link?: LinkDto;
    secondaryIcons?: IconDto[];
}
