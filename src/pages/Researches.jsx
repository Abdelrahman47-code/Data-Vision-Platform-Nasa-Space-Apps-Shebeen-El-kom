import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import "../assets/css/researchesPage.css";
import postImg1 from '../assets/images/research1.jpg'
import postImg2 from '../assets/images/research2.jpg'
import postImg3 from '../assets/images/research3.jpg'
import postImg4 from '../assets/images/research4.jpg'
import postImg5 from '../assets/images/research5.jpg'
import postImg6 from '../assets/images/research6.jpg'
// import postImg7 from '../assets/images/research7.jpg'
// import postImg8 from '../assets/images/research8.jpg'
// import postImg9 from '../assets/images/research9.jpg'
// import postImg10 from '../assets/images/research10.jpg'
// import postImg11 from '../assets/images/research11.jpg'
// import postImg12 from '../assets/images/research12.jpg'
// import postImg13 from '../assets/images/research13.jpg'
// import postImg14 from '../assets/images/research14.jpg'
// import postImg15 from '../assets/images/research15.jpg'
// import postImg16 from '../assets/images/research16.jpg'
// import postImg17 from '../assets/images/research17.jpg'
// import postImg18 from '../assets/images/research18.jpg'
// import postImg19 from '../assets/images/research19.jpg'
// import postImg20 from '../assets/images/research20.jpg'

const scientificResearches = [
    {
      category: 'Artificial Intelligence and Machine Learning',
      img: postImg1,
      title: 'Human-centered artificial intelligence and machine learning',
      author: 'Mark O. Riedl',
      date: '07 February 2019',
      url: 'https://onlinelibrary.wiley.com/doi/full/10.1002/smll.202001883'
    },
    {
      category: 'Artificial Intelligence and Machine Learning',
      img: postImg2,
      title: 'Artificial Intelligence and Machine Learning Applications in Smart Production: Progress, Trends, and Directions',
      author: 'David A. Winkler',
      date: '15 June 2020',
      url: 'https://onlinelibrary.wiley.com/doi/full/10.1002/hbe2.117'
    },
    {
      category: 'Climate Change and Environmental Science',
      img: postImg3,
      title: 'Climate Change and Society: Sociological Perspectives',
      author: 'Riley E. Dunlap, Robert J. Brulle',
      date: '14 September 2015',
      url: "https://books.google.com.eg/books?hl=en&lr=&id=bTlKCgAAQBAJ&oi=fnd&pg=PP1&dq=%27Climate+Change+and+Environmental+Science%27&ots=c08CMAdzsj&sig=WKIuS10767OZXslOg5o8etpZ_ag&redir_esc=y#v=onepage&q='Climate%20Change%20and%20Environmental%20Science'&f=false"
    },
    {
      category: 'Health and Medicine',
      img: postImg4,
      title: "Women's bodies: a social history of women's encounter with health, ill-health and medicine",
      author: 'Edward Shorter',
      date: '12 Jan 2017',
      url: 'https://books.google.com.eg/books?hl=en&lr=&id=hzIrDwAAQBAJ&oi=fnd&pg=PP1&dq=Health+and+Medicine&ots=at0a0UTG5P&sig=sc80e13S33YJ_Xw7MLkwMG8DpDw&redir_esc=y#v=onepage&q=Health%20and%20Medicine&f=false'
    },    
    {
      category: 'Biotechnology and Genetics',
      img: postImg5,
      title: 'Biotechnology and genetic engineering: students knowledge and attitudes',
      author: 'Roger Lock &Colin Miles',
      date: '13 Dec 2010',
      url: 'https://www.tandfonline.com/doi/abs/10.1080/00219266.1993.9655347'
    },
    {
      category: 'Space Exploration and Astronomy',
      img: postImg6,
      title: 'A Study on Embedding the Artificial Intelligence and Machine Learning into Space Exploration and Astronomy',
      author: 'Jaya Preethi Mohan & N. Tejaswi',
      date: '07 November 2019',
      url: 'https://link.springer.com/chapter/10.1007/978-3-030-32150-5_131'
    },    
    // {
    //   category: 'Biotechnology and Genetics',
    // //   img: postImg7,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },
    // {
    //   category: 'Biotechnology and Genetics',
    // //   img: postImg8,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },
    // {
    //   category: 'Cybersecurity and Information Security',
    // //   img: postImg9,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },
    // {
    //   category: 'Cybersecurity and Information Security',
    // //   img: postImg10,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },    
    // {
    //   category: 'Cybersecurity and Information Security',
    // //   img: postImg11,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },
    // {
    //   category: 'Space Exploration and Astronomy',
    // //   img: postImg12,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },    
    // {
    //   category: 'Health and Medicine',
    // //   img: postImg13,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },
    // {
    //   category: 'Health and Medicine',
    // //   img: postImg14,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },
    // {
    //   category: 'Neuroscience and Brain Research',
    // //   img: postImg15,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },
    // {
    //   category: "Renewable Energy and Sustainability",
    // //   img: postImg16,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },    
    // {
    //   category: "Renewable Energy and Sustainability",
    // //   img: postImg17,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },
    // {
    //   category: "Renewable Energy and Sustainability",
    // //   img: postImg18,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },    
    // {
    //   category: "Materials Science and Nanotechnology",
    // //   img: postImg19,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },
    // {
    //   category: "Materials Science and Nanotechnology",
    // //   img: postImg20,
    //   title: 'Research Title 1',
    //   author: 'Author 1',
    //   date: '2023-10-01',
    //   url: ''
    // },    
];

const categories = [
    "All Categories",
    "Space Exploration and Astronomy",
    "Artificial Intelligence and Machine Learning",
    "Climate Change and Environmental Science",
    "Health and Medicine",
    "Biotechnology and Genetics",
    "Renewable Energy and Sustainability",
    "Quantum Computing and Technology",
    "Cybersecurity and Information Security",
    "Neuroscience and Brain Research",
    "Materials Science and Nanotechnology"
  ];
  

const Researches = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredResearches = scientificResearches.filter(
    (research) => !selectedCategory || research.category === selectedCategory
  );

  return (
    <div className="researches">
      <h1 className="section_head">
        Popular<span className="gradientText"> Scientific Researches</span>
      </h1>
      <div className="category-dropdown">
        <label htmlFor="category">Select Category:</label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div className="cards">
        {filteredResearches.map((research, index) => (
        <div className="card" key={index}>
            <Link to={research.url}>
                <img src={research.img} alt={research.title} />
            </Link>
        <div className="text">
            <h2>{research.title}</h2>
            <p>Author: {research.author}</p>
            <p>Date: {research.date}</p>
        </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Researches;
