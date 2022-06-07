import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const [msg, setMsg] = useState('')

    const login = async(e) => {
        e.preventDefault()
        try {
            await axios.post('http://localhost:5000/login',{
                email : email,
                password: password
            })
            navigate('/dashboard')
        } catch (error) {
            if(error.response){
                setMsg(error.response.data.msg)
            }
        }
    }

  return (
    <section className="hero has-background-grey-light is-fullwidth is-fullheight">
      <div className="hero-body">
        <div className="container">
         <div className="columns is-centered">
             <div className="column is-4-desktop">
                 <form className='box'>
                     <p className='has-text-centered'>{msg}</p>
                     <div className="field mt-5">
                         <label className="label">
                             Email or Username
                         </label>
                         <div className="controls">
                             <input type="text" className='input' placeholder='Username' value={email} onChange={(e)=> setEmail(e.target.value)}/>
                         </div>
                     </div>
                     <div className="field mt-5">
                         <label className="label">
                             Password
                         </label>
                         <div className="controls">
                             <input type="password" className='input' placeholder='*****' value={password} onChange={(e)=> setPassword(e.target.value)}/>
                         </div>
                     </div>
                     <div className="field mt-5">
                         <div className="button is-success is-fullwidth" onClick={login}>Login</div>
                     </div>
                 </form>
             </div>
         </div>
        </div>
      </div>
    </section>
  )
}

export default Login