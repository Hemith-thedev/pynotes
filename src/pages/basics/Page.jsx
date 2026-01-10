import Divider from  "../../components/common/Divider";
import Navigator from "../../components/common/Navigator";

const Basics = () => {
  const HeroSection = () => {
    return (
      <section className="hero-section section">
        <div className="wrapper">
          <h1>Basics of Python</h1>
        </div>
      </section>
    );
  };
  const DatatypesSection = () => {
    return (
      <section className="dayatypes-section section">
        <div className="wrapper">
          <div>
            <h2 className="fill-primary-secondary">Datatypes</h2>
            <ul>
              <li>
                <p>Python has <span className="highlight">various standard dayatypes</span> that are used <span className="highlight">to define the operators</span>, possible on them.</p>
              </li>
              <li>
                <p>Datatypes are ued to define the <span className="highlight">type of the data</span> a variable is holding.</p>
              </li>
              <li>
                <p><span className="highlight">Ex-1:</span> A person's <span className="highlight">age</span> is stored as a <span className="highlight">numeric</span> value (<b>number</b>).</p>
              </li>
              <li>
                <p><span className="highlight">Ex-2:</span> His / her <span className="highlight">address</span> is stored  as an <span className="highlight">alphanumeric</span> value (<b>string</b>).</p>
              </li>
            </ul>
          </div>
          <div className="step">
            <h3><span className="fill-primary-secondary">Standard</span> Datatypes:</h3>
            <ul className="step">
              <li>
                <p>Numbers</p>
              </li>
              <li>
                <p>Strings</p>
              </li>
              <li>
                <p>List</p>
              </li>
              <li>
                <p>Tuple</p>
              </li>
              <li>
                <p>Dictionary</p>
              </li>
            </ul>
          </div>
          <div className="step">
            <h3><span className="fill-primary-secondary">Numeric</span> Datatypes:</h3>
            <ul className="step">
              <li>
                <p>Interger (int - only numbers)</p>
              </li>
              <li>
                <p>Long (long - long integers, onctal & hexa-decimal)</p>
              </li>
              <li>
                <p>Float (float - decimal)</p>
              </li>
              <li>
                <p>Complex (complex numbers)</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
  };
  const OperatorsSection = () => {
    return (
      <section className="operators-section section">
        <div className="wrapper">
          <div>
            <h2 className="fill-primary-secondary">Operators</h2>
            <ul>
              <li>
                <p>In Python, operators are used <span className="highlight">to perform specific operations</span> on variables and values:</p>
              </li>
              <li>
                <ul>
                  <li>
                    <p>Enabling data manipulation</p>
                  </li>
                  <li>
                    <p>Mathematical calculations</p>
                  </li>
                  <li>
                    <p>Comparisions</p>
                  </li>
                  <li>
                    <p>Controlling the flow of program</p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="step">
            <h3><span className="fill-primary-secondary">Arithmetic</span> operators:</h3>
            <ul className="step">
              <li>
                <p><span className="highlight">{"+"}</span> (Addition)</p>
              </li>
              <li>
                <p><span className="highlight">{"-"}</span> (Subtraction)</p>
              </li>
              <li>
                <p><span className="highlight">{"*"}</span> (Multiplication)</p>
              </li>
              <li>
                <p><span className="highlight">{"/"}</span> (Division - quotient)</p>
              </li>
              <li>
                <p><span className="highlight">{"%"}</span> (Modulus - reminder)</p>
              </li>
            </ul>
          </div>
          <div className="step">
            <h3><span className="fill-primary-secondary">Relational</span> operators:</h3>
            <ul className="step">
              <li>
                <p><span className="highlight">{"!="}</span> (Not equals to)</p>
              </li>
              <li>
                <p><span className="highlight">{">="}</span> (Greater than or equals to)</p>
              </li>
              <li>
                <p><span className="highlight">{"<="}</span> (Lesser than or equals to)</p>
              </li>
            </ul>
          </div>
          <div className="step">
            <h3><span className="fill-primary-secondary">Comparision</span> operators:</h3>
            <ul className="step">
              <li>
                <p><span className="highlight">{">"}</span> (Greater than)</p>
              </li>
              <li>
                <p><span className="highlight">{"<"}</span> (Lesser than)</p>
              </li>
              <li>
                <p><span className="highlight">{">="}</span> (Greater than or equals to)</p>
              </li>
              <li>
                <p><span className="highlight">{"<="}</span> (Lesser than or equals to)</p>
              </li>
            </ul>
          </div>
          <div className="step">
            <h3><span className="fill-primary-secondary">Logical</span> operators:</h3>
            <ul className="step">
              <li>
                <p><span className="highlight">{"and"}</span> (condition & condition)</p>
              </li>
              <li>
                <p><span className="highlight">{"or"}</span> (condition or condition)</p>
              </li>
              <li>
                <p><span className="highlight">{"not"}</span> (logical negation between conditions)</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  }
  const StepSection = () => {
    return (
      <section className="step-section space-between section">
        <div className="wrapper">
          <Navigator path={"/installation"} label={"Installation"} position={"left"} />
          <Navigator path={"/input-and-output-statements"} label={"Programs"} position={"right"} />
        </div>
      </section>
    );
  };
  const Sections = [<HeroSection />, <DatatypesSection />, <OperatorsSection />, <Divider />, <StepSection />];
  return (
    <main className="basics-page">
      {Sections.map((section) => {
        return section;
      })}
    </main>
  );
};

export default Basics;
