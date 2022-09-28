import { useNavigate } from "react-router-dom";

const detailData = "mb-2";

const Detail = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* header  */}

      <div className="drawer drawer-end ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col scrollbar-hide">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-white">
            <div className="flex-1 px-2 mx-2 font-bold text-2xl">상세</div>
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
          <div className="px-7 text-left">
            <div className="mr-4 w-full h-60 mb-4 bg-main-light-green rounded-2xl"></div>
            <div className="flex flex-row justify-end">
              <button
                onClick={() => {
                  navigate("/main");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-6 h-6 text-gray-300"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <button className="px-3 py-1 mx-3 rounded-lg font-bold bg-main-yellow">
                지원하기
              </button>
              <button className="px-3 py-1 mr-3 rounded-lg font-bold text-white bg-main-dark-green">
                문의하기
              </button>
            </div>
            <div className="ml-1 text-lg">
              <div className="font-bold">충남</div>
              <div>1박 2일 우당탕탕 수박 뽑기</div>
              <div className="text-main-mid-green font-bold">
                일당 100,000원
              </div>
              <div>#수박 #과일 #당진</div>
            </div>
            <ul className="flex flex-row py-5">
              <li className="px-3 py-1 mr-3 rounded-lg font-bold bg-main-light-green">
                숙소지원
              </li>
              <li className="px-3 py-1 mr-3 rounded-lg font-bold bg-gray-300">
                교통 미지원
              </li>
            </ul>
            <ul>
              <li className={detailData}>
                위치 : 충청남도 논산시 노성면 병사리
              </li>
              <li className={detailData}>
                기간 : 9월 17(금)부터 9월 19(일) 3일간
              </li>
              <li className={detailData}>급여 : 일급 100,000원</li>
              <li className={detailData}>근로기간 : 오전 10:00 ~ 17:00</li>
              <li className={detailData}>인원 : 0명</li>
              <li className={detailData}>식사 : 제공</li>
              <li className={detailData}>교통 : 지원</li>
              <li className={detailData}>숙박 : 미지원</li>
              <li className={detailData}>
                상세설명 : 무주 사과열매 솎기 체험은 다음과 같이 일정 방법은
                다음과 같다. 1차 적과는 중심과를 남기고 측과를 제거하고, 과실과
                과실 사이의 거리가 대체로 한 뼘(약20cm)정도 되도록 거리적과 실시
                2차 적과는 나무 전체 엽수에 대한 착과수를 산출하여 적과 3차
                적과는 상품과 및 수량성을 전제로 엽과비를 기준으로 정밀한
                적과작업 실시
              </li>
            </ul>
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

export default Detail;
