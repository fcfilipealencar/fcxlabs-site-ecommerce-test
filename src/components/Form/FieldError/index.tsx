import { StyledFieldError } from "./style";

type FieldErrorProps = {
    text: string;
    color?: string;
    fontSize?: string;
    padding?: string;
};

const FieldError = ({ text, ...props }: FieldErrorProps) => {
    return <StyledFieldError {...props}>{text}</StyledFieldError>;
};

export default FieldError;
