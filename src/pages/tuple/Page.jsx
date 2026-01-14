import Divider from "../../components/common/Divider";
import Navigator from "../../components/common/Navigator";
import CodeContainer from "../../components/common/CodeContainer";

const Tuple = () => {
  const HeroSection = () => {
    return (
      <section className="hero-section section">
        <div className="wrapper">
          <h1>Tuple</h1>
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
              <p>Tuples are used to store multiple items in a single variable & are <span className="highlight">immutable</span>.</p>
            </li>
            <li>
              <p><span className="highlight">Immutable</span> - cannot be able add or remove items</p>
            </li>
            <li>
              <p>Separated by <span className="highlight">commas</span></p>
            </li>
            <li>
              <p>Enclosed with <span className="highlight">round brackets</span> ()</p>
            </li>
            <li>
              <h5>Example</h5>
            </li>
            <li>
              <CodeContainer id={"code-container-1"} hasHead={true} hasCopyFunction={true} codeType="python" Code={
                <>
                  flowers = (<span className="green">"Rose"</span>, <span className="green">"Dandelion"</span>, <span className="green">"Hibiscus"</span>, <span className="green">"Lotus"</span>)
                </>
              } />
            </li>
            <li>
              <h5>Iteration of all items</h5>
            </li>
            <li>
              <CodeContainer id={"code-container-1"} hasHead={true} hasCopyFunction={true} codeType="python" Code={
                <>
                  <span className="orange">for</span> flower <span className="orange">in</span> flowers:<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(flower)
                </>
              } />
            </li>
            <li>
              <h5>Iteration using specific index</h5>
            </li>
            <li>
              <CodeContainer id={"code-container-1"} hasHead={true} hasCopyFunction={true} codeType="python" Code={
                <>
                  my_flower = flowers[2]<br />
                  <span className="purple">print</span>(<span className="green">"My flower:"</span>, my_flower)
                </>
              } />
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
          <Navigator path={"/list"} label={"List"} position={"left"} />
          <Navigator path={"/dictionary"} label={"Dictionary"} position={"right"} />
        </div>
      </section>
    );
  };
  const Sections = [<HeroSection />, <DefinitionSection />, <Divider />, <StepSection />];
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

export default Tuple;