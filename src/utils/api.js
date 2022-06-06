import orders from '../Store/Orders.json'
 const getOrders = (mobileNo) => {
     
     const result = orders.filter((order) => order.mobileNo === mobileNo);
    result.sort(function(a,b) {return new Date(a.timestamp) - new Date(b.timestamp)})
    return result
}
export default getOrders;