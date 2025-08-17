import React, { useState } from 'react'
import { useUsers } from '../../globalState/usersStore';
import toast from 'react-hot-toast';

interface User {
  email: string,
  password: string
}
const LoginForm = () => {

  const {users , getAllUsers} = useUsers();
  const [user,setUser] = useState<User>({
    email: '',
    password: ''
  });


  const handleLogin = async(e: React.FormEvent<HTMLFormElement>) => {
    
    e.preventDefault();
    //Validation
    if(!user.email || !user.password) {
      return toast.error('Please enter email and password');
    }
    if(user.email.length<5) {
      return toast.error('Email is too short');
    }
    if(user.password.length<4) {
      return toast.error('Password is too short');
    }

    //Login
    //we use await so that we can wait for the promise to resolve
const {success, message} = await getAllUsers(user.email.trim(),user.password.trim());
if(success){
  toast.success(message);
}else{
  toast.error(message);
}

  }
  return (
    <>
   <form onSubmit={handleLogin}>
 <h1 className='form-header'>Login</h1>
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