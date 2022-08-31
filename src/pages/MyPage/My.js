import React from "react";
import NewHeader from "../../components/NewHeader";

function My() {
  return (
    <div>
      <div className="px-5">
        <NewHeader headText={"MY"} />
      </div>
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
      <div className="text-left">
        <div className="px-5 py-5 border-b-2 font-bold border-gray-100">
          신청 내역
        </div>
        <div className="px-5 py-5 border-b-2 font-bold border-gray-100">
          구인 내역
        </div>
        <div className="px-5 py-5 border-b-2 font-bold border-gray-100">
          구인 등록
        </div>
        <div className="px-5 py-5 border-b-2 font-bold border-gray-100">
          북마크
        </div>
      </div>
    </div>
  );
}

export default My;
