import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const Nav_Right = () => {
  return (
    //
    <div className="navbar-right flex items-center">
      <div className="search_bar px-4 py-2">
        <input type="text" className="input-text bg-[#D2D9DD]" />
        <span className="search_icon">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>
      <a href="#" className="navbar-item px-4 py-2">
        지식공유참여
      </a>
      <div className="navbar-item px-4 py-2">
        <a href="#" role="button">
          <FontAwesomeIcon icon={faPencil} />
          <span>최근강의</span>
        </a>
      </div>

      <div className="navbar-item px-4 py-2">
        <span className="cart_hoverable ">
          <span className="nav_cart_btn">
            <a href="#" className="icon_cover ">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </span>
        </span>
      </div>

      <div className="navbar-item px-4 py-2">
        <span className="message_hoverable ">
          <span className="nav_message_btn">
            <a href="#" className="icon_cover ">
              <FontAwesomeIcon icon={faBell} />
            </a>
          </span>
        </span>
      </div>

      <div className="navbar-item w-6 ">
        <span className="profile_hoverable ">
          <span className="nav_profile_btn">
            <a href="#" className="dashboard ">
              <img
                src="img/default_profile.png"
                alt="profile_img"
                className="rounded-full"
              />
            </a>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Nav_Right;
