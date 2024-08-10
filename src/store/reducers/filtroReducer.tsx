import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//DEFININDO O TIPO
type filtro = {
    nome: string;
};

//DEFININDO O STATE
const initialState: filtro = {
    nome: ""
};

//CRIANDO O SLICE
const filtroSlice = createSlice({
    name: "filtro",
    initialState,
    reducers: {
        filtrando: (state, action: PayloadAction<string>) => {
            state.nome = action.payload; // Atualiza o estado do filtro
        }
    }
});

//EXPORTANDO
export const { filtrando } = filtroSlice.actions;
export default filtroSlice.reducer;
