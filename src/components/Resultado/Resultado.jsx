import React from 'react'
import styles from './Resultado.module.css'

function Resultado({valorIMC, analise}) {
    return (
        <div className={styles.resultado}>
            <span className={styles.valor}>{valorIMC}</span>
            <p className={styles.analise}>Classificação: {analise}</p>
        </div>
    )
}

export default Resultado