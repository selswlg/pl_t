import Nav_Left from "./Nav_Left";
import Nav_Right from "./Nav_Right";

const MainPage = () => {
  return (
    <header className="top_bar h-16">
      {/* con = container 
          mx-auto margin x축 auto 
          padding x축  p-1 : 4px p-2: 8px p-3: 12px
      */}
      <div className=" con mx-auto px-2.5 h-full flex items-center bg-white-600">
        {/* 로고 */}
        <div className="brand-header w-32 mr-[10px]">
          <a href="https://www.inflearn.com/" className="brand-logo  ">
            <img src="img/logo1.png" alt="인프런 로고" />
          </a>
        </div>

        {/* 메뉴바 */}
        <div className="navbar-menu flex w-[67rem] grow justify-between items-center">
          <Nav_Left />
          <Nav_Right />
        </div>
      </div>
    </header>
  );
};

export default MainPage;
