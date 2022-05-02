import React from "react";
import styles from "./Contact.module.scss";
import { useMail } from "@/hooks/useMail";
import { ConfirmContents, FormContents, ThunksContents } from "../Contact";
import ReactLoading from "react-loading";
import MailIcon from "@mui/icons-material/Mail";

const Contact = () => {
  const { name, email, message, active, loading, setName, setEmail, setMessage, clickConfirm, clickForm, send } = useMail();

  return (
    <section id="contact" className={styles.contact}>
      <div className="form-wrap">
        <div className="page-logo">
          <MailIcon />
        </div>
        <h2 className="page-title">Contact</h2>
        {active == "form" && (
          <FormContents name={name} email={email} message={message} setName={setName} setEmail={setEmail} setMessage={setMessage} clickConfirm={clickConfirm} />
        )}
        {active == "confirm" && !loading && <ConfirmContents name={name} email={email} message={message} clickForm={clickForm} send={send} />}
        {active == "thunks" && <ThunksContents />}
        {loading && (
          <div className={styles.contact__load}>
            <ReactLoading className={styles.contact__load_img} type="spinningBubbles" color="#000" />
            <p className={styles.contact__load_text}>処理中です。しばらくお待ち下さい</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;
