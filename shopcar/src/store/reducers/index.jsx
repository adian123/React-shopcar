const defaultState = {
  shopcarlist: [{
    "id":0,
    "img":"https://h2.appsimg.com/a.appsimg.com/upload/category/2017/12/15/21/21c580d6-1693-4cd8-a11e-4d240b1ceca7_200x375_80.png",
    "content":"电暖气",
    "txt":"进口检验合格",
    "price":456,
    "count":0,
    "ischecked":false
    }],
  total: 0,
  sum: 0
}
const ShopcarReducer = (state = defaultState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "UPDATE":
      return { ...state, shopcarlist: payload };
    case "PLUS":
      return { ...state, shopcarlist: [...payload] }
    case "MINUS":
      return { ...state, shopcarlist: [...payload] }
    case "TOTAL":
      return { ...state, total: payload }
    case "SUM":
      return { ...state, sum: payload }
    case "DEL":
    return {...state, shopcarlist: [...payload]}
    case "CHECKED":
      return { ...state, shopcarlist: [...payload] }
    default:
      return state;
  }
}
export default ShopcarReducer;

