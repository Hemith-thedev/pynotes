import Intro from "../pages/intro/Page";
import Installation from "../pages/installation/Page";
import Basics from "../pages/basics/Page";
import InputAndOutputStatements from "../pages/inputoutputstatements/Page";
import BranchingControlStatements from "../pages/controlstatements/1/Page";
import LoopingControlStatements from "../pages/controlstatements/2/Page";

const Pages = [
  {
    title: "Introduction",
    element: <Intro />,
    path: "/",
  },
  {
    title: "Installation",
    element: <Installation />,
    path: "/installation",
  },
  {
    title: "Basics",
    element: <Basics />,
    path: "/basics",
  },
  {
    title: "IO Statements",
    element: <InputAndOutputStatements />,
    path: "/input-and-output-statements",
  },
  {
    title: "Control Statements",
    element: <BranchingControlStatements />,
    path: "/control-statements/1",
  },
  {
    title: "Control Statements",
    element: <LoopingControlStatements />,
    path: "/control-statements/2",
  },
]

export default Pages;