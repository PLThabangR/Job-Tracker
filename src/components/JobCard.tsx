import toast from 'react-hot-toast';
import { useJobs } from '../globalState/store';
import './JobCard.css'
import ModalForm from './ModalForm';

interface JobCardProps {
  id: number;
  email: string;
  companyName: string;
  role: string;
  date: string;
  jobStatus: string;
  extraDetails: string; 
}


const JobCard = ({id,email,companyName, role, date, jobStatus, extraDetails}: JobCardProps) => {
  //Get the delete function from the zustand store
  const {deleteJob} = useJobs();
  const handleDelete = async(id: number) => {
    if (!id) { // Check if id is null or undefined
      console.error('ID is null or undefined');   
      toast.error('ID is null or undefined');
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

//creating the modal state



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
    <a  className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#updateFormModel">Update</a>

    <a className="btn btn-danger"  onClick={() => handleDelete(id)}>Delete</a>
      {/* modal */}
  </div>
</div>
    {/* modal */}
    {/* modal start */}
    <div className="modal"  id="updateFormModel">
      {/* modal content pass props */}
      <ModalForm id={id} companyName={companyName} role={role} date={date} jobStatus={jobStatus} extraDetails={extraDetails}/>
    </div>
       
    </>
  )
}

export default JobCard