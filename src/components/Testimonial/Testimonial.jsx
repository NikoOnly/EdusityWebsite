import React from "react";
import "./Testimonial.css";
import back_icon from "../../assets/back-icon.png";
import next_icon from "../../assets/next-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";
import { useRef } from "react";

const Testimonial = () => {
  
  const slider = useRef();
  let tx = 0;

const slideForward = () =>{
    if (tx > -50){
      tx -=  25;
    }
  slider.current.style.transform = `translateX(${tx}%)`

} 
const slideBackward = () =>{
  if (tx < 0){
    tx += 25;
  }
slider.current.style.transform = `translateX(${tx}%)`

}

  return (
    <div className="testimonials" id='testimonials'>
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackward}/>
      <div className="slider"> 
        <ul ref = {slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>Эмили Уильямс</h3>
                  <span>Edusity, США</span>
                </div>
              </div>
              <p>Выбор получения степени в Edusity был одним из лучших
решений, которые я когда-либо принимал. Поддерживающее сообщество,
современные возможности и стремление к академическому
совершенству действительно превзошли мои ожидания.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3> Уильям Джексон</h3>
                  <span>Edusity, США</span>
                </div>
              </div>
              <p>Выбор получения степени в Edusity был одним из лучших
решений, которые я когда-либо принимал. Поддерживающее сообщество,
современные возможности и стремление к академическому
совершенству действительно превзошли мои ожидания.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Анна Эбигрейл</h3>
                  <span>Edusity, США</span>
                </div>
              </div>
              <p>Выбор получения степени в Edusity был одним из лучших
решений, которые я когда-либо принимал. Поддерживающее сообщество,
современные возможности и стремление к академическому
совершенству действительно превзошли мои ожидания.
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Роман Абоюнда</h3>
                  <span>Edusity, США</span>
                </div>
              </div>
              <p>Выбор получения степени в Edusity был одним из лучших
решений, которые я когда-либо принимал. Поддерживающее сообщество,
современные возможности и стремление к академическому
совершенству действительно превзошли мои ожидания.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonial;
