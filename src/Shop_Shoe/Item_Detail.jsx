import React, { Component } from "react";
import { connect } from "react-redux";

export class Item_Detail extends Component {
  render() {
    let { image, name, price, description } = this.props.itemDetail;
    return (
      <div className="container p-5">
        <div className="row border">
          <div className="col-4">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-8 text-left">
            <h2>{name}</h2>
            <p className="bg-warning d-inline">{price}$</p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    itemDetail: state.ShopShoe_Reducer.detailShoe,
  };
};

export default connect(mapStateToProps)(Item_Detail);
