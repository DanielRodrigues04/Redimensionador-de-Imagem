# Image Resizer

Este projeto é um **redimensionador de imagens** desenvolvido em **React**. Ele permite aos usuários carregar uma imagem, redimensioná-la para diferentes tamanhos e fazer o download da imagem redimensionada. A aplicação foi construída para ser simples de usar e responsiva, utilizando o poder do React para uma interface interativa.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção da interface de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática.
- **Ant Design (antd)**: Biblioteca de componentes UI para React, usada para construir a interface responsiva.
- **HTML5 File API**: Para lidar com o carregamento e manipulação das imagens.
- **Canvas**: Para redimensionamento da imagem.

## Funcionalidades

- Carregar uma imagem do computador.
- Redimensionar a imagem para diferentes tamanhos (configuráveis).
- Visualizar a imagem antes e depois do redimensionamento.
- Baixar a imagem redimensionada.

## Estrutura do Projeto

O projeto é composto por componentes React que lidam com a lógica de redimensionamento e a interface do usuário.

### Componentes Principais

- **ImageUploader**: Responsável por permitir o upload da imagem.
- **ImagePreview**: Exibe a imagem carregada antes e depois do redimensionamento.
- **ResizeOptions**: Permite ao usuário escolher o tamanho desejado para a imagem redimensionada.
- **DownloadButton**: Permite ao usuário fazer o download da imagem redimensionada.

## Como Rodar o Projeto

### 1. Clonar o repositório:

```bash
git clone https://github.com/DanielRodrigues04/Redimensionador-de-Imagem.git
```