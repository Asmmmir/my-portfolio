import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMode } from '../../store/mode-slice/mode-slice'
import styles from './button.module.scss'


const ModeButton = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode)

useEffect(() => {
  const body = document.body;

  if(mode) {
    body.style.backgroundColor = ''
  }
  else {
    body.style.backgroundColor = '#252526'
  }
})





  return (
    <button onClick={() => dispatch(toggleMode())} className={`${styles.darkmode} ${mode ? '' : styles.dark }`}>
    <img  src="../my-portfolio/img/sun.svg" alt="" />
    <img  src="../my-portfolio/img/moon.svg" alt="" />
    </button>
  )
}

export default ModeButton
