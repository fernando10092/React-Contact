import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//DEFININDO O TIPO
type lista = {
    nome: string,
    telefone: string,
    email: string
}

//DEFININDO O INITIAL STATE
const initialState: lista = {
    nome: "",
    telefone: "",
    email: ""
}

//CRIANDO O SLICE
const meuReducero = createSlice({
    name: "listagem",
    initialState,
    reducers: {
        nome: (state, action: PayloadAction<string>) => {        
            state.nome += action.payload;
        },
        telefone: (state, action: PayloadAction<string>) => {
            state.telefone += action.payload;
        },
        email: (state, action: PayloadAction<string>) =>{
            state.email += action.payload;
        }
        

    }
})

//EXPORTANDO
export const { nome, telefone, email } = meuReducero.actions
export default meuReducero.reducer