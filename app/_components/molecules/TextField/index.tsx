import { ChangeEvent, ReactNode, useCallback, useState } from "react";
import { StepBackwardFilled } from "@ant-design/icons";
import styles from "./styles.module.css";

interface TextFieldProps {
  type: "text" | "number" | "password" | "date" | "email";
  name: string;
  label: string;
  id: string;
  disabled?: boolean;
  placeholder: string;
  onChange?: (value: string) => void;
  required?: boolean;
  testId?: string;
  value?: string;
  icon?: ReactNode;
}

export default function TextField(props: TextFieldProps) {
  const {
    name,
    placeholder,
    label,
    id,
    type,
    disabled,
    onChange,
    required,
    testId,
    value = "",
    icon,
  } = props;

  const [_value, setValue] = useState(value);

  const _onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      if (onChange) onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <div className="flex flex-col relative">
      <label htmlFor={id} className="text-xs text-slate-500	mb-[4px]">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        name={name}
        value={_value}
        disabled={disabled}
        required={required}
        data-testid={testId}
        onChange={_onChange}
        className={`${styles.textfield}${
          icon ? ` ${styles["textfield-has-icon"]}` : ""
        }`}
      />
      <div className={styles['textfield-icon']}>
        {icon}
      </div>
    </div>
  );
}
