import React from "react";
import { Link } from "react-router-dom";
import className from "classnames";

class Nav extends React.Component {
  constructor() {
    super();
    this.state = {
      collapse: true,
    };
  }

  toggleCollapse = () => {
    const collapse = !this.state.collapse;
    this.setState({ collapse });
  };

  render() {
    const location = this.props.location;
    const homeClass = location.pathname === "/" ? "active" : "";
    const todosClass = location.pathname.match(/^\/todos/) ? "active" : "";
    const favoritesClass = location.pathname.match(/^\/favorites/)
      ? "active"
      : "";
    const settingsClass = location.pathname.match(/^\/settings/)
      ? "active"
      : "";
    const collapseClass = this.state.collapse ? "collapse" : "";
    return (
      <nav>
        <ul>
          <li className={homeClass}>
            <Link to="/" onClick={this.toggleCollapse}>
              Home
            </Link>
          </li>
          <li className={todosClass}>
            <Link to="/todos/main" onClick={this.toggleCollapse}>
              Todo
            </Link>
          </li>
          <li className={favoritesClass}>
            <Link to="/favorites/main" onClick={this.toggleCollapse}>
              Favorites
            </Link>
          </li>
          <li className={settingsClass}>
            <Link to="/settings/main" onClick={this.toggleCollapse}>
              Setting
            </Link>
          </li>
          <li className={"login"}>
            <Link to="/login/main" onClick={this.toggleCollapse}>
              login
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
