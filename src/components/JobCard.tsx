import './JobCard.css'

interface JobCardProps {
  companyName: string;
  role: string;
  date: string;
  jobStatus: string;
  extraDetails: string; 
}
const JobCard = ({companyName, role, date, jobStatus, extraDetails}: JobCardProps) => {
  return (
    <>
    <div className="card" style={{width:' 18rem', marginTop:'10px'}}>
  
  <div className="card-body">
    <h5 className="card-title">{companyName}</h5>\
       <h6 className="card-title">{role}</h6>
    <p className="card-text">{extraDetails}.</p>
    <p className="card-text">{date}</p>
    <p className="card-text">{jobStatus}</p>
    <a href="#" className="btn btn-primary">Update</a>

    <a href="#" className="btn btn-primary" >Delete</a>

  </div>
</div>
    
    </>
  )
}

export default JobCard