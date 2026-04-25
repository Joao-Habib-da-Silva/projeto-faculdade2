# ECOGUIA
O ECOGUIA é um projeto de estudantes criado com o intuíto que seja criado um projeto que envolva a sustenatabilidade ou a ecologia, dessa forma, o site tem como foco a ODS 12, ODS essa que é uma que mais está atrelada com a área da Ecologia.

# ODS 12
A ODS 12 visa assegurar os padrões sustentaveis, tendo um envolvimento com a gestão inteligente de resíduos e materiais reciclaveis.
Tendo em vista isso, o site foi criado como inserir, treinar e informar maneiras de manuseio e gestão ecológica para essas situações.

# Design:
O site tem seu design elaborado por meio do Figma, segue o link do projeto:
[Figma design](https://www.figma.com/design/05YEyYjY2MV21hZ7mprDxD/Untitled?node-id=4-11&t=HOP2BvJlP3MzcVrq-1)
Para o design ter sido feito foi necessário ferramentas como Adobe Colors, Google Fonts, Figma, Canva, Unplash, MockupStudio, o uso de alguns plugins para interligação e ter um desgin explicativo para o Desenvolvedor, como por exemplo o plugin Autoflow.
Além disso, o uso de componentes e transformando alguns códigos Hex em um tipo de biblioteca para o Figma torna o desenvolvimento de nosso design do site mais organizado e limpo, além de que uma boa organização de árvore de estrutura de elementos.

# Estrutura de arquivos
O site possuí sua base de arquivos:

```text
Diretório
│
├── 📁 Assets
│    ├── 📁 CSS
│    │    ├ contato.css
│    │    ├ global.css
│    │    ├ index.css
│    │    ├ metodo.css
│    │    ├ sobre.css
│    │    └ teste.css
│    │
│    ├── 📁 Fonts
│    │    ├ BebasNeue-Regular.ttf
│    │    └ Roboto-VariableFont_wdth,wght.ttf
│    │
│    ├── 📁 IMG
│    │    ├ logotipo.svg
│    │    └ mockup-home-page.jpg
│    │
│    └── 📁 Javascript
│         ├ 📁Json
│         ├ 📁 Modules
│         │  ├─ darkmode.js
│         │  ├─ menu.js
│         │  └─ transition.js
│         └─ index.js             
├── 📁 Pages
│    ├ ...    
│
├── index.html
├── .gitignore
└── readme.md
```

# Escolha de paleta de cores, logotipo e de fonte utilizada para o site
A segunda parte de um site seria a imagem que deveriamos passar para ele, não basta apenas escolher uma cor qualquer e pronto, não existe todo um procedural para tudo ser feito.

## Escolha do tema
Primeiro temos que focar em que imagem queremos passar, queremos passar uma temática conciente, e além disso, que envolve sustentabilidade, e além de tudo, qualidade.
Pensando nisso o site tem que atribuir cores relacionadas a sustentabilidade, 2 fontes, uma mais robusta mas que porta para muitas situações, e uma corporal, usada para os textos demonstrados no site em geral. Tem que ter uma estética mais "clean", minimalista. E além de tudo isso, ele tem que ser facil para o usuário e bonito de se usar, ou seja, o uso de menus simples com integração de transições é uma ótima opção.

## Fontes
Bom pensando nisso, a fonte robusta que escolhi foi o bom Bebas Neue, bonito, cumpre sua função e não tem serifa, algo que seria inapropriado para a ideia que estamos propondo.
A fonte corporal mais usada, slim e que porta a qualquer situação que iremos usar será a Roboto, embora ter a disputa entre Poppins e Roboto, mas Roboto com seu design mecânico atraiu mais os olhares, ao contrário do Poppins com suas formas circulares.

## Cores
Como nosso objetivo é ter um foco ambiental e ecológico, iremos usar de cores de tons verdes, segue a paleta feita no CSS:
```css
:root {
    --bg:#b7e4c7;
    --font:#081C15;
    --hover:#A7C957;
}
:root.dark {
    --bg:#1b4332;
    --font:#E9F5DB;
    --hover:#588157;
}
```