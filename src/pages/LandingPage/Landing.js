import NewButton from "../../components/NewButton";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen items-center justify-around bg-main-yellow ">
      <div className="text-5xl font-bold  text-main-dark-green">OSEYU</div>
      <label className="cursor-pointer bg-main-dark-green hover:bg-main-mid-green text-white font-bold py-3 px-10 w-60 rounded">
        <NewButton
          text={"시작하기"}
          onClick={() => {
            navigate("/login");
          }}
          type={"positive"}
        />
      </label>
    </div>
  );
};

export default Landing;
