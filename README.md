
# Projeto de Teste para a BeTalent

Este projeto foi desenvolvido como parte de um teste para a empresa **BeTalent**. O objetivo é exibir uma lista de funcionários em uma interface que se adapta a diferentes dispositivos (web e mobile), seguindo o layout fornecido no Figma.

## 🚀 Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para desenvolvimento moderno.
- **TypeScript**: Adiciona tipagem estática ao JavaScript.
- **Styled Components**: Biblioteca para estilização de componentes com CSS-in-JS.
- **Zustand**: Biblioteca de gerenciamento de estado leve e simples.
- **JSON Server**: Simula uma API RESTful para fornecer dados de funcionários.
- **React Icons**: Biblioteca de ícones para React.

---

## 📋 Funcionalidades

1. **Listagem de Funcionários**:
   - Exibe uma lista de funcionários com foto, nome, cargo, data de admissão e telefone.
   - Os dados são obtidos de um arquivo `db.json` usando o `json-server`.

2. **Layout Responsivo**:
   - O projeto usa um **hook personalizado** (`useScreenSize`) para detectar se a tela é mobile ou desktop.
   - Em dispositivos móveis, a lista é exibida em formato de cards.
   - Em desktops, a lista é exibida em formato de tabela.

3. **Expansão de Detalhes**:
   - No layout mobile, ao clicar em um card, os detalhes do funcionário (cargo, data de admissão e telefone) são expandidos.

4. **Pesquisa de Funcionários**:
   - Um campo de pesquisa permite filtrar os funcionários pelo nome, telefone ou cargo.

5. **Estilização com Tema**:
   - O projeto usa um tema global com cores e fontes definidas, seguindo o design do Figma.

---

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

- **Node.js**: Certifique-se de ter o Node.js instalado na sua máquina.
- **Git**: Para clonar o repositório.

### Passo a Passo

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/seu-usuario/teste-frontend.git
   cd teste-frontend
   ```

2. **Instale as dependências**:
   ```bash
   npm install
   ```
   Ou, se estiver usando Yarn:
   ```bash
   yarn install
   ```

3. **Inicie o servidor de desenvolvimento**:
   O projeto usa o `json-server` para simular uma API e o Vite para rodar o React. Para iniciar ambos simultaneamente, execute:
   ```bash
   npm run start
   ```
   Ou, se estiver usando Yarn:
   ```bash
   yarn start
   ```

4. **Acesse o projeto**:
   - O `json-server` estará rodando em `http://localhost:3000`.
   - O servidor de desenvolvimento do React estará rodando em `http://localhost:5173`.

---

## 🧩 Detalhes Técnicos

### Hook `useScreenSize`
O hook `useScreenSize` detecta o tamanho da tela e retorna um valor booleano (`isMobile`) que indica se a tela é mobile ou desktop. Isso permite que o projeto alterne entre layouts diferentes com base no dispositivo.

```typescript
const { isMobile } = useScreenSize();
return isMobile ? <EmployeeTableMobile /> : <EmployeeTableWeb />;
```

### JSON Server
O `json-server` simula uma API RESTful usando um arquivo `db.json`. Ele é configurado para rodar na porta `3000` e fornece os dados dos funcionários.

Exemplo de `db.json`:
```json
{
  "employees": [
    {
      "id": 1,
      "name": "Giovana L. Arruda",
      "job": "Desenvolvedora",
      "admission_date": "2019-12-02T00:00:00.000Z",
      "phone": "(11) 99999-9999",
      "image": "https://via.placeholder.com/150"
    }
  ]
}
```

### Layout Responsivo
- **Web**: A lista é exibida em formato de tabela, com colunas para foto, nome, cargo, data de admissão e telefone.
- **Mobile**: A lista é exibida em formato de cards, com um botão para expandir os detalhes.

---

## 📝 Considerações Finais

Este projeto foi desenvolvido com foco em boas práticas de desenvolvimento, como:
- **Componentização**: Reutilização de componentes para manter o código limpo e organizado.
- **Responsividade**: Adaptação do layout para diferentes dispositivos.
- **Gerenciamento de Estado**: Uso do Zustand para gerenciar o estado da aplicação de forma eficiente.

---

## 🙌 Agradecimentos

Agradeço à equipe da **BeTalent** pela oportunidade de participar deste teste. Espero que o projeto atenda às expectativas e demonstre minhas habilidades técnicas.

---

Feito com ❤️ por Rodrigo Augusto Silva lima(https://github.com/rodrigoaslima/).