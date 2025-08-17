import React from 'react'

interface JobModalProps {
  id: number;
  companyName: string;
  role: string;
  date: string;
  jobStatus: string;
  extraDetails: string; 
}

const ModalForm = ({id,companyName, role, date, jobStatus, extraDetails}: JobModalProps) => {

    const handleU
  return (
    <div >
     <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">Modal title</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
       <form  onSubmit={handleUpdat}>
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
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
    </div>
  )
}

export default ModalForm