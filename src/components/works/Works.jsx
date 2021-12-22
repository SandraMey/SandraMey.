import React, { useState } from 'react';
import "./works.scss";

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        {
          id: "1",
          title: "Mr Cheesecake",
          desc:
            'Application web vous permettant de scanner des produits ou de les recherches afin de trouver leurs valeurs nutritionnelles. Maquette crée sur Figma et site developpé en React et Css avec consommation d\'Api pour récupérer les données nutritionnelles. ',
          img:
            "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
        },
        {
          id: "2",
          title: "Happy Candles",
          desc:
            "Site E-commerce de vente de bougie avec la possibilités de mettre au panier les produits. Développé en React, Css et Express. Site en cours de construction",
          img:
            "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
        },
        {
          id: "3",
          title: "Bon voyage",
          desc:
            "Site proposant des activités dans plusieurs villes de France, Développé en HTML, en CSS et en JS.",
          img:
            "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
        },
        {
            id: "4",
            title: "Mash Up",
            desc:
              "Application permettant de créer un playlist collaborative grâce à l'API de Spotify.",
            img:
              "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
          },
      ];

      const handleClick = (way) => {
          way === "left" 
          ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : 2) 
          : setCurrentSlide(currentSlide<data.length -1 ? currentSlide + 1 : 0)
      }

    return (
        <div className="works" id="works">
            <div 
                className="slider" 
                style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
            {data.map((d)=>(               
                <div className="container">
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <div className="imgContainer">
                                    <img src={d.icon}alt="" />
                                </div>
                                <h2>{d.title}</h2>
                                <p>{d.desc}
                                </p>
                                <span>Lien vers le GitHub</span>
                            </div>
                        </div>
                        <div className="right">
                            <img
                                src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                                alt=""
                            />
                        </div>
                    </div>
                </div>))}
            </div>
            <img src="assets/arrow.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")}/>
        </div>
    );
}
