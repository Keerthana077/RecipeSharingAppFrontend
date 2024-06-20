import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import NavBar from '../NavBar'
import axios from 'axios'
import { date } from 'yup'

const EditProfile = () => {
    const navigate = useNavigate()
    const [Data,setData] = useState("")
    const config = {
        headers: {
            'Content-Type' : 'application/json'
         },
         withCredentials : true
      };
     useEffect(()=>{
         axios.get('http://localhost:7000/api/users/profile',config )
        .then(res => setData(res.data.user))
        .catch(err => console.error(err));
     },[])
      // console.log(Data)
      const {username,email,bio,location} = Data
      const [newuname,setNewuname] = useState("")
      const [newemail,setNewemail] = useState("")
      const [newbio,setNewbio] = useState("")
      const [newlocation,setNewlocation] = useState("")
      
  return (
    <>
    <NavBar/>
    
    <div className='container m-2'>
    <div className="d-flex landing flex-column flex-wrap  align-items-center justify-content-center text-light bg-success p-3">
    <div className="input-group mb-2">
    <span className="input-group-text text-success" id="username">Username</span>
    <input type="text" className="form-control" value={username} onChange={(e)=>setNewuname(e.target.value)} aria-label="Username" aria-describedby="username" />
    </div>
    <div className="input-group mb-2">
    <span className="input-group-text text-success" id="email">Email</span>
    <input type="email" className="form-control" value={email} onChange={(e)=>setNewemail(e.target.value)} aria-label="Email" aria-describedby="email" />
    </div>
    <div className="input-group mb-2">
    <span className="input-group-text text-success">Bio</span>
    <textarea className="form-control" value={bio} onChange={(e)=>setNewbio(e.target.value)} aria-label="Bio"></textarea>
    </div>
    <div className="input-group mb-2">
    <span className="input-group-text text-success" id="location">Location</span>
    <input type="text" className="form-control" value={location} onChange={(e)=>setNewlocation(e.target.value)} aria-label="Location" aria-describedby="location" />
    </div>
    <div className="d-flex flex-row">
    <button className='btn text-success btn-outline-success bg-light m-1' onClick={()=>console.log("updated..")}>Update</button>
    <button className='btn text-success btn-outline-success bg-light m-1' onClick={()=>navigate(-1)}>Back</button>
    </div>                   
    </div>
    </div>
</>
  )
}

export default EditProfile