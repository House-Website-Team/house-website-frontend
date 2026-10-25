import { Link } from "react-router";

import birdHero from "/assets/widgets/home/hero/bird.png";

import "../../app/styles/pages/home/widgets/hero.css";

export const Hero = () => {
  return (
    <section className="hero">
      <section className="hero-image">
        <img src={birdHero} alt="" />
      </section>

      <section className="right-hero">
        <h2>
          Реплики картин <br /> от{" "}
          <span style={{ color: "#598D66" }}>Ink. House</span>
        </h2>
        <p>
          Высокое качество отрисовки на плотной бумаге или льняном холсте.
          Редкие произведения, доступные цены.
        </p>
        <Link className="hero-button" to="">
          Продукция
        </Link>
      </section>
    </section>
  );
};
