import React, { useState, useEffect } from 'react'
import styles from './button.module.scss'

const ModeButton = () => {

const [mode, setMode] = useState(false)


useEffect(() => {
  const body = document.body;
  if (mode) {
    body.classList.remove('dark');
  } else {
    body.classList.add('dark');
  }
}, [mode]);

  return (
    <button onClick={() => setMode(!mode)} className={`${styles.darkmode} ${mode ? '' : styles.dark }`}>
    <img  src="./my-portfolio/img/sun.svg" alt="" />
    <img  src="./my-portfolio/img/moon.svg" alt="" />
    </button>
  )
}

export default ModeButton
