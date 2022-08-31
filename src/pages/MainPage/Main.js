import NewButton from "../../components/NewButton";
import NEwHeader from "../../components/NewHeader";
import { useNavigate } from "react-router-dom";
import { Tab } from "../../components/Tab";

const Main = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5 text-left">
      {/* header */}
      <NEwHeader
        headText={"메인"}
        rightChild={
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </button>
        }
      />
      <div className="font-bold text-2xl py-3">오늘의 추천</div>
      <div className="flex flex-row">
        <div className="flex flex-col py-4">
          <div className="mr-4 w-52 h-36 mb-4 bg-main-light-green rounded-2xl"></div>
          <div className="ml-1">
            <div className="font-bold">충남</div>
            <div>1박 2일 우당탕탕 수박 뽑기</div>
            <div className="text-main-mid-green font-bold">일당 100,000원</div>
            <div>#수박 #과일 #당진</div>
          </div>
        </div>
        <div className="flex flex-col py-4">
          <div className="mr-4 w-52 h-36 mb-4 bg-main-yellow rounded-2xl"></div>
          <div className="ml-1">
            <div className="font-bold">충남</div>
            <div>2박 3일 강원도에서 감자 심기</div>
            <div className="text-main-mid-green font-bold">일당 120,000</div>
            <div>#감자 #강원도</div>
          </div>
        </div>
      </div>

      <div className="font-bold text-2xl py-6">지금 인기있는</div>
      <Tab />

      <NewButton
        text={"랜딩으로 돌아가기"}
        onClick={() => {
          navigate("/");
        }}
        type={"positive"}
      />
      <div>
        <NewButton
          text={"로그인페이지"}
          onClick={() => {
            navigate("/login");
          }}
          type={"positive"}
        />
      </div>
      <div>
        <NewButton
          text={"회원가입페이지"}
          onClick={() => {
            navigate("/admin");
          }}
          type={"positive"}
        />
      </div>
    </div>
  );
};

export default Main;
