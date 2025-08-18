import { useState } from "react";
import { useJobs } from "../../globalState/store";
import Home from "../home/Home";


interface JobInterface {
  id: number;
  companyName: string;
  role: string;
  date: string;
  jobStatus: string;
  extraDetails: string;
}
const Search = () => {
  const {searchByCompanyName} = useJobs();
//const [jobs ,getAllJobs] = useJobs();
  //Hooks
  const [search, setSearch] = useState('');
  //array of jobs 
//  const [searchResults, setSearchResults] = useState<JobInterface[]>([]);

const handleSearch = () => {
  
    //const {jobs,getAllJobs} = useJobs();
  //Use the filter method
  // const filteredJobs = jobs.filter((job: JobInterface) => job.companyName.toLowerCase().includes(search.toLowerCase()));
   // setSearchResults(filteredJobs);
   //Use the searchByCompanyName function from the useJobs hook
   searchByCompanyName(search);



}
  return (
    <div>

         <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" onClick={() => handleSearch()}>Search</button>
      </form>
     
    
    </div>
  )
}

export default Search