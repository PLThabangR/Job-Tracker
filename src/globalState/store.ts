
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
  addJob: (newJob: Job) => set((state) => ({ jobs: [...state.jobs, newJob] }))
}))