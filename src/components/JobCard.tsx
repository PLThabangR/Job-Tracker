import toast from 'react-hot-toast';
import { useJobs } from '../globalState/store';
import './JobCard.css';
import ModalForm from './ModalForm';
import { useEffect, useState } from 'react';

interface JobCardProps {
  id: number;
  email: string;
  companyName: string;
  role: string;
  date: string;
  jobStatus: string;
  extraDetails: string;
}

const JobCard = ({
  id,
  email,
  companyName,
  role,
  date,
  jobStatus,
  extraDetails,
}: JobCardProps) => {
  const [jobDetails, setJobDetails] = useState<JobCardProps>({
    id,
    email,
    companyName,
    role,
    date,
    jobStatus,
    extraDetails,
  });

  const { deleteJob } = useJobs();

  const handleDelete = async (id: number) => {
    console.log('id to be deleted:', id);
    if (!id) {
      toast.error('ID is null or undefined');
      return;
    }

    const { success, message } = await deleteJob(id);
    if (success) {
      toast.success(message);
    } else {
      toast.error(message);
    }
  };

  const handleUpdate = (jobToBeUpdated: JobCardProps) => {
    console.log('Update clicked for id:', jobToBeUpdated.id);
    setJobDetails(jobToBeUpdated);
  };

  // Log whenever jobDetails updates
  useEffect(() => {
    if(jobDetails){
    console.log('Updated jobDetails use:', jobDetails);}
  }, [jobDetails]);

  return (
    <>
      <div
        className="card"
        style={{ width: '20rem', marginTop: '10px', marginBottom: '10px' }}
      >
        <div className="card-body">
          <h1>{id}</h1>
          <h5 className="card-title">{companyName}</h5>
          <h6 className="card-title">{role}</h6>
          <p className="card-text">{date}</p>
          <p className="card-text">{jobStatus}</p>
          <p className="card-text">{extraDetails}</p>

          <button
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target={`#updateFormModel-${id}`}
            onClick={() =>
              handleUpdate({
                id,
                email,
                companyName,
                role,
                date,
                jobStatus,
                extraDetails,
              })
            }
          >
            Update
          </button>

          <button
            className="btn btn-danger"
            onClick={() => handleDelete(id)}
          >
            Delete
          </button>
        </div>
      </div>

      {/* Modal */}
      <div className="modal" id="updateFormModel">
        {jobDetails && (
          <ModalForm
            id={jobDetails.id}
            email={jobDetails.email}
            companyName={jobDetails.companyName}
            role={jobDetails.role}
            date={jobDetails.date}
            jobStatus={jobDetails.jobStatus}
            extraDetails={jobDetails.extraDetails}
          />
        )}
      </div>
    </>
  );
};

export default JobCard;
