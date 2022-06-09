const Nav_Left = () => {
  return (
    <div className="navbar-left flex h-full tems-center ">
      <div className="navbar-item has-dropdown  ">
        <a
          href="https://www.inflearn.com/courses"
          className="navbar-item px-4 py-2 hover:text-[#00C471]"
        >
          <span>강의</span>
        </a>
      </div>
      <div className="navbar-item">
        <a
          href="https://www.inflearn.com/roadmaps"
          className="navbar-item px-4 py-2 hover:text-[#00C471]"
        >
          <span>로드맵</span>
        </a>
      </div>
      <div className="navbar-item ">
        <a
          href="https://www.inflearn.com/mentors"
          className="navbar-item px-4 py-2 hover:text-[#00C471]"
        >
          <span>멘토링</span>
        </a>
      </div>
      <div className="navbar-item has-dropdown">
        <a
          href="https://www.inflearn.com/community/questions"
          className="navbar-item px-4 py-2 hover:text-[#00C471]"
        >
          <span>커뮤니티</span>
        </a>
      </div>
      <div className="navbar-item has-dropdown">
        <a
          href="https://www.inflearn.com/positions?page=1"
          className="navbar-item px-4 py-2 hover:text-[#00C471]"
        >
          <span>채용정보</span>
        </a>
      </div>
    </div>
  );
};

export default Nav_Left;
