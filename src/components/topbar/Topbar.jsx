import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  const handleDownloadResume = () => {
    // Replace "resume.pdf" with the actual path to your resume PDF file
    const resumePath = "assets/Resume.pdf";

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "PraneethKumarReddy.pdf";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger the click event on the link
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Portfolio.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+716 306 9932</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:ppalampa@buffalo.edu" className="email">ppalampa@buffalo.edu</a>
          </div>
          <div className="itemContainer">
          <input
            type="button"
            className="downloadButton"
            value="Resume"
            onClick={handleDownloadResume}
          />
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
