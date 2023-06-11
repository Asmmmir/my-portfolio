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
        1: {name: 'Movie App', image: '../img/01.jpg', stack:'HTML, CSS, JavaScript, Rest API',github: 'https://github.com/Asmmmir/moviemobileapp/tree/moviePage', view: 'https://asmmmir.github.io/moviemobileapp/'},
        2: {name: 'Fast food shop', image: '../img/02.jpg',stack:'React, Redux, React Router, Rest API', github: 'https://github.com/Asmmmir/justcode_diploma', view: 'https://asmmmir.github.io/justcode_diploma/'},
        3: {name: 'Video portal', image: '../img/03.jpg',stack:'Template'},
        4: {name: 'Dating app', image: '../img/04.jpg',stack:'Template'},
        5: {name: 'Landing', image: '../img/05.jpg',stack:'Template'},
        6: {name: 'Gaming community', image: '../img/06.jpg',stack:'Template'},
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
