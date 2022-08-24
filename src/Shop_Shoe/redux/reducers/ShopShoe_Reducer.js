import {
  TANG_SO_LUONG,
  THEM_GIO_HANG,
  XEM_CHI_TIET,
  XOA_GIO_HANG,
} from "../constans/ShopShoe_Constans";
import { dataShoe } from "../../data_shoe";

const initialState = {
  shoeArr: dataShoe,
  detailShoe: dataShoe[0],
  gioHang: [],
};
export let ShopShoe_Reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case XEM_CHI_TIET: {
      state.detailShoe = payload;
      return { ...state };
    }
    case THEM_GIO_HANG: {
      let cloneGioHang = [...state.gioHang];
      // console.log("payload id: ", payload.id);
      let index = state.gioHang.findIndex((item) => {
        return item.id == payload.id;
      });

      if (index == -1) {
        let spGioHang = { ...payload, soLuong: 1 };
        cloneGioHang.push(spGioHang);
      } else {
        state.gioHang[index].soLuong++;
      }
      // console.log("index: ", index);
      // console.log(" state.gioHang: ", state.gioHang);
      state.gioHang = cloneGioHang;

      return { ...state };
    }
    case XOA_GIO_HANG: {
      let index = state.gioHang.findIndex((item) => {
        return item.id == payload;
      });
      console.log("index: ", index);
      let cloneGioHang = [...state.gioHang];
      // console.log("cloneGioHang: ", cloneGioHang);

      cloneGioHang.splice(index, 1);
      state.gioHang = cloneGioHang;
      return { ...state };
    }
    case TANG_SO_LUONG: {
      let index = state.gioHang.findIndex((item) => {
        return item.id == payload.id;
      });
      let cloneGioHang = [...state.gioHang];
      if (payload.bool == true) {
        cloneGioHang[index].soLuong++;
      } else {
        cloneGioHang[index].soLuong--;
        if (cloneGioHang[index].soLuong == 0) {
          cloneGioHang.splice(index, 1);
        }
      }
      state.gioHang = cloneGioHang;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
