import './form.css'

const JobForm = () => {
  return (
    <>

<form>
  <div className="mb-3">
    <label htmlFor="jobName" className="form-label">Job name</label>
    <input type="email" className="form-control" id="jobName" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label htmlFor="jobDescription" className="form-label">Password</label>
    <input type="password" className="form-control" id="jobDescription"/>
  </div>

  <div className="mb-3">
    <label htmlFor="date" className="form-label">Posted date</label>
    <input type="date" className="form-control" id="date"/>
  </div>
  <div className="mb-3">
    <label htmlFor="jobStatus" className="form-label">Status</label>
    <input type="text" className="form-control" id="jobStatus"/>
  </div>

  <button type="submit" className="btn btn-primary">Post job</button>
</form>

    </>
  )
}

export default JobForm