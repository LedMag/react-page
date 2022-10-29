import { combineReducers } from "redux";
import { setErrors } from "./error";
import { loader } from "./loader";
import { setFilter } from "./setFilter";
import { setProducts } from "./setProducts";

const reducer = combineReducers({
    setProducts,
    setErrors,
    setFilter,
    loader
});

export default reducer;