const Main = () => {
  const user = {
    name: '안희재',
    isLogin: true,
  };

  // return <>{user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}</>;
  if (user.isLogin) {
    return <div>로그아웃</div>;
  } else {
    return <div>로그인</div>;
  }
};

export default Main;
