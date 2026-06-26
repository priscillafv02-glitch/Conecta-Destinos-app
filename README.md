# ConectaDestinos

Aplicativo de viagens feito em React Native com TypeScript. O projeto foi organizado para atender uma atividade com navegacao entre telas, lista de destinos, tela de detalhes, galeria de imagens, botao de adicionar viagem, navbar, footer e layout responsivo.

## Funcionalidades

- Tela inicial com destaque visual, busca simples e ofertas.
- Tela de destinos com `FlatList`, filtros por regiao e cards responsivos.
- Tela de destinos com selecao de card e aba de resumo com preco do pacote.
- Tela de detalhes com galeria de imagens, informacoes do pacote, preco, roteiro e botao para pagamento.
- Tela de compartilhamento da viagem com QR Code escaneavel e uso do `Share` do React Native.
- Tela de dicas de viagem com checklist basico do que levar e do que conferir antes de viajar.
- Tela de pagamento ficticio aberta como modal por cima da tela atual.
- Tela de sobre/contato com formulario, dados da agencia, mapa ilustrativo e depoimentos.
- Tela de perfil ficticio com nome, e-mail, preferencias e resumo.
- Navbar reutilizavel no topo e footer reutilizavel.
- Componentes principais do React Native: `Image`, `ImageBackground`, `FlatList`, `ScrollView`, `TouchableOpacity`, `Pressable`, `TextInput` e `Share`.

## Organizacao

```txt
src/
  components/   Componentes reutilizaveis, como Header, Footer, DestinationCard e TipCard
  data/         Dados dos destinos e dicas usados no app
  screens/      Telas principais do aplicativo
  theme/        Paleta de cores
  types/        Tipagens de navegacao e destino
  utils/        Funcoes auxiliares
```

## Como rodar

Instale as dependencias:

```bash
npm install
```

Inicie o projeto:

```bash
npm start
```

Depois escolha uma opcao no terminal do Expo:

- Pressione `a` para Android.
- Pressione `i` para iOS, se estiver no macOS.
- Pressione `w` para abrir no navegador.
- Escaneie o QR Code pelo aplicativo Expo Go no celular.

## Como subir no GitHub

```bash
git init
git add .
git commit -m "Cria app ConectaDestinos"
git branch -M main
git remote add origin https://github.com/SEU-USUARIO/conectadestinos.git
git push -u origin main
```

Troque `SEU-USUARIO` pelo seu usuario do GitHub.
