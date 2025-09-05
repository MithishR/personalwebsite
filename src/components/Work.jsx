import React, { useState } from 'react';
import { workexp, upcomingexp } from '../data/workexp';

const Work = () => {
  const [selectedCompanies, setSelectedCompanies] = useState(new Set());
  const [selectedPositions, setSelectedPositions] = useState(new Set());

  const handleCompanyClick = (id, type) => {
    const key = `${type}-${id}`;
    const newSelectedCompanies = new Set(selectedCompanies);
    if (newSelectedCompanies.has(key)) {
      newSelectedCompanies.delete(key);
    } else {
      newSelectedCompanies.add(key);
    }
    setSelectedCompanies(newSelectedCompanies);
  };

  const handlePositionClick = (companyId, position, type) => {
    const key = `${type}-${companyId}-${position}`;
    const newSelectedPositions = new Set(selectedPositions);
    if (newSelectedPositions.has(key)) {
      newSelectedPositions.delete(key);
    } else {
      newSelectedPositions.add(key);
    }
    setSelectedPositions(newSelectedPositions);
  };

  const renderExperience = (data, type, dashed = false, label = '') => (
    <div className="w-full space-y-6">
      {data.map((company) => (
        <div
          key={`${type}-${company.id}`}
          className={`w-full border-2 ${dashed ? 'border-dashed border-yellow-400' : selectedCompanies.has(`${type}-${company.id}`) ? 'border-yellow-custom' : 'border-gray-500'} p-4 rounded-lg`}
        >
          <div
            className="flex items-center cursor-pointer"
            onClick={() => handleCompanyClick(company.id, type)}
          >
            <img
              src={company.logo}
              alt={company.company}
              className="h-12 w-12 rounded-full bg-white border border-gray-300 mr-4"
            />
            <h3 className={`text-2xl font-bold text-white ${selectedCompanies.has(`${type}-${company.id}`) ? 'text-yellow-custom' : ''}`}>
              {company.company}
            </h3>
            <h4 className={`text-sm font-bold text-white ml-auto ${selectedCompanies.has(`${type}-${company.id}`) ? 'text-yellow-custom' : ''}`}>
              {company.location}
            </h4>
          </div>

          {selectedCompanies.has(`${type}-${company.id}`) && (
            <div className="mt-4 pl-16">
              {company.positionslist.map((position, index) => (
                <div key={index} className="mb-4">
                  <div
                    className={`cursor-pointer ${selectedPositions.has(`${type}-${company.id}-${position.position}`) ? 'text-yellow-custom' : 'text-white'}`}
                    onClick={() => handlePositionClick(company.id, position.position, type)}
                  >
                    <h4 className="text-xl font-semibold hover:text-yellow-custom">
                      {position.position}
                    </h4>
                    {selectedPositions.has(`${type}-${company.id}-${position.position}`) && (
                      <>
                        <p className="text-yellow-custom italic mt-2">
                          {position.date}
                        </p>
                        <div
                          className="text-white mt-2"
                          dangerouslySetInnerHTML={{ __html: position.description }}
                        />
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section
      name="work"
      id="work"
      className="bg-[#000000] flex flex-col items-center pt-16 pb-8"
    >
      <div className="max-w-screen-lg mx-auto w-full px-8">
        <h2 className="text-4xl sm:text-7xl font-bold text-white mb-8 text-center ">
          Work <span className="text-yellow-custom">Experience</span>
        </h2>
        <h3 className="text-xl font-semibold text-white mb-8 text-center">
          Click on a company and a position to see more details!
        </h3>
        {renderExperience(workexp, 'work')}
        
      </div>
    </section>
  );
};

export default Work;
