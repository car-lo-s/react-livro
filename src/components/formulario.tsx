import React, { useState } from "react";
import lupa from "../assets/search.svg";
export const Formulario = ({livroFN}:any) => {
  const [nomeLivro, setNomeLivro] = useState<string>('');
  
  const handleNome=(event:any)=>{
    setNomeLivro(event.target.value)
  }
  const handleClick=()=>{
    livroFN(nomeLivro)
    setNomeLivro('')
  }
  return (
    <section className="form">
      <div>
        <input
          type="text"
          name=""
          id=""
          onChange={handleNome}
          value={nomeLivro}
          
        />
        <button onClick={handleClick}>
          <img src={lupa} alt="" />
        </button>
      </div>
    </section>
  );
};
