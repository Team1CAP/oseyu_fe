import { useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl font-bold  text-main-dark-green mt-32">
        OSEYU
      </div>
      <form className="w-full max-w-sm mt-20">
        <div className="mb-6">
          <div className="">
            <label
              className="block text-gray-500 font-bold text-left mb-1 pr-4"
              for="inline-full-name"
            >
              아이디
            </label>
          </div>
          <div>
            <input
              className="shadow appearance-none border-2 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-main-mid-green"
              id="inline-full-name"
              type="text"
              placeholder="Seunghwan Kim"
            />
          </div>
        </div>
        <div className="mb-6">
          <div>
            <label
              className="block text-gray-500 font-bold text-left mb-1 pr-4"
              for="inline-password"
            >
              비밀번호
            </label>
          </div>
          <div>
            <input
              className="shadow  appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-main-mid-green"
              id="inline-password"
              type="password"
              placeholder="********"
            />
          </div>
        </div>
        <div className="mb-6">
          <div>
            <label
              className="block text-gray-500 font-bold text-left mb-1 pr-4"
              for="confirm-password"
            >
              비밀번호 확인
            </label>
          </div>
          <div>
            <input
              className="shadow  appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  focus:border-main-mid-green"
              id="inline-password"
              type="password"
              placeholder="********"
            />
          </div>
        </div>
        <div className="mb-6">
          <div>
            <label
              className="block text-gray-500 font-bold text-left mb-1 pr-4"
              for="name"
            >
              이름
            </label>
          </div>
          <div>
            <input
              className="shadow  appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  focus:border-main-mid-green"
              id="phone -umber"
              type="text"
              placeholder="김승환"
            />
          </div>
        </div>
        <div className="mb-6">
          <div>
            <label
              className="block text-gray-500 font-bold text-left mb-1 pr-4"
              for="confirm-password"
            >
              휴대전화
            </label>
          </div>
          <div>
            <input
              className="shadow  appearance-none border-2  rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white  focus:border-main-mid-green"
              id="phone-number"
              type="text"
              placeholder="010-1234-5678"
            />
          </div>
        </div>

        <div>
          <div>
            <button
              className="shadow bg-main-dark-green hover:bg-main-mid-green focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={() => {
                navigate("/main");
              }}
            >
              시작하기
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Admin;
