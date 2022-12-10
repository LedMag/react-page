import { combineReducers } from "redux";
import { setErrors } from "./error";
import { loader } from "./loader";
import { setData } from "./setData";
import { products } from "./products";
import { setFilters } from "./filters";
import { setUser } from "./user";
import { loginForm } from "./loginForm";
import { registrationForm } from "./registration";
import { productsForms } from "./productsForms";
import { lang } from "./lang";

const reducer = combineReducers({
    lang,
    products,
    setFilters,
    setErrors,
    setData,
    setUser,
    loader,
    loginForm,
    registrationForm,
    productsForms,
});

export default reducer;