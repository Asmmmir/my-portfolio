import React from "react";
import styles from "./project.module.scss";
import { AiFillGithub } from "react-icons/ai";
import { useParams } from "react-router-dom";

export default function Project() {

    const {id} = useParams();


    const projects = {
        1: {name: 'Movie App', image: '../img/projects/01.jpg', stack:'HTML, CSS, JavaScript, Rest API',github: 'https://github.com/Asmmmir/moviemobileapp/tree/moviePage'},
        2: {name: 'Fast food shop', image: '../img/projects/02.jpg',stack:'React, Redux, React Router, Rest API', github: 'https://github.com/Asmmmir/justcode_diploma'},
        3: {name: 'Video portal', image: '../img/projects/03.jpg',stack:'HTML, CSS, JavaScript, Rest API'},
        4: {name: 'Dating app', image: '../img/projects/04.jpg',stack:'HTML, CSS, JavaScript, Rest API'},
        5: {name: 'Landing', image: '../img/projects/05.jpg',stack:'HTML, CSS, JavaScript, Rest API'},
        6: {name: 'Gaming community', image: '../img/projects/06.jpg',stack:'HTML, CSS, JavaScript, Rest API'},
    }

    const project = projects[id];


  return (
    <div className={styles.project}>
      <h2 className={styles.project__title}>{project.name}</h2>

      <div className={styles.project__container}>
        <div className={styles.project__details}>
          <img src={project.image} alt="" />

          <div className={styles.project__details_stack}>
            <p>Stack: {project.stack}</p>
          </div>
          <div className={styles.project__btn}>
           <a className={styles.project__github} href={project.github}> <AiFillGithub />  
           <p>GitHub repo</p>
           </a>
        </div>
        </div>

  
      </div>
    </div>
  );
}
