import React from "react";
import { GreyButton } from "../UiKit";

const ThunksContents = () => {
  return (
    <div>
      <div>
        <h3 style={{ margin: "60px 0 32px", textAlign: "center" }}>送信完了しました</h3>
        <p
          style={{
            margin: "32px 0 60px",
            fontSize: 15,
            textAlign: "center",
            lineHeight: "1.4",
          }}
        >
          お問い合わせありがとうございました。
          <br />
          問い合わせ内容を送信しました。
          <br />
          ご確認ください
        </p>
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <GreyButton onClick={() => window.location.reload()} label={"戻る"} />
        </div>
      </div>
    </div>
  );
};

export default ThunksContents;
