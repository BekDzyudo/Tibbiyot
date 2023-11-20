import React from "react";
// scss
import "./rahbariyat.scss";
// components
import Sidebar from "../../components/sidebar/Sidebar";
import OqXalat from "../umumiyMalumot/components/OqXalat";
import SmallContact from "../umumiyMalumot/components/SmallContact";
// images
// import person from "../../assets/images/person.png";
import { useGetFetch } from "../../hooks/useGetFetch";

function Rahbariyat() {
  const url = `http://192.168.101.222:8000/rahbariyat`;
  const { data, isPending, error } = useGetFetch(url);
  if (!data) {
    return <p>null</p>;
  }
  return (
    <div className="rahbariyat container">
      <div className="content">
        <div className="desc">
          <div className="row">
            <h1 className="title">RAHBARIYAT VA HODIMLAR</h1>
            <p>
              Tibbiy ta’limda o’quv resurslarini yaratish va rivojlantirish
              markazi rahbariyati
            </p>
            {data.map((person) => {
              return (
                <div key={person.id} className="cardss">
                  <div className="imageBlok">
                    <div className="image">
                      <img src={person.rasm} />
                    </div>
                    <h2>
                      {person.familya} {person.ism} {person.sharf}
                    </h2>
                  </div>
                  <div className="descreption">
                    <h3>ЎЗБЕКИСТОН РЕСПУБЛИКАСИ СОҒЛИҚНИ САҚЛАШ ВАЗИРИ</h3>
                    <div className="info">
                      <p className="child">
                        <span>Ma’lumoti:</span>
                        <p
                          dangerouslySetInnerHTML={{ __html: person.umumiy }}
                        ></p>
                      </p>
                      <p className="child">
                        <span>Tamomlagan (Bakalavr):</span>
                        <p> 2012 yil TATU Urganch filiali</p>
                      </p>
                      <p className="child">
                        <span>Ma’lumoti bo’yicha mutaxassisligi:</span>
                        <p> Axborot servis (Servis)</p>
                      </p>
                      <p className="child">
                        <span> Tamomlagan (Magistratura):</span>
                        <p> 2021 yil TDTU</p>
                      </p>
                      <p className="child">
                        <span> Ma’lumoti bo’yicha mutaxassisligi:</span>
                        <p>
                          Komyuter tizimlari va ularning dasturiy ta’minoti{" "}
                        </p>
                      </p>

                      <p className="child">
                        <span> Telefon:</span>
                        <p>
                          {" "}
                          (998) 01-234-56-78; (998) 01-234-56-78; (998)
                          01-234-56-78
                        </p>
                      </p>
                      <p className="child">
                        <span>Elektron pochta:</span>
                        <p> qwerty@mail.ru; qwerty@gmail.com</p>
                      </p>
                    </div>
                    <p className="qabul">
                      <span>Qabul kunlari:</span>
                      <p>
                        <span className="kun">Dushanba</span> kunlari soat{" "}
                        <span className="kirish">16:00</span> dan{" "}
                        <span className="chiqish">18:00</span> gacha
                      </p>
                    </p>
                    <button className="download">
                      <i className="fa fa-arrow-down" aria-hidden="true"></i>
                      <span>To’liq ma’lumot</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <hr />
        </div>
        <div className="layout">
          <Sidebar />
          <OqXalat />
          <SmallContact />
        </div>
      </div>
    </div>
  );
}

export default Rahbariyat;
