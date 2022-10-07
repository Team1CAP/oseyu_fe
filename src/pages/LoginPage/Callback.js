import axios from "axios";
import React, { useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { atom, useRecoilState } from "recoil";

export const userDataState = atom({
  key: "userDataState",
  default: {
    isLogin: false,
  },
});

const Callback = () => {
  //let navigate = useNavigate();
  let code = new URL(document.URL).searchParams.get("code");
  const [userData, setUserData] = useRecoilState(userDataState); // 추후에 쪼개기 refact

  useEffect(() => {
    axios
      .get(`/api/auth/kakao/login?code=${code}`)
      .then((res) => {
        console.log(res);
        // 대충 이런느낌?
        // sessionStorage.setItem('Token', response.data.token);
        // localStorage.setItem('username', response.data.username);
        setUserData({
          ...userData,
          code: res.data.code,
          isLogin: true,
          // username: response.data.username,
          // nickname: response.data.nickname,
          // profileImgUrl: response.data.profileImgUrl

          // ~~~~
        });

        //navigate("/main");
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(userData);

  return (
    <div className="flex flex-col h-screen items-center justify-around bg-main-light-yellow">
      <div className="text-2xl font-bold  text-main-dark-green">
        로그인 중입니다.
      </div>
    </div>
  );
};

export default Callback;
