import { useState } from "react";

// const TabMenu = styled.ul`
//   color: rgba(73, 73, 73, 0.5);
//   font-weight: bold;
//   display: flex;
//   flex-direction: row;
//   justify-items: center;
//   align-items: center;
//   list-style: none;
//   margin-bottom: 7rem;
//   padding: 10px;
//   cursor: pointer;

//   transition: all 0.5s ease-in-out;
//   .submenu {
//     margin: 5px;
//     transition: all 0.5s ease-in-out;
//   }

//   .focused {
//     color: #254edb;
//     margin: 5px;
//     border-bottom: 1px solid #254edb;
//     transition: all 0.5s ease-in-out;
//   }

//   & div.desc {
//     text-align: center;
//   }
// `;

// const Desc = styled.div`
//   text-align: center;
// `;

export const Tab = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const menuArr = [
    { name: "인기별", content: "Tab menu ONE" },
    { name: "지역별", content: "Tab menu TWO" },
    { name: "가격대", content: "Tab menu THREE" },
    { name: "기타", content: "Tab menu FOUR" },
  ];

  const jobArr = [
    {
      region: "충남",
      content: "1박 2일 우당탕탕 수박 뽑기",
      pay: "100,000",
      tag: "#수박 #과일 #당진",
    },
    {
      region: "강원도",
      content: "2박 3일 강원도에서 감자 심기",
      pay: "120,000",
      tag: "#감자 #강원도",
    },
    {
      region: "전북",
      content: "2주 무주 사과 열매 솎기",
      pay: "110,000",
      tag: "#사과 #과일 #무주",
    },
  ];

  const selectMenuHandler = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <div>
        <div className="flex flex-row font-semibold :text-red-500 list-none mb-2 cursor-pointer ">
          {menuArr.map((data, index) => (
            <li
              key={index}
              className={`px-2 py-1 mr-2 rounded-lg transition-all ease-in-out delay-75 ${
                index === currentTab ? "bg-main-yellow" : "bg-gray-200"
              }`}
              onClick={() => selectMenuHandler(index)}
            >
              {data.name}
            </li>
          ))}
        </div>
        <div>
          {/* <p>{menuArr[currentTab].content}</p> */}

          {jobArr.map((data) => {
            return (
              <div className="flex flex-row py-4">
                <div className="mr-4 w-48 h-28 bg-main-yellow rounded-2xl"></div>
                <div>
                  <div className="font-bold">{data.region}</div>
                  <div>{data.content}</div>
                  <div className="text-main-mid-green font-bold">
                    {`일당 ${data.pay}`}
                  </div>
                  <div>{data.tag}</div>
                </div>
              </div>
            );
          })}

          <div className="flex flex-row py-4">
            <div className="mr-4 w-48 h-28 bg-main-mid-green rounded-2xl"></div>
            <div>
              <div className="font-bold">울산</div>
              <div>서생배 적과 및 봉지씌우기</div>
              <div className="text-main-mid-green font-bold">
                일당 110,000원
              </div>
              <div>#울산 #배 #봉지씌우기</div>
            </div>
          </div>
          <div className="flex flex-row py-4">
            <div className="mr-4 w-48 h-28 bg-main-mid-green rounded-2xl"></div>
            <div>
              <div className="font-bold">충남</div>
              <div>2박 3일 강원도에서 감자 심기</div>
              <div className="text-main-mid-green font-bold">
                일당 100,000원
              </div>
              <div>#감자 #강원도</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
