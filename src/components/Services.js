import React, { Component } from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons";
import Title from "./Title";

export default class Services extends Component {
                 state = {
                   services: [
                     {
                       icon: <FaCocktail />,
                       title: "Free Cocktails",
                       info:
                         'Consequat takimata at magna lorem. Lorem sanctus ipsum diam ut et at at.'
                     },
                     {
                       icon: <FaHiking />,
                       title: "Endless Hiking",
                       info:
                         'Consequat takimata at magna lorem. Lorem sanctus ipsum diam ut et at at.'
                     },
                     {
                       icon: <FaShuttleVan />,
                       title: "Free Shuttle",
                       info:
                         'Consequat takimata at magna lorem. Lorem sanctus ipsum diam ut et at at.'
                     },
                     {
                       icon: <FaBeer />,
                       title: "Micro Brewery",
                       info:
                         'Consequat takimata at magna lorem. Lorem sanctus ipsum diam ut et at at.'
                     }
                   ]
                 };
                 render() {
                   return (
                     <section className="services">
                       <Title title="Services" />
                       <div className="services-center">
                       {this.state.services.map(item, index) => {
                         return (
                           <article key={index} className="service">
                           <span>{item.icon}</span>
                           <h6>{item.title}</h6>
                           <p>{item.info}</p>
                         </article>
                         );
                       })}

                       </div>
                     </section>
                   );
                 }
               }
