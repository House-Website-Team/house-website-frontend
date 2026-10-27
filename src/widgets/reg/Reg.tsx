import { Link } from "react-router";

import hero from "/assets/widgets/reg/hero.png";
import user from "/assets/widgets/reg/user.svg";
import lock from "/assets/widgets/reg/lock.svg";
import mail from "/assets/widgets/reg/mail.svg";

import "../../app/styles/pages/reg/widgets/reg.css";

interface Inputs {
  name: "name" | "email" | "password";
}

const INPUTS: Inputs[] = [
  {
    name: "name",
  },
  {
    name: "email",
  },
  {
    name: "password",
  },
];

export const Reg = () => {
  return (
    <section className="reg-page">
      <section className="reg-hero">
        <h2>Регистрация</h2>
        <p>
          Создайте аккаунт в Ink. House чтобы сохранять любимые работы и
          получать вдохновение каждый день
        </p>
        <img src={hero} alt="" />
      </section>

      <form className="reg-form" action="" method="post">
        <section className="reg-form-inputs">
          {INPUTS.map((input) => (
            <div className="reg-form-input">
              <h3>
                {input.name == "name"
                  ? "Имя"
                  : input.name == "email"
                    ? "E-mail"
                    : input.name == "password"
                      ? "Пароль"
                      : undefined}
              </h3>

              <section>
                <img
                  src={
                    input.name == "name"
                      ? user
                      : input.name == "email"
                        ? mail
                        : input.name == "password"
                          ? lock
                          : undefined
                  }
                  alt=""
                />
                <input
                  placeholder={
                    input.name == "name"
                      ? "Введите ваше имя"
                      : input.name == "email"
                        ? "Введите ваш e-mail"
                        : input.name == "password"
                          ? "Введите пароль"
                          : undefined
                  }
                  type="text"
                />
              </section>
            </div>
          ))}
        </section>

        <section className="reg-form-buttons">
          <button>Зарегистрироваться</button>

          <article>
            <div></div>
            <p>или</p>
            <div></div>
          </article>

          <section>
            <h3>Уже есть аккаунт?</h3>
            <Link to="">Войти</Link>
          </section>
        </section>
      </form>
    </section>
  );
};
