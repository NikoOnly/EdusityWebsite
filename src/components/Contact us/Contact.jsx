import React from "react";
import "./Contact.css";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import location_icon from "../../assets/location-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c180d21c-0b5c-4739-a1da-61c15297b115");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact" id="contact us">
      <div className="contact-col">
        <h3>
        Отправьте нам сообщение <img src={msg_icon} alt="" />
        </h3>
        <p>Не стесняйтесь обращаться через контактную форму или найдите нашу контактную
информацию ниже. Ваши отзывы, вопросы и предложения
важны для нас, поскольку мы стремимся предоставлять исключительные услуги нашему
университетскому сообществу.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" /> Contact@GreatStack.dev
          </li>
          <li>
            <img src={phone_icon} alt="" /> +1 123-456-7890
          </li>
          <li>
            <img src={location_icon} alt="" /> 77 Massachusetts Ave, Cambridge
            MA 02139, United States{" "}
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label>Ваше Имя</label>
          <input
            type="text"
            name="name"
            placeholder="Напишите своё Имя"
            required
          />
          <label>Номер Телефона </label>
         <input
            type="tel"
            name="phone"
            placeholder="Напишите свой номер Телефона"
            required
          />
          <label>Напишите свое сообщение здесь</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Напишите ваше Сообщение"
            required
          ></textarea>
          <button className="btn dark-btn" type="submit">
          Отправить сейчас<img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

export default Contact;
