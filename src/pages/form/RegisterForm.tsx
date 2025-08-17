import React, { useState } from 'react'
import { useUsers } from '../../globalState/usersStore';
import toast from 'react-hot-toast';

interface UserRegisterForm{
  id: number;
  name: string;
  email: string;
  password: string;
  
}


const RegisterForm = () => {
 const {users , createUser} = useUsers();
  const [newUser, setNewUser] = useState<UserRegisterForm>({
    id: 0,
    name: '',
    email: '',
    password: '',
   
  });

   const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    //Prevent page reload
    e.preventDefault();

    
   
    //Create new user object and remove white spaces
    const createdUser = { 
        id:  Math.floor(Math.random() * 1000), name:newUser.name.trim(),email: newUser.email.trim(), password:newUser.password.trim() };

      //Add new user object to the zustand function
     const {success, message} = await createUser(createdUser);

     if(success){
      toast.success(message);
     }else{
      toast.error(message);
     }
    //set to empty let the id remain the same
    setNewUser({id: newUser.id, name: '', email: '', password: ''});  
  }
  return (
    <>
<form onSubmit={handleSubmit }>
  <h1 className='form-header'>Sign up</h1>
  <div className="mb-3">
    <label htmlFor="jobName" className="form-label">Name</label>
    <input type="text" className="form-control" id="jobName" value={newUser.name} onChange={(e) => setNewUser({...newUser, name: e.target.value})}/>

  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email" value={newUser.email} onChange={(e) => setNewUser({...newUser, email: e.target.value})}/>
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="text" className="form-control" id="password" value={newUser.password} onChange={(e) => setNewUser({...newUser, password: e.target.value})}/>
  </div>
  

  <button type="submit" className="btn btn-primary">Register</button>
</form>
    </>
  )
}

export default RegisterForm