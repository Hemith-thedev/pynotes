import Intro from "../pages/intro/Page";
import Installation from "../pages/installation/Page";

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
  }
]

export default Pages;