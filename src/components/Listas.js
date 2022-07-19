import { text } from "@fortawesome/fontawesome-svg-core";
import React, { Component } from "react";

class Listas extends Component {
  makeItems = () => {};
  render() {
    const { dataPage } = this.props;
    return (
      <div className="listas d-Flex">
        {dataPage.type.layers.map((listas, index) => {
          return (
            <Listas
              key={listas.index}
              text={listas.text}
              color={listas.color}
            />
          );
        })}
      </div>
    );
  }
}
export default Listas;
