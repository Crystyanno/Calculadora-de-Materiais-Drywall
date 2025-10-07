# 🏗️ Calculadora de Materiais Drywall - Knauf

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

Aplicação web para cálculo preciso de materiais necessários para instalação de drywall, baseada nas especificações técnicas do Manual Knauf e validada com o aplicativo da Trevo.

---

## 📋 Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Metodologia e Padrões](#metodologia-e-padrões)
- [Cálculos Técnicos](#cálculos-técnicos)
- [Como Usar](#como-usar)
- [Responsividade](#responsividade)
- [Melhorias Futuras](#melhorias-futuras)
- [Licença](#licença)

---

## 🎯 Sobre o Projeto

A **Calculadora de Materiais Drywall** foi desenvolvida para auxiliar profissionais da construção civil no dimensionamento preciso de materiais para instalação de sistemas de drywall (paredes e forros).

### Objetivos:
- ✅ Calcular quantidades exatas de materiais por m²
- ✅ Evitar desperdícios e custos desnecessários
- ✅ Seguir especificações técnicas do Manual Knauf
- ✅ Validar resultados com aplicativo da Trevo
- ✅ Incluir automaticamente margem de segurança (1m² nas placas)

---

## ⚡ Funcionalidades

### Principais Recursos:

1. **Cálculo para Paredes**
   - Placas de drywall
   - Guias e montantes (perfis metálicos)
   - Parafusos (TA25 e brocante)
   - Massa de junta e fita de papel
   - Lã mineral para isolamento

2. **Cálculo para Forros**
   - Placas de drywall
   - Perfis F530
   - Reguladores e tabicas
   - Parafusos e acabamentos

3. **Opções de Sistema**
   - Parede isolada
   - Forro isolado
   - Ambos (parede + forro)

4. **Tipos de Placas Suportados**
   - 1,20 x 1,80m (2,16 m²)
   - 1,20 x 2,40m (2,88 m²)

5. **Recursos Adicionais**
   - Conversão automática de metros lineares para peças de 3m
   - Arredondamento inteligente (sempre para cima)
   - Margem de segurança de 1m² nas placas
   - Interface responsiva para mobile e desktop

---

## 🛠️ Tecnologias Utilizadas

### Stack Técnico:

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **HTML5** | - | Estrutura semântica da aplicação |
| **CSS3** | - | Estilização e layout responsivo |
| **JavaScript (Vanilla)** | ES6+ | Lógica de negócio e cálculos |

### Por que Vanilla JavaScript?

- ⚡ Performance otimizada sem dependências externas
- 📦 Zero bibliotecas ou frameworks necessários
- 🚀 Carregamento instantâneo
- 🔧 Fácil manutenção e customização
- 📱 Compatibilidade universal

---

## 📁 Estrutura do Projeto

```
calculadora-drywall/
│
├── index.html                 # Arquivo único (HTML + CSS + JS)
│
└── README.md                  # Documentação do projeto
```

### Organização Interna do Código:

```
index.html
│
├── <head>
│   ├── Meta tags
│   ├── Title
│   └── <style>
│       ├── Reset e Configurações Globais
│       ├── Container Principal
│       ├── Cabeçalho
│       ├── Seção do Formulário
│       ├── Botão de Cálculo
│       ├── Caixa de Informações
│       ├── Seção de Resultados
│       ├── Itens de Material
│       ├── Responsividade
│       └── Utilitários
│
└── <body>
    ├── Container Principal
    │   ├── Header (Cabeçalho)
    │   ├── Section (Formulário)
    │   │   ├── Form
    │   │   │   ├── Tipo de Sistema
    │   │   │   ├── Altura (condicional)
    │   │   │   ├── Área
    │   │   │   ├── Tipo de Placa
    │   │   │   └── Botão Calcular
    │   │   └── Info Box
    │   └── Section (Resultados)
    │
    └── <script>
        ├── Event Listeners
        ├── Função Principal (calcular)
        ├── Cálculo de Parede
        ├── Cálculo de Forro
        ├── Geração HTML Parede
        └── Geração HTML Forro
```

---

## 🎨 Metodologia e Padrões

### 1. **Metodologia BEM (Block Element Modifier)**

Nomenclatura de classes CSS seguindo padrão BEM para manutenibilidade:

```css
/* Bloco */
.result-section { }

/* Elemento */
.result-section__title { }
.result-section__subtitle { }

/* Modificador */
.results--show { }
```

**Vantagens:**
- ✅ Código CSS mais legível
- ✅ Evita conflitos de nomes
- ✅ Facilita manutenção
- ✅ Estrutura clara e hierárquica

### 2. **HTML Semântico**

Uso de tags semânticas HTML5:

```html
<header>    <!-- Cabeçalho da aplicação -->
<section>   <!-- Seções de conteúdo -->
<form>      <!-- Formulário de entrada -->
<label>     <!-- Labels descritivos -->
```

### 3. **JavaScript Modular**

Funções organizadas por responsabilidade:

```javascript
// Controle de UI
addEventListener()

// Lógica de Negócio
calcular()
calcularParede()
calcularForro()

// Renderização
gerarHTMLParede()
gerarHTMLForro()
```

### 4. **CSS Organizado**

Estrutura hierárquica com comentários de seção:

```css
/* ===================================
   SEÇÃO
=================================== */
.classe { }
```

### 5. **Boas Práticas Implementadas**

- ✅ **Separação de Responsabilidades**: CSS, HTML e JS bem delimitados
- ✅ **DRY (Don't Repeat Yourself)**: Funções reutilizáveis
- ✅ **Validação de Dados**: Verificação de inputs
- ✅ **Acessibilidade**: Labels, required, placeholders
- ✅ **Performance**: Zero dependências externas
- ✅ **Comentários**: Código documentado
- ✅ **Mobile First**: Design responsivo

---

## 🧮 Cálculos Técnicos

### Constantes Utilizadas (por m²):

#### PAREDE:
```javascript
Guias:              0,80 m/m²
Montantes:          2,50 m/m²
Parafuso TA25:      15 un/m²
Parafuso Brocante:  3 un/m²
Massa de Junta:     0,50 kg/m²
Fita de Papel:      1,50 m/m²
Lã Mineral:         1,05 m²/m²
```

#### FORRO:
```javascript
Perfil F530:        1,70 m/m²  (modulação 0,60m x 0,60m)
Reguladores:        1,27 un/m²
Tabica:             1,10 m/m²
Parafuso TA25:      10 un/m²
Parafuso Brocante:  2 un/m²
Massa de Junta:     0,50 kg/m²
Fita de Papel:      1,50 m/m²
```

### Exemplo de Cálculo (30m² de Forro):

```
ENTRADA:
- Área: 30 m²
- Placa: 1,20 x 1,80m (2,16 m²)

PROCESSAMENTO:
- Placas: (30 + 1) / 2.16 = 14,35 → 15 unidades
- Perfil F530: 30 × 1,70 = 51 metros → 17 peças de 3m
- Reguladores: 30 × 1,27 = 38,1 → 38 unidades
- Tabica: 30 × 1,10 = 33 metros → 11 peças de 3m

SAÍDA:
✅ 15 placas
✅ 51m de perfil (17 peças)
✅ 38 reguladores
✅ 33m de tabica (11 peças)
```

### Validação:

Os cálculos foram validados com:
- 📘 Manual Técnico Knauf
- 📱 Aplicativo Trevo (calculadora profissional)

---

## 🚀 Como Usar

### Instalação:

**Não requer instalação!** Basta abrir o arquivo HTML em qualquer navegador moderno.

```bash
# Clone ou baixe o arquivo
# Abra o index.html em seu navegador
```

### Passo a Passo:

1. **Selecione o Tipo de Sistema**
   - Parede
   - Forro
   - Ambos (Parede + Forro)

2. **Informe a Altura** (se aplicável)
   - Apenas para parede ou ambos
   - Exemplo: 2.80 metros

3. **Digite a Área**
   - Em metros quadrados (m²)
   - Exemplo: 30

4. **Escolha o Tipo de Placa**
   - 1,20 x 1,80m (2,16 m²)
   - 1,20 x 2,40m (2,88 m²)

5. **Clique em "Calcular Materiais"**

6. **Visualize os Resultados**
   - Lista completa de materiais
   - Quantidades em unidades e metros
   - Conversão para peças de 3m

---

## 📱 Responsividade

### Breakpoints:

```css
/* Mobile */
@media (max-width: 600px) {
    - Layout em coluna
    - Fonte reduzida
    - Padding ajustado
    - Itens empilhados
}
```

### Dispositivos Suportados:

- ✅ Desktop (1920px+)
- ✅ Laptop (1366px - 1920px)
- ✅ Tablet (768px - 1366px)
- ✅ Mobile (320px - 767px)

### Testes Recomendados:

- Chrome DevTools
- Firefox Responsive Design Mode
- Safari iOS Simulator
- Dispositivos físicos

---

## 🔮 Melhorias Futuras

### Roadmap:

- [ ] **Exportação de Resultados**
  - PDF
  - CSV
  - Impressão otimizada

- [ ] **Cálculo de Custos**
  - Preços por material
  - Orçamento total
  - Comparação de fornecedores

- [ ] **Histórico de Cálculos**
  - Salvar projetos
  - Comparar versões
  - localStorage

- [ ] **Modo Avançado**
  - Paredes duplas
  - Forro rebaixado
  - Isolamento acústico

- [ ] **Internacionalização**
  - Multi-idiomas
  - Unidades imperiais

- [ ] **PWA (Progressive Web App)**
  - Uso offline
  - Instalação no dispositivo

- [ ] **Integração com APIs**
  - Consulta de preços em tempo real
  - Disponibilidade de estoque

---

## 📊 Compatibilidade de Navegadores

| Navegador | Versão Mínima | Status |
|-----------|---------------|--------|
| Chrome | 60+ | ✅ Suportado |
| Firefox | 55+ | ✅ Suportado |
| Safari | 11+ | ✅ Suportado |
| Edge | 79+ | ✅ Suportado |
| Opera | 47+ | ✅ Suportado |
| IE | 11 | ⚠️ Parcial |

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

### Diretrizes:

- ✅ Mantenha o padrão BEM para CSS
- ✅ Comente o código JavaScript
- ✅ Teste em múltiplos navegadores
- ✅ Mantenha a responsividade
- ✅ Atualize a documentação

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

```
MIT License

Copyright (c) 2025 Calculadora Drywall

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 Autor

**Desenvolvedor**: Calculadora Drywall Team

---

## 📞 Suporte

Para dúvidas, sugestões ou reportar bugs:

- 📧 Email: suporte@calculadoradrywall.com
- 🐛 Issues: [GitHub Issues](https://github.com/usuario/calculadora-drywall/issues)
- 📖 Wiki: [Documentação Completa](https://github.com/usuario/calculadora-drywall/wiki)

---

## 🙏 Agradecimentos

- **Knauf** - Manual Técnico de referência
- **Trevo** - Validação dos cálculos
- Comunidade de desenvolvimento web
- Profissionais da construção civil que testaram e validaram a ferramenta

---

## 📈 Estatísticas do Projeto

![GitHub stars](https://img.shields.io/github/stars/usuario/calculadora-drywall?style=social)
![GitHub forks](https://img.shields.io/github/forks/usuario/calculadora-drywall?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/usuario/calculadora-drywall?style=social)

---

<div align="center">

**Feito com ❤️ para a comunidade da construção civil**

[⬆ Voltar ao topo](#-calculadora-de-materiais-drywall---knauf)

</div>