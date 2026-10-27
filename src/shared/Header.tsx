import { Link } from "react-router";
import { useState } from "react";

import logo from "/assets/favicon/icon.svg";
// import busket from "/assets/shared/header/basket.svg";
// import busketHover from "/assets/shared/header/basket-hover.svg";
// import busketActive from "/assets/shared/header/basket-active.svg";
import burger from "/assets/shared/header/burger.svg";
import burgerActive from "/assets/shared/header/burger-active.svg";
import account from "/assets/shared/header/account.svg";

import "../app/styles/shared/header.css";

const header = ["Репродукции", "Новинки", "О нас"];

export const Header = () => {
  // const [stateBusket, setStateBusket] = useState("passive");
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const burgerMenu = (styles: object | undefined) =>
    isBurgerActive ? styles : undefined;

  return (
    <header>
      <Link to="/" className="logo">
        <img src={logo} alt="" />
        <h1 className="icon">Ink. House</h1>
      </Link>

      <nav
        style={burgerMenu({
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 30,
          paddingBottom: 20,
        })}
      >
        <img
          onClick={() => setIsBurgerActive(!isBurgerActive)}
          src={isBurgerActive ? burgerActive : burger}
          alt=""
        />

        <section
          style={burgerMenu({
            display: "flex",
            fontSize: 18,
            gap: 40,
            flexDirection: "column",
          })}
          className="nav-buttons"
        >
          {header.map((header) => (
            <Link className="nav-button" to="/">
              {header}
            </Link>
          ))}
        </section>

        <section
          style={burgerMenu({ display: "flex", gap: 20 })}
          className="log-and-reg"
        >
          <Link className="login" to="">
            Вход
          </Link>
          <Link className="reg" to="/reg">
            Зарегистрироваться
          </Link>
        </section>

        <Link
          style={burgerMenu({ display: "none" })}
          className="header-account"
          to=""
        >
          <img src={account} alt="" />
        </Link>

        {/* <Link
          onMouseEnter={() => setStateBusket("active")}
          onMouseLeave={() => setStateBusket("passive")}
          onMouseUp={() => setStateBusket("hover")}
          className="basket"
          to="/"
        >
          <img
            style={isBurgerActive ? { display: "none" } : undefined}
            src={
              stateBusket == "passive"
                ? busket
                : stateBusket == "active"
                  ? busketActive
                  : busketHover
            }
            alt=""
          />
        </Link> */}
      </nav>
    </header>
  );
};
