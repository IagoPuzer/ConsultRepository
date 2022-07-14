import React, {useState} from 'react';
import axios from 'axios';
import './style.css';
import {useNavigate} from 'react-router-dom'

export function Home(props) {
  const navigate = useNavigate()
  const [usuario, setUsuario] = useState('');
  
  const handlePesquisa = () => {
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response =>  {
      const repositories = response.data;
      const repositoriesName = []
      repositories.map((repository) => {
        repositoriesName.push (repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName))   
      navigate ('/repositories')
    });
  }
  
  
  return (
    <div className="container">
    <input className="input" type="text" placeholder="Digite o nome do usuário" value={usuario} onChange={e => setUsuario(e.target.value)}/>
    <button type="button" className="btn-input"onClick={handlePesquisa}> Pesquisar </button>
    </div>
    
  )
}


