import React from "react";
import NewHeader from "../../components/NewHeader";

const LISTHEADER =
  "text-lg px-7 py-5 border-b-2 hover:cursor-pointer font-bold border-gray-100";

const LISTITEM =
  "px-7 py-5 border-b-2 hover:cursor-pointer border-gray-100 items-center flex flex-row justify-between";
function Recruit() {
  return (
    <div>
      <div className="px-7">
        <NewHeader
          headText={"구인 등록"}
          rightChild={
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          }
        />
      </div>
      <div>
        <div className="border-b-8 border-main-light-yellow">
          <ul className="text-left">
            <li className={LISTHEADER}>등록자 정보</li>
            <li className={LISTITEM}>
              <span>이름</span>
              <span>김승환</span>
            </li>
            <li className={LISTITEM}>
              <span>연락처</span>
              <span>010-1234-5678</span>
            </li>
            <li className={LISTITEM}>
              <span>이미지</span>
              <div className="bg-slate-400 w-14 h-14 rounded-full"></div>
            </li>
          </ul>
        </div>
        <div className="mb-20">
          <ul className="text-left">
            <li className={LISTHEADER}>근무지 정보</li>
            <li className={LISTITEM}>
              <span>이미지</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                  clip-rule="evenodd"
                />
              </svg>
            </li>
            <li className={LISTITEM}>
              <span>작업 내용</span>
              <span>무주 사과 열매 솎기</span>
            </li>
            <li className={LISTITEM}>
              <span>근무지 주소</span>
              <span>전라북도 무주 @@군 @@읍</span>
            </li>
            <li className={LISTITEM}>
              <span>상세 주소</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-gray-500"
              >
                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
              </svg>
            </li>
            <li className={LISTITEM}>
              <span>작업시작일자</span>
              <span>2022.09.7(수)</span>
            </li>
            <li className={LISTITEM}>
              <span>작업종료일자</span>
              <span>2022.09.9(금)</span>
            </li>
            <li className={LISTITEM}>
              <span>작업 시간</span>
              <span>9:00 ~ 17:00</span>
            </li>
            <li className={LISTITEM}>
              <span>필요인원</span>
              <span>10명</span>
            </li>
            <li className={LISTITEM}>
              <span>일당</span>
              <span>100,000원</span>
            </li>
            <li className={LISTITEM}>
              <span>숙소 제공 여부</span>
              <button className="w-16 px-3 py-1 rounded-lg font-bold  text-black bg-main-yellow">
                제공
              </button>
            </li>
            <li className={LISTITEM}>
              <span>교통 제공 여부</span>
              <button className="w-16 py-1 rounded-lg font-bold  text-black bg-gray-300">
                미제공
              </button>
            </li>
            <li className="px-7 py-5 hover:cursor-pointe items-center flex flex-row justify-between border-b-8 border-main-light-yellow">
              <span>작업 내용</span>
              <span>무주 사과 열매 솎기</span>
            </li>
          </ul>
          <ul className="text-left">
            <li className="text-lg px-7 py-5 hover:cursor-pointer font-bold">
              요청 작업 및 업무 내용
            </li>
            <textarea
              className="mx-5 w-11/12 p-2 resize-none outline-none border border-solid "
              placeholder="상세하게 적어주세요!"
            ></textarea>
            <li className={LISTITEM}>
              <span>태그</span>
              <span>#수박 #과일 #당진</span>
            </li>
          </ul>
        </div>
        <div className="fixed bottom-0 inset-x-0 p-3 rounded-t-2xl shadow-2xl bg-white">
          <button className="px-3 py-1 mr-3 rounded-lg font-bold   text-white bg-main-dark-green">
            등록하기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Recruit;
