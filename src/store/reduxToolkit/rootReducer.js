import { combineReducers } from "redux"
import { baiTapMovieTicketsReducer } from "../baiTapMovieTickets/slice"

export const rootReducer = combineReducers({
    baiTapMovieTickets: baiTapMovieTicketsReducer,
})