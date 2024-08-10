import styled from "styled-components";

const Form = styled.div`
margin-top: 30px;
background-color: #0a3d62;
text-align: center;
`

const Table = styled.table`
text-align: center;
color: white;
margin: 0 auto;
width: 100%;
border-collapse:collapse;
`
const Input = styled.input`
width: 300px;
height: 30px;
background-color: azure;
border: none;
`

const Label = styled.label`
color: white;
font-size: 30px;
`
const Botao = styled.button`
width: 150px;
height: 30px;
background-color: #58B19F;
cursor: pointer;
margin: 15px;
color: #F8EFBA;
border: none;
font-weight: bold;

&:hover{
background-color: #3c6382;
}
`

const InputPesquisar = styled.input`
width: 300px;
height: 30px;
background-color: azure;
border: none;
`
const BotaoPesquisar = styled.button`
width: 150px;
height: 30px;
background-color: #3c6382;
cursor: pointer;
color: white;
border: none;
font-weight: bold;

&:hover{
background-color: #58B19F;
}

`

export { Form, Table, Input, Label, Botao, InputPesquisar, BotaoPesquisar }