# node-extras-app-alunos

API REST simples com Node.js, Express e MySQL para gerenciar produtos e usuários.

## 🚀 Visão geral

Este projeto expõe endpoints para:
- Listar produtos e produto por ID (MySQL)
- Criar, atualizar e remover produtos (MySQL)
- Operações CRUD básicas em usuários em memória (array)

## ▶️ Requisitos

- Node.js 16+ instalado
- MySQL acessível (já configurado no código com host, usuário, senha, database)

## 🧭 Como rodar

1. Clone o repositório
2. Instale dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor:
   ```bash
   node index.js
   ```
4. Acesse: `http://localhost:3000`

## 🧩 Endpoints da API

### Produtos (MySQL)

- `GET /produtos`
  - Retorna todos os produtos (`SELECT * FROM produtos ORDER BY id DESC`)

- `GET /produto/:id`
  - Retorna o produto com o ID informado

- `POST /produto`
  - Insere novo produto. Enviar JSON no body com os campos da tabela `produtos`
  - Exemplo:
    ```json
    {
      "nome": "Caneca",
      "preco": 29.9,
      "estoque": 12
    }
    ```

- `PUT /produto/:id`
  - Atualiza produto por ID. Enviar JSON com os campos a alterar.
  - Exemplo:
    ```json
    {
      "nome": "Caneca Nova",
      "preco": 35.5
    }
    ```

- `DELETE /produto/:id`
  - Remove produto por ID

### Usuários (in-memory)

- `GET /usuarios`
  - Retorna lista de usuários em memória

- `POST /usuarios`
  - Adiciona usuário. Body JSON: `{ "nome": "novo" }`

- `PUT /usuarios/:id`
  - Atualiza usuário pelo índice (1-based). Body JSON: `{ "nome": "atualizado" }`

- `DELETE /usuarios/:id`
  - Remove usuário pelo índice (1-based)

## 🔐 Observações importantes

- A conexão MySQL está hardcoded em `index.js`. Para produção, use variáveis de ambiente e validação.
- O endpoint de usuários não persiste depois que o servidor reinicia.
- O projeto funciona como exemplo básico de CRUD com Express + MySQL.

## ✅ Melhorias sugeridas

- Usar `.env` para credenciais de banco
- Validar dados de entrada com `express-validator` ou JOI
- Implementar tratamento de erros mais robusto
- Separar rotas/controllers em módulos


