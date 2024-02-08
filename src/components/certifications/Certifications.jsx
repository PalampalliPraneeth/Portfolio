import React from 'react';
import './certifications.scss';

const badges = [
  {
    title: 'AZ-104 Azure Administrator Associate',
    image: 'assets/azure_administrator.svg',
    url: 'https://www.credly.com/badges/328f036d-bf40-4e78-9277-6400b96e75a4/public_url'
  },
  { 
    title: 'AI-900 Azure AI Fundamentals',
    image: 'assets/azure_ai_fundamentals.png',
    url: 'https://www.credly.com/badges/b0b49d3b-e01d-4b3d-86b5-e77572c5a1b6/public_url'
  },
  { 
    title: 'DP-900 Azure Data Fundamentals',
    image: 'assets/azure_data_fundamentals.png',
    url: 'https://www.credly.com/badges/25a600e8-3bc4-4095-b48c-2c2f50308fe0/public_url'
  },
  { 
    title: 'AZ-900 Azure Fundamentals',
    image: 'assets/azure_fundamentals.png',
    url: 'https://www.credly.com/badges/ddc47049-040e-4dc9-9377-774afdcdde7b/public_url'
  },
  { 
    title: 'PL-900 Power Platform Fundamentals',
    image: 'assets/power_platform.png',
    url: 'https://www.credly.com/badges/e8f85ec0-06b5-4941-9875-3d68cc8a4de5/public_url'
  },
  { 
    title: 'Get Started with Tableau',
    image: 'assets/start.png',
    url: 'https://www.credly.com/badges/4bbef56a-e019-44c3-9109-bf45c1a438b7/public_url'
  },
  { 
    title: 'Create Views and Dashboards',
    image: 'assets/create.png',
    url: 'https://www.credly.com/badges/d2d606ce-20b3-4fcf-aab5-acb733e5ee07/public_url'
  },
  { 
    title: 'Explore and Analyze Data',
    image: 'assets/explore.png',
    url: 'https://www.credly.com/badges/2671ad39-688d-4615-900b-1b4c68ab07aa/public_url'
  },
  { 
    title: 'Connect to and Transform Data',
    image: 'assets/transform.png',
    url: 'https://www.credly.com/badges/0e2b0fbd-1555-4549-8ad0-d5e6921c6934/public_url'
  },
  { 
    title: 'Programming for Everybody(Getting Started with Python)',
    image: 'assets/python_coursera.png',
    url: 'https://coursera.org/share/d9a792279ffc8f2885e14b80e3ef45e7'
  },
  { 
    title: 'Data Science for Engineers',
    image: 'assets/nptel.png',
  }
];

const Certifications = () => {
  return (
    <div className="badges" id='certifications'>
      <h1>Certifications</h1>
      <div className="badge-rows">
        {badges.map((badge, index) => (
          <div className="badge" key={index}>
            <img src={badge.image} alt={badge.title}/>
            <a href={badge.url} target="_blank" rel="noopener noreferrer" className="link">
              <h3 className="title">{badge.title}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
