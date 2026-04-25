const input = document.getElementById("input-search");
const desc = document.getElementById("container-info-desc");
const img = document.getElementById("container-info-img");
const dados = [
  {
    material: "Plástico PET",
    tipo: "plástico",
    descricao: "Usado em garrafas e embalagens de bebidas.",
    como_reciclar: [
      "Lavar bem a embalagem",
      "Remover rótulos e tampas",
      "Amassar para reduzir volume",
      "Descartar na lixeira vermelha"
    ],
    imagem: "https://images.unsplash.com/photo-1601507793214-77d2a926582a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    material: "Vidro",
    tipo: "inorgânico",
    descricao: "Material 100% reciclável sem perda de qualidade.",
    como_reciclar: [
      "Lavar antes do descarte",
      "Separar por cor quando possível",
      "Evitar quebrar o vidro",
      "Descartar na lixeira verde"
    ],
    imagem: "https://plus.unsplash.com/premium_photo-1675490807721-1c8e721f6856?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1514651029128-173d2e6ea851?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    material: "Alumínio",
    tipo: "metal",
    descricao: "Altamente reciclável e econômico.",
    como_reciclar: [
      "Lavar latas de bebida",
      "Amassar para otimizar transporte",
      "Separar de outros resíduos",
      "Descartar na lixeira amarela"
    ],
    imagem: "https://images.unsplash.com/photo-1617565084935-4e63d2a1b241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    material: "Papel",
    tipo: "papel",
    descricao: "Reciclável e sustentável dependendo da qualidade.",
    como_reciclar: [
      "Manter seco e limpo",
      "Evitar papel engordurado",
      "Dobrar ou empilhar",
      "Descartar na lixeira azul"
    ],
    imagem: "https://images.unsplash.com/photo-1586074299757-dc655f18518c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    material: "Eletrônicos",
    tipo: "resíduo eletrônico",
    descricao: "Contêm metais e substâncias perigosas.",
    como_reciclar: [
      "Não jogar no lixo comum",
      "Levar a pontos de coleta especializados",
      "Usar logística reversa de lojas",
      "Descartar em ecopontos"
    ],
    imagem: "https://images.unsplash.com/photo-1592659762303-90081d34b277?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    material: "Papelão",
    tipo: "papel",
    descricao: "Muito usado em embalagens e caixas.",
    como_reciclar: [
      "Desmontar caixas",
      "Remover fitas e plásticos",
      "Manter seco",
      "Descartar na lixeira azul"
    ],
    imagem: "https://images.unsplash.com/photo-1700165644892-3dd6b67b25bc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    material: "Plástico HDPE",
    tipo: "plástico",
    descricao: "Usado em frascos de limpeza e higiene.",
    como_reciclar: [
      "Lavar resíduos internos",
      "Remover tampas",
      "Esvaziar completamente",
      "Descartar na lixeira vermelha"
    ],
    imagem: "https://www.nexeoplastics.com/assets/images/news/HDPE%20Thumbnail.jpg"
  },
  {
    material: "Baterias",
    tipo: "resíduo perigoso",
    descricao: "Altamente tóxicas se descartadas incorretamente.",
    como_reciclar: [
      "Não descartar no lixo comum",
      "Armazenar separadamente",
      "Levar a ecopontos",
      "Usar pontos de coleta especializados"
    ],
    imagem: "https://images.unsplash.com/photo-1592318348310-f31b61a931c8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    material: "Óleo de cozinha",
    tipo: "resíduo orgânico",
    descricao: "Pode contaminar água e solo se descartado incorretamente.",
    como_reciclar: [
      "Armazenar em garrafa PET",
      "Não jogar na pia",
      "Levar a pontos de coleta",
      "Reutilizar para produção de sabão"
    ],
    imagem: "https://images.unsplash.com/photo-1627436712678-960862eac951?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    material: "Latas de aerosol",
    tipo: "metal",
    descricao: "Podem ser perigosas se não estiverem vazias.",
    como_reciclar: [
      "Garantir que estejam vazias",
      "Não perfurar",
      "Separar de outros metais",
      "Descartar corretamente na coleta seletiva"
    ],
    imagem: "https://images.unsplash.com/photo-1635766054474-ebaba5355bd9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    material: "Tetrapak",
    tipo: "multicamadas",
    descricao: "Embalagem composta por papel, plástico e alumínio.",
    como_reciclar: [
      "Esvaziar completamente",
      "Enxaguar rapidamente",
      "Achatar para reduzir volume",
      "Descartar na coleta seletiva"
    ],
    imagem: "https://images.unsplash.com/photo-1750085037444-31b30cfcbaf0?q=80&w=1066&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    material: "Isopor (EPS)",
    tipo: "plástico",
    descricao: "Material leve usado em embalagens e proteção.",
    como_reciclar: [
      "Limpar resíduos de comida",
      "Separar de outros plásticos",
      "Levar a pontos de coleta especializados",
      "Evitar descarte no lixo comum"
    ],
    imagem: "https://images.unsplash.com/photo-1636153849686-71bd611276d1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    material: "Pilhas",
    tipo: "resíduo perigoso",
    descricao: "Contêm metais pesados tóxicos.",
    como_reciclar: [
      "Não descartar no lixo comum",
      "Guardar separadamente",
      "Levar a pontos de coleta",
      "Usar logística reversa"
    ],
    imagem: "https://images.unsplash.com/photo-1619641805634-b867f535071c?q=80&w=1184&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1584270354949-1d8f1c8c7b8d"
  },
  {
    material: "Lâmpadas fluorescentes",
    tipo: "resíduo perigoso",
    descricao: "Contêm mercúrio altamente tóxico.",
    como_reciclar: [
      "Não quebrar",
      "Armazenar com cuidado",
      "Levar a pontos de coleta especializados",
      "Usar devolução em lojas"
    ],
    imagem: "https://images.unsplash.com/photo-1549924327-093737b3bb46?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dd"
  },
  {
    material: "Resíduos orgânicos",
    tipo: "orgânico",
    descricao: "Restos de comida e materiais biodegradáveis.",
    como_reciclar: [
      "Separar restos de alimentos",
      "Usar composteira",
      "Evitar mistura com recicláveis",
      "Transformar em adubo"
    ],
    imagem: "https://images.unsplash.com/photo-1536703219213-0223580c76b2?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1599599810695-5d2d7f8b1f7c"
  },
  {
    material: "Roupas e tecidos",
    tipo: "têxtil",
    descricao: "Podem ser reaproveitados ou reciclados.",
    como_reciclar: [
      "Doar roupas em bom estado",
      "Separar tecidos inutilizáveis",
      "Levar a pontos de coleta têxtil",
      "Reutilizar como pano ou artesanato"
    ],
    imagem: "https://images.unsplash.com/photo-1540221652346-e5dd6b50f3e7?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    material: "Cartuchos de tinta",
    tipo: "resíduo eletrônico",
    descricao: "Podem ser reciclados ou recarregados.",
    como_reciclar: [
      "Não descartar no lixo comum",
      "Levar a lojas de informática",
      "Participar de reciclagem",
      "Reutilizar quando possível"
    ],
    imagem: "https://images.unsplash.com/photo-1706895040634-62055892cbbb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    material: "Pneus",
    tipo: "resíduo industrial",
    descricao: "Demoram muito tempo para se decompor.",
    como_reciclar: [
      "Não jogar em terrenos ou rios",
      "Levar a borracharias ou ecopontos",
      "Usar reciclagem de pneus",
      "Reutilizar em asfalto ou arte"
    ],
    imagem: "https://images.unsplash.com/photo-1578844251758-2f71da64c96f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];
if (dados.length > 0) {
  renderizar(dados[0]);
}

if (input) {
  input.addEventListener("input", () => {
    const valor = input.value.toLowerCase().trim();

    if (valor === "") {
      desc.innerHTML = "<p>Digite algo para pesquisar</p>";
      img.innerHTML = "";
      return;
    }

    const resultado = dados.find(item =>
      item.material.toLowerCase().includes(valor) ||
      item.tipo.toLowerCase().includes(valor)
    );

    if (resultado) {
      renderizar(resultado);
    } else {
      desc.innerHTML = "<p>Nenhum resultado encontrado</p>";
      img.innerHTML = "";
    }
  });
}

function renderizar(item) {
  desc.innerHTML = `
    <h1>${item.material}</h1>
    <p>${item.descricao}</p>
    <h2>Como reciclar:</h2>
    <ul>
      ${item.como_reciclar.map(p => `<li>${p}</li>`).join("")}
    </ul>
  `;

  img.innerHTML = `
    <img src="${item.imagem}" alt="${item.material}">
  `;
}