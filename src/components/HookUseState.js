import { useState } from "react";

const HookUseState = () => {
  const [number, setNumber] = useState(0);
  let numberLet = 0;

  const [name, setName] = useState("");

  return (
    <div>
        <h2>useState com rerenderização</h2>
        <p>{number}</p>
        <button onClick={() => setNumber(number + 1)} >Somar mais um</button>
        <hr />
        <h2>Variavel comum que não rerenderiza</h2>
        <p>{numberLet}</p>
        <button onClick={() => numberLet = numberLet + 1}>Somar mais um</button>
        <hr />
        <h2>useState com inputs</h2>
        <p>Nome: {name}</p>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <hr />
    </div>
  )
}

export default HookUseState;