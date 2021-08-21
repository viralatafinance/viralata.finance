import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

const detectorOptions = {
  order: ["querystring", "cookie", "localStorage", "sessionStorage", "navigator", "htmlTag", "path", "subdomain"],

  // keys or params to lookup language from
  lookupQuerystring: "lang",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: "/", sameSite: "strict" },
};

i18n.use(LanguageDetector).init({
  resources: {
    ptBR: {
      translations: {
        Auditoria: "Auditoria",
        "em breve": "em breve",
        Planejamento: "Planejamento",
        "Siga-nos": "Siga-nos",
        Telegram: "https://t.me/viralatafinance",
        "COMPRAR REAU": "COMPRE REAU",
        "Sou novo": "Sou novo",
        "Se você está iniciando no mundo das finanças descentralizadas, clique aqui.": "Se você está iniciando no mundo das finanças descentralizadas, clique aqui.",
        "Sou experiente": "Sou experiente",
        "Ir para o site da PancakeSwap para comprar REAU": "Clique aqui para comprar REAU",
        "REAU é um investimento volátil e de alto risco. Não arrisque nada que você não esteja disposto a perder.":
          "REAU é um investimento volátil e de alto risco. Não arrisque nada que você não esteja disposto a perder.",
        descentralizados: "descentralizados",
        "voltados para": "voltados para",
        caridade: "caridade",
        "é um token descentralizado com uma economia deflacionária, introduzindo os Brasileiros ao mundo das criptomoedas.":
          "é um token descentralizado com uma economia deflacionária, introduzindo os Brasileiros ao mundo das criptomoedas.",
        'é uma carteira "tudo em um" que funciona na Binance Smart Chain facilitando o uso do REAU.':
          'é uma carteira "tudo em um" que funciona na Binance Smart Chain facilitando o uso do REAU.',
        "Nosso planejamento inclui um inovador mercado para NFT, poupança com incentivos à caridade, governança da comunidade, e mais.":
          "Nosso planejamento inclui um inovador mercado para NFT, poupança com incentivos à caridade, governança da comunidade, e mais.",
        "Confira!": "Confira!",
        CRIANDO: "CRIANDO",
        "SISTEMAS FINANCEIROS": "SISTEMAS FINANCEIROS",
        "Liquidez automática": "Liquidez automática",
        "3% de cada transação contribui para gerar automaticamente liquidez dentro do pool de liquidez da PancakeSwap.":
          "3% de cada transação contribui para gerar automaticamente liquidez dentro do pool de liquidez da PancakeSwap.",
        "Mecanismo deflacionário": "Mecanismo deflacionário",
        "Aprox. 1% de cada transação é destinado a uma carteira morta (sem dono), retirando de circulação e aumentando a escassez de tokens.":
          "Aprox. 1% de cada transação é destinado a uma carteira morta (sem dono), retirando de circulação e aumentando a escassez de tokens.",
        "Recompensas passivas": "Recompensas passivas",
        "Os detentores do token (holders) ganham recompensas passivas através do sistema de reflexão do token.":
          "Os detentores do token (holders) ganham recompensas passivas através do sistema de reflexão do token.",
        "2% de cada transação é distribuído para quem tem REAU na carteira (de preferência REAUPay), incluindo a carteira morta (mecanismo deflacionário).":
          "2% de cada transação é distribuído para quem tem REAU na carteira (de preferência REAUPay), incluindo a carteira morta (mecanismo deflacionário).",
        Seguro: "Seguro",
        "A liquidez inicial do contrato foi queimada junto com metade dos tokens. O que isso significa? O REAU sempre terá um valor mínimo.":
          "A liquidez inicial do contrato foi queimada junto com metade dos tokens. O que isso significa? O REAU sempre terá um valor mínimo.",
        "Vira-Lata Finance ($REAU) é um projeto de código aberto descentralizado, criado para incluir os Brasileiros ao mundo das criptomoedas, prover sistemas financeiros de maneira segura, de fácil uso e com ações destinadas à caridade.":
          "Vira-Lata Finance ($REAU) é um projeto de código aberto descentralizado, criado para incluir os Brasileiros ao mundo das criptomoedas, prover sistemas financeiros de maneira segura, de fácil uso e com ações destinadas à caridade.",
        Objetivos: "Objetivos",
        "Encorajar e empoderar os Brasileiros a ter controle de suas finanças;": "Encorajar e empoderar os Brasileiros a terem controle de suas finanças;",
        "Demonstrar o potencial de soluções financeiras alternativas;": "Demonstrar o potencial de soluções financeiras alternativas;",
        "Ajudar a arrecadar fundos à instituições de caridade destinadas às ações de cuidados aos maus tratos animais;":
          "Ajudar a arrecadar fundos à instituições de caridade destinadas às ações de cuidados aos maus tratos animais;",
        Características: "Características",
        "Clique aqui para baixar o nosso documento destinado a iniciantes no mundo de criptomoedas e finanças descentralizadas.":
          "Clique aqui para baixar o nosso documento destinado a iniciantes no mundo de criptomoedas e finanças descentralizadas.",
        "Clique aqui para baixar o documento técnico oficial de nosso token.": "Clique aqui para baixar o documento técnico oficial de nosso token.",
        Amigável: "Amigável",
        "A carteira amiga do homem.": "A carteira amiga do homem.",
        "Sem burocracias, sem termos técnicos, sem configurações, baixou, usou.": "Sem burocracias, sem termos técnicos, sem configurações, baixou, usou.",
        "Seus rendimentos": "Seus rendimentos",
        "Confira de maneira fácil seu saldo e seus rendimentos.": "Confira de maneira fácil seu saldo e seus rendimentos.",
        "Você pode destinar parte de seus rendimentos à instituições de caridade.": "Você pode destinar parte de seus rendimentos à instituições de caridade.",
        "Envie e Receba": "Envie e Receba",
        "Envie e receba REAU de um jeito fácil, calculando o valor na sua moeda nativa.": "Envie e receba REAU de um jeito fácil, calculando o valor na sua moeda nativa.",
        "Você é um comerciante?": "Você é um comerciante?",
        "Você pode começar a receber em REAU a hora que quiser. Sem cadastros, sem taxas ocultas.":
          "Você pode começar a receber em REAU a hora que quiser. Sem cadastros, sem taxas ocultas.",
        "Centro EducacionAU": "Centro EducacionAU",
        "Tenha acesso a conteúdos localizados, orientados a educar e ajudar aqueles que querem entender como funcionam os conceitos únicos das criptomoedas e das finanças descentralizadas.":
          "Tenha acesso a conteúdos localizados, orientados a educar e ajudar aqueles que querem entender como funcionam os conceitos únicos das criptomoedas e das finanças descentralizadas.",
        'REAUPay é uma carteira "tudo em um" que funciona na Binance Smart Chain facilitando o uso do REAU.':
          'REAUPay é uma carteira "tudo em um" que funciona na Binance Smart Chain facilitando o uso do REAU.',
        "Em breve disponível para Android e iOS.": "Em breve disponível para Android e iOS.",
        "Quem soltou os cachorros?": "Quem soltou os cachorros?",
        "Lançamento justo do $REAU": "Lançamento justo do $REAU",
        "Início das primeiras campanhas de divulgação": "Início das primeiras campanhas de divulgação",
        "Primeiro contato com ONGs para iniciar esforços de arrecadação de fundos de caridade":
          "Primeiro contato com ONGs para iniciar esforços de arrecadação de fundos de caridade",
        "1º Trimestre - 2021": "1º Trimestre - 2021",
        "2º Trimestre - 2021": "2º Trimestre - 2021",
        "3º Trimestre - 2021": "3º Trimestre - 2021",
        "4º Trimestre - 2021": "4º Trimestre - 2021",
        "Dominando as ruas": "Dominando as ruas",
        "Primeira listagem em uma corretora.": "Primeira listagem em uma corretora.",
        "Auditoria(s) completas": "Auditoria(s) completas",
        "Listagem em rankings de moedas (CMC, CG e etc)": "Listagem em rankings de moedas (CMC, CG e etc)",
        "Novo site da Vira-Lata Finance e REAUPay": "Novo site da Vira-Lata Finance e REAUPay",
        "REAUPay v1 é lançado como uma maneira fácil de enviar e receber tokens, visualizar saldo e tokens ganhos, assim como carteira de fundos":
          "REAUPay v1 é lançado como uma maneira fácil de enviar e receber tokens, visualizar saldo e tokens ganhos, assim como carteira de fundos",
        "Chegando na Lua": "Chegando na Lua",
        "Parcerias com vendedores para mercados de NFT": "Parcerias com vendedores para mercados de NFT",
        "Lançamento do marketplace de NFTs com mercadorias de edição limitada da Vira-Lata Finance":
          "Lançamento do marketplace de NFTs com mercadorias de edição limitada da Vira-Lata Finance",
        "Parcerias com redes de suprimentos para pets, para distribuição de materiais para ONGs":
          "Parcerias com redes de suprimentos para pets, para distribuição de materiais para ONGs",
        "Novas funcionalidades ao REAUPay como Stacking para caridades, Rampa de acesso e saída para FIAT (reais e outras) e DEX própria":
          "Novas funcionalidades ao REAUPay: Stacking para caridades, Rampa de acesso e saída para FIAT (reais e outras) e DEX própria",
        "Ao infinito e além!": "Ao infinito e além!",
        "Lançamento da governança": "Lançamento da governança",
        "Lançamento da loteria $REAU": "Lançamento da loteria $REAU",
        "Expansão do time em 30%": "Expansão do time em 30%",
        "Lançamento do 1o jogo Vira-Lata Finance com uso do $REAU como moeda virtual": "Lançamento do 1o jogo Vira-Lata Finance com uso do $REAU como moeda virtual",
        "O Vira-lata Finance foi inspirado pelo vira-lata caramelo e por milhares de outros vira-latas que vivem nas ruas do Brasil.":
          "O Vira-lata Finance foi inspirado pelo vira-lata caramelo e por milhares de outros vira-latas que vivem nas ruas do Brasil.",
        "Como comunidade, acreditamos que temos o poder de fazer a diferença por meio de doações comunitárias para instituições de caridade.":
          "Como comunidade, acreditamos que temos o poder de fazer a diferença por meio de doações comunitárias para instituições de caridade.",
        "Total arrecadado:": "Total arrecadado:",
        "Conheça mais sobre as instituições ajudadas": "Conheça mais sobre as instituições ajudadas",
        A: "A",
        "realizou uma ação no dia": "realizou uma ação no dia",
        "arrecadando um total de": "arrecadando um total de",
        "Ações sociais": "Ações sociais",
        melhores: "melhores",
        "mais seguros": "mais seguros",
        para: "para",
        WhitepaperLink: "https://bit.ly/2Rt1Ei0",
        ReauPaperLink: "https://bit.ly/3eghoN2",
        "Página não encontrada": "Página não encontrada",
        "A página que você está procurando não existe.": "A página que você está procurando não existe.",
        "Voltar para página inicial": "Voltar para página inicial",
        ViralataHelp: "https://t.me/viralatahelp",
        novo: "novo",
        FundoCaridadeLink: "https://drive.google.com/file/d/11IelgA7vmP2Gdybkds47HwyKCrGvLQXU/view?usp=sharing",
        "Fundo de caridade Viralata Finance": "Fundo de caridade Viralata Finance",
        "O fundo de caridade é uma carteira na blockchain para receber doações em nome da Viralata Finance que são mensalmente repassadas para ONG's parceiras.":
          "O fundo de caridade é uma carteira na blockchain para receber doações em nome da Viralata Finance que são mensalmente repassadas para ONG's parceiras.",
        "Todas as transações são feitas de forma transparente e você pode acompanhar ": "Todas as transações são feitas de forma transparente e você pode acompanhar ",
        "aqui (diretamente pelo BSCscan) ": "aqui (diretamente pelo BSCscan) ",
        "e também no ": "e também no ",
        "Como funciona?": "Como funciona?",
        "Repasse mensal - no último dia do mês, iniciando em 31/05/2021 serão transformados 20% do total do fundo de caridade em REAUs para moeda estável e enviado para as ONGs parceiras, fazendo uma divisão igualitária entre elas;":
          "Repasse mensal - no último dia do mês, iniciando em 31/05/2021 serão transformados 20% do total do fundo de caridade em REAUs para moeda estável e enviado para as ONGs parceiras, fazendo uma divisão igualitária entre elas;",
        "Fundo restante - 80% restantes permanecerão no fundo de modo a gerar um crescimento progressivo, como se fosse um segundo buraco negro gerador de renda para o fundo de caridade;":
          "Fundo restante - 80% restantes permanecerão no fundo de modo a gerar um crescimento progressivo, como se fosse um segundo buraco negro gerador de renda para o fundo de caridade;",
        "Estímulo ao crescimento - a ideia final é que somente os rendimentos do fundo sejam usados para doações, de forma estimular o seu crescimento progressivo e ajudar cada vez mais ONGs;":
          "Estímulo ao crescimento - a ideia final é que somente os rendimentos do fundo sejam usados para doações, de forma estimular o seu crescimento progressivo e ajudar cada vez mais ONGs;",
        "Saiba mais clicando aqui.": "Saiba mais clicando aqui.",
        "Fundo de caridade": "Fundo de caridade",
        "Entrar no App": "Entrar no App"
      },
    },
    en: {
      translations: {
        Auditoria: "Audit",
        "em breve": "s o o n",
        Planejamento: "Roadmap",
        "Siga-nos": "Follow us",
        Telegram: "https://t.me/viralatafinance_eng",
        "COMPRAR REAU": "BUY REAU",
        "Sou novo": "I’m a newbie",
        "Se você está iniciando no mundo das finanças descentralizadas, clique aqui.": "If this is your first experience with decentralized finance, click here.",
        "Sou experiente": "I’m an expert",
        "Ir para o site da PancakeSwap para comprar REAU": "Click here to swap REAU",
        "REAU é um investimento volátil e de alto risco. Não arrisque nada que você não esteja disposto a perder.":
          "REAU is a risky and volatile investment. Do not risk anything that you are not willing to lose.",
        descentralizados: "decentralized",
        "voltados para": "for",
        caridade: "charity",
        "é um token descentralizado com uma economia deflacionária, introduzindo os Brasileiros ao mundo das criptomoedas.":
          "is a decentralized and deflationary token introducing Brazilians to the world of cryptocurrency.",
        'é uma carteira "tudo em um" que funciona na Binance Smart Chain facilitando o uso do REAU.':
          "is an all-in-one wallet that works with the Binance Smart Chain, making it easier to use REAU.",
        "Nosso planejamento inclui um inovador mercado para NFT, poupança com incentivos à caridade, governança da comunidade, e mais.":
          "Our roadmap includes an innovative marketplace for NFTs, savings account with a charitable incentive, governance, and more.",
        "Confira!": "Check it out!",
        CRIANDO: "POWERING",
        "SISTEMAS FINANCEIROS": "FINANCIAL SYSTEMS",
        "Liquidez automática": "Automatic Liquidity",
        "3% de cada transação contribui para gerar automaticamente liquidez dentro do pool de liquidez da PancakeSwap.":
          "3% of each transaction is automatically added to the liquidity pool in Pancake Swap.",
        "Mecanismo deflacionário": "Deflationary mechanism",
        "Aprox. 1% de cada transação é destinado a uma carteira morta (sem dono), retirando de circulação e aumentando a escassez de tokens.":
          "Approximately 1% of each transaction is sent to a dead wallet (no owners), burning tokens and increasing the shortage of tokens.",
        "Recompensas passivas": "Passive income",
        "Os detentores do token (holders) ganham recompensas passivas através do sistema de reflexão do token.":
          "All holders receive passive income due to the reflection token system.",
        "2% de cada transação é distribuído para quem tem REAU na carteira (de preferência REAUPay), incluindo a carteira morta (mecanismo deflacionário).":
          "2% of each transaction is distributed to whoever has REAU in their wallet (preferentially REAUPay), including the dead wallet (deflationary mechanism).",
        Seguro: "Safe",
        "A liquidez inicial do contrato foi queimada junto com metade dos tokens. O que isso significa? O REAU sempre terá um valor mínimo.":
          "The initial liquidity of the contract was burned along with half the tokens. What does it mean? REAU will always have a minimum value.",
        "Vira-Lata Finance ($REAU) é um projeto de código aberto descentralizado, criado para incluir os Brasileiros ao mundo das criptomoedas, prover sistemas financeiros de maneira segura, de fácil uso e com ações destinadas à caridade.":
          "Vira-Lata Finance ($REAU) is an open source, decentralized project, created to help include Brazilians in the cryptocurrency world. REAU provides a safe financial system that is easy to use, and helps make a difference through charitable donations.",
        Objetivos: "Goals",
        "Encorajar e empoderar os Brasileiros a ter controle de suas finanças;": "Encourage and empower Brazilians to take their finances in their own hands;",
        "Demonstrar o potencial de soluções financeiras alternativas;": "Demonstrate the potential of alternative financial solutions;",
        "Ajudar a arrecadar fundos à instituições de caridade destinadas às ações de cuidados aos maus tratos animais;":
          "Encourage users to get involved with charitable institutions that help neglected and abandoned animals;",
        Características: "Features",
        "Clique aqui para baixar o nosso documento destinado a iniciantes no mundo de criptomoedas e finanças descentralizadas.":
          "Click here to download our paper made for cryptocurrency newcomers.",
        "Clique aqui para baixar o documento técnico oficial de nosso token.": "Click here to download our official white paper.",
        Amigável: "Friendly",
        "A carteira amiga do homem.": "Your new best friend!",
        "Sem burocracias, sem termos técnicos, sem configurações, baixou, usou.": "No bureaucracy, no technical terms, no configurations, just download and start using it.",
        "Seus rendimentos": "Your income",
        "Confira de maneira fácil seu saldo e seus rendimentos.": "Check your balance and your income easily.",
        "Você pode destinar parte de seus rendimentos à instituições de caridade.": "Share your income with charities.",
        "Envie e Receba": "Transfer",
        "Envie e receba REAU de um jeito fácil, calculando o valor na sua moeda nativa.": "Transfer REAU easily, estimating the value in your preferred currency.",
        "Você é um comerciante?": "Are you a merchant?",
        "Você pode começar a receber em REAU a hora que quiser. Sem cadastros, sem taxas ocultas.":
          "You can start receiving REAU anytime you want. No registration, no hidden fees",
        "Centro EducacionAU": "Educational center",
        "Tenha acesso a conteúdos localizados, orientados a educar e ajudar aqueles que querem entender como funcionam os conceitos únicos das criptomoedas e das finanças descentralizadas.":
          "Get access to related content, oriented to educate and help those that want understand the unique concepts of cryptocurrency and decentralized finance",
        'REAUPay é uma carteira "tudo em um" que funciona na Binance Smart Chain facilitando o uso do REAU.':
          "is an all-in-one wallet that works with the Binance Smart Chain, making it easier to use REAU.",
        "Em breve disponível para Android e iOS.": "Available soon for Android and iOS.",
        "Quem soltou os cachorros?": "Who Let the Dogs Out?",
        "Lançamento justo do $REAU": "REAU fair launch",
        "Início das primeiras campanhas de divulgação": "Marketing efforts begin",
        "Primeiro contato com ONGs para iniciar esforços de arrecadação de fundos de caridade": "First contact with NGOs to begin charity fundraising efforts within our community",
        "1º Trimestre - 2021": "1st Quarter - 2021",
        "2º Trimestre - 2021": "2nd Quarter - 2021",
        "3º Trimestre - 2021": "3rd Quarter - 2021",
        "4º Trimestre - 2021": "4th Quarter - 2021",
        "Dominando as ruas": "Dominating the Streets",
        "Primeira listagem em uma corretora.": "First exchange listing.",
        "Auditoria(s) completas": "Audits complete",
        "Listagem em rankings de moedas (CMC, CG e etc)": "Listing on coin rank listings (CMC, CG, etc)",
        "Novo site da Vira-Lata Finance e REAUPay": "New Viralata Finance website launch",
        "REAUPay v1 é lançado como uma maneira fácil de enviar e receber tokens, visualizar saldo e tokens ganhos, assim como carteira de fundos":
          "REAUPay v1 is launched with an easy way to send and receive tokens, checking balance and tokens earned, and funding your wallet",
        "Chegando na Lua": "Reaching for the Moon",
        "Parcerias com vendedores para mercados de NFT": "Beginning partnerships for the NFT market",
        "Parcerias com redes de suprimentos para pets, para distribuição de materiais para ONGs":
          "Partnerships with large pet supply companies to provide logistics and distribute supplies to various charities",
        "Novas funcionalidades ao REAUPay como Stacking para caridades, Rampa de acesso e saída para FIAT (reais e outras) e DEX própria":
          "New functionalities added to REAUPay: Charity staking, on ramp support for fiat (real, and others), and DEX",
        "Lançamento do marketplace de NFTs com mercadorias de edição limitada da Vira-Lata Finance": "NFT marketplace with limited edition Vira-Lata merchandise",
        "Ao infinito e além!": "To Infinity and Beyond!",
        "Lançamento da governança": "Governance launch",
        "Lançamento da loteria $REAU": "$REAU Lottery launch",
        "Expansão do time em 30%": "Team expansion by 30%",
        "Lançamento do 1o jogo Vira-Lata Finance com uso do $REAU como moeda virtual": "Caramel Game using $REAU as virtual currency",
        "O Vira-lata Finance foi inspirado pelo vira-lata caramelo e por milhares de outros vira-latas que vivem nas ruas do Brasil.":
          "Vira-Lata Finance was inspired by the caramel coloured stray dog, and the millions of other stray dogs that wander the streets of Brazil. ",
        "Como comunidade, acreditamos que temos o poder de fazer a diferença por meio de doações comunitárias para instituições de caridade.":
          "As a community, we believe that we have the power to make a difference through community efforts and charitable donations.",
        "Total arrecadado:": "Total raised:",
        "Conheça mais sobre as instituições ajudadas": "Find out more about the institutions we’ve helped",
        A: "",
        "realizou uma ação no dia": "recent fundraising effort on",
        "arrecadando um total de": "raised",
        "Ações sociais": "Successful Fundraising",
        melhores: "better",
        "mais seguros": "safer",
        para: "to",
        WhitepaperLink: "https://bit.ly/3tot4nw",
        ReauPaperLink: "https://bit.ly/3g6mRbY",
        "Página não encontrada": "Page Not Found",
        "A página que você está procurando não existe.": "The page you are looking for does not exist.",
        "Voltar para página inicial": "Go back to home page",
        ViralataHelp: "https://t.me/reau_infobot",
        novo: "new",
        FundoCaridadeLink: "https://drive.google.com/file/d/1bZ8wrgbQb1iS52DiSyX3igPkjesuN2LI/view?usp=sharing",
        "Fundo de caridade Viralata Finance": "Viralata Finance Charity Fund",
        "O fundo de caridade é uma carteira na blockchain para receber doações em nome da Viralata Finance que são mensalmente repassadas para ONG's parceiras.":
          "The charity fund is a wallet on the blockchain to receive donations in $REAU in the name of Viralata Finance and transfer the funds to partner animal shelter (NGOs) monthly to create a relationship with it.",
        "Todas as transações são feitas de forma transparente e você pode acompanhar ": "You can check the balance and all transactions in this portfolio directly at ",
        "aqui (diretamente pelo BSCscan) ": "BSCscan by clicking here ",
        "e também no ": "and also on the ",
        "Como funciona?": "How transfers will be made to NGOs?",
        "Repasse mensal - no último dia do mês, iniciando em 31/05/2021 serão transformados 20% do total do fundo de caridade em REAUs para moeda estável e enviado para as ONGs parceiras, fazendo uma divisão igualitária entre elas;":
          "Monthly transfer to the partner NGOs from the Charity Fund: on the last day of the month, starting on May 31 2021, 20% of the total charity fund will be exchanged from $REAUs into a stable token and sent to partner NGOs, making an equal division among them;",
        "Fundo restante - 80% restantes permanecerão no fundo de modo a gerar um crescimento progressivo, como se fosse um segundo buraco negro gerador de renda para o fundo de caridade;":
          "Remaining fund - Remaining 80% will remain in the fund in order to generate progressive growth, as if it were a second income-generating black hole for the charity fund;",
        "Estímulo ao crescimento - a ideia final é que somente os rendimentos do fundo sejam usados para doações, de forma estimular o seu crescimento progressivo e ajudar cada vez mais ONGs;":
          "Stimulating growth - the final idea is that only the proceeds of the fund are used for donations, in order to stimulate its progressive growth and help more and more NGOs;",
        "Saiba mais clicando aqui.": "Read more about it by clicking here.",
        "Fundo de caridade": "Charity Fund",
        "Entrar no App": "Enter App"
      },
    },
    es: {
      translations: {
        Auditoria: "Auditoría",
        "em breve": "en breve",
        Planejamento: "Planificación",
        "Siga-nos": "Seguínos",
        Telegram: "https://t.me/viralatafinance_es",
        "COMPRAR REAU": "Comprar REAU",
        "Sou novo": "Soy Nuevo",
        "Se você está iniciando no mundo das finanças descentralizadas, clique aqui.": "Si te estás iniciando en el mundo de las finanzas descentralizadas, hacé click aquí.",
        "Sou experiente": "Soy Experto",
        "Ir para o site da PancakeSwap para comprar REAU": "Haga clic aquí para comprar REAU",
        "REAU é um investimento volátil e de alto risco. Não arrisque nada que você não esteja disposto a perder.":
          "REAU es una inversión volátil de alto riesgo. No arriesgues nada que no estés dispuesto a perder.",
        descentralizados: "descentralizado",
        "voltados para": "para",
        caridade: "caridad",
        "é um token descentralizado com uma economia deflacionária, introduzindo os Brasileiros ao mundo das criptomoedas.":
          "es un token descentralizado con una economía deflacionaria, que introduce a los brasileños al mundo de las criptomonedas.",
        'é uma carteira "tudo em um" que funciona na Binance Smart Chain facilitando o uso do REAU.': `es una billetera "todo en uno", que funciona en Binance Smart Chain, lo que facilita el uso de REAU.`,
        "Nosso planejamento inclui um inovador mercado para NFT, poupança com incentivos à caridade, governança da comunidade, e mais.":
          "Nuestra planificación incluye un mercado innovador para NFT, ahorros con incentivos caritativos, gobernanza comunitaria y más.",
        "Confira!": "¡Mirá!",
        CRIANDO: "Creando",
        "SISTEMAS FINANCEIROS": "SISTEMAS FINANCIEROS",
        "Liquidez automática": "Liquidez automática",
        "3% de cada transação contribui para gerar automaticamente liquidez dentro do pool de liquidez da PancakeSwap.":
          "El 3% de cada transacción contribuye a generar automáticamente liquidez, dentro del grupo de liquidez de PancakeSwap.",
        "Mecanismo deflacionário": "Mecanismo deflacionario",
        "Aprox. 1% de cada transação é destinado a uma carteira morta (sem dono), retirando de circulação e aumentando a escassez de tokens.":
          "Aproximadamente el 1% de cada transacción va a una billetera muerta (sin propietario), retirándose de la circulación y aumentando la escasez de tokens.",
        "Recompensas passivas": "Ingresos pasivos",
        "Os detentores do token (holders) ganham recompensas passivas através do sistema de reflexão do token.":
          "Los poseedores del Token (holders) obtienen ingresos pasivos a través del sistema de reflexión de tokens.",
        "2% de cada transação é distribuído para quem tem REAU na carteira (de preferência REAUPay), incluindo a carteira morta (mecanismo deflacionário).":
          "El 2% de cada transacción se distribuye a quienes tienen REAU en su billetera (preferiblemente REAUPay), incluída la “billetera muerta” (mecanismo deflacionario).",
        Seguro: "Seguro",
        "A liquidez inicial do contrato foi queimada junto com metade dos tokens. O que isso significa? O REAU sempre terá um valor mínimo.":
          "La liquidez inicial del contrato se quemó junto con la mitad de los tokens. ¿Qué significa esto? El REAU siempre tendrá un valor mínimo.",
        "Vira-Lata Finance ($REAU) é um projeto de código aberto descentralizado, criado para incluir os Brasileiros ao mundo das criptomoedas, prover sistemas financeiros de maneira segura, de fácil uso e com ações destinadas à caridade.":
          "Vira-Lata Finance ($REAU) es un proyecto descentralizado de código abierto, creado para incluir a los brasileños en el mundo de las criptomonedas, para brindar sistemas financieros de manera segura, fácil de usar y con acciones dirigidas a la caridad.",
        Objetivos: "Objetivos",
        "Encorajar e empoderar os Brasileiros a ter controle de suas finanças;": "Alentar y empoderar a los brasileños para que tengan control sobre sus finanzas;",
        "Demonstrar o potencial de soluções financeiras alternativas;": "Demostrar el potencial de soluciones financieras alternativas;",
        "Ajudar a arrecadar fundos à instituições de caridade destinadas às ações de cuidados aos maus tratos animais;":
          "Ayudar a recaudar fondos para organizaciones benéficas que luchan contra el maltrato de animales;",
        Características: "Caracteristícas ",
        "Clique aqui para baixar o nosso documento destinado a iniciantes no mundo de criptomoedas e finanças descentralizadas.":
          "Haz Click para hacer el download del documento dirigido a principiantes en el mundo de las criptomonedas y las finanzas descentralizadas",
        "Clique aqui para baixar o documento técnico oficial de nosso token.": "Haz Click para hacer el download del documento técnico oficial de nuestro Token.",
        Amigável: "Amigable",
        "A carteira amiga do homem.": "La billetera amiga del hombre!",
        "Sem burocracias, sem termos técnicos, sem configurações, baixou, usou.": "Sin burocracia, sin términos técnicos, sin configuraciones, descargás y usás.",
        "Seus rendimentos": "Tus Rendimientos",
        "Confira de maneira fácil seu saldo e seus rendimentos.": "Consultá tu saldo e ingresos fácilmente.",
        "Você pode destinar parte de seus rendimentos à instituições de caridade.": "Podés destinar parte de tus rendimientos a organizaciones benéficas.",
        "Envie e Receba": "Enviar y recibir",
        "Envie e receba REAU de um jeito fácil, calculando o valor na sua moeda nativa.": "Enviá y recibí REAU de forma sencilla, calculando el valor en su moneda nativa.",
        "Você é um comerciante?": "¿Eres comerciante?",
        "Você pode começar a receber em REAU a hora que quiser. Sem cadastros, sem taxas ocultas.":
          "Puedes empezar a recibir en REAU cuando quieras. Sin registro, sin tarifas ocultas.",
        "Centro EducacionAU": "Centro EducacionAU",
        "Tenha acesso a conteúdos localizados, orientados a educar e ajudar aqueles que querem entender como funcionam os conceitos únicos das criptomoedas e das finanças descentralizadas.":
          "Obtené acceso a contenido destinado a educar y ayudar a quienes desean comprender cómo funcionan los conceptos únicos de criptomonedas y finanzas descentralizadas.",
        'REAUPay é uma carteira "tudo em um" que funciona na Binance Smart Chain facilitando o uso do REAU.': `REAUPay es una billetera "todo en uno" que funciona en Binance Smart Chain, lo que facilita el uso de REAU.`,
        "Em breve disponível para Android e iOS.": "En breve disponible para Android y iOS.",
        "Quem soltou os cachorros?": "¿QUIÉN SOLTÓ A LOS PERROS?",
        "Lançamento justo do $REAU": "Lanzamiento de $REAU",
        "Início das primeiras campanhas de divulgação": "Inicio de las primeras campañas de difusión",
        "Primeiro contato com ONGs para iniciar esforços de arrecadação de fundos de caridade":
          "Primer contacto con ONGs, para iniciar las acciones de recaudación de fondos destinadas a la caridad",
        "1º Trimestre - 2021": "1º Trimestre - 2021",
        "2º Trimestre - 2021": "2º Trimestre - 2021",
        "3º Trimestre - 2021": "3º Trimestre - 2021",
        "4º Trimestre - 2021": "4º Trimestre - 2021",
        "Dominando as ruas": "DOMINANDO LAS CALLES",
        "Primeira listagem em uma corretora.": "Primera cotización en una Exchange.",
        "Auditoria(s) completas": "Auditoría(s) completa",
        "Listagem em rankings de moedas (CMC, CG e etc)": "Listado en el ranking de monedas (CMC, CG, etc.)",
        "Novo site da Vira-Lata Finance e REAUPay": "Nuevo sitio web de Vira-Lata Finance y REAUPay",
        "REAUPay v1 é lançado como uma maneira fácil de enviar e receber tokens, visualizar saldo e tokens ganhos, assim como carteira de fundos":
          "REAUPay Versión I,  se lanza como una forma fácil de enviar y recibir tokens, ver el saldo y los tokens ganados, y también como billetera de fondos",
        "Chegando na Lua": "Llegando a la Luna",
        "Parcerias com vendedores para mercados de NFT": "Asociaciones con vendedores para mercados NFT",
        "Parcerias com redes de suprimentos para pets, para distribuição de materiais para ONGs":
          "Asociaciones con cadenas de suplementos para mascotas, que nos ayudarán a distribuir materiales a ONGs",
        "Novas funcionalidades ao REAUPay como Stacking para caridades, Rampa de acesso e saída para FIAT (reais e outras) e DEX própria":
          "Nuevas funcionalidades de REAUPay: Stacking para organizaciones benéficas, Rampa de acceso y salida para FIAT (real y otros) y DEX propia.",
        "Lançamento do marketplace de NFTs com mercadorias de edição limitada da Vira-Lata Finance":
          "Lanzamiento del mercado de NFT con productos de edición limitada de Vira-Lata Finance",
        "Ao infinito e além!": "¡AL INFINITO Y MÁS ALLÁ!",
        "Lançamento da governança": "Lanzamiento de gobernanza",
        "Lançamento da loteria $REAU": "Lanzamiento de la lotería $REAU",
        "Expansão do time em 30%": "Expansión del equipo en un 30%",
        "Lançamento do 1o jogo Vira-Lata Finance com uso do $REAU como moeda virtual": "Lanzamiento del primer juego Vira-Lata Finance usando $REAU como moneda virtual",
        "O Vira-lata Finance foi inspirado pelo vira-lata caramelo e por milhares de outros vira-latas que vivem nas ruas do Brasil.":
          "El proyecto de “Vira-lata Finance”, se inspiró en el perro callejero llamado Caramelo, y miles de otros perros que viven en las calles de Brasil.",
        "Como comunidade, acreditamos que temos o poder de fazer a diferença por meio de doações comunitárias para instituições de caridade.":
          "Como comunidad, creemos que tenemos el poder de marcar la diferencia a través de donaciones comunitarias a organizaciones benéficas.",
        "Total arrecadado:": "Total arrecaudado:",
        "Conheça mais sobre as instituições ajudadas": "Más información sobre las instituciones asistidas",
        A: "",
        "realizou uma ação no dia": "realizó una acción el",
        "arrecadando um total de": "recaudando un total de",
        "Ações sociais": "Acciones sociales",
        melhores: "Mejores",
        "mais seguros": "más seguros",
        para: "para",
        WhitepaperLink: "https://bit.ly/3tot4nw",
        ReauPaperLink: "https://bit.ly/3g6mRbY",
        "Página não encontrada": "Página no encontrada",
        "A página que você está procurando não existe.": "la página que está buscando no existe",
        "Voltar para página inicial": "Volver al menu principal",
        ViralataHelp: "https://t.me/reau_infobot",
        novo: "nuevo",        
        "Entrar no App": "Enter App"
      },
    },
  },
  fallbackLng: "en",
  ns: ["translations"],
  defaultNS: "translations",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    formatSeparator: ",",
  },
  react: {
    useSuspense: true,
    react: {
      // https://react.i18next.com/latest/trans-component#trans-props
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["br", "strong", "b", "i"],
    },
  },
  detection: detectorOptions,
});

export default i18n;
