import { configureStore } from "@reduxjs/toolkit";
import { modeReducer } from "./mode-slice/mode-slice";


const store = configureStore({
    reducer: {
        mode:modeReducer,
    }, 
        
   devTools: true, 
}
)

export default store