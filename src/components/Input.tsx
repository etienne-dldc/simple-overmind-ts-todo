import * as React from "react";

type Props = {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
};

const Input: React.SFC<Props> = ({ placeholder, name, value, onChange }) => {
  return (
    <div className="input">
      <input
        value={value}
        onChange={onChange}
        type="text"
        className="input--input"
        placeholder={placeholder}
      />
    </div>
  );
};

export default Input;
