import React, {useState} from 'react';
import axios from 'axios';
import './style.css';


export function Home() {
  
  const [usuario, setUsuario] = useState('');
  
  const handlePesquisa = () => {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then((response => console.log(response.data)))
  }

  return (
    <>
    <input type="text" placeholder="Digite qualquer coisa" value={usuario} onChange={e => setUsuario(e.target.value)}/>
    <button type="button" onClick={handlePesquisa}> submit </button>
    </>
    
  )
}


