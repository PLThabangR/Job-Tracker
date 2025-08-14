
import './home.css';
import Navbar from '../Navbar/Navbar';
import JobCard from '../../components/JobCard';
import JobForm from '../form/JobForm';

const Home = () => {

  
  return (
    <>
    
<Navbar/>
   
    

    { true? <JobCard/>:<h1 className='no-job'>No Jobs available</h1>}
    
    <JobForm/>
    </>
  )
}

export default Home