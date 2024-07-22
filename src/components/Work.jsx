import React, { useState } from 'react';
import { workexp } from '../data/workexp'; // Update this path based on where you store workexp

const Work = () => {
  const [selectedCompanies, setSelectedCompanies] = useState(new Set());
  const [selectedPositions, setSelectedPositions] = useState(new Set());

  const handleCompanyClick = (id) => {
    const newSelectedCompanies = new Set(selectedCompanies);
    if (newSelectedCompanies.has(id)) {
      newSelectedCompanies.delete(id);
    } else {
      newSelectedCompanies.add(id);
    }
    setSelectedCompanies(newSelectedCompanies);
  };

  const handlePositionClick = (companyId, position) => {
    const newSelectedPositions = new Set(selectedPositions);
    const key = `${companyId}-${position}`;
    if (newSelectedPositions.has(key)) {
      newSelectedPositions.delete(key);
    } else {
      newSelectedPositions.add(key);
    }
    setSelectedPositions(newSelectedPositions);
  };

  return (
    <div
      name="work"
      id="work"
      className="h-screen w-full bg-[#000000] flex items-center justify-center pt-16 pb-8"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center w-full px-8 py-16">
        <h2 className="text-4xl sm:text-7xl font-bold text-white mb-8">
          Work <span className="text-yellow-custom">Experience</span>
        </h2>

        {workexp.map((company) => (
          <div
            key={company.id}
            className={`mb-8 w-full border-2 ${selectedCompanies.has(company.id) ? 'border-yellow-custom' : 'border-gray-500'} p-4 rounded-lg`}
          >
            <div
              className="flex items-center cursor-pointer"
              onClick={() => handleCompanyClick(company.id)}
            >
              <img
                src={company.logo}
                alt={company.company}
                className="h-12 w-12 rounded-full bg-white border border-gray-300 mr-4" // Circular with white background
              />
              <h3 className="text-2xl font-bold text-white">
                {company.company}
              </h3>
            </div>

            {selectedCompanies.has(company.id) && (
              <div className="mt-4 pl-16">
                {company.positionslist.length === 1 ? (
                  <div
                    className={`cursor-pointer ${selectedPositions.has(`${company.id}-${company.positionslist[0].position}`) ? 'text-yellow-custom' : 'text-white'}`}
                    onClick={() => handlePositionClick(company.id, company.positionslist[0].position)}
                  >
                    <h4 className="text-xl font-semibold">
                      {company.positionslist[0].position}
                    </h4>
                    {selectedPositions.has(`${company.id}-${company.positionslist[0].position}`) && (
                      <>
                        <p className="text-yellow-custom italic mt-2">
                          {company.positionslist[0].date}
                        </p>
                        <div
                          className="text-white mt-2"
                          dangerouslySetInnerHTML={{ __html: company.positionslist[0].description }}
                        />
                      </>
                    )}
                  </div>
                ) : (
                  company.positionslist.map((position, index) => (
                    <div key={index} className="mb-4">
                      <div
                        className={`cursor-pointer ${selectedPositions.has(`${company.id}-${position.position}`) ? 'text-yellow-custom' : 'text-white'}`}
                        onClick={() => handlePositionClick(company.id, position.position)}
                      >
                        <h4 className="text-xl font-semibold">
                          {position.position}
                        </h4>
                        {selectedPositions.has(`${company.id}-${position.position}`) && (
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
                  ))
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
