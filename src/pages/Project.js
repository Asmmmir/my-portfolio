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
        1: {name: 'Movies App', image: '../img/01.jpg', stack:'HTML, CSS, JavaScript, Rest API',github: 'https://github.com/Asmmmir/moviemobileapp/tree/moviePage', view: 'https://asmmmir.github.io/moviemobileapp/'},
        3: {name: 'Hastam', image: '../img/05.jpg',stack:'React, React Router, SCSS, Bootstrap', view: 'https://asmmmir.github.io/hastam/', github: 'https://github.com/Asmmmir/hastam' },
        4: {name: 'Good Food', image: '../img/04.jpg',stack:'React, SCSS, React icons', view: 'https://asmmmir.github.io/good-food', github: 'https://github.com/Asmmmir/good-food' },
        5: {name: 'Typing speed', image: '../img/06.png',stack:'HTML, CSS, JavaScript', view: 'https://asmmmir.github.io/typeapp/', github: 'https://github.com/Asmmmir/typeapp' },

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
