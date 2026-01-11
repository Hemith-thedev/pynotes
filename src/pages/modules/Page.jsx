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
              <p>Modules are the files containing different <span className="highlight">functional modules</span> at a predefined library which is <span className="highlight">accessible</span> to both the <span className="highlight">programmers</span> as well as <span className="highlight">users</span>.</p>
            </li>
            <li>
              <p>Packages are considered as a <span className="highlight">collection of tools</span> that allows the programmer to initiate the code <span className="highlight">python packages</span> as variable interface for any source code.</p>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  const LookSection = () => {
    return (
      <section className="look-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Just have a look</h3>
          <ul>
            <li>
              <ul>
                <li>
                  <h5>File1.py</h5>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="orange">def</span> <span className="blue">costprice</span>(rate, qty):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;cp = rate * qty<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">return</span> cp<br />
                      <br />
                      <span className="orange">def</span> <span className="blue">discount</span>(cp):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;dis = (cp / 100) * 10<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">return</span> dis<br />
                      <br />
                      <span className="orange">def</span> <span className="blue">sellingprice</span>(cp, dis):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;sp = cp - dis<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">return</span> sp
                      <br />
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <h5>File2.py</h5>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="orange">import</span> File1 <span className="orange">as</span> f<br />
                      <br />
                      CP = f.costprice(2000, 5)<br />
                      DIS = f.discount(CP)<br />
                      SP = f.sellingprice(CP, DIS)<br />
                      <br />
                      <span className="purple">print</span>(<span className="green">f"Cost price: {"{"}CP{"}"}\nDiscount: {"{"}DIS{"}"}\nSelling price: {"{"}SP{"}"}"</span>)
                      <br />
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
            <li>
              <p><span className="highlight">Note:</span> Make sure you have both files in the same directory / folder.</p>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  const TryYourselfSection = () => {
    return (
      <section className="try-yourself-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Try yourself</h3>
          <ul>
            <li>
              <ul>
                <li>
                  <h5>NameFunctions.py</h5>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="orange">def</span> <span className="blue">firstname</span>(fn_string):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">return</span> fn_string<br />
                      <br />
                      <span className="orange">def</span> <span className="blue">lastname</span>(ln_string):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">return</span> ln_string<br />
                      <br />
                      <span className="orange">def</span> <span className="blue">fullname</span>(fn, ln):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;name = <span className="green">f"{"{"}fn{"}"} {"{"}ln{"}"}"</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">return</span> name
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <h5>NameProgram.py</h5>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="orange">import</span> NameFunctions <span className="orange">as</span> functions<br />
                      <br />
                      fn = <span className="purple">input</span>(<span className="green">"Enter your first name: "</span>)<br />
                      ln = <span className="purple">input</span>(<span className="green">"Enter your last name: "</span>)<br />
                      <br />
                      FN = functions.firstname(fn)<br />
                      LN = functions.lastname(ln)<br />
                      FULLNAME = functions.fullname(FN, LN)<br />
                      <br />
                      <span className="purple">print</span>(<span className="green">f"Your full name: {"{"}FULLNAME{"}"}"</span>)
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    );
  };
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
  const Sections = [< HeroSection />, <DefinitionSection />, <LookSection />, <TryYourselfSection />, <Divider />, <StepSection />];
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