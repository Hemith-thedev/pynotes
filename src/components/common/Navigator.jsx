import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Navigator = ({path, label, position}) => {
  const navigate = useNavigate();
  return (
    <button className="primary" onClick={() => navigate(path)}>
      {(position === "left") && <ChevronLeft />}
      {label}
      {(position === "right") && <ChevronRight />}
    </button>
  )
}

export default Navigator;