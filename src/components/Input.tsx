import * as React from 'react';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  error: false | undefined | string;
  innerRef?: React.Ref<HTMLInputElement>;
};

const Input: React.SFC<Props> = ({ innerRef, error, ...inputProps }) => {
  return (
    <div className="input">
      <input ref={innerRef} className={['input--input', error ? 'input--error' : ''].join(' ')} {...inputProps} />
      {error && <p className="input--error-msg">{error}</p>}
    </div>
  );
};

export default Input;
