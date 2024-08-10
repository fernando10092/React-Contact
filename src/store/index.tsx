import { configureStore } from "@reduxjs/toolkit";
import listaReducer from "./reducers/listaReducers";
import meuReducero from "./reducers/adicionarReducer";
import filtroSlice from "./reducers/filtroReducer";

export const store = configureStore({
    reducer: {
        lista: listaReducer,
        listagem: meuReducero,
        filtro: filtroSlice,      
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
