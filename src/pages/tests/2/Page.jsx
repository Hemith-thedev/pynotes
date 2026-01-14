import Divider from "../../../components/common/Divider";
import Navigator from "../../../components/common/Navigator";

import { useState } from "react";
import { X } from "lucide-react";

const Test2 = () => {
  const [isPopuplOpen, setIsPopuplOpen] = useState(false);
  const HeroSection = () => {
    return (
      <section className="hero-section section">
        <div className="wrapper">
          <h1>Test - 2</h1>
        </div>
      </section>
    );
  };
  const QuestionPaper = () => {
    return (
      <section className="question-paper-section section">
        <div className="wrapper">
          <div className="head">
            <h1 className="fill-primary-secondary">Questions</h1>
            <button className="primary" onClick={() => setIsPopuplOpen(prev => !prev)}>
              <span>Answers</span>
            </button>
          </div>
          <ul>
            <li>
              <p>1. Python code to print <span className="highlight">list</span> of numbers from <span className="highlight">1 - 10</span>.</p>
            </li>
            <li>
              <ul>
                <li>
                  <p>2. Python code to print the <span className="highlight">class</span> of the student.</p>
                </li>
                <li className="step">
                  <pre className="code-container">
                    <code className="code-wrapper">
                      student = {"{"}<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"name"</span>: <span className="green">"Sarah Williams"</span>,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"age"</span>: 18,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"class"</span>: <span className="green">"12th"</span><br />
                      {"}"}
                    </code>
                  </pre>
                </li>
              </ul>
            </li>
            <li>
              <p>3. Python code to find <span className="highlight">square and cube</span> of a number using functions.</p>
            </li>
            <li>
              <p>4. Python code to <span className="highlight">import</span> functions & implement in <span className="highlight">other</span> file. <span className="highlight">(Hint: implement fundamental mathematical operations)</span></p>
            </li>
            <li>
              <ul>
                <li>
                  <p>5. Python code to print <span className="highlight">key & value</span> of given dictionary.</p>
                </li>
                <li className="step">
                  <pre className="code-container">
                    <code className="code-wrapper">
                      user = {"{"}<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"name"</span>: <span className="green">"Alice Atkinson"</span>,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"age"</span>: 28,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"email"</span>: <span className="green">"alice@gmail.com"</span>,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"password"</span>: <span className="green">"alice@1234"</span>,<br />
                      &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"isActive"</span>: <span className="orange">True</span><br />
                      {"}"}
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
  const Popup = ({ isOpen }) => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return (
      <div className={`popup ${isOpen ? "open" : ""}`}>
        <div className="wrapper">
          <div className="head">
            <button className="primary" onClick={() => setIsPopuplOpen(prev => !prev)}>
              <X />
            </button>
            <h1>Answers</h1>
          </div>
          <div className="content">
            <ul>
              <li>
                <ul>
                  <li>
                    <p>1. Python code to print <span className="highlight">list</span> of numbers from <span className="highlight">1 - 10</span>.</p>
                  </li>
                  <li className="step">
                    <pre className="code-container">
                      <code className="code-wrapper">
                        numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]<br />
                        <span className="orange">for</span> n <span className="orange">in</span> numbers:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(n)
                      </code>
                    </pre>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <ul>
                      <li>
                        <p>2. Python code to print the <span className="highlight">class</span> of the student.</p>
                      </li>
                    </ul>
                  </li>
                  <li className="step">
                    <pre className="code-container">
                      <code className="code-wrapper">
                        student = {"{"}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"name"</span>: <span className="green">"Sarah Williams"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"age"</span>: 18,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"class"</span>: <span className="green">"12th"</span><br />
                        {"}"}<br />
                        <span className="purple">print</span>(<span className="green">"Class: "</span> + student[<span className="green">"class"</span>])
                      </code>
                    </pre>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <p>3. Python code to find <span className="highlight">square and cube</span> of a number using functions.</p>
                  </li>
                  <li className="step">
                    <pre className="code-container">
                      <code className="code-wrapper">
                        <span className="orange">def</span> <span className="blue">printSquare</span>(num):<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;s = num * num<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">return</span> s<br />
                        <br />
                        <span className="orange">def</span> <span className="blue">printCube</span>(num):<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;c = num * num * num<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">return</span> c<br />
                        <br />
                        num = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter a number: "</span>))<br />
                        <br />
                        s = printSquare(num)<br />
                        c = printCube(num)<br />
                        <br />
                        <span className="purple">print</span>(<span className="green">"Square: "</span> + <span className="purple">str</span>(s))<br />
                        <span className="purple">print</span>(<span className="green">"Cube: "</span> + <span className="purple">str</span>(c))<br />
                        <br />
                      </code>
                    </pre>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <p>4. Python code to <span className="highlight">import</span> functions & implement in <span className="highlight">other</span> file. <span className="highlight">(Hint: implement fundamental mathematical operations)</span></p>
                  </li>
                  <li className="step">
                    <pre className="code-container">
                      <code className="code-wrapper">
                        <span className="red"># File1.py</span><br />
                        <br />
                        <span className="orange">def</span> <span className="blue">add</span>(a, b):<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;c = a + b<br /> 
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">return</span> c
                        <br />
                        <br />
                        <span className="orange">def</span> <span className="blue">subtract</span>(a, b):<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;c = a - b<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">return</span> c
                        <br />
                        <br />
                        <span className="orange">def</span> <span className="blue">multiply</span>(a, b):<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;c = a * b<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">return</span> c
                        <br />
                        <br />
                        <span className="orange">def</span> <span className="blue">divide</span>(a, b):<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;c = (b !== 0) ? a / b : <span className="green">"Cannot divide by zero."</span><br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">return</span> c
                        <br />
                      </code>
                    </pre>
                  </li>
                  <li className="step">
                    <pre className="code-container">
                      <code className="code-wrapper">
                        <span className="red"># File2.py</span><br />
                        <br />
                        <span className="orange">import</span> File1 <span className="orange">as</span> functions<br />
                        <br />
                        <span className="purple">print</span>(<span className="green">"Sum: "</span> + functions.add(a, b))<br />
                        <span className="purple">print</span>(<span className="green">"Difference: "</span> + functions.subtract(a, b))<br />
                        <span className="purple">print</span>(<span className="green">"Product: "</span> + functions.multiply(a, b))<br />
                        <span className="purple">print</span>(<span className="green">"Quotient: "</span> + functions.divide(a, b))<br />
                      </code>
                    </pre>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <p>5. Python code to print <span className="highlight">key & value</span> of given dictionary.</p>
                  </li>
                  <li className="step">
                    <pre className="code-container">
                      <code className="code-wrapper">
                        user = {"{"}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"name"</span>: <span className="green">"Alice Atkinson"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"age"</span>: 28,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"email"</span>: <span className="green">"alice@gmail.com"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"password"</span>: <span className="green">"alice@1234"</span>,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="green">"isActive"</span>: <span className="orange">True</span><br />
                        {"}"}<br />
                        <br />
                        <span className="orange">for</span> key, value <span className="orange">in</span> user.items():<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(key, <span className="green">":"</span>, value)
                      </code>
                    </pre>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  const StepSection = () => {
    return (
      <section className="step-section space-between section">
        <div className="wrapper">
          <Navigator path={"/control-statements/looping"} label={"Looping"} position={"left"} />
          <Navigator path={"/list"} label={"List"} position={"right"} />
        </div>
      </section>
    );
  };
  const Sections = [<HeroSection />, <QuestionPaper />, <Divider />, <StepSection />, <Popup isOpen={isPopuplOpen} />];
  return (
    <main className="test-1-page">
      {
        Sections.map((section) => {
          return section;
        })
      }
    </main>
  )
}

export default Test2;