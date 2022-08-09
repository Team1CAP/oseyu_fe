import NewButton from "../../components/NewButton";
import NEwHeader from "../../components/NewHeader";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* header */}
      <NEwHeader headText={"오세유"} />
      <NewButton
        text={"버튼"}
        onClick={() => {
          navigate("/detail");
        }}
        type={"positive"}
      />
    </>
  );
};

export default Main;
