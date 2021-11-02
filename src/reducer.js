const reducer = (state,action)=>{
    
    if (action.type === "ADD_TO_CART") {
      const item = action.payload;
      const { _id: itemId } = item;
      let newCart;
      const checkItem = state.cart.find((cartItem) => {
        const { _id: id } = cartItem;
        return id === itemId;
      });
      if (checkItem) {
        return { ...state };
      } else {
        newCart = [...state.cart, item];
        return { ...state, cart: newCart };
      }
      return { state };
    } else if (action.type === "REMOVE_FROM_CART") {
      return {
        ...state,
        cart: state.cart.filter((cartItem) => {
          const { _id: id } = cartItem;
          return id !== action.payload;
        }),
      };
    } else if (action.type === "LOADING") {
      return { ...state, loading: true };
    } else if (action.type === "DISPLAY_ITEMS") {
      return { ...state, products: action.payload, loading: false };
    } else if (action.type === "GET_SINGLE_PRODUCT_REQUEST") {
      return { ...state, loading: false, product: action.payload };
    } else if (action.type === "UPDATE_CART") {
      const tempTotal = state.cart.reduce((qty,item)=>{
        return Number(item.itemQty)+qty
      },0)
      const tempAmount = state.cart.reduce((totalPrice,cartItem)=>{
        const {price,itemQty} =cartItem
            return Number(price*itemQty)+totalPrice
      },0)
      return { ...state, total:tempTotal,amount:tempAmount};
    }
    
    

    return state
}

export default reducer;