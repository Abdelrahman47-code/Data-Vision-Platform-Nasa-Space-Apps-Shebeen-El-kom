import React from 'react';
import { Link } from "react-router-dom";
import postImg1 from '../assets/images/kaggle.jpg'
import postImg3 from '../assets/images/unicef.jpg'
import postImg4 from '../assets/images/data_gov.jpg'
import postImg5 from '../assets/images/google_datasets.jpg'
import postImg6 from '../assets/images/census.jpg'
import postImg7 from '../assets/images/data_europa.jpg'
import postImg8 from '../assets/images/fred.png'
import postImg9 from '../assets/images/open_data.png'
import postImg10 from '../assets/images/factbook.jpg'
import postImg11 from '../assets/images/google_trends.png'
import postImg12 from '../assets/images/open_ai.png'
import postImg13 from '../assets/images/harvard.jpg'
import postImg14 from '../assets/images/nih.jpg'
import postImg15 from '../assets/images/nasa.jpg'
import postImg16 from '../assets/images/esa.png'
import postImg18 from '../assets/images/yahoo.jpg'
import postImg19 from '../assets/images/bls.jpg'
import postImg20 from '../assets/images/snap.png'
import postImg21 from '../assets/images/yelp.jpg'
import postImg22 from '../assets/images/redditinc.png'
import postImg23 from '../assets/images/cdc.jpg'
import postImg24 from '../assets/images/usda.jpg'
import postImg25 from '../assets/images/noaa.jpg'
import postImg26 from '../assets/images/pathfinder.png'
import postImg27 from '../assets/images/earthdata.jpg'
import postImg28 from '../assets/images/worldview.jpg'
import postImg29 from '../assets/images/usgs.png'
import postImg30 from '../assets/images/earthexplorer.jpg'
import postImg31 from '../assets/images/catalog.png'
import postImg32 from '../assets/images/eba.jpg'
import postImg33 from '../assets/images/geoplatform.png'
import postImg34 from '../assets/images/csa.jpg'
import postImg35 from '../assets/images/canda_portal.png'
import postImg36 from '../assets/images/eodms.png'
import postImg37 from '../assets/images/geo_ca.jpg'
import postImg38 from '../assets/images/cadc.jpg'

const DataSources = () => {
    const dataSources = [
        { name: 'Data Pathfinders', imageUrl: postImg26, url: 'https://www.earthdata.nasa.gov/learn/pathfinders' },    
        { name: 'Earthdata Search', imageUrl: postImg27, url: 'https://search.earthdata.nasa.gov/search' },   
        { name: 'NASA Worldview', imageUrl: postImg28, url: 'https://worldview.earthdata.nasa.gov/' },
        { name: 'Center for Disease Control (CDC)', imageUrl: postImg23, url: 'https://www.cdc.gov/' },    
        { name: 'US Department of Agriculture (USDA)', imageUrl: postImg24, url: 'https://www.usda.gov/' },   
        { name: 'National Oceanic and Atmospheric Administration (NOAA)', imageUrl: postImg25, url: 'https://www.noaa.gov/' },
        { name: 'United States Geological Survey (USGS) Geo Data Portal', imageUrl: postImg29, url: 'https://labs.waterdata.usgs.gov/gdp_web/' },
        { name: 'USGS EarthExplorer', imageUrl: postImg30, url: 'https://earthexplorer.usgs.gov/' },
        { name: 'USGS Science Data Catalog', imageUrl: postImg31, url: 'https://data.usgs.gov/datacatalog/' },
        { name: 'National Institutes of Health (NIH)', imageUrl: postImg14, url: 'https://hdpulse.nimhd.nih.gov/' },
        { name: 'Environmental Protection Agency (EPA)', imageUrl: postImg32, url: 'https://www.epa.gov/data/data-catalogs' },
        { name: 'DATA.GOV', imageUrl: postImg4, url: 'https://data.gov/' },
        { name: 'GeoPlatform', imageUrl: postImg33, url: 'https://www.geoplatform.gov/' },
        { name: 'Canadian Space Agency Open Data Portal', imageUrl: postImg34, url: 'https://donnees-data.asc-csa.gc.ca/en/dataset/' },
        { name: 'Government of Canada Open Data Portal', imageUrl: postImg35, url: 'https://donnees-data.asc-csa.gc.ca/en/dataset/0176458c-553b-48b4-a5e2-492022c81e85' },
        { name: 'Earth Observation Data Management System (EODMS)', imageUrl: postImg36, url: 'https://www.eodms-sgdot.nrcan-rncan.gc.ca/index-en.html' },
        { name: 'GEO.ca', imageUrl: postImg37, url: 'https://geo.ca/home/' },
        { name: 'Canadian Astronomy Data Center (CADC)', imageUrl: postImg38, url: 'https://www.cadc-ccda.hia-iha.nrc-cnrc.gc.ca/en/' },
        { name: 'Kaggle', imageUrl: postImg1, url: 'https://www.kaggle.com/datasets' },
        { name: 'Yahoo Finance!', imageUrl: postImg18, url: 'https://finance.yahoo.com/' },
        { name: 'UNICEF Data', imageUrl: postImg3, url: 'https://data.unicef.org/' },
        { name: 'Google Dataset Search', imageUrl: postImg5, url: 'https://datasetsearch.research.google.com/' },
        { name: 'U.S. Census Bureau', imageUrl: postImg6, url: 'https://www.census.gov/data.html' },
        { name: 'European Union Open Data Portal', imageUrl: postImg7, url: 'https://data.europa.eu/euodp/en/home' },
        { name: 'Federal Reserve Economic Data (FRED)', imageUrl: postImg8, url: 'https://fred.stlouisfed.org/' },
        { name: 'Amazon Web Services (AWS) Public Datasets', imageUrl: postImg9, url: 'https://registry.opendata.aws/' },
        { name: 'The World Factbook by CIA', imageUrl: postImg10, url: 'https://www.cia.gov/the-world-factbook/' },
        { name: 'Google Trends', imageUrl: postImg11, url: 'https://trends.google.com/trends/' },
        { name: 'OpenAI', imageUrl: postImg12, url: 'https://platform.openai.com/' },
        { name: 'Harvard Dataverse', imageUrl: postImg13, url: 'https://dataverse.harvard.edu/' },
        { name: 'Stanford Large Network Dataset Collection', imageUrl: postImg20, url: 'https://snap.stanford.edu/data/index.html' },
        { name: 'U.S. National Aeronautics and Space Administration (NASA) Open Data', imageUrl: postImg15, url: 'https://data.nasa.gov/' },
        { name: 'European Space Agency (ESA) Earth Observation Data', imageUrl: postImg16, url: 'https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Open_Access_Hub' },
        { name: 'Yelp Dataset', imageUrl: postImg21, url: 'https://www.yelp.com/dataset' },
        { name: 'Reddit API Data', imageUrl: postImg22, url: 'https://www.redditinc.com/policies/data-api-terms' },
        { name: 'U.S. Bureau of Labor Statistics (BLS)', imageUrl: postImg19, url: 'https://www.bls.gov/data/' },    
    ];
    
  return (
    <div className="suggested_section">
      <div className="container">
        <h1 className="section_head">
          Popular<span className="gradientText"> Data Sources</span>
        </h1>
        <div className="cards">
          {dataSources.map((datasource, index) => {
            return (
              <div className="card" key={index}>
                <Link to={datasource.url}>
                  <img src={datasource.imageUrl} alt={datasource.name} />
                </Link>
                <div className="text">
                  <Link to={datasource.url}>
                    <h2>{datasource.name}</h2>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DataSources;
