import { useEffect, useState } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import IFormValues from "../../../types/FormValues";
import {
    CheckboxLabel,
    CheckboxSpan,
    CheckboxWrapper,
    StyledCheckbox,
} from "./style";

type CheckboxProps = {
    id: string;
    name: string;
    label?: Path<IFormValues>;
    register: UseFormRegister<IFormValues>;
    required: boolean;
    checked?: boolean;
    placeholder?: string;
    hasError: boolean;
};

const Checkbox = ({
    id,
    register,
    required,
    name,
    label,
    checked,
    ...props
}: CheckboxProps) => {
    const defaultChecked = checked || false;
    const [isChecked, setIsChecked] = useState(defaultChecked);

    useEffect(() => {
        return setIsChecked(defaultChecked);
    }, [checked, defaultChecked]);

    return (
        <CheckboxWrapper>
            <CheckboxLabel>
                <StyledCheckbox
                    id={id}
                    checked={isChecked}
                    {...props}
                    {...register(name, { required })}
                    onChange={() => setIsChecked(prev => !prev)}
                />
                {label && <CheckboxSpan>{label}</CheckboxSpan>}
            </CheckboxLabel>
        </CheckboxWrapper>
    );
};

export default Checkbox;
