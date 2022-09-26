const order = {};

/* if (order && order.customer && order.customer.address && !order.customer.address.city) {
  console.log('City is required');
} */

console.log(order.customer?.address?.city ? "":'City is required')