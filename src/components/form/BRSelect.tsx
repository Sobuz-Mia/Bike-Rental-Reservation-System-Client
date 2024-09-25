import { Form, Select } from "antd";
import { Controller } from "react-hook-form";
type TBRSelectProps = {
  label: string;
  name: string;
  options:
    | { value: number | string; label: number; disabled?: boolean }[]
    | undefined;
  disabled?: boolean;
  mode?: "multiple" | undefined;
};
const BRSelect = ({ label, name, options, disabled, mode }: TBRSelectProps) => {
  return (
    <Controller
      name={name}
      render={({ field, fieldState: { error } }) => (
        <Form.Item label={label}>
          <Select
            mode={mode}
            style={{ width: "100%" }}
            {...field}
            disabled={disabled}
            options={options}
            size="large"
          />
          {error && <span style={{ color: "red" }}>{error.message}</span>}
        </Form.Item>
      )}
    />
  );
};

export default BRSelect;
