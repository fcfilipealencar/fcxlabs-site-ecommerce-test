import { ChangeEvent } from "react";
import {
    Path,
    UseFormRegister,
    UseFormSetValue,
    ValidationRule,
} from "react-hook-form";
import InputMask from "react-input-mask";
import IFormValues from "../../../types/FormValues";
import { StyledInput } from "./style";

type InputProps = {
    id: string;
    name: string;
    mask?: string;
    label?: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    setValue?: UseFormSetValue<IFormValues>;
    required?: string;
    pattern?: ValidationRule<RegExp>;
    minLength?: ValidationRule<number>;
    maxLength?: ValidationRule<number>;
    type?: string;
    placeholder?: string;
    value?: string | number | string[];
    hasError: boolean;
    disabled?: boolean;
    width?: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
};

const Input = ({
    id,
    type,
    mask,
    label,
    hasError,
    width,
    register,
    setValue,
    onChange,
    onBlur,
    required,
    pattern,
    minLength,
    maxLength,
    name,
    ...props
}: InputProps) => {
    return (
        <StyledInput hasError={hasError} width={width || "initial"}>
            {label && <label htmlFor={id}>{label}</label>}
            {mask ? (
                <InputMask
                    mask={mask}
                    id={id}
                    type={type || "text"}
                    {...props}
                    {...setValue}
                    {...register(name, {
                        required,
                        pattern,
                        minLength,
                        maxLength,
                    })}
                    onChange={onChange}
                    onBlur={onBlur}
                />
            ) : (
                <input
                    id={id}
                    type={type || "text"}
                    {...props}
                    {...setValue}
                    {...register(name, {
                        required,
                        pattern,
                        minLength,
                        maxLength,
                    })}
                    onChange={onChange}
                />
            )}
        </StyledInput>
    );
};

export default Input;
