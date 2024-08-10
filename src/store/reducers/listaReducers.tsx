//IMPORT
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//DINININDO O TIPO
type lista = {
    nome: string,
    telefone: string,
    email: string
};

//ACRESCENTANDO O TIPO STRING A LISTA
type listaTrat = {
    items: lista[]
}

//DEFININDO TIPO DO EDIT
type edit = {
    index: number,
    nome: string,
    telefone: string,
    email: string
}

//DEFININDO O INITIAL STATE
const initialState: listaTrat = {
    items: []
};

//CREATESLICE
const listaSlice = createSlice({
    name: 'lista',
    initialState,
    reducers:{
        acrescentar: (state, action: PayloadAction<lista>) => {

            state.items.push(action.payload);
         
        },
        remover: (state, action: PayloadAction<number>) =>{
            console.log(state.items.length)
            state.items.splice(action.payload, 1);
        },
        editar: (state, action: PayloadAction<edit>) =>{
            const {index, nome, telefone, email} = action.payload;
            if(state.items[index]){
                state.items[index] = {nome, telefone, email};
            }
        }

    }
})

//EXPORTANDO
export const { acrescentar, remover, editar } = listaSlice.actions
export default listaSlice.reducer