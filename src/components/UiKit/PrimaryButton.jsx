import React from "react";
import Button from "@mui/material/Button";

const PrimaryButton = (props) => {
  return (
    <div>
      <Button
        variant="contained"
        onClick={() => props.onClick()}
        sx={{
          width: 256,
          height: 48,
          marginBottom: "16px",
          color: "#000",
          fontSize: 16,
          backgroundColor: "#ffcd83",
        }}
      >
        {props.label}
      </Button>
    </div>
  );
};

export default PrimaryButton;
