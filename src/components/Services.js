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
                     }
                     {
                       icon: <FaCocktail />,
                       title: "Free Cocktails",
                       info:
                         'Consequat takimata at magna lorem. Lorem sanctus ipsum diam ut et at at.'
                     }
                     {
                       icon: <FaCocktail />,
                       title: "Free Cocktails",
                       info:
                         'Consequat takimata at magna lorem. Lorem sanctus ipsum diam ut et at at.'
                     }
                     {
                       icon: <FaCocktail />,
                       title: "Free Cocktails",
                       info:
                         'Consequat takimata at magna lorem. Lorem sanctus ipsum diam ut et at at.'
                     }
                   ]
                 };
                 render() {
                   return (
                     <div>
                       <Title title="Services" />>
                     </div>
                   );
                 }
               }
