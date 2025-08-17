import { useState } from 'react';
import './form.css'
import { useJobs } from '../../globalState/store';
import toast from 'react-hot-toast';

interface Job {
  id: number;
  companyName: string;
  role: string;
  date: string;
  jobStatus: string;
  extraDetails: string;
}
const JobForm = () => {
  //Hooks
//import from zustand
  const { jobs,createJob} = useJobs();

  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [date, setDate] = useState('');
  const [jobStatus, setJobStatus] = useState('');
  const [extraDetails, setExtraDetails] = useState('');

  //Handle submit
  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    //Prevent page reload
    e.preventDefault();
    
    
    //Create new job object by using keys and removing white spaces
    const newJob = { 
        id: Math.floor(Math.random() * 1000), companyName:companyName.trim(),role: role.trim(), date, jobStatus: jobStatus.trim(), extraDetails: extraDetails.trim() };

      //Add new job object to the zustand function
     // addJob(newJob);
     const {success, message} = await createJob(newJob);

     if(success){
      toast.success(message);
     }else{
      toast.error(message);
     }
    //set to empty
    setCompanyName('');
    setRole('');
    setDate('');
    setJobStatus('');
    setExtraDetails('');
    console.log(jobs)
  }
  return (
    <>

<form  onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="companyName" className="form-label">Company name</label>
    <input type="text" className="form-control" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>

  </div>
  <div className="mb-3">
    <label htmlFor="role" className="form-label">Role</label>
    <input type="text" className="form-control" id="role" value={role} onChange={(e) => setRole(e.target.value)} />
  </div>

  <div className="mb-3">
    <label htmlFor="date" className="form-label">Posted date</label>
    <input type="date" className="form-control" id="date" value={date} onChange={(e) => setDate(e.target.value)}/>
  </div>
  <div className="mb-3">
    <label htmlFor="jobStatus" className="form-label">Status</label>
    <input type="text" className="form-control" id="jobStatus" value={jobStatus} onChange={(e) => setJobStatus(e.target.value)}/>
  </div>

   <div className="mb-3">
    <label htmlFor="extraDetails" className="form-label">Extra Details</label>
    <input type="text" className="form-control" id="extraDetails" value={extraDetails} onChange={(e) => setExtraDetails(e.target.value)}/>
  </div>

  <button type="submit" className="btn btn-primary">Post job</button>
</form>

    
    </>
  )
}

export default JobForm