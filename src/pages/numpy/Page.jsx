import Divider from "../../components/common/Divider";
import Navigator from "../../components/common/Navigator";

const Numpy = () => {
  const HeroSection = () => {
    return (
      <section className="hero-section section">
        <div className="wrapper">
          <h1>Numpy</h1>
        </div>
      </section>
    );
  };
  const DefinitionSection = () => {
    return (
      <section className="definition-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Definition</h3>
          <ul className="step">
            <li>
              <p>Numpy stands for <span className="highlight">numerical python</span>.</p>
            </li>
            <li>
              <p>One of the most <span className="highlight">useful libraries</span> in python.</p>
            </li>
            <li>
              <p>Supports <span className="highlight">large</span> & <span className="highlight">multi-dimensional</span> arrays & objects.</p>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  const InstallationSection = () => {
    return (
      <section className="installation-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Installation</h3>
          <ul className="step">
            <li>
              <p>Use this command to install numpy through command prompt.</p>
            </li>
            <li>
              <pre className="code-container">
                <code className="code-wrapper">
                  py -m pip install numpy
                </code>
              </pre>
            </li>
          </ul>
          <ul className="step">
            <li>
              <p>Navigate to this folder.</p>
            </li>
            <li>
              <pre className="code-container">
                <div className="head">
                  <p>Terminal</p>
                  <button type="button">Copy</button>
                </div>
                <code className="code-wrapper">
                  C:\Users\&lt;USER_NAME&gt;\AppData\Local\Programs\Python\Python&lt;VERSION&gt;\Lib\site-packages
                </code>
              </pre>
            </li>
            <li>
              <p>Check for folder <span className="highlight">numpy</span> exists.</p>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  const NpArraySection = () => {
    return (
      <section className="np-array-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">np / n-dimensional arrays</h3>
          <ul className="step">
            <li>
              <p>Stores elements of <span className="highlight">same type</span> & <span className="highlight">size</span>.</p>
            </li>
            <li>
              <p>Can be <span className="highlight">indexed</span> & <span className="highlight">sliced</span>.</p>
            </li>
            <li>
              <p>Known for its <span className="highlight">high performance</span>.</p>
            </li>
            <li>
              <p>Provides efficient <span className="highlight">data storage</span>.</p>
            </li>
            <li>
              <p><span className="highlight">Size changes</span> as operations are performed.</p>
            </li>
            <li>
              <ul>
                <li>
                  <h5>Example</h5>
                </li>
                <li>
                  <ul className="step">
                    <li>
                      <p><span className="highlight">One dimensional array</span></p>
                    </li>
                    <li>
                      <pre className="code-container">
                        <code className="code-wrapper">
                          <span className="green">a = np.array([1, 2, 3])</span>
                        </code>
                      </pre>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  const Sections = [<HeroSection />, <DefinitionSection />, <InstallationSection />, <NpArraySection />];
  return (
    <main className="numpy-page">
      {Sections.map(section => {
        return section;
      })}
    </main>
  )
};

export default Numpy;