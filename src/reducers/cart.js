import { CART } from '../actions/type';

const initialState = {
  cartItems: [],
  subTotal: 0,
  total: 0,
  coupon: null,
  showCart: true,
};

const addItemToCart = (items, product) => {
  let itemExists = false;

  const newItems = (items || []).map((item) => {
    if (item.product.id === product.id) {
      itemExists = true;
      item.count++;
      item.total = item.count * item.product.price;
    }
    return item;
  });

  if (!itemExists) {
    newItems.push({
      count: 1,
      product,
      total: product.price,
    });
  }

  return newItems;
};

const removeItemFromCart = (items, productId) => {
  return items.filter((item) => item.product.id !== productId);
};

const findTotal = (cartItems) => {
  return (cartItems || []).reduce((total, item) => total + item.total, 0);
};

const updateProductCount = (items, newCount, productId) => {
  return items.map((item) => {
    if (item.product.id === productId) {
      item.count = newCount;
      item.total = newCount * item.product.price;
    }
    return item;
  });
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CART.ADD_TO_CART: {
      const newCartItems = addItemToCart(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: newCartItems,
        total: findTotal(newCartItems),
      };
    }

    case CART.REMOVE_FROM_CART: {
      const newCartItems = removeItemFromCart(state.cartItems, action.payload);
      return {
        ...state,
        cartItems: newCartItems,
        total: findTotal(newCartItems),
      };
    }

    case CART.UPDATE_COUNT: {
      const newCartItems = updateProductCount(
        state.cartItems,
        action.payload.count,
        action.payload.productId
      );
      return {
        ...state,
        cartItems: newCartItems,
        total: findTotal(newCartItems),
      };
    }

    case CART.TOGGLE_CART: {
      return {
        ...state,
        showCart: !state.showCart,
      };
    }

    default:
      return state;
  }
};
