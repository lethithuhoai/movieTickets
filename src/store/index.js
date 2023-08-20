import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './reduxToolkit/rootReducer'

// export const store = createStore(
//     rootReducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )


export const store = configureStore({
    reducer: rootReducer,
    devTools: true, // extention redux dev tool
})
