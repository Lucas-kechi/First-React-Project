import React, { useState } from 'react';
import './style.css';
import { Card } from '../../components/Card';

export function Home() {
  const [personName, setPersonName] = useState() //Aqui também podemos deixar um informação como default ex: useState('Adriana')

  return ( // abaixo teremos o retorno da função, ela deve retornar apenas um elemento, em resolução aqui usamos uma <div> mas também podemos utilizar um 'fragment', um elemento vazio, <> (conteúdo HTML) </>
    <div className='container'> 
      <h1>Lista de Presença</h1>
      <h2> Nome: {personName}</h2>
      <input 
        type="text" 
        placeholder='Digite o nome...' 
        onChange={e => setPersonName(e.target.value)}
      />
      <button type='button'>Adicionar</button>
      
      <div className='list'>
        <Card name="Lucas de Freitas Kechi Paiva" hour="14:12:35"/>
        <Card name="Leo de Freitas Kechi Paiva" hour="14:24:43"/>
        <Card name="Daniele dos santos" hour="14:24:59"/>  
      </div>
    </div>
  )
}
