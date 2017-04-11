export const fetchCurrencyPairs = () => fetch('http://rest.velocorner.com/rateSnapshot')

export const fetchOrders = () => fetch('http://rest.velocorner.com/retrieveOrders')

export const submitOrder = (order) => {
  return fetch('http://rest.velocorner.com/createOrder', {
    method: 'POST',
    body: order
  });
}

export const cancelOrder = () => fetch('http://rest.velocorner.com/cancelOrder')
