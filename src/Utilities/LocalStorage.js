"use strict";
import toast from "react-hot-toast";

const getallFavorite = () => {
  const all = localStorage.getItem("AddToCart");
  if (all) {
    const AddToCart = JSON.parse(all);
    return AddToCart;
  } else {
    return [];
  }
};
const addData = (id) => {
  const AddToCart = getallFavorite();
  AddToCart.push(id);
  localStorage.setItem("AddToCart", JSON.stringify(AddToCart));
  toast.success('Added to Cart!');
};
const removeAddToCart = (id) => {
  const Favorite = getallFavorite();
  const remaining = Favorite.filter(item => item.product_id !== id);
  localStorage.setItem("AddToCart", JSON.stringify(remaining));
  toast.success("Item removed from Cart!")
};


const getAddedWishlist = () => {
  const all = localStorage.getItem("Wishlist");
  if (all) {
    const Wishlist = JSON.parse(all);
    return Wishlist;
  } else {
    return [];
  }
};
const AddedWishlist = (item) => {
  const Wishlist = getAddedWishlist()
  Wishlist.push(item)
  localStorage.setItem("Wishlist", JSON.stringify(Wishlist));
  toast.success('Added to Wish-list');
}

const removeWishlist = (item) => {
  const Favorite = getAddedWishlist();
  const remaining = Favorite.filter(id => id.product_id !== item);
  localStorage.setItem("Wishlist", JSON.stringify(remaining));
  toast.success("Item removed from Wish-list !")
};
export { AddedWishlist, addData, getAddedWishlist, getallFavorite, removeAddToCart, removeWishlist };

