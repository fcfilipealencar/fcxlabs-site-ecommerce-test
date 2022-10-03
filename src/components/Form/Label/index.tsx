import { StyledLabel } from "./style";

type StyledLabelProps = {
    text: string;
    htmlFor?: string;
};

const Label = ({ text, ...props }: StyledLabelProps) => {
    return <StyledLabel {...props}>{text}</StyledLabel>;
};

export default Label;
