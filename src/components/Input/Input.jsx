import React, { useState } from 'react';
import styles from './Input.module.css'


function Input({ type, label, valor, trocaValor  }) {

  return (
    <>
      <label className={styles.label}>{label}</label>
      <input type={type} className={styles.input} value={valor} onChange={trocaValor}/>
    </>
  )
}

export default Input