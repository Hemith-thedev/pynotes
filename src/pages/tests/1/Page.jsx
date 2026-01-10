import Divider from "../../../components/common/Divider";
import Navigator from "../../../components/common/Navigator";

import { useState } from "react";
import { X } from "lucide-react";

const Test1 = () => {
  const [isPopuplOpen, setIsPopuplOpen] = useState(false);
  const HeroSection = () => {
    return (
      <section className="hero-section section">
        <div className="wrapper">
          <h1>Test - 1</h1>
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
            <button  className="primary" onClick={() => setIsPopuplOpen(prev => !prev)}>
              <span>Answers</span>
            </button>
          </div>
          <ul>
            <li>
              <p>1. Python code to read three numbers, add first two numbers & subtract from the third number.</p>
            </li>
            <li>
              <p>2. Python code to print even numbers from <span className="highlight">100 - 1</span>.</p>
            </li>
            <li>
              <p>3. Python code to print <span className="highlight">decreasing stars</span> from 10.</p>
            </li>
            <li>
              <p>4. Python code to check weather the student is <span className="highlight">passed or failed</span> in exam. <span className="highlight">(Hint: passing marks &gt;= 40)</span></p>
            </li>
            <li>
              <p>5. Python code to print even numbers from <span className="highlight">1 - 100</span> using while loop.</p>
            </li>
            <li>
              <p>6. Python code to read a number and print <span className="highlight">increasing stars</span> from 0 - number.</p>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  const Popup = ({isOpen}) => {
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
                    <p>1. Python code to read three numbers, add first two numbers & subtract from the third number.</p>
                  </li>
                  <li>
                    <pre className="code-container">
                      <code className="code-wrapper">
                        a = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter first number: "</span>))<br />
                        b = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter second number: "</span>))<br />
                        c = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter third number: "</span>))<br />
                        result = (a + b) - c<br />
                        <span className="purple">print</span>(<span className="green">"Result: "</span>+<span className="purple">str</span>(result))
                      </code>
                    </pre>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <p>2. Python code to print even numbers from <span className="highlight">100 - 1</span>.</p>
                  </li>
                  <li>
                    <pre className="code-container">
                      <code className="code-wrapper">
                        <span className="orange">for</span> i <span className="orange">in</span> <span className="purple">range</span>(100, 0, -2):<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(i)
                      </code>
                    </pre>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <p>3. Python code to print <span className="highlight">decreasing stars</span> from 10.</p>
                  </li>
                  <li>
                    <pre className="code-container">
                      <code className="code-wrapper">
                        <span className="orange">for</span> i <span className="orange">in</span> <span className="purple">range</span>(10, 0, -1):<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">for</span> j <span className="orange">in</span> <span className="purple">range</span>(i, 0, -1):<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"*"</span>, end=<span className="green">" "</span>)<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>()
                      </code>
                    </pre>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <p>4. Python code to check weather the student is <span className="highlight">passed or failed</span> in exam. <span className="highlight">(Hint: passing marks &gt;= 40)</span></p>
                  </li>
                  <li>
                    <pre className="code-container">
                      <code className="code-wrapper">
                        marks = 85<br />
                        <span className="orange">if</span> (marks &gt;= 40):<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"Passed"</span>)<br />
                        <span className="orange">else</span>:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"Failed"</span>)<br />
                      </code>
                    </pre>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <p>5. Python code to print even numbers from <span className="highlight">1 - 100</span> using while loop.</p>
                  </li>
                  <li>
                    <pre className="code-container">
                      <code className="code-wrapper">
                        number = 1<br />
                        <span className="orange">while</span> number &gt;= 100:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">if</span> number % 2 == 0:<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(number)<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;number += 1
                      </code>
                    </pre>
                  </li>
                </ul>
              </li>
              <li>
                <ul>
                  <li>
                    <p>6. Python code to read a number and print <span className="highlight">increasing stars</span> from 0 - number.</p>
                  </li>
                  <li>
                    <pre className="code-container">
                      <code className="code-wrapper">
                        n = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter a number: "</span>))<br />
                        <span className="orange">for</span> i <span className="orange">in</span> <span className="purple">range</span>(0, n + 1, 1):<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="orange">for</span> j <span className="orange">in</span> <span className="purple">range</span>(0, i, 1):<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>(<span className="green">"*"</span>, end=<span className="green">" "</span>)<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;<span className="purple">print</span>()
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
  const Sections = [<HeroSection />, <QuestionPaper />, <Divider />,  <StepSection />, <Popup isOpen={isPopuplOpen} />];
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

export default Test1;