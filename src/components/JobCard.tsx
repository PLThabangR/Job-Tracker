import toast from 'react-hot-toast';
import { useJobs } from '../globalState/store';
import './JobCard.css'

interface JobCardProps {
  id: number;
  companyName: string;
  role: string;
  date: string;
  jobStatus: string;
  extraDetails: string; 
}


const JobCard = ({id,companyName, role, date, jobStatus, extraDetails}: JobCardProps) => {
  //Get the delete function from the zustand store
  const {deleteJob} = useJobs();
  const handleDelete = async(id: number) => {
    if (!id) { // Check if id is null or undefined
      console.error('ID is null or undefined');    
    return;
    }
      //Call the delete function and pass the id
      const {success, message} = await deleteJob(id);
      if(success){
        toast.success(message);
      }else{
        toast.error(message);
      }
   
}

const handleUpdate = (id: number) => {
  
}
  return (
    <>
    <div className="card" style={{width:' 20rem', marginTop:'10px',marginBottom:'10px'}}>
  
  <div className="card-body">
    <h5 className="card-title">{id}</h5>
    <h5 className="card-title">{companyName}</h5>
       <h6 className="card-title">{role}</h6>
    <p className="card-text">{extraDetails}.</p>
    <p className="card-text">{date}</p>
    <p className="card-text">{jobStatus}</p>
    <a href="#" className="btn btn-primary">Update</a>

    <a href="#" className="btn btn-danger"  onClick={() => handleDelete(id)}>Delete</a>

  </div>
</div>
    
    </>
  )
}

export default JobCard