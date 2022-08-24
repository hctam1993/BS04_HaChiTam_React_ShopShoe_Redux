import React, { Component } from "react";
import { dataShoe } from "./data_shoe";
import Gio_Hang from "./Gio_Hang";
import Item_Detail from "./Item_Detail";
import Lish_Shoe from "./Lish_Shoe";
import { connect } from "react-redux";

export class Shop_Shoe extends Component {
  render() {
    return (
      <div className="container">
        <Gio_Hang
        // dataGioHang={this.state.gioHang}
        // handleTang={this.handleTang}
        />
        <Lish_Shoe />
        <Item_Detail />
      </div>
    );
  }
}
export default connect()(Shop_Shoe);
