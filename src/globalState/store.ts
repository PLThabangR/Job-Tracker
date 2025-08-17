
//Importing the create function from zutand
import {create} from 'zustand'

interface Job {
  id: number;
  companyName: string;
  role: string;
  date: string;
  jobStatus: string;
  extraDetails: string;
}
//defining the type of our state
 type JobState = {
  jobs: Job[];
  createJob: (newJob: Job) => any ;
  getAllJobs: () => void;
}



//We are defining our custom hook using th create method
export const useJobs = create<JobState>((set) => ({//set is a special name allows us to change our value
    jobs: [], //initial value\
    //function to update out state
   // setJobs: (jobs: Job[]) => set({jobs}),
   setJobs: (jobs: Job[]) => set({jobs}),
//   addJob: (newJob: Job) => set((state) => ({ jobs: [...state.jobs, newJob] })),
//This function returns a promise of an object
  createJob:async (newJob: Job): Promise<{success: boolean, message: string}> => {
   try{
    //Check if all fields are filled from user
    if(!newJob.companyName || !newJob.role || !newJob.date || !newJob.jobStatus || !newJob.extraDetails){
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
  ,getAllJobs: async () => {

    const response = await fetch('http://localhost:8000/jobs',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },});
      //Parse the response to json 
       const data = await response.json();
      //we do not use set ... because we are not updating the state
    set({jobs: data.jobs});
  }

  //end of getAllJobs

}))