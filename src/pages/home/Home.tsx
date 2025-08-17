
import './home.css';
import Navbar from '../Navbar/Navbar';
import JobCard from '../../components/JobCard';
import JobForm from '../form/JobForm';
import { useJobs } from '../../globalState/store';
import { useEffect } from 'react';

interface Job {
  id: number;
  companyName: string;
  role: string;
  date: string;
  jobStatus: string;
  extraDetails: string;
}
const Home = () => {

  const {jobs,getAllJobs} = useJobs();

  //load function using use effect
  useEffect(() => {
    //Call the get all jobs function
    getAllJobs();
  }, [getAllJobs])//dependency array the useffect will only run if the getAllJobs is called

  //Maping jobs to card using this functon
  const DisplayJobs=()=>{
    jobs.map((job)=>(
      <JobCard key={job.id} companyName={job.companyName} role={job.role} jobStatus={job.jobStatus} date={job.date} extraDetails={job.extraDetails}/>
    ))
  }
  return (
    <>
    
<Navbar/>
   
    

  { jobs.length>0 ? {}:<h1 className='no-job'>No Jobs available</h1>} 
    
    <JobForm/>
    </>
  )
}

export default Home