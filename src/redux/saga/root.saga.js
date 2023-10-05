import {all, fork} from "redux-saga/effects"
import { product } from "./product.saga"

export function* root() {
    yield all([
        fork(product)
    ])
}