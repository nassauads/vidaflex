# VidaFlex

**VidaFlex** é uma aplicação web focada em fisioterapia de mobilidade, projetada para ajudar os usuários a manter e melhorar sua mobilidade através de exercícios personalizados. A aplicação oferece diferentes níveis de exercícios com base na mobilidade do usuário (Boa, Média e Crítica) e permite um gerenciamento fácil e seguro de acesso para garantir que os exercícios sejam realizados de forma apropriada.

## Funcionalidades

- **Classificação de Mobilidade**: A aplicação categoriza o nível de mobilidade do usuário em três tipos: **Boa**, **Média** e **Crítica**, e sugere exercícios específicos para cada categoria.
  
- **Acesso Restrito**: Apenas usuários autenticados podem acessar as páginas de exercícios, garantindo uma experiência segura e personalizada.

- **Sistema de Autenticação**: Inclui funcionalidades de **registro**, **login** e **logout**, com gerenciamento de sessão para manter a segurança dos dados dos usuários.

- **Saudação Personalizada**: Exibe uma mensagem de boas-vindas personalizada para usuários logados, junto com um botão de logout para facilitar a navegação.

- **Aba de Perfil do Usuário**: A aplicação conta com uma aba de perfil, onde o usuário pode visualizar e atualizar suas informações pessoais:
  - Exibição de informações: Nome de usuário e email.
  - Edição de nome: O usuário pode alterar o nome de usuário diretamente na aba de perfil, e a mudança é refletida em todas as páginas da aplicação.
  - Excluir Conta: O usuário pode excluir permanentemente sua conta. Após a exclusão, todas as informações são removidas do banco de dados, e o usuário é redirecionado para a página de login.

- **Responsividade**: Design adaptável para diferentes dispositivos, proporcionando uma experiência consistente em **desktops**, **tablets** e **smartphones**.

## Tecnologias Utilizadas

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js com Express
- **Banco de Dados**: MySQL para gerenciamento de usuários e autenticação
- **Autenticação**: Bcrypt para criptografia de senhas, Express-session para gerenciamento de sessões
- **Design**: Font Awesome para ícones, Flexbox para layout responsivo

## Como Executar o Projeto

### Pré-requisitos

- **Node.js** e **npm** instalados
- **MySQL** instalado e configurado
