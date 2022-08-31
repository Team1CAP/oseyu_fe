import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center">
      <div className="text-5xl font-bold  text-main-dark-green mt-32">
        OSEYU
      </div>
      <form className="w-full max-w-sm mt-28">
        <div className="mb-6">
          <div className="">
            <label
              className="block text-gray-500 font-bold text-left mb-1 pr-4"
              for="inline-full-name"
            >
              ID
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
              Password
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
          <label className="block text-gray-500 font-bold text-left">
            <span className="font-bold text-sm text-blue-500 hover:text-blue-800">
              비밀번호를 잊어버리셨나요?
            </span>
          </label>
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

export default Login;
