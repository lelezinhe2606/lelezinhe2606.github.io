'use client'
import { useState } from "react"
export default function State() {
    const [msg, setMsg] = useState('Boa tarde')
    const [ mostrarDiv, setMostrarDiv] = useState(true);

    //const alterarMsg = ()=>{
       // setMsg((prevMsg=>{
      //      prevMsg = 'Bom dia'
      //      console.log('msg:'+ msg);
       //     return prevMsg
     //   }));


     const manipularInput =(evento) => {
        console.log(evento.target.value)
        setMsg(evento.target.value)

     }

     return(
        <div>
            {/*<p>{msg}</p>
            /*<button onClick={alterarMsg}> alterar</button>*/}
            <p>Sua Mensagem : {msg}</p>
            <input type="text" onChange={manipularInput} />
            <button onClick= {()=> setMostrarDiv (!mostrarDiv)}>{mostrarDiv?'Esconder': 'Mostrar'}</button>
            { mostrarDiv&& (
                <div>
                Parágrafo dinâmico
                </div>
            )
                
            }
        </div>
    )
}
  
    

