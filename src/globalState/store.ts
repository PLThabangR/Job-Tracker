
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
 type JobState = {
  jobs: Job[];
  addJob: (newJob: Job) => void;
}

//We are defining our custom hook using th create method
export const useJobs = create<JobState>((set) => ({//set is a special name allows us to change our value
    jobs: [], //initial value\
    //function to update out state
   // setJobs: (jobs: Job[]) => set({jobs}),
   setJobs: (jobs: Job[]) => set({jobs}),
  addJob: (newJob: Job) => set((state) => ({ jobs: [...state.jobs, newJob] })),
  createJob:async (newJob: Job) => {
   try{
    if(!newJob.companyName || !newJob.role || !newJob.date || !newJob.jobStatus || !newJob.extraDetails){
        return {success: false, message: 'All fields are required'};
    }
    //Make a post request to the backend
     const response = await fetch('http://localhost:3000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      //Send the new job object as a string
      body: JSON.stringify(newJob),
    });
    //Parse the response
    const data = await response.json();

    //Update the state
    set((state) => ({ jobs: [...state.jobs, data.jobs] }))
    //Return the data
    return {success: true, message: "Job created successful"};

   }catch(err){
     console.log(err)
   }
  }

}))