import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class NavigationButtons extends React.Component {
  render() {
    return (
      <section className="type-section">
        <Link to={`/menu`}>
          <Button variant="contained"> Back </Button>
        </Link>
        {this.props.gameState.previousConfig && (
          <Link to={`/typing/${this.props.gameState.previousConfig}`}>
            <Button variant="contained">Previous Test</Button>
          </Link>
        )}
        {this.props.gameState.nextConfig && (
          <Link to={`/typing/${this.props.gameState.nextConfig}`}>
            <Button variant="contained">Next Test</Button>
          </Link>
        )}
      </section>
    );
  }
}

export default NavigationButtons;
