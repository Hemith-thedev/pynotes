import Divider from "../../components/common/Divider";
import Navigator from "../../components/common/Navigator";

import { useNavigate } from "react-router-dom";

const FirstProgramsPage = () => {
  const navigate = useNavigate();
  const HeroSection = () => {
    return (
      <section className="hero-section section">
        <div className="wrapper">
          <h1>IO Statements</h1>
        </div>
      </section>
    );
  };
  const ISInfoSection = () => {
    return (
      <section className="info-section section">
        <div className="wrapper">
          <h2 className="fill-primary-secondary">Input statements</h2>
          <ul className="step">
            <li>
              <p>To gather data from the user.</p>
            </li>
            <li>
              <p><code className="single-line-code"><span className="purple">input</span>()</code> function is used for input statements.</p>
            </li>
          </ul>
          <h5 className="step">Example</h5>
          <ul className="step">
            <li>
              <p>
                <code className="single-line-code">name = <span className="purple">input</span>(<span className="green">"Enter your name: "</span>)</code>
              </p>
            </li>
            <li>
              <p>This program reads & stores the value of <code className="single-line-code">name</code> from the user.</p>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  const ISExampleSection = () => {
    return (
      <section className="example-section section">
        <div className="wrapper">
          
        </div>
      </section>
    );
  };
  const OSInfoSection = () => {
    return (
      <section className="info-section section">
        <div className="wrapper">
          <h2 className="fill-primary-secondary">Output statements</h2>
          <ul className="step">
            <li>
              <p>To show data to the user.</p>
            </li>
            <li>
              <p><code className="single-line-code"><span className="purple">print</span>()</code> function is used for output statements.</p>
            </li>
          </ul>
          <h5 className="step">Example</h5>
          <ul className="step">
            <li>
              <pre className="code-container">
                <code className="code-wrapper">
                  name = <span className="purple">input</span>(<span className="green">"Enter your name: "</span>) <span className="red"># Alice</span>
                  <br /><span className="purple">print</span>(<span className="green">"Your name is: "</span> + name)
                </code>
              </pre>
            </li>
            <li>
              <p>This program prints the value of <code className="single-line-code">name</code>.</p>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  const OSExampleSection = () => {
    return (
      <section className="example-section section">
        <div className="wrapper">
          
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
              <p>Q. Python code to print the name given by the user</p>
            </li>
            <li>
              <pre className="code-container">
                <code className="code-wrapper">
                  <span className="red"># 1. read name</span><br />
                  <span className="red"># initialize an input statement by defining it with a variable</span><br />
                  name = <span className="purple">input</span>(<span className="green">"Enter your name: "</span>)<br />
                  <br />
                  <span className="red"># 2. print the value of name</span><br />
                  <span className="red"># read & print the value stored in the variable using print function</span><br />
                  <span className="purple">print</span>(<span className="green">"Your name: "</span> + name)
                </code>
              </pre>
            </li>
          </ul>
        </div>
      </section>
    );
  };
  const CodingTimeSection = () => {
    return (
      <section className="look-section section">
        <div className="wrapper">
          <h3 className="fill-primary-secondary">Try yourself</h3>
          <ul>
            <li>
              <p>Q. Python code to read two number and print their sum, product, difference & quotient.</p>
            </li>
            <li>
              <pre className="code-container">
                <code className="code-wrapper">
                  a = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter first number: "</span>))<br />
                  b = <span className="purple">int</span>(<span className="purple">input</span>(<span className="green">"Enter second number: "</span>))<br />
                  <br />
                  <span className="purple">print</span>(<span className="green">"Sum: "</span> + <span className="purple">str</span>(a + b))<br />
                  <span className="purple">print</span>(<span className="green">"Product: "</span> + <span className="purple">str</span>(a * b))<br />
                  <span className="purple">print</span>(<span className="green">"Difference: "</span> + <span className="purple">str</span>(a - b))<br />
                  <span className="purple">print</span>(<span className="green">"Quotient: "</span> + <span className="purple">str</span>(a / b))<br />
                </code>
              </pre>
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
          <Navigator path={"/basics"} label={"Basics"} position={"left"} />
          <Navigator path={"/control-statements/1"} label={"Control statements"} position={"right"} />
        </div>
      </section>
    );
  };
  const Sections = [<HeroSection />, <ISInfoSection />, <ISExampleSection />, <OSInfoSection />, <OSExampleSection />, <LookSection />, <CodingTimeSection />, <Divider />, <StepSection />];
  return (
    <main className="io-statements-page">
      {Sections.map((section) => {
        return section;
      })}
    </main>
  );
};

export default FirstProgramsPage;