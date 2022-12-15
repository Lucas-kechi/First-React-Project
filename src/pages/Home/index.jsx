import React, { useState, useEffect } from 'react';
import './style.css';
import { Card } from '../../components/Card';

export function Home() {
  const [personName, setPersonName] = useState("Nome inserido") //Aqui também podemos deixar um informação como default ex: useState('Adriana')
  const [studentsArray, setStudentsArray] = useState([]) // Novo Estado para armazenar em um array nossa lista de nomes com a hora

  function creatingNewsStudents() { // função para ser chamada no botão, onde criará um objeto com chaves nome e tempo
    const newStudent = {
      name: personName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
      })
    }
    
    setStudentsArray(prevState => [...prevState, newStudent]); // A chamada da função do estado, para armazenar o novo nome inserido, observamos que em seu argumento temos uma callback, que será o conteúdo anterior desse estado. Então aplicamos um spread operator pois esse conteúdo está dentro de um array.
  }

  useEffect(() => {    //O corpo do useEffect, ou seja, o código que queremos reproduzir
    console.log("useEffect foi chamado!");
  }, []); //O segundo argumento é um array de dependências, onde adicionamos os Estados que o useEffect será chamado, por padrão ele já é chamado no carregamento da aplicação.


  return ( // abaixo teremos o retorno da função, ela deve retornar apenas um elemento, em resolução aqui usamos uma <div> mas também podemos utilizar um 'fragment', um elemento vazio, <> (conteúdo HTML) </>
    <div className='container'> 
      <header>
        <h1>Lista de Presença</h1>
        <div>
          <strong>Lucas Kechi</strong>
          <img src="https://github.com/lucas-kechi.png" alt="Imagem de perfil" />
        </div>
      </header>
      <h2>Pré-vizualização:</h2>
      <Card name={personName} hour={
        new Date().toLocaleTimeString("pt-br", {
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit',
        })
      }/>
      <input 
        type="text" 
        placeholder='Digite o nome...' 
        onChange={e => setPersonName(e.target.value)}//Adicionando o evento e chamando a função que criamos
      />
      <button type='button' onClick={creatingNewsStudents}>
        Adicionar
      </button>
      
      <div className='list'>
      {
        studentsArray.map(el => 
          <Card 
            key={studentsArray.indexOf(el)} // Cada card criado terá sua key prop pessoal, pois será o index de cada elemento nesse caso.
            name={el.name} 
            hour={el.time} 
          />
        ) //Aqui onde aplicamos um map no array do estado, que criará um card para cada length, utilizando as chaves do objeto.
      }
      </div>
    </div>
  )
}
