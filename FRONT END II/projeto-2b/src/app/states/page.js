'use client'
import { useState } from "react"
export default function State() {
    const [msg, setMsg] = useState('Boa tarde')

    //const alterarMsg = ()=>{
       // setMsg((prevMsg=>{
      //      prevMsg = 'Bom dia'
      //      console.log('msg:'+ msg);
       //     return prevMsg
     //   }));


     const manipularInput =(evento) => {
        console.log(evento)

     }


    }
    return(
        <div>
            {/*<p>{msg}</p>
            /*<button onClick={alterarMsg}> alterar</button>*/}
            <p>Sua Mensagem : {msg}</p>
            <input type="text" onChange={() => manipularInput()} />
        </div>
    )

    