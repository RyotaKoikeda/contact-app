import React, { useCallback, Dispatch, SetStateAction } from "react";
import { PrimaryButton, TextInput } from "../UiKit";

type Props = {
  name: string;
  email: string;
  message: string;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
  clickConfirm: () => void;
};

const FormContents: React.VFC<Props> = (props) => {
  const inputName = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      props.setName(event.target.value);
    },
    [props.setName]
  );

  const inputEmail = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      props.setEmail(event.target.value);
    },
    [props.setEmail]
  );

  const inputMessage = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      props.setMessage(event.target.value);
    },
    [props.setMessage]
  );

  return (
    <form action="" method="get">
      <p style={{ margin: "32px 0 60px", fontSize: 15, textAlign: "center" }}>ご質問、ご要望などお気軽にご回答ください。</p>
      <TextInput fullWidth={true} label={"お名前"} multiline={false} required={true} onChange={inputName} rows={1} value={props.name} type={"text"} />
      <TextInput
        fullWidth={true}
        label={"メールアドレス"}
        multiline={false}
        required={true}
        onChange={inputEmail}
        rows={1}
        value={props.email}
        type={"email"}
      />
      <TextInput
        fullWidth={true}
        label={"お問い合わせ内容"}
        multiline={true}
        required={true}
        onChange={inputMessage}
        rows={5}
        value={props.message}
        type={"text"}
      />
      <div style={{ marginTop: 32, textAlign: "center" }}>
        <PrimaryButton onClick={props.clickConfirm} label={"入力内容の確認"} />
      </div>
    </form>
  );
};

export default FormContents;
