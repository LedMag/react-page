import { combineReducers } from "redux";
import { setErrors } from "./error";
import { loader } from "./loader";
import { setData } from "./setData";
import { setProducts } from "./setProducts";
import { setFilters } from "./filters";
import { setUser } from "./user";
import { loginForm } from "./loginForm";
import { registrationForm } from "./registration";
import { productsForms } from "./productsForms";

const reducer = combineReducers({
    setProducts,
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