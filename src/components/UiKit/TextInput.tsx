import React from "react";
import TextField from "@mui/material/TextField";

type Props = {
  fullWidth: boolean;
  label: string;
  multiline: boolean;
  required: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  rows: number;
  value: string;
  type: string;
};

const TextInput: React.VFC<Props> = (props) => {
  return (
    <TextField
      fullWidth={props.fullWidth}
      label={props.label}
      margin="dense"
      multiline={props.multiline}
      required={props.required}
      rows={props.rows}
      value={props.value}
      type={props.type}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
