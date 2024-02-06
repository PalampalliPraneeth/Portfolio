import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Nagarajan Haridas",
      title: "Assistant Director at EY",
      img:
        "assets/EY.png",
      icon: "assets/linkedin.png",
      desc:
        "Praneeth joined as a fresher in 2022 but has scaled up really well and contributed towards security findings in our existing landscape. He took the ownership of the entire Security vulnerabilities for PAANS and closed it successfully on time. He worked closely with the Qualys, CheckMarx and WhiteSource teams for this.",
    },
    {
      id: 2,
      name: "Rahul Gupta",
      title: "Associate Director at EY",
      img:
        "assets/EY.png",
      icon: "assets/linkedin.png",
      desc:
        "Praneeth joined PAANS as an developer, He demonstrated exceptional efficiency by completing major Microsoft certifications within a short timeframe. His ability to swiftly transition between various technologies, including React, SQL, and Power BI, showcases his versatility and dedication. Keep up the good work",
      featured: true,
      // url:"https://www.linkedin.com/in/bitsrahul/"
    },
    {
      id: 3,
      name: "Mahadev Vijaykumar Hiremath",
      title: "Lead Developer at EY",
      img:
        "assets/EY.png",
      icon: "assets/linkedin.png",
      desc:
        "Praneeth is new to React, but he learnt the technology soon and utilized some of his learning in assigned task and meet the deliverable requirements. He has good grasping power",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              {/* <img src="assets/right-arrow.png" className="left" alt="" /> */}
              <img className="user" src={d.img} alt=""/>
              {/* <a src={d.URL}> */}
              {/* <img className="right" src={d.icon} alt=""/> */}
              {/* </a> */}
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
