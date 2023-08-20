import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    chairBookings: [],
    chairBookeds: [],
}

const baiTapMovieTicketsSlice = createSlice({
    name: 'baiTapMovieTickets',
    initialState,
    reducers: {
        // trong này chính là nơi điền actions
        setChairBookings: (state, action) => {
            const index = state.chairBookings.findIndex((item) => item.soGhe === action.payload.soGhe)
            if (index != -1) {
                state.chairBookings.splice(index, 1)
            } else {
                state.chairBookings.push(action.payload)
            }
            // immerjs
        },
        setChairBookeds: (state, action) => {
            state.chairBookeds = [...state.chairBookeds, ...state.chairBookings]
            state.chairBookings = []
        }

    }, // xử lý action đồng bộ
    // extraReducer là 1 cái func, nhận vào 1 tham số, dùng để xử lý bất đồng bộ  (call api)
    extraReducers: () => { }
})
export const { reducer: baiTapMovieTicketsReducer, actions: baiTapMovieTicketsActions } = baiTapMovieTicketsSlice