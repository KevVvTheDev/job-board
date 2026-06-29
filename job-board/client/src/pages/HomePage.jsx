import { useEffect, useState } from 'react';
import JobList from '../components/JobList';
import { getJobs } from '../lib/graphQL/GraphQuery';

function HomePage() {
  const [jobs, setJobs] = useState([]);

  //run once when first initialized to get all the jobs from db
  useEffect(()=>{
    getJobs().then((jobs) => setJobs(jobs));
  }, []);

  return (
    <div>
      <h1 className="title">
        Job Board: 
      </h1>
      <JobList jobs={jobs} />
    </div>
  );
}

export default HomePage;
