import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Programs from "./components/Programs/Programs.jsx";
import Title from "./components/Title/Title.jsx";
import About from "./components/About us/About.jsx";
import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Contact from "./components/Contact us/Contact.jsx";
import Campus from "./components/Campus/Campus.jsx";
import Footer from "./components/Footer/Footer.jsx";

export default function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="НАША ПРОГРАММА" title="Что мы предлагаем" />
        <Programs />
        <About />
        <Title subtitle="Галерея" title="Фотографии с Кампуса" />
        <Campus />
        <Title subtitle="Отзывы" title="Что говорят Студенты" />
        <Testimonial />
        <Title subtitle="Связаться с нами" title="Свяжитесь с нами" />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
