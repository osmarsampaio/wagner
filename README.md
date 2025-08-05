# Site do Dia dos Pais

Um site comemorativo para o Dia dos Pais, criado com HTML, CSS e JavaScript puro. Totalmente responsivo e com animações suaves.

## Estrutura do Projeto

```
site/
├── index.html          # Página principal
├── styles/
│   └── main.css       # Estilos principais
├── js/
│   └── script.js      # Funcionalidades JavaScript
└── assets/
    ├── images/        # Fotos da galeria
    ├── audio/         # Arquivos de áudio
    └── videos/        # Arquivos de vídeo
```

## Como Personalizar

### 1. Fotos da Galeria
1. Adicione suas fotos na pasta `assets/images/`
2. Atualize o array `photos` no arquivo `js/script.js` com os nomes dos seus arquivos de imagem

### 2. Data de Referência
No arquivo `js/script.js`, altere a data na linha:
```javascript
const fatherSince = new Date('2010-03-10T00:00:00');
```
para a data em que o pai se tornou pai.

### 3. Música
1. Adicione um arquivo de áudio (formato MP3) na pasta `assets/audio/`
2. Certifique-se de que o nome do arquivo no atributo `src` do elemento `<audio>` em `index.html` corresponde ao seu arquivo de áudio

### 4. Vídeos
1. Adicione seus vídeos na pasta `assets/videos/`
2. Atualize os elementos `<video>` na seção de vídeos do arquivo `index.html` com os nomes dos seus arquivos de vídeo

### 5. Mensagem Personalizada
Edite o texto na seção "Mensagem Especial" no arquivo `index.html` para personalizar a mensagem para o pai.

## Como Visualizar o Site
Basta abrir o arquivo `index.html` em qualquer navegador moderno.

## Personalização Avançada

### Cores
Você pode alterar as cores principais do site modificando as variáveis CSS no início do arquivo `styles/main.css`:

```css
:root {
    --primary-color: #1e3a8a;    /* Azul escuro */
    --secondary-color: #f59e0b;  /* Laranja */
    --accent-color: #3b82f6;     /* Azul claro */
    --light-color: #f8fafc;      /* Branco acinzentado */
    --dark-color: #1e293b;       /* Azul muito escuro */
    --text-color: #334155;       /* Cinza escuro */
}
```

### Fonte
O site usa as fontes 'Playfair Display' para títulos e 'Roboto' para o texto principal. Você pode alterá-las no Google Fonts e atualizar os links no `<head>` do `index.html`.

## Observações
- Todas as imagens, áudios e vídeos usados devem ter os direitos autorais apropriados.
- Para melhor desempenho, otimize as imagens antes de fazer o upload.
- O site é totalmente responsivo e funciona bem em dispositivos móveis e desktop.
