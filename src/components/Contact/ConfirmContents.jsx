import React from "react";
import { PrimaryButton, GreyButton } from "../UiKit";
import Divider from "@mui/material/Divider";

const ConfirmContents = (props) => {
  return (
    <div>
      <p style={{ margin: "32px 0 60px", fontSize: 15, textAlign: "center" }}>
        入力内容をご確認ください
      </p>
      <div>
        <p>名前:</p>
        <p>{props.name}</p>
      </div>
      <Divider />
      <div style={{ marginTop: 32 }}>
        <p>メールアドレス:</p>
        <p>{props.email}</p>
      </div>
      <Divider />
      <div style={{ marginTop: 32 }}>
        <p>ご質問など:</p>
        <p>{props.message}</p>
      </div>
      <Divider />
      <div style={{ marginTop: 32, textAlign: "center" }}>
        <GreyButton onClick={props.clickForm} label={"入力内容の修正"} />
        <PrimaryButton onClick={props.send} label={"送信"} />
      </div>
    </div>
  );
};

export default ConfirmContents;
