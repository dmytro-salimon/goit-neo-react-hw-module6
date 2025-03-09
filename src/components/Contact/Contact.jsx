import css from "./Contact.module.css";

const Contact = ({ contact, deleteContact }) => {
  return (
    <li className={css.item}>
      <div className={css.info}>
        <p className={css.name}>
          <span className={css.icon}>👤</span>
          {contact.name}
        </p>
        <p>
          <span className={css.icon}>📞</span>
          {contact.number}
        </p>
      </div>
      <button type="button" onClick={() => deleteContact(contact.id)}>
        🗑️
      </button>
    </li>
  );
};

export default Contact;
