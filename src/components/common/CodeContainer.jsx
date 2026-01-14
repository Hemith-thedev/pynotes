import { useState, useRef } from "react";

const CodeContainer = ({ id, hasHead, hasCopyFunction, isSelectable = true, codeType, Code }) => {
  const CodeWrapperRef = useRef(null);
  const [buttonText, setButtonText] = useState("Copy");
  const codeTypeText = () => {
    if (codeType === "terminal") return "Terminal";
    if (codeType === "python") return "Python";
  }
  return (
    <pre className={`code-container ${hasHead && "has-head"} ${hasCopyFunction && "has-copy-function"}`} id={id}>
      {hasHead && <div className="head">
        <p>{codeTypeText()}</p>
        {hasCopyFunction && <button type="button" className="primary" onClick={() => {
          navigator.clipboard.writeText(CodeWrapperRef.current.innerText).then(() => {
            setButtonText("Copied");
            setTimeout(() => {
              setButtonText("Copy");
            }, 2000);
          })
        }}>{buttonText}</button>}
      </div>}
      <div className="code-wrapper" ref={CodeWrapperRef} style={{
        userSelect: (isSelectable) ? "auto" : "none"
      }}>
        {Code}
      </div>
    </pre>
  )
}

export default CodeContainer;