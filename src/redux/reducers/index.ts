import { combineReducers } from "redux";
import { setErrors } from "./error";
import { setProducts } from "./setProducts";

const reducer = combineReducers({
    setProducts,
    setErrors
});

export default reducer;