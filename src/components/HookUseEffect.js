import { useEffect, useState } from "react";

const HookUseEffect = () => {
    // 1 - useEffect sem dependencia
    useEffect(() => {
        console.log("Estou sendo executado!");
    });

    const [number, setNumber] = useState(1);

    const changeSomething = () => {
        setNumber(number + 1);
    };

    // 2 - useEffect com array de dependencia vazio
    useEffect(() => {
        console.log("Sou executado apenas uma vez meu chapa!");
    }, []);

    // 3 - Item no array de deps
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        if(anotherNumber > 0) {
            console.log("Sou executado apenas quando o anotherNumber muda!");
        }
    }, [anotherNumber]);

    // 4 - Cleanup do useEffect
    useEffect(() => {
        const timer = setTimeout(() => {
            console.log("Hello World");
        }, 2000);

        return () => clearTimeout(timer);
    }, [anotherNumber])

  return (
    <div>
        <h2>useEffect</h2>
        <p>Número: {number}</p>
        <button onClick={changeSomething}>Somar + 1</button>
        <p>AnotherNumber: {anotherNumber}</p>
        <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar anotherNumber</button>
        <hr />
    </div>
  )
}

export default HookUseEffect