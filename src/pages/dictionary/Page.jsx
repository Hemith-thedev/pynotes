import Divider from "../../components/common/Divider";
import Navigator from "../../components/common/Navigator";

const Dictionary = () => {
  const HeroSection = () => {
    return (
      <section className="hero-section section">
        <div className="wrapper">
          <h1>Dictionary</h1>
        </div>
      </section>
    )
  }
  const DefinitionSection = () => {
    return (
      <section className="definition-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Definition</h3>
          <ul>
            <li>
              <p>An unordered collection of items & are <span className="highlight">mutable</span></p>
            </li>
            <li>
              <p><span className="highlight">Mutable</span> - item can be added or removed</p>
            </li>
            <li>
              <p>Paired by <span className="highlight">key: value</span></p>
            </li>
            <li>
              <p>Separated by <span className="highlight">commas</span></p>
            </li>
            <li>
              <p>Enclosed with <span className="highlight">curley brackets</span> {"{}"}</p>
            </li>
            <li>
              <h5>Example</h5>
            </li>
            <li>
              <pre className="code-container">
                <code className="code-wrapper">
                  student = {"{"}<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"name"</span>: <span className="green">"John"</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"age"</span>: 20,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"gender"</span>: <span className="green">"Male"</span><br />
                  {"}"}
                </code>
              </pre>
            </li>
            <li>
              <h5>Iteration of all keys & values</h5>
            </li>
            <li>
              <pre className="code-container">
                <code className="code-wrapper">
                  <span className="orange">for</span> key, value <span className="orange">in</span> student.items():<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"key: "</span>, key, <span className="green">", value: "</span>, value)
                </code>
              </pre>
            </li>
            <li>
              <h5>Iteration using specific key</h5>
            </li>
            <li>
              <pre className="code-container">
                <code className="code-wrapper">
                  student_age = student[<span className="green">"age"</span>]<br />
                  <span className="purple">print</span>(<span className="green">"Student's age:"</span>, <span className="purple">str</span>(student_age))
                </code>
              </pre>
            </li>
          </ul>
        </div>
      </section>
    )
  }
  const StepSection = () => {
    return (
      <section className="step-section space-between section">
        <div className="wrapper">
          <Navigator path={"/tuple"} label={"Tuple"} position={"left"} />
          <Navigator path={"/list"} label={"List"} position={"right"} />
        </div>
      </section>
    );
  };
  const Sections = [<HeroSection />,<DefinitionSection />, <Divider />, <StepSection />];
  return (
    <main className="tuple-page">
      {
        Sections.map(section => {
          return section;
        })
      }
    </main>
  )
}

export default Dictionary;