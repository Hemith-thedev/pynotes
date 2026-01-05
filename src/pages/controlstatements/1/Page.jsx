import Divider from "../../../components/common/Divider";
import Navigator from "../../../components/common/Navigator";

import { useNavigate } from "react-router-dom";

const BranchingControlStatements = () => {
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
  const DefinitionSection = () => {
    return (
      <section className="definition-section section">
        <div className="wrapper">
          <h2 className="fill-primary-secondary">Definition</h2>
          <ul className="step">
            <li>
              <p>Statements used to control the flow of program.</p>
            </li>
            <li>
              <h5>Types:</h5>
              <ul className="step">
                <li>
                  <p>Branching</p>
                </li>
                <li>
                  <p>Looping</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  const Branching = () => {
    return (
      <section className="info-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Branching</h3>
          <ul className="step">
            <li>
              <p>Allows a program to execute different <span className="highlight">blocks of code</span> based on <span className="highlight">specific conditions</span>.</p>
            </li>
            <li>
              <h5>Types of branching:</h5>
              <ul className="step">
                <li>
                  <p><span className="highlight">Simple</span> if - only one condition</p>
                </li>
                <li>
                  <p><span className="highlight">Multiple</span> if - more then one condition</p>
                </li>
                <li>
                  <p><span className="highlight">Nested</span> if - condition in a condition</p>
                </li>
              </ul>
              <h5>Syntaxes</h5>
              <ul className="step">
                <li>
                  <ul>
                    <li>
                      <p><span className="highlight">Simple if</span></p>
                    </li>
                    <li>
                      <pre className="code-container">
                        <code className="code-wrapper">
                          <span className="purple">if</span> condition:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;statements<br />
                          <span className="purple">else</span>:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;statements
                        </code>
                      </pre>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <p><span className="highlight">Multiple if</span></p>
                    </li>
                    <li>
                      <pre className="code-container">
                        <code className="code-wrapper">
                          <span className="purple">if</span> condition_1:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;statements<br />
                          <span className="purple">elif</span> condition_2:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;statements<br />
                          <span className="purple">elif</span> condition_3:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;statements<br />
                          .<br />
                          .<br />
                          .<br />
                          <span className="purple">else</span>:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;statements
                        </code>
                      </pre>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul>
                    <li>
                      <p><span className="highlight">Nested if</span></p>
                    </li>
                    <li>
                      <pre className="code-container">
                        <code className="code-wrapper">
                          <span className="purple">if</span> condition_1:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;statements<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">if</span> condition_2:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statements<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">else</span>:<br />
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;statements<br />
                          <span className="purple">else</span>:<br />
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
  const BranchingLookSection = () => {
    return (
      <section className="look-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Just have a look</h3>
          <ul>
            <li>
              <ul>
                <li>
                  <p>Q. Python code to check if a person is an <span className="highlight">adult</span> using 'simple if'.</p>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="red"># Hint: adult = (age &gt;= 18)</span><br />
                      <span className="red"># 1. Initialize a variable</span><br />
                      age = 17<br />
                      <br />
                      <span className="red"># 2. Program with a condtion</span><br />
                      <span className="purple">if</span> (age &gt;= 18):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"You are an adult."</span>)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># This statement executes if the age is greater than or equal to 18</span><br />
                      <br />
                      <span className="purple">else</span>:<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"You are not an adult."</span>)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># This statement executes if the age is lesser than 18</span>
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <p>Q. Python code to find <span className="highlignt">largest</span> of three numbers using 'multiple if'.</p>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="red"># 1. Initialize variables</span><br />
                      a = 10<br />
                      b = 20<br />
                      c = 30<br />
                      <br />
                      <span className="red"># 2. Program with a condtions</span><br />
                      <span className="purple">if</span> (a &gt; b) &amp;&amp; (a &gt; c):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"a is the largest number."</span>)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># This statement executes if the value of a is greater than b and c</span><br />
                      <br />
                      <span className="purple">elif</span> (b &gt; a) &amp;&amp; (b &gt; c):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"b is the largest number."</span>)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># This statement executes if the value of b is greater than a and c</span><br />
                      <br />
                      <span className="purple">else</span>:<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"c is the largest number."</span>)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># This statement executes if the value of c is greater than a and b</span>
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
            <li>
              <ul>
                <li>
                  <p>Q. Python code to find <span className="highlight">smallest</span> of three numbers using 'nested if'.</p>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      <span className="red"># 1. Initialize variables</span><br />
                      a = 10<br />
                      b = 20<br />
                      c = 30<br />
                      <br />
                      <span className="red"># 2. Program with a condtions</span><br />
                      <span className="purple">if</span> (a &lt; b):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">if</span> (a &lt; c):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"a is the smallest number."</span>)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># This statement executes if the value of a is lesser than b and c</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">else</span>:<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"c is the smallest number."</span>)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># This statement executes if the value of c is lesser than b</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<br />
                      <span className="purple">else</span>:<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">if</span> (b &lt; c):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"b is the smallest number."</span>)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># This statement executes if the value of b is lesser than a and c</span><br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">else</span>:<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"c is the smallest number."</span>)<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="red"># This statement executes if the value of c is lesser than a and b</span>
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
  const BranchingCodingTimeSection = () => {
    return (
      <section className="look-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Try yourself --</h3>
          <ul>
            <li>
              <ul>
                <li>
                  <p>Q. Python code to read a number and check weather it is <span className="highlight">even or odd</span> using 'simple if'.</p>
                </li>
                <li>
                  <pre className="code-container">
                    <code className="code-wrapper">
                      number = <span className="purple">float</span>(<span className="purple">input</span>(<span className="green">"Enter a number: "</span>))<br />
                      <br />
                      <span className="purple">if</span> (number % 2 == 0):<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(number,<span className="green">"is an even number."</span>)<br />
                      <span className="purple">else</span>:<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(number,<span className="green">"is an odd number."</span>)
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
          <Navigator path={"/input-and-output-statements"} label={"IO Statements"} position={"left"} />
          <Navigator path={"/control-statements/2"} label={"Looping"} position={"right"} />
        </div>
      </section>
    );
  };
  const Sections = [<HeroSection />, <DefinitionSection />, <Branching />, <BranchingLookSection />, <BranchingCodingTimeSection />, <Divider />, <StepSection />];
  return (
    <main className="io-statements-page">
      {Sections.map((section) => {
        return section;
      })}
    </main>
  );
};

export default BranchingControlStatements;