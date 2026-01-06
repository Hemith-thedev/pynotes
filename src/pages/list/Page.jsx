import Divider from "../../components/common/Divider";
import Navigator from "../../components/common/Navigator";

const List = () => {
  const HeroSection = () => {
    return (
      <section className="hero-section section">
        <div className="wrapper">
          <h1>List</h1>
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
              <p>List objects are the <span className="highlight">sequences list</span> in an ordered collection of items & are <span className="highlight">mutable</span>.</p>
            </li>
            <li>
              <p><span className="highlight">Mutable</span> - items can be added or removed</p>
            </li>
            <li>
              <p>Separated by <span className="highlight">commas</span></p>
            </li>
            <li>
              <p>Enclosed with <span className="highlight">square brackets</span> []</p>
            </li>
            <li>
              <h5>Example</h5>
            </li>
            <li>
              <pre className="code-container">
                <code className="code-wrapper">
                  cars = [<span className="green">"BMW"</span>, <span className="green">"Lamborghini"</span>, <span className="green">"Rolls Royce"</span>, <span className="green">"Dodge"</span>]
                </code>
              </pre>
            </li>
            <li>
              <h5>Iteration of all items</h5>
            </li>
            <li>
              <pre className="code-container">
                <code className="code-wrapper">
                  <span className="orange">for</span> car <span className="orange">in</span> cars:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(car)
                </code>
              </pre>
            </li>
            <li>
              <h5>Iteration using specific index</h5>
            </li>
            <li>
              <pre className="code-container">
                <code className="code-wrapper">
                  my_car = cars[0]<br />
                  <span className="purple">print</span>(<span className="green">"My car:"</span>, my_car)
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
          <Navigator path={"/tests/1"} label={"Test"} position={"left"} />
          <Navigator path={"/tuple"} label={"Tuple"} position={"right"} />
        </div>
      </section>
    );
  };
  const Sections = [<HeroSection />,<DefinitionSection />, <Divider />, <StepSection />];
  return (
    <main className="list-page">
      {
        Sections.map(section => {
          return section;
        })
      }
    </main>
  )
}

export default List;