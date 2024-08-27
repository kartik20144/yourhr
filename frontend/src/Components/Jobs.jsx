import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Jobs.css"

// const Card = ({job}) => {
//   return (
//     <>

//           <div class="group bg-gray-700 p-4 transition-all duration-300 hover:rotate-1 lg:p-8">
//             <div class="mb-3 text-right">
              
//             </div>
//             <div class="flex items-center gap-x-2">
             
//               <div>
//                 <h3 class="text-xl font-bold text-gray-50">{job.title}</h3>
//                 <span class="text-xs text-gray-300">New location, USA</span>
//               </div>
//             </div>
//             <div class="my-4">
//               <h3 class="text-2xl font-medium text-gray-200">UI/UX Designer</h3>
//               <div class="text-sm font-medium">
//                 <span class="m-1 ml-0 inline-block text-blue-500">HTML</span>
//                 <span class="m-1 ml-0 inline-block text-yellow-500">CSS</span>
//                 <span class="m-1 ml-0 inline-block text-pink-500">FIGMA</span>
//                 <span class="m-1 ml-0 inline-block text-lime-500">Ad. XD</span>
//                 <span class="m-1 ml-0 inline-block text-blue-500">
//                   Illustrator
//                 </span>
//               </div>
//               <div class="mt-2 text-sm text-gray-400">
//                 $60K - $100K per year
//               </div>
//             </div>
//             <div class="flex items-center justify-between">
//               <span class="text-sm font-medium text-gray-50">Full Time</span>
//               <a class="font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80">
//                 Apply Now
//               </a>
//             </div>
//           </div>

//     </>
//   );
// };
const Card = ({ job }) => {
    const deadline = new Date(job.applicationDeadline);
    return (
        <>


      <div className="bg-gray-100 shadow-md rounded-lg overflow-hidden mb-4 pattern2">
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
          <p className="text-sm text-gray-600">{job.company} - {job.location}</p>
          <p className="text-sm text-gray-600 mb-2">{job.type}</p>
          <p className="text-gray-700">{job.description}</p>
          <p className="text-gray-700 mt-2"><strong>Requirements:</strong> {job.requirements}</p>
          <p className="text-gray-700 mt-2"><strong>Salary:</strong> {job.salary}</p>
          <p className="text-gray-500 mt-2"><strong>Deadline:</strong> {deadline.toDateString()}</p>
        </div>
      </div>
        

        </>
    );
  };

const Jobs = () => {

  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const { data } = await axios.get(`/api/jobs`, {
          withCredentials: true,
        });
        setJobData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchJobs();
    
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-[85%] mx-auto p-4">
      <div className="pattern">
        <div className="text-6xl font-bold my-4 text-center">Jobs</div>
      </div>
      <hr className="my-4" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.isArray(jobData) &&
          jobData?.map((item, i) => {
            return (
              <Card
                key={item._id}
                id={item._id}
                job={item}
              />
            );
          })}
      </div>
    </div>
  </div>
  
  );
};

export default Jobs;
