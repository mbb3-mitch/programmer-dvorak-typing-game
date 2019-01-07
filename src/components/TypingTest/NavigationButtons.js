import React from "react";
import Button from "@material-ui/core/Button";


class NavigationButtons extends React.Component {
  render() {
    return (
      <section className="type-section">
        <Button variant="contained" onClick={() => this.props.selectGameState("menu")}>Back</Button> {this.props.gameState.previousTest &&
      <Button variant="contained" onClick={() => this.props.selectGameState("typing", this.props.gameState.previousTest)}>Previous Test</Button>
      } {this.props.gameState.nextTest &&
      <Button variant="contained" onClick={() => this.props.selectGameState("typing", this.props.gameState.nextTest)}>Next Test</Button>
      }
      </section>
    );
  }
}

export default NavigationButtons;