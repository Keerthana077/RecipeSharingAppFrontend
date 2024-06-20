import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const navigate = useNavigate()
    axios.get('http://localhost:7000/api/users/logout',{
        headers : {
            "Content-Type" : 'application.json'
        },
        withCredentials : true
    })
    useEffect(()=>{
        navigate('/')
    },[])
  return (
    <>
       
    </>
    
  )
}

export default Logout