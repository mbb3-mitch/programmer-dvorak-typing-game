import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class NavigationButtons extends React.Component {
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown(e) {
    const { previousConfig, nextConfig, navigationPath } = this.props.gameState;
    if (e.which === 78 && e.ctrlKey && e.altKey && nextConfig) {
      window.location.href = `/typing/${navigationPath}/${nextConfig}`;
    }
    if (e.which === 80 && e.ctrlKey && e.altKey && previousConfig) {
      window.location.href = `/typing/${navigationPath}/${previousConfig}`;
    }
  }

  render() {
    const { previousConfig, nextConfig, navigationPath } = this.props.gameState;
    return (
      <section className="type-section">
        <Link to={`/menu`}>
          <Button variant="contained"> Back </Button>
        </Link>
        {previousConfig && (
          <Link to={`/typing/${navigationPath}/${previousConfig}`}>
            <Button variant="contained">Previous Test</Button>
          </Link>
        )}
        {nextConfig && (
          <Link to={`/typing/${navigationPath}/${nextConfig}`}>
            <Button variant="contained">Next Test</Button>
          </Link>
        )}
      </section>
    );
  }
}

export default NavigationButtons;
