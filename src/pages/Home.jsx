import React, { useEffect, useState } from 'react'
import JobCard from './JobDetail';

const Home = () => {
const [jobs] = useState([
    {
        id:1,
        title: 'Job 1',
        company: 'Company 1',
        location: 'Location 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        salary: '$100,000'
    },
    {
        id:2,
        title: 'Job 2',
        company: 'Company 2',
        location: 'Location 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        salary: '$100,000'
    }
]    )
const  [loading, setLoadin] = useState(true)

useEffect(()=>{
    setTimeout(() => {
        setLoadin(false)
    }, 3000);
}, [])
if(loading) return <p>Loading ... </p>
return(
    <div className="flex">
        <h1>Hello from Homepage</h1>
       {jobs.map((job)=> <JobCard job={job} key={job.id} />) }
    </div>
    )
}
export default Home