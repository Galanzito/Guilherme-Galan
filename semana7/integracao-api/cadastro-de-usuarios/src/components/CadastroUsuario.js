import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

const ContainerCadastro = styled.div`
    text-align:center;
    
`

const Header = styled.header`
    background-color: grey;
    height:50px;
    color:#FCC302;
    padding-top:20px;
    font-size:20px;
    margin-bottom:5rem;
    text-align:center;

`

const Inputs = styled.input`
    margin: 1px 1px;   

`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api"

class CadastroUsuario extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",

        }
    }    

    handleChangeName = (event) => {
        this.setState({ name: event.target.value })
    }

    handleChangeEmail = (event) => {
        this.setState({ email: event.target.value })
    }

    criarUsuario = () => {
        const novoUsuario = {
            name: this.state.name,
            email: this.state.email
        }

        const novoUsuarioPromessa = axios.post(`${baseUrl}/users/createUser`, novoUsuario, {
            headers: {
                'api-token': "guilherme-galan",
            }
        })

        novoUsuarioPromessa.then(response => {
            alert("Usuário criado com Sucesso!!!")
            this.setState({
                name: "",
                email: ""
            })           

        }).catch(error => {
            alert(error.response.data.message)
        })
    }   


    render() {
        return (
            <ContainerCadastro>
                <Header>Cadastro de Usuários</Header>
                    <Inputs type="text" value={this.state.name} placeholder="Nome:" onChange={this.handleChangeName} />
                    <Inputs type="text" value={this.state.email} placeholder="Email:" onChange={this.handleChangeEmail} />
                    <button onClick={this.criarUsuario}>Criar Usuário</button><hr />                 
            </ContainerCadastro>

        )
    }
}

export default CadastroUsuario;