import { useLocation, useNavigate } from 'react-router'
import useAuth from './Context/useAuth'

export default function Login () {

  const { signIn } = useAuth()

  const location = useLocation()
  const pr = location?.state?.pr
  const path = location?.state?.path || '/'
  const navigate = useNavigate()
  const {wrongUser} = useAuth()

  function handleSubmit (e){
     e.preventDefault()
     const form = e.target
     const email = form.email.value
     const password = form.password.value
     const user = {email, password}
     signIn(user, 
      ()=>navigate(path)
     )
  }

  return (
    <div>
      <h2>Sign in to your account</h2>
      {pr && !wrongUser && <h3 className='red'>You must sign in first!</h3>}
      {wrongUser && <h3 className='red'>Wrong email or password</h3>}
      <form onSubmit={handleSubmit} className='login-form'>
        <div className='inp-cont'>
            <input className='login-input' name='email' type="email" placeholder='Email address...'/>
            <input className='login-input' name='password' type="password" placeholder='Password...' />
        </div>
        <button className='login-btn'>Sign in</button> 
      </form>
      <p className='create-acc-p'>Don't have an account? <span>Create one now</span></p>
    </div>
  )
}
