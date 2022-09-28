import { useNavigate } from "react-router-dom";
import { Tab } from "../../components/Tab";

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* header  */}

      <div className="drawer drawer-end ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col scrollbar-hide">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-white">
            <div className="flex-1 px-2 mx-2 font-bold text-2xl">메인</div>
            <div>
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
          </div>
          {/* <!-- Page content here --> */}

          <div className="px-6 text-left">
            <div className="font-bold text-2xl py-3">오늘의 추천</div>
            <div className="flex flex-row">
              <div
                className="flex flex-col py-4 hover:cursor-pointer"
                onClick={() => {
                  navigate("/detail");
                }}
              >
                <div className="mr-4 w-52 h-36 mb-4 bg-main-light-green rounded-2xl"></div>
                <div className="ml-1">
                  <div className="font-bold">충남</div>
                  <div>1박 2일 우당탕탕 수박 뽑기</div>
                  <div className="text-main-mid-green font-bold">
                    일당 100,000원
                  </div>
                  <div>#수박 #과일 #당진</div>
                </div>
              </div>
              <div className="flex flex-col py-4">
                <div className="mr-4 w-52 h-36 mb-4 bg-main-yellow rounded-2xl"></div>
                <div className="ml-1">
                  <div className="font-bold">충남</div>
                  <div>2박 3일 강원도에서 감자 심기</div>
                  <div className="text-main-mid-green font-bold">
                    일당 120,000
                  </div>
                  <div>#감자 #강원도</div>
                </div>
              </div>
            </div>

            <div className="font-bold text-2xl py-6">지금 인기있는</div>
            <Tab />
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            {/* <!-- Sidebar content here -->  */}
            <li>
              <div
                className="active:bg-main-yellow"
                onClick={() => navigate("/")}
              >
                랜딩
              </div>
            </li>
            <li>
              <div
                className="active:bg-main-yellow"
                onClick={() => navigate("/login")}
              >
                로그인
              </div>
            </li>
            <li>
              <div
                className="active:bg-main-yellow"
                onClick={() => navigate("/admin")}
              >
                회원가입
              </div>
            </li>
            <li>
              <div
                className="active:bg-main-yellow"
                onClick={() => navigate("/main")}
              >
                매인페이지
              </div>
            </li>
            <li>
              <div
                className="active:bg-main-yellow"
                onClick={() => navigate("/my")}
              >
                마이페이지
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Main;
