export const fetchCurrencyPairs = () => fetch('http://rest.velocorner.com/rateSnapshot')

export const fetchOrders = () => fetch('http://rest.velocorner.com/retrieveOrders')

export const submitOrder = () => fetch('http://rest.velocorner.com/createOrder')

export const cancelOrder = () => fetch('http://rest.velocorner.com/cancelOrder')
