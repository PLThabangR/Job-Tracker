import React, { useState } from 'react'

interface User {
  email: string,
  password: string
}
const LoginForm = () => {
  const [user,setUser] = useState<User>({
    email: '',
    password: ''
  });


  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    //Validation
    if(!user.email || !user.password) {
      alert('Please enter email and password');
    }

    //Login


  }
  return (
    <>
   <form onSubmit={handleLogin}>
 
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})} id="email"/>
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
  </div>
 

  <button type="submit" className="btn btn-primary">Login</button>
</form>
    
    </>
  )
}

export default LoginForm