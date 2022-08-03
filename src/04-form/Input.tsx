import React from 'react';

interface Props {
  typeInp: string;
  pl: string;
  valueProps?: string | number | readonly string[] | undefined;
  initValueProps?: string | number | readonly string[] | undefined;
  name?: string | undefined;
  className?: string | undefined;
  onCh?: React.ChangeEventHandler<HTMLInputElement> | undefined | any;
  onCli?: React.MouseEventHandler<HTMLInputElement> | undefined | any;
  autoC?: string | undefined;
}

const Input = ({ typeInp, pl, valueProps, initValueProps, name, className, onCh, onCli, autoC }: Props) => {
  return (
    <>
      <input
        autoComplete={autoC}
        className={className}
        defaultValue={initValueProps}
        value={valueProps}
        name={name}
        placeholder={pl}
        type={typeInp}
        onChange={onCh}
        onClick={onCli}
      />{" "}
    </>
  );
};

export default Input