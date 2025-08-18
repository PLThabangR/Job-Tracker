
//Importing the create function from zutand
import {create} from 'zustand'

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  
}
interface Job {
  id: number;
  email: string;//email is a property of User as a primary key
  companyName: string;
  role: string;
  date: string;
  jobStatus?: string;
  extraDetails?: string;
}
//defining the type of our state
 type JobState = {
  jobs: Job[];
  searhArray: Job[];
  createJob: (newJob: Job) => any ;
  getAllJobs: (userEmail: string) => any;
  deleteJob: (jobId: number) => any;
  searchByCompanyName: (searchTerm: string) => any;
  
}



//We are defining our custom hook using th create method
export const useJobs = create<JobState>((set,get) => ({//set is a special name allows us to change our value
  //get is also a special value to get our value to scope uin arrow function
    jobs: [], //initial value\
    searhArray: [],//initial value fro searched array
    //function to update out state
   // setJobs: (jobs: Job[]) => set({jobs}),
   setJobs: (jobs: Job[]) => set({jobs}),
//   addJob: (newJob: Job) => set((state) => ({ jobs: [...state.jobs, newJob] })),
//This function returns a promise of an object
  createJob:async (newJob: Job): Promise<{success: boolean, message: string}> => {
   try{
    //Check if all fields are filled from user
    if(!newJob.email || !newJob.companyName || !newJob.role || !newJob.date || !newJob.jobStatus || !newJob.extraDetails){
        return {success: false, message: 'All fields are required'};
    }
    //Make a post request to the backend to create new job
     const response = await fetch('http://localhost:8000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      //Send the new job object as a string
      body: JSON.stringify(newJob),
    });
    //Parse the response to json
    const data = await response.json();

    //Update the state
    set((state) => ({ jobs: [...state.jobs, data.jobs] }))
    //Return the data
    return {success: true, message: "Job created successful"};

   }catch(err){
    //Return this to user if somethi
      return {success: false, message: "Job not created "};
   }
  }//end of createJob

  //get all jobs function
  ,getAllJobs: async (userEmail: string): Promise<{success: boolean, message: string}> => {

  

     const response = await fetch('http://localhost:8000/jobs',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },});
      //Parse the response to json 
       const data = await response.json();

      //

       //get jobs for the user with the same email
       const Userjobs = data.filter((job: Job) => job.email === userEmail);
      //we do not use set ... because we are not updating the state
    set({jobs: Userjobs});
      console.log("This is returned after get",data)
       return {success: true, message: 'Jobs fetched successfully'};
   
  },
  //end of getAllJobs
  //Start of Delete job function

  deleteJob: async (id: number): Promise<{success: boolean, message: string}> => {
      console.log("the Id is ",id)
   try{
     //Make a delete request to the backend to delete job
     const response = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });
     console.log("response  ",response.status)
    if(!response.ok){
      throw new Error("Failed to delete job");
    }

     console.log("after resp ")
    //Update the state
    //Use filter to remove the job with the same id and set the state
    set((state) => ({ jobs: state.jobs.filter((job) => job.id !== id) }));
    //Return the data
    return {success: true, message: "Job deleted successful"};
   }catch(err){
    //Return this to user if something goes wrong
    console.log(err)
      return {success: false, message: "Job not deleted "};
   }
  }//End of deleteJob function

  //update job start here
  ,updateJobStore: async (id: number,updatedJob: Job): Promise<{success: boolean, message: string}> => {
      console.log(updatedJob)
      console.log(id)
    if(!updatedJob.companyName || !updatedJob.role || !updatedJob.date || !updatedJob.jobStatus || !updatedJob.extraDetails){
        return {success: false, message: 'All fields are required'};
    }
    if(!updatedJob.companyName.trim() && updatedJob.companyName.length<2){
      return {success: false, message: 'Company name is too short'};
    }
    if(!updatedJob.role.trim() && updatedJob.role.length<2){
      return {success: false, message: 'Role is too short'};
    }
    if(!updatedJob.extraDetails.trim() && updatedJob.extraDetails.length<3){
      return {success: false, message: 'Extra details is too short'};
    }
   try{
     //Make a put request to the backend to update job
     const response = await fetch(`http://localhost:8000/jobs/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      //Send the updated job object as a string
      body: JSON.stringify(updatedJob),
    });
    //if the response is not ok throw error
    if(!response.ok){
      throw new Error("Failed to update job");
    }
    //Update the state
    //Use map to update the job with the same id and set the state
    set((state) => ({ jobs: state.jobs.map((job) => job.id === id ? updatedJob : job) }));
    //Return the data
    return {success: true, message: "Job updated successful"};
   }catch(err){
    //Return this to user if something goes wrong
      return {success: false, message: "Job not updated "};
   }
  },//end of updateJob
// Set the state of job to the filtered jobs this will render
  searchByCompanyName : (searchTerm:string)=>{
    const {searhArray,jobs} = get();
  const filteredJobs = jobs.filter((job: Job) => job.companyName.toLowerCase().includes(searchTerm.toLowerCase()));
   
  set({searhArray: filteredJobs});

  //logic to set jobs back to empty
  if(searchTerm === ''){//if the search term is empty return all jobs
    set({searhArray: jobs});
  }
  
  },

}))