import SidebarStyle from "./SidebarStyle";
import { FormattedMessage } from "react-intl";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";

const Sidebar = () => {
  const language = useContext(LangContext);

  return (
    <SidebarStyle id="menu">
      <div className="container">
        <div className="image">
          <a href="#">
            <img
              src="https://avatars.githubusercontent.com/u/55628495"
              alt="Perfil"
            />
          </a>
        </div>
        <div className="author-content">
          <h4>
            <FormattedMessage id="sidebar.name" defaultMessage="AJ Derteano" />
          </h4>
          <span>
            <FormattedMessage id="sidebar.profession" defaultMessage="" />
          </span>
        </div>
        <div className="social-links">Social links</div>
        <div>
          <button
            onClick={() => {
              language.handleLanguage("es-PE");
            }}
          >
            ES
          </button>{" "}
          |{" "}
          <button
            onClick={() => {
              language.handleLanguage("en-US");
            }}
          >
            EN
          </button>
        </div>
        <div className="copy-right">footer</div>
      </div>
    </SidebarStyle>
  );
};

export default Sidebar;
