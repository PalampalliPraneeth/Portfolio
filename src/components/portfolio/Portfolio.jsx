import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import {
  featuredPortfolio,
  webPortfolio,
  dataPortfolio
} from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("featured");
  const [data, setData] = useState([]);
  const [hovered, setHovered] = useState(null);  
  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },
    {
      id: "data",
      title: "Data Analytics",
    },
    // {
    //   id: "design",
    //   title: "Design",
    // },
    // {
    //   id: "content",
    //   title: "Content",
    // },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "data":
        setData(dataPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Projects</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
      {data.map((d) => (
        <div 
          className="item"
          key={d.id}
          onMouseEnter={() => setHovered(d.id)}
          onMouseLeave={() => setHovered(null)}  
        >
          <a href={d.url} target="_blank" rel="noopener noreferrer">
            <img src={d.img} alt="" />  
          </a>
          {hovered === d.id && <h3>{d.title}</h3>}
        </div>
        ))}
      </div>
    </div>
  );
}
