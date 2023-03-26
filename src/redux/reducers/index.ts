import { combineReducers } from "redux";
import { setErrors } from "./error";
import { loader } from "./loader";
import { setData } from "./setData";
import { products } from "./products";
import { setFilters, toggleFilter } from "./filters";
import { setUser } from "./user";
import { loginForm } from "./loginForm";
import { registrationForm } from "./registration";
import { productsForms } from "./productsForms";
import { lang } from "./lang";
import { product } from "./product";
import { cart } from "./cart";

const reducer = combineReducers({
    lang,
    products,
    product,
    setFilters,
    setErrors,
    setData,
    setUser,
    loader,
    loginForm,
    registrationForm,
    productsForms,
    toggleFilter,
    cart
});

export default reducer;