// src/components/JobCard.jsx
import React from 'react';

const JobCard = ({ job }) => {
  return (
    <div className="m-3 border border-1-gray-500 p-4 mb-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <h2 className="text-xl font-bold">{job.title} zz</h2>
      <p className="text-gray-600">{job.company} • {job.location}</p>
      <p className="text-green-700 font-medium">{job.salary}</p>
      <p className="mt-2 text-gray-500">{job.description}</p>
      <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Voir l'offre
      </button>
    </div>
  );
};

export default JobCard;