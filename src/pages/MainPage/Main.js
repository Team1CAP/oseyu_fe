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

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default Main;
