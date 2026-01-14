import Intro from "../pages/intro/Page";
import Installation from "../pages/installation/Page";
import Basics from "../pages/basics/Page";
import InputAndOutputStatements from "../pages/inputoutputstatements/Page";
import BranchingControlStatements from "../pages/controlstatements/1/Page";
import LoopingControlStatements from "../pages/controlstatements/2/Page";
import Test1 from "../pages/tests/1/Page";
import List from "../pages/list/Page";
import Tuple from "../pages/tuple/Page";
import Dictionary from "../pages/dictionary/Page";
import Functions from "../pages/functions/Page";
import Modules from "../pages/modules/Page";
import Test2 from "../pages/tests/2/Page";
import Numpy from "../pages/numpy/Page";

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
    path: "/control-statements/branching",
  },
  {
    title: "Control Statements",
    element: <LoopingControlStatements />,
    path: "/control-statements/looping",
  },
  {
    title: "Test",
    element: <Test1 />,
    path: "/tests/1",
  },
  {
    title: "List",
    element: <List />,
    path: "/list"
  },
  {
    title: "Tuple",
    element: <Tuple />,
    path: "/tuple"
  },
  {
    title: "Dictionary",
    element: <Dictionary />,
    path: "/dictionary"
  },
  {
    title: "Functions",
    element: <Functions />,
    path: "/functions"
  },
  {
    title: "Modules",
    element: <Modules />,
    path: "/modules"
  },
  {
    title: "Test",
    element: <Test2 />,
    path: "/tests/2"
  },
  {
    title: "Numpy",
    element: <Numpy />,
    path: "/libraries/numpy"
  }
]

export default Pages;