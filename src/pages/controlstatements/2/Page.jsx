import Divider from "../../../components/common/Divider";
import Navigator from "../../../components/common/Navigator";

import { useNavigate } from "react-router-dom";

const LoopingControlStatements = () => {
  const navigate = useNavigate();
  const HeroSection = () => {
    return (
      <section className="hero-section section">
        <div className="wrapper">
          <h1>Control Statements</h1>
        </div>
      </section>
    );
  };
  const Looping = () => {
    return (
      <section className="info-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Looping</h3>
          <ul className="step">
            <li>
              <p>Used to <span className="highlight">repeatedly execute</span> a block of code until a <span className="highlight">specific condition is met</span> for each item in a sequence.</p>
            </li>
            <li>
              <h5>Types of looping:</h5>
              <ul className="step">
                <li>
                  <p><span className="highlight">for</span> loop - enters the loop first then checks the condition</p>
                </li>
                <li>
                  <p><span className="highlight">while</span> loop - checks the condition first and enters the loop</p>
                </li>
              </ul>
              <h5>Syntaxes</h5>
              <ul className="step">
                <li>
                  <ul>
                    <li>
                      <p><span className="highlight">For loop</span></p>
                    </li>
                    <li>
                      <pre className="code-container">
                        <code className="code-wrapper">
                          <span className="red"># ir - initializing range</span><br />
                          <span className="red"># er - ending range</span><br />
                          <span className="red"># sr - skipping range</span><br />
                          <span className="orange">for</span> var <span className="orange">in</span> <span className="purple">range</span>(ir, er + 1, sr):<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;statements
                        </code>
                      </pre>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <p><span className="highlight">While loop</span></p>
                    </li>
                    <li>
                      <pre className="code-container">
                        <code className="code-wrapper">
                          <span className="orange">while</span> condition:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;statements
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
  const LoopingLookSection = () => {
    return (
      <section className="look-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Just have a look</h3>
          <ul>
            <li>
              <ul>
                <li>
                  <p>Q. Python code to print numbers from <span className="highlight">1 - 10</span> using 'for' loop</p>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="red"># 1. Implement for loop</span><br />
                      <span className="orange">for</span> count <span className="orange">in</span> <span className="purple">range</span>(1, 11, 1):<br />
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># 2. Print the varible value</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(count)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># 3. Increment the varible value by 1</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;count += 1
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <p>Q. Python code to print numbers from <span className="highlight">10 - 1</span> using 'while' loop</p>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="red"># 1. Initialize a variable</span><br />
                      count = 10<br />
                      <br />
                      <span className="red"># 2. Implement while loop</span><br />
                      <span className="orange">while</span> count &gt;= 1:<br />
                      <br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># 3. Print the varible value</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(count)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># 4. Decrement the variable by 1</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;count -= 1
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
  const LoopingCodingTimeSection = () => {
    return (
      <section className="look-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Try yourself</h3>
          <ul>
            <li>
              <ul>
                <li>
                  <p>Q. Python code to read two number and print numbers <span className="highlight">between</span> them using for loop.</p>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="red"># Reading - input</span><br />
                      a = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter first number: "</span>))<br />
                      b = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter second number: "</span>))<br />
                      <br />
                      <span className="red"># Printing - output</span><br />
                      <span className="orange">for</span> i <span className="orange">in</span> <span className="purple">range</span>(a + 1 , b, 1):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(i)
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <p>Q. Python code to read two number and print numbers <span className="highlight">between</span> them using while loop.</p>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="red"># Reading - input</span><br />
                      a = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter first number: "</span>))<br />
                      b = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter second number: "</span>))<br />
                      <br />
                      <span className="red"># Printing - output</span><br />
                      <span className="orange">while</span> a &lt; b:<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(a + 1)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;a += 1<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">if</span> (a == b - 1):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">break</span>
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
          <Navigator path={"/control-statements/1"} label={"Branching"} position={"left"} />
          <Navigator path={"/control-statements/3"} label={"Looping"} position={"right"} />
        </div>
      </section>
    );
  };
  const Sections = [<HeroSection />, <Looping />, <LoopingLookSection />, <LoopingCodingTimeSection />, <Divider />, <StepSection />];
  return (
    <main className="io-statements-page">
      {Sections.map((section) => {
        return section;
      })}
    </main>
  );
};

export default LoopingControlStatements;