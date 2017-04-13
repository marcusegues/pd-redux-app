export const fetchCurrencyPairs = () => fetch('http://rest.velocorner.com/rateSnapshot')

export const fetchOrders = () => fetch('http://rest.velocorner.com/retrieveOrders')

export const submitOrder = (order) => {
  return fetch('http://rest.velocorner.com/createOrder', {
    method: 'POST',
    body: JSON.stringify(order)
  });
}

export const cancelOrder = (id) => {
  return fetch('http://rest.velocorner.com/cancelOrder', {
    method: 'POST',
    body: JSON.stringify(id)
  })
}
