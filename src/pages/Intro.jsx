import React from "react";

const Intro = () => {
  const HeroSection = () => {
    return (
      <section className="hero-section section">
        <div className="wrapper">
          <h1>Python</h1>
          <p>Object Oriented | Interactive</p>
        </div>
      </section>
    );
  };
  const DefinitionSection = () => {
    return (
      <section className="definition-section section">
        <div className="wrapper">
          <h2>What is Python?</h2>
          <p>
            Python is a popular programming language created by{" "}
            <span className="highlight">Guido Van Rossum</span> in{" "}
            <span className="highlight">1991</span>.
          </p>
          <p>
            Python source code is also available under the General Public
            License.
          </p>
        </div>
      </section>
    );
  };
  const FeaturesSection = () => {
    return (
      <section className="features-section section">
        <div className="wrapper">
          <h2>Features of Python</h2>
          <ul>
            <li>
              <p>
                Easy to <span className="highlight">learn</span>,{" "}
                <span className="highlight">read</span> &{" "}
                <span className="highlight">maintain</span>.
              </p>
            </li>
            <li>
              <p>
                It has <span className="highlight">large number of libraries</span>.
              </p>
            </li>
            <li>
              <p>
                Very <span className="highlight">portable</span>{" "}
                <span className="highlight">across platforms</span>
              </p>
            </li>
            <li>
              <p>
                Code is <span className="highlight">clearly defined</span> & <span className="highlight">well-structured</span>.
              </p>
            </li>
            <li>
              <p>
                <span className="highlight">Interpreted</span> &{" "}
                <span className="highlight">Dynamic</span> code
              </p>
            </li>
          </ul>
          <ul>
            <li>
              <p>
                <span className="highlight">Interactive:</span> Python has
                support for an interactive mode which allows{" "}
                <span className="highlight">interactive testing</span>.
              </p>
            </li>
            <li>
              <p>
                <span className="highlight">Portable:</span> Python can run a
                wide variety of{" "}
                <span className="highlight">hardware platform</span> & has the{" "}
                <span className="highlight">
                  same interface on all platform
                </span>
                .
              </p>
            </li>
            <li>
              <p>
                <span className="highlight">Extendable:</span> You can add{" "}
                <span className="highlight">Low-level modules</span> to the
                Python.
              </p>
            </li>
            <li>
              <p>
                <span className="highlight">Database:</span>Python provides
                interface to all{" "}
                <span className="highlight">major commercial database</span>.
              </p>
            </li>
            <li>
              <span className="highlight">GUI Programming:</span> Python support{" "}
              <span className="highlight">GUI Application</span> that acn be
              created & ported to many{" "}
              <span className="highlight">windows system of UNIX</span> (family
              of operating systems).
            </li>
          </ul>
        </div>
      </section>
    );
  };
  const Sections = [
    <HeroSection />,
    <DefinitionSection />,
    <FeaturesSection />,
  ];
  return (
    <main className="intro-page">
      {Sections.map((section) => {
        return section;
      })}
    </main>
  );
};

export default Intro;
