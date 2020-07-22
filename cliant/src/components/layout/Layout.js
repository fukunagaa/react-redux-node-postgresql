import React from "react";
import { withRouter } from "react-router-dom";

import Nav from "../navBar/Nav";

class Layout extends React.Component {
  render() {
    const { location } = this.props;
    console.log(this.props);
    return (
      <div>
        <Nav location={location} />
        <h1>Welcome!</h1>
        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Layout);