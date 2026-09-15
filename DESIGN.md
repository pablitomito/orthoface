# DESIGN.md - Orthoface - Identidade Visual e Regras de Design

Extraido fielmente do projeto Orthoface Homepage Redesign aprovado no Stitch MCP.
Projeto ID: projects/16859491387548318327
Ultima atualizacao: 14/09/2026

---

## 1. Identidade da Marca

| Campo | Valor |
|---|---|
| Nome | Orthoface |
| Subtitulo | Odontologia Especializada |
| Especialidade | Odontologia especializada multidisciplinar em Teresina - PI |
| Responsavel Clinico | Dr. Fernando Galdino |
| Filosofia Visual | Clinica editorial - autenticidade, precisao medica, confianca humana |
| Ausencia intencional | Sem gradientes 3D artificiais, sem glassmorfismo agressivo |

---

## 2. Paleta de Cores

### 2.1 Cores Principais (Brand Tokens)

| Token | Hex | Uso |
|---|---|---|
| brand.DEFAULT | #0072CE | Azul oficial do logotipo, links, icones, badges |
| brand.hover | #005FAE | Estado hover do azul brand |
| brand.deep | #03234B | Azul-marinho escuro, textos principais, headings |
| brand.navy | #06172D | Azul-navy profundo, footer background |
| brand.ice | #F3F8FD | Azul-gelo claro, fundos de secao alternada |
| brand.iceSubtle | #EAF2FA | Variacao mais escura do ice |
| brand.surface | #FFFFFF | Superficie branca pura |
| brand.border | #DBE7F3 | Cor de borda padrao |
| brand.muted | #546B82 | Cinza-azulado, textos secundarios |

### 2.2 Cores Especiais

| Cor | Hex | Uso |
|---|---|---|
| Verde WhatsApp | #25D366 | Botao flutuante WhatsApp |
| Verde WhatsApp Hover | #20BA59 | Hover do botao WhatsApp |
| Verde Status | #10B981 | Indicador de status ativo no mobile hero |

### 2.3 Sistema de Cores Stitch (design_md)

surface: #f6fafe
on-surface: #171c1f
on-surface-variant: #414752
outline: #717783
outline-variant: #c1c7d4
primary: #0059a4
on-primary: #ffffff
primary-container: #0072ce   <- azul brand principal
secondary: #4d6077
secondary-container: #cde2fc
tertiary: #ac2200
tertiary-container: #cf3c1a  <- coral (nao aplicado na versao final)
error: #ba1a1a

NOTA: O coral/tertiario (#CF3C1A) foi suprimido na implementacao final.
Todos os botoes de acao usam #0072CE, mantendo sobriedade clinica.

---

## 3. Tipografia

### 3.1 Familias de Fontes

| Familia | Fonte | Uso |
|---|---|---|
| Principal (sans) | Albert Sans + Plus Jakarta Sans | Headings, navegacao, labels, botoes |
| Corporal | Source Sans 3 | Corpo de texto, descricoes, legendas |
| Mono | font-mono Tailwind | Numeracao de especialidades 01-06 |

Google Fonts:
  Albert Sans: ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400
  Plus Jakarta Sans: wght@400;500;600;700

### 3.2 Escala Tipografica (Design System Stitch)

| Token | Familia | Tamanho | Peso | Line-Height | Letter-Spacing |
|---|---|---|---|---|---|
| display-hero | Plus Jakarta Sans | 52px | 700 | 60px | -0.02em |
| display-hero-mobile | Plus Jakarta Sans | 34px | 700 | 42px | -0.01em |
| headline-xl | Plus Jakarta Sans | 40px | 700 | 48px | -0.015em |
| headline-xl-mobile | Plus Jakarta Sans | 28px | 700 | 36px | -0.01em |
| headline-lg | Plus Jakarta Sans | 30px | 600 | 38px | -0.01em |
| headline-md | Plus Jakarta Sans | 22px | 600 | 30px | - |
| headline-sm | Plus Jakarta Sans | 18px | 600 | 26px | - |
| body-lead | Source Sans 3 | 20px | 400 | 30px | - |
| body-md | Source Sans 3 | 16px | 400 | 24px | - |
| body-sm | Source Sans 3 | 14px | 400 | 20px | - |
| label-lg | Plus Jakarta Sans | 15px | 600 | 20px | +0.01em |
| label-md | Plus Jakarta Sans | 13px | 600 | 18px | +0.02em |
| label-caps | Plus Jakarta Sans | 12px | 700 | 16px | +0.08em |

### 3.3 Aplicacao na Interface Final

| Elemento | Tamanho | Peso | Observacoes |
|---|---|---|---|
| H1 Hero Desktop | text-4xl xl:text-5xl | extrabold 800 | tracking-tight leading-[1.15] |
| H1 Hero Mobile | text-3xl sm:text-4xl | extrabold | leading-tight |
| H2 Secoes | text-3xl sm:text-4xl | extrabold | tracking-tight |
| H3 Destaque | text-2xl sm:text-3xl lg:text-4xl | extrabold | leading-tight |
| H3 Accordion | text-xl 20px | bold | hover:text-brand |
| H4 Cards | text-lg 18px | bold | - |
| Overline/Label | text-xs 12px | bold | uppercase tracking-wider text-brand |
| Numeracao mono | text-xs | bold | font-mono text-brand |
| Corpo principal | text-base sm:text-lg | normal 400 | leading-relaxed text-brand-muted |
| Texto accordion | text-sm 14px | normal | leading-relaxed pl-8 |
| Caption | text-xs 12px | normal | italic text-brand-muted |
| Nome marca header | text-xl 20px | bold | tracking-tight leading-none |
| Subtitulo marca | text-[11px] | medium | uppercase tracking-wider |
| Nav links desktop | text-[15px] | medium | hover:text-brand |

---

## 4. Espacamentos e Layout

### 4.1 Escala de Espacamento

| Token | Rem | Px |
|---|---|---|
| space-2xs | 0.25rem | 4px |
| space-xs | 0.5rem | 8px |
| space-sm | 0.75rem | 12px |
| space-md | 1rem | 16px |
| space-lg | 1.5rem | 24px |
| space-xl | 2rem | 32px |
| space-2xl | 3rem | 48px |
| space-3xl | 4.5rem | 72px |
| space-4xl | 6rem | 96px |
| gutter-mobile | 1rem | 16px |
| gutter-desktop | 1.5rem | 24px |
| max-width-content | 1240px | - |

### 4.2 Container e Grid

| Propriedade | Tailwind | Absoluto |
|---|---|---|
| Max-width container | max-w-7xl | 1280px |
| Padding horizontal | px-5 sm:px-8 | 20px / 32px |
| Grid base | grid-cols-12 | 12 colunas |
| Gap padrao | gap-10 | 40px |
| Padding de secao | py-20 lg:py-28 | 80px / 112px |

### 4.3 Layout por Secao (Desktop 12 colunas)

| Secao | Desktop | Mobile |
|---|---|---|
| Hero | 6 conteudo + 6 foto | Stack vertical foto aspect-[4/5] |
| Tratamentos | 7 accordion + 5 sticky card | Stack vertical |
| Caso Destaque | 6 foto + 6 narrativa | Stack vertical foto primeiro |
| Resultados destaque | 7 foto + 5 texto | Stack vertical |
| Resultados cards | 3 colunas md:2 lg:3 | 1 coluna |
| A Orthoface | 6 foto + 6 texto | Stack vertical |
| Localizacao | 5 info card + 7 mapa | Stack vertical |
| Footer | 5 identidade + 3 nav + 4 contato | Stack vertical |

---

## 5. Bordas, Sombras e Elevacao

### 5.1 Border Radius

| Classe Tailwind | Valor | Aplicacao |
|---|---|---|
| rounded-lg | 8px | Header logo, formularios |
| rounded-xl | 12px | Legenda overlay hero, FAQ cards |
| rounded-2xl | 16px | Cards de resultados, mapa |
| rounded-3xl | 24px | Painel sticky tratamentos, info localizacao |
| rounded-full | 9999px | Botoes CTA, badges, avatar Dr. Fernando |
| rounded-t-3xl | 24px topo | Foto hero desktop sem moldura inferior |

### 5.2 Bordas

| Estilo | Valor | Uso |
|---|---|---|
| Padrao | 1px solid #DBE7F3 | Cards, containers, header |
| Opacidade 60% | border-brand-border/60 | Divisores internos suaves |
| Opacidade 70% | border-brand-border/70 | Accordion especialidades |
| Opacidade 80% | border-brand-border/80 | Divisores internos moderados |
| Branca | border-white | Foto Dr. Fernando hero e secao orthoface |
| Divisores lista | divide-y divide-brand-border/70 | Accordion |

### 5.3 Sombras

| Classe Tailwind | Uso |
|---|---|
| shadow-sm | Header logo, botao CTA header, card tratamentos |
| shadow-md shadow-brand/20 | Botao CTA hero primario |
| shadow-md shadow-brand/25 | Botao CTA encerramento |
| shadow-lg | Foto hero mobile |
| shadow-xl | Foto secao A Orthoface |
| shadow-2xl shadow-brand-deep/10 | Foto Dr. Fernando desktop hero |

---

## 6. Componentes

### 6.1 Header / Navegacao

- sticky top-0 z-50
- bg-white/95 backdrop-blur-md
- border-b border-brand-border/70, h-20 (80px)
- Logo: imagem h-11 + "Orthoface" text-xl bold + subtitulo text-[11px] uppercase
- Nav desktop: hidden md:flex, text-[15px] font-medium, hover:text-brand
- CTA header: px-5 py-2.5 rounded-full bg-brand text-white text-sm font-semibold
- Mobile: hamburger SVG, dropdown md:hidden py-5 space-y-4

### 6.2 Hero Section (ID: inicio)

- bg-brand-ice, border-b border-brand-border/60
- Marca dagua: text-[15vw] font-black text-brand-deep/[0.035] pointer-events-none - desktop only
- Desktop lg+: grid grid-cols-12 gap-10 min-h-[660px]
  - Coluna esquerda 6: overline, H1, descricao, CTAs, info horario
  - Coluna direita 6: foto Dr. Fernando h-[620px] rounded-t-3xl object-[center_top]
- Legenda foto: absolute bottom-4 left-4, bg-white/90 backdrop-blur-md rounded-xl
- Mobile: stack vertical, foto aspect-[4/5] sm:aspect-[16/10] rounded-2xl
- CTA primario: px-7 py-4 rounded-full bg-brand (WhatsApp)
- CTA secundario: px-6 py-4 rounded-full border border-brand-deep/20
- Info horario: icone relogio SVG + texto muted, border-t

### 6.3 Secao Tratamentos (ID: tratamentos)

- bg-white, border-b
- Grid: 7 cols accordion + 5 cols card sticky top-28
- Accordion: divide-y divide-brand-border/70 border-t border-b
  - Numeracao: text-xs font-mono font-bold text-brand (01-06)
  - H3: text-xl bold hover:text-brand
  - Descricao: text-sm text-brand-muted
  - Toggle icon: + e - text-brand-muted
  - Conteudo: hidden, pt-4 text-sm pl-8 leading-relaxed
- Card sticky 5 cols: bg-brand-ice p-6 sm:p-8 rounded-3xl border
  - Foto: h-64 object-cover rounded-2xl shadow-sm
  - Overline + H4 + texto + link com arrow SVG text-brand

### 6.4 Secao Caso em Destaque

- bg-brand-ice
- Wrapper: bg-white rounded-3xl p-8 sm:p-12 lg:p-16 border shadow-sm
- Grid 12 cols: 6 foto order-2 + 6 narrativa order-1 (desktop)
- Tag caso: px-3 py-1 rounded-full bg-brand-ice text-brand text-xs bold uppercase border
- Nota clinica: p-4 rounded-xl bg-brand-ice border flex gap-3 checkmark SVG

### 6.5 Secao Resultados (ID: resultados)

- bg-white, border-b
- Destaque: bg-brand-ice rounded-3xl p-6 sm:p-10 lg:p-12
  - Grid: 7 foto + 5 texto
  - Bullets: w-2 h-2 rounded-full bg-brand
- Grade 6 cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8
  - Card: bg-brand-ice/60 rounded-2xl p-5 border border-brand-border/70
  - Foto: rounded-xl h-72 object-cover
  - Overline xs bold uppercase text-brand
  - H4 text-lg bold + descricao text-sm muted
  - Footer: border-t text-xs text-brand-muted "Resultado clinico obtido em consultorio"

### 6.6 Secao A Orthoface (ID: a-orthoface)

- bg-brand-ice, border-b
- Grid: 6 foto + 6 texto
- Foto: rounded-3xl shadow-xl border-white h-[480px] object-cover
- Overlay: absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl
- Mini-cards 2x2: grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t
  - p-4 rounded-2xl bg-white border H4 bold + texto xs muted

### 6.7 Secao Profissional (Dr. Fernando)

- bg-white, centrado max-w-4xl text-center
- Avatar: inline-block p-1 rounded-full bg-brand-ice border
  - Foto: w-32 h-32 rounded-full object-cover object-[center_top]
- Nome: text-2xl bold
- Cargo: text-sm semibold text-brand
- Bio: text-base sm:text-lg text-brand-muted max-w-2xl mx-auto

### 6.8 Secao Localizacao (ID: localizacao)

- bg-brand-ice, border-b
- Grid: 5 cols info + 7 cols mapa
- Card info: bg-white p-8 sm:p-10 rounded-3xl border shadow-sm
  - Overlines text-brand text-xs uppercase
  - WhatsApp: text-xl bold text-brand (86) 99939-8960
  - Botao Rota: rounded-full bg-brand-deep text-white
  - Botao WhatsApp: rounded-full bg-brand text-white
- Mapa: bg-white rounded-3xl overflow-hidden border shadow-sm min-h-[380px]
  - iframe Google Maps src="maps.google.com/maps?q=Av.+Poti+Velho..."

### 6.9 FAQ

- bg-white, centrado max-w-4xl
- 6 cards: border border-brand-border/80 rounded-2xl p-6 bg-brand-ice/40
  - H3 text-lg bold + texto text-sm muted

### 6.10 CTA Encerramento

- bg-brand-ice, centrado max-w-4xl text-center
- H2: text-3xl sm:text-4xl lg:text-5xl extrabold tracking-tight
- Botao: px-8 py-4 rounded-full bg-brand shadow-md shadow-brand/25

### 6.11 Footer

- bg-brand-navy #06172D, text-white
- pt-16 pb-12, border-t border-white/10
- Grid: 5 identidade + 3 navegacao + 4 contato
- Divisor interno: border-b border-white/10
- Overlines: text-xs font-bold uppercase tracking-wider text-brand
- Texto: text-sm text-gray-300
- WhatsApp: text-base font-bold text-brand hover:underline
- Copyright: text-xs text-gray-400

### 6.12 Botao Flutuante WhatsApp

- fixed bottom-6 right-6 z-50
- bg-[#25D366] hover:bg-[#20BA59]
- p-3.5 rounded-full shadow-lg
- SVG WhatsApp fill-current w-6 h-6
- hover:scale-105 active:scale-95 transition-all

---

## 7. Comportamentos Interativos

| Interacao | Comportamento |
|---|---|
| Hover nav links | hover:text-brand transition-colors |
| Hover CTA primario | hover:bg-brand-hover |
| Hover CTA encerramento | hover:bg-brand-hover active:scale-[0.98] |
| Botao WhatsApp flutuante | hover:scale-105 active:scale-95 |
| Menu mobile | classList.toggle hidden - JS vanilla |
| Accordion tratamentos | toggle hidden + troca icone +/- - JS vanilla |
| Scroll | scroll-smooth no html |
| Selecao de texto | background #0072CE color #fff |
| Marca dagua hero | pointer-events-none select-none decorativo |

---

## 8. Informacoes Institucionais

| Campo | Valor |
|---|---|
| Clinica | Orthoface - Odontologia Especializada |
| WhatsApp | (86) 99939-8960 |
| URL WhatsApp | https://wa.me/5586999398960 |
| Endereco | Av. Poti Velho, QD Lt 03 - Residencial Lindalma Soares |
| Cidade / CEP | Teresina - PI, CEP 64003-640 |
| Horarios seg-sex | 08h as 19h |
| Horarios sabado | 08h as 12h |
| Copyright | 2025 Clinica Orthoface |

### Navegacao - Ancoras

| No | Ancora | Label |
|---|---|---|
| 1 | #inicio | Inicio |
| 2 | #tratamentos | Tratamentos |
| 3 | #resultados | Resultados |
| 4 | #a-orthoface | A Orthoface |
| 5 | #localizacao | Como chegar |

### Especialidades (Accordion)

| No | Especialidade | Descricao curta |
|---|---|---|
| 01 | Facetas e Lentes de Contato Dental | Estratificacao em resinas nobres ou ceramica |
| 02 | Implantes, Proteses e Reabilitacao Oral | Recuperacao mastigatoria e suporte osseo |
| 03 | Aparelho Ortodontico e Alinhadores | Correcao de apinhamentos e oclusao |
| 04 | Tratamento de Canal e Restauracoes | Endodontia + reconstrucao com pinos de fibra |
| 05 | Clareamento, Botox e Harmonizacao Facial | Estetica complementar e bruxismo |
| 06 | Extracoes e Raio-X Diagnostico | Cirurgia de sisos e diagnostico direto |

---

## 9. Inventario de Telas

### 9.1 Tela Principal Gerada (HTML Stitch)

| ID | Titulo | Tipo | Dimensoes | Dispositivo |
|---|---|---|---|---|
| 441600e1269545428fc69f77cbad44db | Clinica Orthoface - Website Editorial Dr. James | HTML gerado | 2560x18618px | Desktop |

### 9.2 Telas de Referencia de Design

| ID | Arquivo | Dimensoes |
|---|---|---|
| 7998494545002226055 | webdesingreferencia1.jpg | 736x1104 |
| 7998494545002228613 | webdesingreferencia2.jpg | 736x1104 |
| 7998494545002227075 | webdesingreferencia3.jpg | 736x1308 |
| 7998494545002229633 | webdesingreferencia4.jpg | 600x1201 |

### 9.3 Telas de Casos Clinicos (Fotografias Reais)

| ID | Arquivo | Dimensoes | Conteudo |
|---|---|---|---|
| 3265774115323429425 | ANTESDEPOIS.jpg | 640x1138 | Antes/depois harmonizacao dental |
| 3265774115323431591 | ANTESDEPOISRESINA.jpg | 1440x1440 | Antes/depois facetas resina |
| 3265774115323429661 | antesedepoisfacetaresina.PNG | 599x750 | Antes/depois faceta resina feminino |
| 7998494545002228095 | antesedepoisfacetaresina.PNG | 599x750 | Duplicata |
| 3265774115323430133 | CLAREAMENTO.jpg | 640x1138 | Antes/depois clareamento |
| 3265774115323432063 | CASOCLINICO3.jpg | 640x1138 | Caso clinico 3 |
| 3265774115323429897 | CASOCLINICO1.jpg | 640x1138 | Caso clinico 1 |
| 3265774115323430841 | restauracaoesteticaemandamento.PNG | 861x863 | Restauracao estetica em andamento |
| 7998494545002227577 | restauracaoesteticaemandamento.PNG | 861x863 | Duplicata |
| 7998494545002226557 | facetasderesina.PNG | 868x858 | Facetas de resina |
| 3265774115323432299 | facetasderesina.PNG | 868x858 | Duplicata |
| 7998494545002229115 | facetasemresina2.PNG | 859x857 | Facetas em resina 2 |
| 3265774115323430369 | facetasemresina2.PNG | 859x857 | Duplicata |
| 3265774115323431827 | BRUXISMO.jpg | 1440x1440 | Caso bruxismo antes/depois |
| 3265774115323432771 | REABILITACAOORAL.jpg | 1440x1440 | Reabilitacao oral completa |
| 3265774115323430605 | PINOPRECONSTRUCAO.jpg | 640x1138 | Pino de fibra + reconstrucao |
| 7998494545002226039 | RESULTADOS1.PNG | 692x861 | Resultados compilados |
| 3265774115323428911 | RESULTADOS1.PNG | 692x861 | Duplicata |

### 9.4 Identidade / Logotipo

| ID | Arquivo | Dimensoes | Conteudo |
|---|---|---|---|
| 3265774115323432535 | logoortoface.jpg | 1080x1080 | Logotipo azul #0072CE icone dente circular wordmark branco |
| 3265774115323431355 | 395890981_n.jpg | 1080x1080 | Foto social Instagram da clinica |

### 9.5 Scraping Instagram

| ID | Arquivo | Dimensoes |
|---|---|---|
| 3265774115323431077 | webscrapinginstagram.PNG | 1238x918 |
| 7998494545002228597 | webscrapinginstagram.PNG | 1238x918 |
| 3265774115323429147 | webscrapinginstagram2.PNG | 1006x918 |
| 7998494545002227059 | webscrapinginstagram2.PNG | 1006x918 |
| 7998494545002229617 | webscrapinginstagram3.PNG | 1058x920 |
| 3265774115323431313 | webscrapinginstagram3.PNG | 1058x920 |

### 9.6 Imagens Geradas por IA (Gemini)

| ID | Arquivo | Dimensoes |
|---|---|---|
| 822069634519578381 | Gemini_Generated_Image_f6xc11.jfif | 1376x768 |
| 15359025430180025173 | Gemini_Generated_Image_knvgqv.jfif | 928x1152 |

### 9.7 Textos Informativos

| ID | Arquivo | Conteudo |
|---|---|---|
| 18282986844912607077 | BRUXISMO.txt | Texto informativo sobre bruxismo |
| 18282986844912607023 | REABILITACAOORAL.txt | Texto sobre reabilitacao oral |

---

## 10. Inventario de Imagens na Interface Final (CDN Google)

| Secao | Alt text | Display |
|---|---|---|
| Header Logo | Clinica Orthoface - Odontologia Especializada | h-11 44px |
| Hero Desktop Dr. Fernando | Dr. Fernando no consultorio da Clinica Orthoface | h-[620px] object-[center_top] |
| Hero Mobile Dr. Fernando | Dr. Fernando no consultorio Orthoface | aspect-[4/5] sm:aspect-[16/10] |
| Tratamentos card sticky | Caso de facetas em resina e reabilitacao | h-64 object-cover |
| Caso Destaque Bruxismo | Documentacao clinica de caso de bruxismo | h-auto |
| Resultados destaque | Reabilitacao Oral Completa Antes e Depois | h-auto |
| Resultados card 1 | Antes e depois restauracoes e facetas em resina | h-72 object-cover |
| Resultados card 2 | Pino com reconstrucao de dente quebrado | h-72 object-cover |
| Resultados card 3 | Antes e depois clareamento guiado | h-72 object-cover |
| Resultados card 4 | Remocao de aparelho ortodontico e clareamento | h-72 object-cover |
| Resultados card 5 | Antes e depois faceta em resina composta | h-72 object-cover |
| Resultados card 6 | Transformacao estetica de sorriso | h-72 object-cover |
| A Orthoface clinica | Dr. Fernando no consultorio equipado Orthoface | h-[480px] object-cover |
| Profissional avatar | Dr. Fernando Galdino - Clinica Orthoface | w-32 h-32 rounded-full |
| Footer Logo | Clinica Orthoface | h-10 40px |

---

## 11. Responsividade

| Breakpoint | Largura | Comportamento |
|---|---|---|
| Mobile | menos de 640px | Stack vertical nav oculta hero foto aspect-[4/5] |
| Tablet sm | 640px+ | CTA side-by-side hero foto aspect-[16/10] |
| Desktop md | 768px+ | Nav desktop visivel hamburger oculto |
| Desktop lg | 1024px+ | Layout 12 colunas assimetrico card sticky |
| Desktop xl | 1280px+ | H1 text-5xl foto Dr. Fernando max-w-xl |

---

## 12. Decisoes de Design Documentadas

1. FOTO DO MEDICO INTEGRADA SEM CARD FLUTUANTE
   Dr. Fernando com rounded-t-3xl sem moldura inferior.
   Cria profundidade autentica sem glassmorfismo.

2. ACCORDION EM VEZ DE CARDS DE ESPECIALIDADE
   Exploracao progressiva economiza espaco vertical.

3. CARD DE TRATAMENTO STICKY (top-28)
   Permanece visivel durante scroll do accordion, reforca CTA de duvidas.

4. SEM CORAL/TERCIARIO NOS BOTOES
   Design system inclui #CF3C1A mas implementacao usa apenas #0072CE.
   Mantem sobriedade e identidade clinica.

5. MARCA DAGUA TIPOGRAFICA ORTHOFACE
   opacity 3.5% em text-[15vw], desktop only.
   Camada de profundidade sem peso visual.

6. BOTAO WHATSAPP FLUTUANTE PERMANENTE
   Verde #25D366 para associacao imediata.
   fixed bottom-6 right-6 z-50.

7. FOTOS DE CASOS SEM EDICAO OU RETOQUE
   Autenticidade como diferencial clinico.

8. LEGENDA SOBREPOSTA COM BACKDROP-BLUR
   bg-white/90 backdrop-blur-md evita crop das imagens clinicas.

9. MARCA DAGUA INVISIVEL NO MOBILE
   Aplicada apenas em lg+ para nao poluir viewport reduzida.

10. IFRAME DE MAPA GOOGLE INTEGRADO
    Acesso direto sem redirecionamento externo min-h-[380px].
