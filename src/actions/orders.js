import * from '../constants/orders';

export const FetchOrdersRequest = () => ({
  type: FETCH_ORDERS_REQUEST,
});

export const FetchOrdersSuccess = (orders) => ({
  type: FETCH_ORDERS_SUCCESS,
  orders,
});

export const FetchOrders = () => {
  return (dispatch) => {
    dispatch(FetchOrdersRequest);
    return api.fetchOrders()
      .then(response => response.json())
      .then(orders => {
        dispatch(FetchOrdersSuccess(orders))
      });
  }
}

export const SubmitOrderRequest = () => ({
  type: SUBMIT_ORDER_REQUEST,
});

export const SubmitOrderSuccess = (order) => ({
  type: SUBMIT_ORDER_SUCCESS,
  order,
});

export const SubmitOrder = () => {
  return (dispatch) => {
    dispatch(SubmitOrderRequest);
    return api.submitOrder()
      .then(response => response.json())
      .then(order => {
        dispatch(SubmitOrderSuccess(order))
      });
  }
}

export const CancelOrderRequest = () => ({
  type: CANCEL_ORDER_REQUEST,
});

export const CancelOrderSuccess = (order) => ({
  type: CANCEL_ORDER_SUCCESS,
  order,
});

export const CancelOrder = () => {
  return (dispatch) => {
    dispatch(CancelOrderRequest);
    return api.cancelOrder()
      .then(response => response.json())
      .then(order => {
        dispatch(CancelOrderSuccess(order))
      });
  }
}
