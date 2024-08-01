import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Opportunities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const [activeButton, setActiveButton] = useState('Business');

  const handleButtonClick = (category) => {
    setActiveButton(category);
  };

  const categories = ['Business', 'IT', 'Marketing', 'Designing'];

  const jobListings = [
    { title: 'Software Intern', company: 'The TMT company', datePosted: '2 days ago', category: 'IT' },
    { title: 'Software Intern', company: 'The TMT company', datePosted: '2 days ago', category: 'IT' },
    { title: 'Software Intern', company: 'The TMT company', datePosted: '2 days ago', category: 'IT' },
    { title: 'Marketing Specialist', company: 'The TMT company', datePosted: '3 days ago', category: 'Marketing' },
    { title: 'UI/UX Designer', company: 'The TMT company', datePosted: '4 days ago', category: 'Designing' },
    { title: 'Business Analyst', company: 'The TMT company', datePosted: '5 days ago', category: 'Business' },
    { title: 'Business Analyst', company: 'The TMT company', datePosted: '5 days ago', category: 'Business' },
    { title: 'Marketing Specialist', company: 'The TMT company', datePosted: '3 days ago', category: 'Marketing' },
    { title: 'Marketing Specialist', company: 'The TMT company', datePosted: '3 days ago', category: 'Marketing' },
    { title: 'Marketing Specialist', company: 'The TMT company', datePosted: '3 days ago', category: 'Marketing' },
    { title: 'Marketing Specialist', company: 'The TMT company', datePosted: '3 days ago', category: 'Marketing' },
    { title: 'Business Analyst', company: 'The TMT company', datePosted: '5 days ago', category: 'Business' },
    { title: 'Business Analyst', company: 'The TMT company', datePosted: '5 days ago', category: 'Business' },
  ];

  const filteredJobListings = jobListings.filter((job) => job.category === activeButton);

  return (
    <div className="mt-6 p-4 bg-gray-100">
      <p className="text-3xl font-semibold mb-8 text-pink-900 mt-12 px-16">Opportunities</p>
      <div className="flex mb-8 px-16">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleButtonClick(category)}
            className={`mr-2 py-2 px-8 rounded-full ${
              activeButton === category ? 'bg-pink-900 text-white' : 'bg-gray-200 text-black'
            }`}
          
          >
            {category}
          </button>
        ))}
      </div>
      <div className="space-y-4 px-16">
        {filteredJobListings.map((job, index) => (
          <div key={index} className="bg-pink-900 p-4 rounded-lg shadow-md py-4 px-8" data-aos="fade-top">
            <h3 className="text-lg font-semibold mb-2 text-white">{job.title}</h3>
            <p className="text-sm text-gray-100">{job.company}</p>
            <p className="text-xs text-gray-100">{job.datePosted}</p>
            <button className="mt-2 bg-gray-200 text-pink-900 py-2 px-8 rounded-full">Apply here</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
