
//Importing the create function from zutand
import {create} from 'zustand'

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  
}
//defining the type of our state
 type UsersState = {
  users: User[];
  createUser: (newJob: User) => any ;
  
}



//We are defining our custom hook using th create method
export const useUsers = create<UsersState>((set) => ({//set is a special name allows us to change our value
    users: [], //initial value
    //function to update out state
 
   setUsers: (users: User[]) => set({users}),

  createUser:async (newUser: User): Promise<{success: boolean, message: string}> => {
   try{
    //Check if all fields are filled from user
    

    if(!newUser.name || !newUser.password || !newUser.email){
        return {success: false, message: 'All fields are required'};
    }

    if (newUser.name.length<2){
      return {success: false, message: 'Name is too short'};
    }

    if(newUser.email.length<5){
      return {success: false, message: 'Email is too short'};
    }

    if( newUser.password.length<4){
      return {success: false, message: 'Password is too short'};
    }
    //Make a post request to the backend to create new job
     const response = await fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      //Send the new job object as a string
      body: JSON.stringify(newUser),
    });
    //Parse the response to json
    const data = await response.json();

    //Update the state
    set((state) => ({ users: [...state.users, data.users] }))
    //Return the data
    return {success: true, message: "User created successful"};

   }catch(err){
    //Return this to user if somethi
      return {success: false, message: "User not created "};
   }
  },//end of createJob

  //get all jobs function
  getAllUsers : async (email: string,password: string) => {

    try {
          const response = await fetch('http://localhost:8000/users',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },});
      //Parse the response to json 
       const data = await response.json();
      //we do not use set ... because we are not updating the state
    set({users: data});
       
    console.log("This is returned after get",data)
   
    //check if email and password are correct
        //check if email and password are correct using the find method to search 
    const user =data.find((user: User) => user.email === email && user.password === password);
    console.log("User found ",user)
    if (!user) {
      return {success: false, message: 'Invalid email or password'};
    }

    return {success: true, message: 'Login successful'};
      
    } catch (error) {
          return {success: true, message: 'failed to login'};
    }

  }

}))