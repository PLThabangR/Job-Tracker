import './JobCard.css'
const JobCard = () => {
  return (
    <>
    <div className="card" style={{width:' 18rem', marginTop:'10px'}}>
  
  <div className="card-body">
    <h5 className="card-title">Job title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" className="btn btn-primary">Update</a>

    <a href="#" className="btn btn-primary" >Delete</a>

  </div>
</div>
    
    </>
  )
}

export default JobCard