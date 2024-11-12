import React from "react";
import styles from "./project.module.scss";
import { AiFillGithub } from "react-icons/ai";
import {BiShow} from 'react-icons/bi'
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function Project() {
  const mode = useSelector((state) => state.mode)
    const {id} = useParams();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);


    const projects = {
        
        // 1: {name: 'Instagram Clone', image: '../img/instagram.jpg',stack:'React, Chakra UI, React Router', view: 'https://asmmmir.github.io/instagram-clone/', github: 'https://github.com/Asmmmir/instagram-clone' },
        2: {name: 'Nike', image: '../img/nike.png',stack:'React, Tailwind', view: 'https://asmmmir.github.io/nike_landing/', github: 'https://github.com/Asmmmir/nike_landing' },
        3: {name: 'Gericht Restaurant', image: '../img/gericht.jpg',stack:'React, Tailwind', view: 'https://asmmmir.github.io/gericht-restaurant/', github: 'https://github.com/Asmmmir/gericht-restaurant' },
        4: {name: 'Good Food', image: '../img/goodfood.jpg',stack:'React, SCSS, React icons', view: 'https://asmmmir.github.io/good-food', github: 'https://github.com/Asmmmir/good-food' },
        // 5: {name: 'Typing speed', image: '../img/typeapp.png',stack:'HTML, CSS, JavaScript', view: 'https://asmmmir.github.io/typeapp/', github: 'https://github.com/Asmmmir/typeapp' },
        6: {name: 'Kropp', image: '../img/kropp.png',stack:'HTML, CSS', view: 'https://asmmmir.github.io/kropp_crossfit/', github: 'https://github.com/Asmmmir/kropp_crossfit' },

    }

    const project = projects[id];


  return (
    <div className={`${styles.project} ${mode ? '' : styles.dark}`}>
      <h2 className={styles.project__title}>{project.name}</h2>

      <div className={styles.project__container}>
        <div className={styles.project__details}>
          <img src={project.image} alt="" />

          <div className={styles.project__details_stack}>
            <p>Stack: {project.stack}</p>
          </div>
          <div className={styles.project__btn_wrapper}>

          <div className={styles.project__btn}>
           <a className={styles.project__github} href={project.view}> <BiShow />  
           <p>View website</p>
           </a>
        </div>
          <div className={styles.project__btn}>
           <a className={styles.project__github} href={project.github}> <AiFillGithub />  
           <p>GitHub repo</p>
           </a>
        </div>

          </div>
        </div>

  
      </div>
    </div>
  );
}
