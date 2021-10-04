import { CART } from './type';

export const addToCart = (product) => ({
  type: CART.ADD_TO_CART,
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: CART.REMOVE_FROM_CART,
  payload: productId,
});

export const updateProductCount = (productId, count) => ({
  type: CART.UPDATE_COUNT,
  payload: { productId, count },
});

export const toggleCart = () => ({
  type: CART.TOGGLE_CART,
});
