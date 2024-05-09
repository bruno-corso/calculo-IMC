import React, { useState } from 'react'
import Input from '../Input/Input'
import styles from './Form.module.css'
import Resultado from '../Resultado/Resultado';

function Form() {

    const [valorPeso, setValorPeso] = useState('');
    const [valorAltura, setValorAltura] = useState('');
    const [imc, setImc] = useState('-');


    function calculaResultado(p, a) {
        let numerador = p;
        let denominador = (a / 100) * (a / 100);
        let imcCalculado = (numerador / denominador);
        setImc(parseFloat(imcCalculado.toFixed(3)));
    }

    function analiseIMC(imc) {
        if (imc < 18.5) {
            return "MAGREZA"
        }
        else if (imc < 25) {
            return "NORMAL"
        }
        else if (imc < 30 ) {
            return "SOBREPESO"
        }
        else if (imc < 40) {
            return "OBESIDADE"
        }
        else {
            return "OBESIDADE GRAVE"
        }
    }

    return (
        <>
            <div className={styles.formulario}>
                <form>
                    <Input
                        label={'Insira seu peso [Kg]: '}
                        type={'number'}
                        valor={valorPeso}
                        trocaValor={(e) => setValorPeso(parseInt(e.target.value))}
                    />
                    <Input
                        label={'Insira sua altura [cm]: '}
                        type={'number'}
                        valor={valorAltura}
                        trocaValor={(e) => setValorAltura(parseInt(e.target.value))}
                    />
                </form>
                <button className={styles.botao} onClick={() => calculaResultado(valorPeso, valorAltura)}>Calcular</button>
            </div>

            {
                imc === '-' ? null :
                    <Resultado analise={analiseIMC(imc)} valorIMC={imc} />
            }
        </>
    )
}

export default Form