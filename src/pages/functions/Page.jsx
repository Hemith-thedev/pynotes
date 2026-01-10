import Divider from "../../components/common/Divider";
import Navigator from "../../components/common/Navigator";

const Functions = () => {
  const HeroSection = () => {
    return (
      <section className="hero-section">
        <div className="wrapper">
          <h1>Functions</h1>
        </div>
      </section>
    );
  };
  const DefinitionSection = () => {
    return (
      <section className="definition-section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Definition</h3>
          <ul className="step">
            <li>
              <p>
                A function is a block of code that is executed when it is called.
              </p>
            </li>
            <li>
              <p>
                Accept <span className="highlight">parameters</span> and
                <span className="highlight"> return values</span>.
              </p>
            </li>
            <li>
              <p>
                Can be <span className="highlight">defined</span> once, but can be <span className="highlight">called</span> multiple times.
              </p>
            </li>
            <li>
              <p>
                They can be <span className="highlight">nested</span> within other functions.
              </p>
            </li>
          </ul>
          <h3 className="fill-primary-secondary">Rules of Functions</h3>
          <ul className="step">
            <li>
              <p>Use <span className="highlight">'def'</span> keyword to <span className="highlight">define</span> a function.</p>
            </li>
            <li>
              <p><span className="highlight">Duplication</span> of function is <span className="highlight">not allowed</span></p>
            </li>
            <li>
              <p><span className="highlight">Variable</span> inside a function is <span className="highlight">local</span> to the function (local scope).</p>
            </li>
            <li>
              <p><span className="highlight">Variable</span> outside a function is <span className="highlight">global</span> to the function (global scope).</p>
            </li>
            <li>
              <p><span className="highlight">Values</span> can be <span className="highlight">passed</span> from function-to-function.</p>
            </li>
            <li>
              <p>Functions that recieving <span className="highlight">arguments</span> are called <span className="highlight">parameters</span>.</p>
            </li>
            <li>
              <p>Funcitions can send <span className="highlight">any no.of parameters</span> but can only have <span className="highlight">one return value</span>.</p>
            </li>
          </ul>
          <h3 className="fill-primary-secondary">Example</h3>
          <ul>
            <li>
              <pre className="code-container">
                <code className="code-wrapper">
                  <span className="red"># 1. Initializing function named 'printData' with parameter 'data'</span><br />
                  <span className="orange">def</span> <span className="blue">printData</span>(data):<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># 2. Print the variable value</span><br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(data)<br />
                  <br />
                  <span className="red"># 3. Variable holding a string</span><br />
                  my_string = <span className="green">"Hello world!"</span><br />
                  <br />
                  <span className="red"># 4. Calling the function by passing the string as parameter</span><br />
                  printData(my_string)
                </code>
              </pre>
            </li>
            <li>
              <p>This program will print the <span className="highlight">data you pass</span> in the function.</p>
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
          <ul className="step">
            <li className="margin-bottom">
              <ul>
                <li>
                  <p>
                    Q. Python code to create a function & call it.
                  </p>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="orange">def</span> <span className="blue">myFunction</span>():<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"This function is called!"</span>)<br />
                      <br />
                      myFunction()
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <p>
                    Q. Python code to create a function by passing a parameter & call it.
                  </p>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="orange">def</span> <span className="blue">myParamFunction</span>(param):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">f"Parameter: {"{"}param{"}"}"</span>)<br />
                      <br />
                      myParamFunction(<span className="green">"Hello world!"</span>)
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    )
  }
  const TryYourselfSection = () => {
    return (
      <section className="try-yourself-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Try yourself</h3>
          <ul className="step">
            <li className="margin-bottom">
              <ul>
                <li>
                  <p>Q. Python code to <span className="highlight">greet</span> the user by reading his/her name using function.</p>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="orange">def</span> <span className="blue">greet</span>(name):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">f"Hello {"{"}name{"}"}, how are you doing?"</span>)<br />
                      <br />
                      username = <span className="purple">str</span>(<span className="purple">input</span>(<span className="green">"Enter your name: "</span>))<br />
                      greet(username)
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
            <li className="margin-bottom">
              <ul>
                <li>
                  <p>Q. Python code to <span className="highlight">print</span> sum by reading two numbers using function.</p>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="orange">def</span> <span className="blue">add</span>(a, b):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;c = a + b<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">f"Sum: {"{"}c{"}"}"</span>)<br />
                      <br />
                      a = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter first number: "</span>))<br />
                      b = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter second number: "</span>))<br />
                      add(a, b)
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <p>Q. Python code to <span className="highlight">print</span> cube of a number using function.</p>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="orange">def</span> <span className="blue">squareOf</span>(num):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;squ = num * num<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">return</span> squ<br />
                      <br />
                      a = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter a number: "</span>))<br />
                      square = squareOf(a)<br />
                      <br />
                      <span className="purple">print</span>(<span className="green">f"Square of given number: {"{"}square{"}"}"</span>)
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
          <Navigator path={"/dictionary"} label={"Dictionary"} position={"left"} />
          <Navigator path={"/modules"} label={"Modules"} position={"right"} />
        </div>
      </section>
    )
  }
  const Sections = [<HeroSection />, <DefinitionSection />, <LookSection />, <TryYourselfSection />, <Divider />, <StepSection />];
  return (
    <main className="functions-page">
      {
        Sections.map(section => {
          return section;
        })
      }
    </main>
  )
}

export default Functions;