import Intro from "../pages/intro/Page";
import Installation from "../pages/installation/Page";
import Basics from "../pages/basics/Page";
import InputAndOutputStatements from "../pages/inputoutputstatements/Page";

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
]

export default Pages;