import axios from "axios";
const Callback = () => {
  let params = new URL(document.URL).searchParams;
  let code = params.get("code");
  //cors오류찾기
  axios
    .get(`http://43.200.157.167:3000/api/auth/kakao/login?code=${code}`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <div className="flex flex-col h-screen items-center justify-around bg-main-light-yellow">
      <div className="text-2xl font-bold  text-main-dark-green">
        로그인 중입니다.
      </div>
    </div>
  );
};

export default Callback;
