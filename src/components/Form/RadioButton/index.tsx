import { Path, UseFormRegister } from "react-hook-form";
import IFormValues from "../../../types/FormValues";
import {
    RadioButtonLabel,
    RadioButtonSpan,
    RadioButtonWrapper,
    StyledRadioButton,
} from "./style";

type RadioButtonProps = {
    id: string;
    name: string;
    value: string | number;
    label?: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    checked?: boolean;
    disabled?: boolean;
    placeholder?: string;
    hasError: boolean;
};

const RadioButton = ({
    id,
    register,
    name,
    label,
    ...props
}: RadioButtonProps) => {
    return (
        <RadioButtonWrapper>
            <RadioButtonLabel>
                <StyledRadioButton id={id} {...props} {...register(name)} />
                {label && <RadioButtonSpan>{label}</RadioButtonSpan>}
            </RadioButtonLabel>
        </RadioButtonWrapper>
    );
};

export default RadioButton;
