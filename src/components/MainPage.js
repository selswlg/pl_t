const MainPage = () => {
  return (
    <header className="top_bar">
      {/* con = container 
          mx-auto margin x축 auto 
          padding x축  p-1 : 4px p-2: 8px p-3: 12px
      */}
      <div className="con mx-auto pr-3 h-full flex items-center bg-yellow-600">
        <a href="https://www.inflearn.com/" className="logo w-32 px-3 ">
          <img src="img/logo1.png" alt="인프런 로고" />
        </a>
      </div>
    </header>
  );
};

export default MainPage;
