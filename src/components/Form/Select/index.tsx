import { forwardRef } from "react";
import { Path, UseFormRegister } from "react-hook-form";
import IFormValues from "../../../types/FormValues";

type SelectProps = {
    id: string;
    label: Path<IFormValues>;
};

const Select = forwardRef<
    HTMLSelectElement,
    SelectProps & ReturnType<UseFormRegister<IFormValues>>
>(({ onChange, onBlur, id, name, label }, ref) => (
    <>
        <label htmlFor={id}>{label}</label>
        <select
            id={id}
            name={name}
            ref={ref}
            onChange={onChange}
            onBlur={onBlur}
        >
            <option value="20">20</option>
            <option value="30">30</option>
        </select>
    </>
));

Select.displayName = "Select";

export default Select;
