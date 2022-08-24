import React, { Component } from "react";
import { connect } from "react-redux";
import Item_Shoe from "./Item_Shoe";

export class Lish_Shoe extends Component {
  render() {
    return (
      <div className="row">
        {this.props.data.map((item, index) => {
          return (
            <div className="col-3" key={item.id + index.toString()}>
              <Item_Shoe detail={item} />
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.ShopShoe_Reducer.shoeArr,
  };
};
export default connect(mapStateToProps)(Lish_Shoe);
