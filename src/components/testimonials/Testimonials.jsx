import React from 'react'
import './testimonials.scss';

export default function Testimonials() {

    const data = [
        {
          id: 1,
          name: "Adeline Chanonat",
          title: "ComptaSanté",
          desc:
            "Sandra est une personne motivée et motivante qui se passionne dans ce qu'elle entreprend. Il est toujours agréable de travailler avec elle.",
         },
        {
          id: 2,
          name: "Paul Verdure",
          title: "Wild Code School",
          desc:
          "Lors de nos 2 projets collectifs, j'ai eu le plaisir de travailler avec Sandra. Son professionnalisme, ses prises d'initiatives et sa curiosité vis à vis des nouvelles fonctionnalités, en font une alliée précieuse dans tout travail d'équipe. C'est avec plaisir que je retravaillerai avec elle.",
          featured: true,
        },
        {
          id: 3,
          name: "Lucille Bernade",
          title: "Wild Code School",
          desc:
            "J'ai eu l'occasion de travailler sur des projets avec Sandra, qui est une camarade très agréable. Elle met toute son énergie pour proposer un travail propre et efficace. Sa capacité d'adaptation, sa patience et son appétence pour le CSS font d'elle un atout dans un travail d'équipe.",
        },
      ];

    return (
        <div className="testimonials" id="testimonials">
            <h1>Recommandations</h1>
            <div className="container">
                {data.map(d=>(
                <div className={d.featured ? "card featured" : "card"}>
                    <div className="center">
                        {d.desc}
                    </div>
                    <div className="bottom">
                        <h3>{d.name}</h3>
                        <h4>{d.title}</h4>
                    </div>
                </div>
                            ))}
            </div>
        </div>
    )
}
