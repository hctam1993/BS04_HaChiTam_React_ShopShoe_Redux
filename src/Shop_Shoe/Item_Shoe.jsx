import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  THEM_GIO_HANG,
  XEM_CHI_TIET,
} from "./redux/constans/ShopShoe_Constans";

export class Item_Shoe extends Component {
  render() {
    let { name, image } = this.props.detail;

    return (
      <Fragment>
        <div className="card" style={{ width: "18rem" }}>
          <img className="card-img-top" src={image} alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <button
              onClick={() => {
                this.props.handleAddToCart(this.props.detail);
              }}
              className="btn btn-success"
            >
              Add to card
            </button>
            <button
              onClick={() => {
                this.props.handleChangeDetail(this.props.detail);
              }}
              className="btn btn-primary"
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeDetail: (value) => {
      dispatch({
        type: XEM_CHI_TIET,
        payload: value,
      });
    },
    handleAddToCart: (shoe) => {
      dispatch({
        type: THEM_GIO_HANG,
        payload: shoe,
      });
    },
  };
};
export default connect(null, mapDispatchToProps)(Item_Shoe);
