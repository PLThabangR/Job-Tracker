import React, { useState } from 'react'

interface UserRegisterForm{
  id: number;
  name: string;
  email: string;
  password: string;
  
}


const RegisterForm = () => {

  const [user, setUser] = useState<UserRegisterForm>({
    id: 0,
    name: '',
    email: '',
    password: '',
   
  });
  return (
    <>
<form>
  <div className="mb-3">
    <label htmlFor="jobName" className="form-label">Name</label>
    <input type="text" className="form-control" id="jobName" value={user.name} onChange={(e) => setUser({...user, name: e.target.value})}/>

  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" value={user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="text" className="form-control" id="password" value={user.password} onChange={(e) => setUser({...user, password: e.target.value})}/>
  </div>
  

  <button type="submit" className="btn btn-primary">Register</button>
</form>
    </>
  )
}

export default RegisterForm