import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { useState } from 'react';
import { acrescentar, remover, editar } from '../store/reducers/listaReducers';
import { filtrando } from '../store/reducers/filtroReducer';
import { Form, Input, Table, Label, Botao } from './main';

const Inputs = () => {

    //USESELECTOR E DISPATCH
    const select = useSelector((state: RootState) => state.lista.items);
    const filtroNome = useSelector((state: RootState) => state.filtro.nome);
    const dispatch = useDispatch();

    //USESTATE
    const [inpNome, setInpNome] = useState<string>("");
    const [inpTelefone, setInpTelefone] = useState<string>("");
    const [inpEmail, setInpEmail] = useState<string>("");
    const [editIndex, setEditIndex] = useState<number | null>(null);

    // Filtrando os itens com base no nome
    const filteredItems = select.filter((item) =>
        item.nome.toLowerCase().includes(filtroNome.toLowerCase())
    );

    // FUNCAO DE ADICIONAR
    const addList = () => {
        if (editIndex !== null) {
            dispatch(editar({ index: editIndex, nome: inpNome, telefone: inpTelefone, email: inpEmail }));
            setEditIndex(null);
        } else {
            dispatch(acrescentar({ nome: inpNome, telefone: inpTelefone, email: inpEmail }));
        }
        setInpNome("");
        setInpTelefone("");
        setInpEmail("");
    };

    // FUNCAO DE REMOVER
    const removeList = (index: number) => {
        dispatch(remover(index));
    };

    // FUNCAO DE EDITAR
    const editList = (index: number) => {
        const item = select[index];
        setInpNome(item.nome);
        setInpTelefone(item.telefone);
        setInpEmail(item.email);
        setEditIndex(index);
    };

    // FUNCAO DE PESQUISA
    const buscar = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filtrando(event.target.value));
    };

    // RETURNO HTML
    return (
        <>
            <Form>
                <div>
                    <Label>Lista de Contatos</Label>
                </div>

                <div>
                    <Input
                        value={inpNome}
                        onChange={(event) => setInpNome(event.target.value)}
                        type="text"
                        placeholder="Nome"
                    /> <br />
                    <Input
                        value={inpTelefone}
                        onChange={(event) => setInpTelefone(event.target.value)}
                        type="text"
                        placeholder="Telefone"
                    /><br />
                    <Input
                        value={inpEmail}
                        onChange={(event) => setInpEmail(event.target.value)}
                        type="email"
                        placeholder="E-mail"
                    /><br />
                    <Botao onClick={addList}>{editIndex !== null ? "Atualizar" : "Adicionar"}</Botao>
                </div>

                <Input
                    type="text"
                    placeholder="Pesquisar por nome..."
                    onChange={buscar}
                />
            </Form>

            <Table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>E-mail</th>
                        <th>Editar</th>
                        <th>Apagar</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredItems.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.nome}</td>
                            <td>{item.telefone}</td>
                            <td>{item.email}</td>
                            <td><button onClick={() => editList(index)}>Editar</button></td>
                            <td><button onClick={() => removeList(index)}>X</button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
};

//EXPORTANDO
export default Inputs;
