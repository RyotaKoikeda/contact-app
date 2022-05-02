import { useCallback, useState } from "react";

export const useMail = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [active, setActive] = useState<string>("form");
  const [loading, setLoading] = useState<boolean>(false);
  const pattern = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]+.[A-Za-z0-9]+$/;

  const send = async () => {
    setLoading(true);
    await fetch("/api/mail", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        contents: `
contact appからお問い合わせが届きました。

名前: ${name}

メールアドレス: ${email}

お問い合わせ内容: 
${message}
        `,
      }),
    }).then(() => {
      setLoading(false);
      setActive("thunks");
    });
  };

  const clickConfirm = useCallback(() => {
    if (name === "" || email === "" || message === "") {
      alert("必須入力欄が空白です");
    } else if (!pattern.test(email)) {
      alert("メールアドレスの構文が正しくありません");
    } else {
      setActive("confirm");
    }
  }, [setActive, name, email, message]);

  const clickForm = useCallback(() => {
    setActive("form");
  }, [setActive]);

  return {
    name,
    email,
    message,
    active,
    loading,
    setName,
    setEmail,
    setMessage,
    clickConfirm,
    clickForm,
    send,
  };
};
