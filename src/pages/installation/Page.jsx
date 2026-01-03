import "./Style.css";

import { useNavigate } from "react-router-dom";

const Installation = () => {
  const navigate = useNavigate();
  const HeroSection = () => {
    return (
      <section className="definition-section section">
        <div className="wrapper">
          <h1>Installation of Python</h1>
        </div>
      </section>
    );
  };
  const InstructionsSection = () => {
    return (
      <section className="instructions-section section">
        <div className="wrapper">
          <ul>
            <li>
              <p>
                <span className="highlight">Step - 1:</span> Search for{" "}
                <span className="highlight">'python.org'</span> in any web browser.
              </p>
            </li>
            <li>
              <p>
                <span className="highlight">Step - 2:</span> Place your mouse on{" "}
                <span className="highlight">'Downloads'</span> tab & select the <span className="highlight">'standalone installer'</span>, this will
                download <span className="highlight">'Python installer'</span>.
              </p>
              <div className="image-wrapper">
                <img
                  src="images/installation/1.png"
                  alt="Installation image 1"
                />
              </div>
            </li>
            <li>
              <p>
                <span className="highlight">Step - 3:</span> After the download,
                open the installer & check the <span className="highlight">'Add pthon.exe to PATH'</span>.
              </p>
              <p>
                <span className="highlight">Note:</span> Checking this box
                allows you to <span className="highlight">run</span> your python file in the <span className="highlight">Command prompt /
                Powershell</span>.
              </p>
              <div className="image-wrapper">
                <img
                  src="images/installation/2.png"
                  alt="Installation image 2"
                />
              </div>
            </li>
            <li>
              <p>
                <span className="highlight">Step - 4:</span> Now, python is{" "}
                <span className="highlight">successfully installed</span> in your PC. Click <span className="highlight">'Close'</span>.
              </p>
              <div className="image-wrapper">
                <img
                  src="images/installation/3.png"
                  alt="Installation image 3"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  const StepSection = () => {
    return (
      <section className="step-sections section">
        <div className="wrapper">
          <button className="primary" onClick={() => navigate("/")}>
            {"<"} Introduction
          </button>
          <button className="primary" onClick={() => navigate("/basics")}>
            Basics {">"}
          </button>
        </div>
      </section>
    );
  };
  const Sections = [<HeroSection />, <InstructionsSection />, <StepSection />];
  return (
    <main className="installation-page">
      {Sections.map((section) => {
        return section;
      })}
    </main>
  );
};

export default Installation;
