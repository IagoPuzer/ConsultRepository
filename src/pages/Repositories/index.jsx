import React, { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom'
import "./style.css"

export function Repositories (){
    const navigate = useNavigate()
    const [repositories, setRepositories] = useState([])

    const backToHomePage = () => {
        navigate("/")
    }

    useEffect(() => {
       let repositoriesName = localStorage.getItem('repositoriesName')
        repositoriesName  = JSON.parse(repositoriesName)
        setRepositories(repositoriesName)   
    },[])



    return (
    <div className="container-repositories">
       <h1 className="title">Repositórios</h1>

        <div className="repository">
            <div className="list-repositories">
                {repositories.map(repository => {
                    return (
                        <div className="list-item">Repository name: {repository} </div>
                    )
                })}                          
            </div>
            <button onClick = {backToHomePage}>Voltar</button>
       </div>
    </div>
               
      )

}