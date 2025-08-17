
import './home.css';
import Navbar from '../Navbar/Navbar';
import JobCard from '../../components/JobCard';
import JobForm from '../form/JobForm';
import { useJobs } from '../../globalState/store';
import { useEffect } from 'react';

interface JobInterface {
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
  }, [jobs.length])//dependency array the useffect will only run if the length changes

  //Maping jobs to card using this functon
  const DisplayJobs=() :any=>{
    if(jobs) {//check if jobs array has values
      return ( //if jobs exits return this error
        jobs.map((job: JobInterface) => (
          job ? (
            <JobCard key={job.id} id={job.id} companyName={job.companyName} role={job.role} jobStatus={job.jobStatus} date={job.date} extraDetails={job.extraDetails}/>
          ) : null //reutrn null of the is a error with keys
        ))
      );
    } else {
      return null;//if jobs does not exist return null
    }
  }
  return (
    <>
    
<Navbar/>
   
    
    <div className="card-container"  >
  { jobs.length>0 ? <DisplayJobs/>:<h1 className='no-jobs-header'>No Jobs available</h1>} ection:'row',alignItems:'center'
    </div>

    
    <JobForm/>
    </>
  )
}

export default Home