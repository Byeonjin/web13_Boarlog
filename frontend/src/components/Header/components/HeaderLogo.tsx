import { useNavigate } from "react-router-dom";
import logoSmall from "@/assets/imgs/logoSmall.png";

interface LogoButtonProps {
  type: "normal" | "lecture";
}

const HeaderLogo = ({ type }: LogoButtonProps) => {
  const navigate = useNavigate();

  const moveToMainPage = () => {
    navigate("/");
  };

  return (
    <>
      <button type="button" className="flex flex-row items-center gap-4" onClick={moveToMainPage}>
        <img src={logoSmall} />
        {type === "normal" && <h1>Boarlog</h1>}
      </button>
      {type === "lecture" && <h1>lecture name</h1>}
    </>
  );
};

export default HeaderLogo;
