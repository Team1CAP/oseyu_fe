import React from "react";
import { useNavigate } from "react-router-dom";

const MYLIST =
  "px-5 py-5 border-b-2 hover:cursor-pointer font-bold border-gray-100";

function My() {
  const navigate = useNavigate();
  return (
    <>
      {/* header  */}
      <div className="drawer drawer-end ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col scrollbar-hide">
          {/* <!-- Navbar --> */}
          <div className="w-full navbar bg-white">
            <div className="flex-1 px-2 mx-2 font-bold text-2xl">MY</div>
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

          <div className="flex flex-col items-center border-b-8 border-main-light-yellow">
            <div className="bg-slate-400 w-20 h-20 rounded-full mb-10"></div>

            <div className="font-bold text-2xl mb-5">김승환</div>
            <div className="font-bold mb-5">010-3373-8309</div>
            <div className="mb-8">
              <button className="w-28 h-8 font-bold m-3 rounded-lg bg-main-yellow">
                정보수정
              </button>
              <button className="w-28 h-8 font-bold m-3 rounded-lg bg-main-yellow">
                로그아웃
              </button>
            </div>
          </div>
          <ul className="text-left">
            <li className={MYLIST}>신청 내역</li>
            <li className={MYLIST}>구인 내역</li>
            <li
              className={MYLIST}
              onClick={() => {
                navigate("/recruit");
              }}
            >
              구인 등록
            </li>
            <li className={MYLIST}>북마크</li>
          </ul>
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
}

export default My;
