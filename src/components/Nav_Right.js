import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Nav_Right = () => {
  return (
    //
    <div className="navbar-right flex items-center">
      <div className="search_bar px-2 py-1 relative ">
        <input
          type="text"
          className="input-text bg-[#F6F6F6] rounded-sm py-1 px-2 outline-[#00C471]"
          size="12"
        />
        <span className="search_icon absolute bottom-1.5 right-4 ">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            className="text-[#4a4a4a]"
          />
        </span>
      </div>
      <a href="#" className="navbar-item px-3 py-2 hover:text-[#00C471] ">
        지식공유참여
      </a>
      <div className="navbar-item px-3 py-2 text-white">
        <a href="#" role="button" className="bg-[#00C471] p-2 rounded-md">
          <FontAwesomeIcon icon={faPencil} />
          <span className="m-1">최근강의</span>
        </a>
      </div>

      <div className="navbar-item px-3 py-2">
        <span className="cart_hoverable ">
          <span className="nav_cart_btn">
            <a href="#" className="icon_cover  ">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </span>
        </span>
      </div>

      <div className="navbar-item px-3 py-2">
        <span className="message_hoverable ">
          <span className="nav_message_btn">
            <a href="#" className="icon_cover ">
              <FontAwesomeIcon icon={faBell} />
            </a>
          </span>
        </span>
      </div>

      <div className="navbar-item w-6 h-12 ">
        <span className="profile_hoverable ">
          <span className="nav_profile_btn ">
            <a href="#" className="dashboard ">
              <img
                src="img/default_profile.png"
                alt="profile_img"
                className="rounded-full max-w-full max-h-full"
              />
            </a>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Nav_Right;
