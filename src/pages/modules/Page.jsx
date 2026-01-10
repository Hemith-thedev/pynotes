import Divider from "../../components/common/Divider";
import Navigator from "../../components/common/Navigator";

const Modules = () => {
  const HeroSection = () => {
    return (
      <section className="hero-section section">
        <div className="wrapper">
          <h1>Modules</h1>
        </div>
      </section>
    );
  };
  const DefinitionSection = () => {
    return (
      <section className="definition-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Definition</h3>
          <ul>
            <li>
              <p>Modules are the files containing different functional modules at a predefined library which is accessible to boththe programmers as well as users.</p>
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
          <Navigator path={"/functions"} label={"Functions"} position={"left"} />
          <Navigator path={"/numpy"} label={"Numpy"} position={"right"} />
        </div>
      </section>
    );
  };
  const Sections = [< HeroSection />, <DefinitionSection />, <Divider />, <StepSection />];
  return (
    <main className="modules-page">
      {
        Sections.map(section => {
          return section;
        })
      }
    </main>
  )
}

export default Modules;