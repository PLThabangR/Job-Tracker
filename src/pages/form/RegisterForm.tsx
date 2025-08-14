import React from 'react'

const RegisterForm = () => {
  return (
    <>
<form>
  <div className="mb-3">
    <label htmlFor="jobName" className="form-label">Name</label>
    <input type="text" className="form-control" id="jobName" aria-describedby="emailHelp"/>

  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email</label>
    <input type="email" className="form-control" id="email"/>
  </div>

  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password"/>
  </div>
  <div className="mb-3">
    <label htmlFor="age" className="form-label">Age</label>
    <input type="text" className="form-control" id="age"/>
  </div>

  <button type="submit" className="btn btn-primary">Register</button>
</form>
    </>
  )
}

export default RegisterForm