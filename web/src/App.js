import React, {useState} from 'react';

//Component: bloco isolado de HTML, CSS e JS que não interfere no restante da aplicação
//Propriedade: Os famosos atributos do HTML, sã informações que um componente pai passa pra um componente filho
//Estado: Informações mantidas pelo component (Lembrar: imutabilidade)

function App() {
  const [counter, setCounter] = useState(0);

  function incrementCounter() {
    setCounter(counter + 1);
  }

  return (
    <>
   <h1>Contador: {counter}</h1>
   <button onClick={incrementCounter}>Incrementar</button>
   </>
  );
}

export default App;
