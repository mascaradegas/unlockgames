/**
 * UNLOCK 2026 - Game Data
 *
 * Edit this file monthly to update:
 * - Class names and emojis
 * - Word pairs for all games
 * - Class descriptions for tooltips
 *
 * Changes here automatically apply to Word Match, Word Drop, and Word Stack
 */

// ===== CLASS DESCRIPTIONS (For Tooltips) =====
// These appear when you hover over the 📚 button on each class
const AULA_DESCRIPTIONS = {
  1: "Domine o verbo 'to be' no presente. Aprenda a descrever estados e condições de pessoas e objetos.",
  2: "Aprenda a contar e reconhecer números em inglês. Essencial para comunicação diária e matemática básica.",
  3: "Pratique fazer perguntas educadas sobre posse. Útil para interações cotidianas e pedidos.",
  4: "Entenda o verbo 'get' e seus diversos significados. Um verbo fundamental com múltiplos contextos.",
  5: "Aprenda verbos direcionais 'go' e 'come'. Essencial para descrever movimento e viagem.",
  6: "Domine 'going to' para intenções futuras. Aprenda a expressar o que você planeja fazer.",
  7: "Diferencie entre 'have' e 'has'. Essencial para posse e tempos perfeitos do presente.",
  8: "Aprenda 'have to' e 'need to' para obrigações. Expresse o que você deve ou precisa fazer.",
  9: "Domine 'here' e 'there' para localização. Aprenda relações espaciais e direções.",
  10: "Faça perguntas com 'how much' e 'how many'. Perfeito para compras e quantidades.",
  11: "Domine 'how' e seus muitos usos. Pergunte sobre modo, frequência e mais.",
  12: "Pratique formação de perguntas com 'is' e 'are'. Essencial para habilidades de investigação.",
  13: "Aprenda o verbo versátil 'can'. Expresse habilidade, possibilidade e permissão.",
  14: "Domine os dias da semana. Essencial para agendamento e planejamento.",
  15: "Aprenda vocabulário e frases direcionais. Navegue e dê direções com confiança.",
  16: "Domine 'do', 'does' e 'did'. Fundamental para formar perguntas e negativas.",
  17: "Pratique pedidos educados com 'let me' e 'can I'. Essencial para educação.",
  18: "Expresse seus sentimentos e opiniões. Aprenda 'like', 'love' e 'hate' em diferentes intensidades.",
  19: "Pratique expressões com 'looking for'. Essencial para compras e encontrar coisas.",
  20: "Domine meses e estações. Aprenda vocabulário temporal para planejamento.",
  21: "Expresse emoções e estados de espírito. Descreva como você e outros estão se sentindo.",
  22: "Aplique números em contextos reais. Números usados em situações cotidianas.",
  23: "Domine 'this' e 'that'. Demonstre e especifique objetos na conversa.",
  24: "Expresse desejos e necessidades. Aprenda 'want' e 'need' em vários contextos."
};

// ===== GAME CLASSES (Used by all three games) =====
// Add/remove classes here and they appear in all games automatically
const AULAS = [
  {
    id: 1,
    title: 'IS / ARE',
    emoji: '🔵🟢',
    sentences: [
      'He is happy',
      'She is sad',
      'I am tired',
      'You are late',
      'We are ready',
      'They are here',
      'It is big',
      'She is smart'
    ]
  },
  {
    id: 2,
    title: 'NUMBERS',
    emoji: '🔢',
    sentences: [
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight'
    ]
  },
  {
    id: 3,
    title: 'DO YOU HAVE?',
    emoji: '❓',
    sentences: [
      'Do you have a pen?',
      'Do you have time?',
      'Do you have money?',
      'Do you have a car?',
      'Do you have a phone?',
      'Do you have a book?',
      'Do you have an idea?',
      'Do you have a plan?'
    ]
  },
  {
    id: 4,
    title: 'GET',
    emoji: '✋',
    sentences: [
      'Get the book',
      'Get up early',
      'Get ready',
      'Get help',
      'Get lost',
      'Get angry',
      'Get dressed',
      'Get started'
    ]
  },
  {
    id: 5,
    title: 'GO / COME',
    emoji: '🚶',
    sentences: [
      'Go home',
      'Come here',
      'Go away',
      'Come back',
      'Go fast',
      'Come inside',
      'Go out',
      'Come with me'
    ]
  },
  {
    id: 6,
    title: 'GOING TO',
    emoji: '📅',
    sentences: [
      'I am going to study',
      'He is going to work',
      'She is going to sleep',
      'We are going to eat',
      'They are going to play',
      'You are going to win',
      'It is going to rain',
      'I am going to call'
    ]
  },
  {
    id: 7,
    title: 'HAVE / HAS',
    emoji: '🤲',
    sentences: [
      'I have a pen',
      'He has a book',
      'She has money',
      'They have time',
      'We have a plan',
      'You have a job',
      'It has a door',
      'I have an idea'
    ]
  },
  {
    id: 8,
    title: 'HAVE TO / NEED TO',
    emoji: '⚠️',
    sentences: [
      'I have to go',
      'You need to study',
      'He has to work',
      'She needs to sleep',
      'We have to eat',
      'They need to practice',
      'It has to be done',
      'I need to help'
    ]
  },
  {
    id: 9,
    title: 'HERE / THERE',
    emoji: '📍',
    sentences: [
      'Here is the book',
      'There is a pen',
      'Here are the keys',
      'There are many people',
      'Come here',
      'Go there',
      'Stay here',
      'Look there'
    ]
  },
  {
    id: 10,
    title: 'HOW MUCH / MANY',
    emoji: '💰',
    sentences: [
      'How much is it?',
      'How many people?',
      'How much money?',
      'How many books?',
      'How much time?',
      'How many days?',
      'How much water?',
      'How many hours?'
    ]
  },
  {
    id: 11,
    title: 'HOW',
    emoji: '❔',
    sentences: [
      'How are you?',
      'How old are you?',
      'How do you feel?',
      'How long is it?',
      'How often?',
      'How far?',
      'How big?',
      'How fast?'
    ]
  },
  {
    id: 12,
    title: 'IS / ARE QUESTIONS',
    emoji: '❓✋',
    sentences: [
      'Is this right?',
      'Are you ready?',
      'Is he happy?',
      'Are they here?',
      'Is it big?',
      'Are we late?',
      'Is she smart?',
      'Are you tired?'
    ]
  },
  {
    id: 13,
    title: 'CAN',
    emoji: '💪',
    sentences: [
      'I can help',
      'You can do it',
      'He can speak English',
      'She can dance',
      'We can win',
      'They can sing',
      'It can work',
      'I can try'
    ]
  },
  {
    id: 14,
    title: 'DAYS OF WEEK',
    emoji: '📆',
    sentences: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday',
      'Today is Monday'
    ]
  },
  {
    id: 15,
    title: 'DIRECTIONS',
    emoji: '🗺️',
    sentences: [
      'Go left',
      'Turn right',
      'Go straight',
      'Go forward',
      'Go back',
      'Go up',
      'Go down',
      'This way'
    ]
  },
  {
    id: 16,
    title: 'DO / DOES / DID',
    emoji: '⚙️',
    sentences: [
      'Do you understand?',
      'Does he know?',
      'Did you see?',
      'I do like it',
      'She does work here',
      'They did go',
      'Do it now',
      'Does it matter?'
    ]
  },
  {
    id: 17,
    title: 'LET ME / CAN I',
    emoji: '🙏',
    sentences: [
      'Let me help',
      'Can I help you?',
      'Let me see',
      'Can I ask?',
      'Let me try',
      'Can I go?',
      'Let me explain',
      'Can I stay?'
    ]
  },
  {
    id: 18,
    title: 'LIKE / LOVE / HATE',
    emoji: '❤️',
    sentences: [
      'I like it',
      'I love you',
      'I hate it',
      'He likes sports',
      'She loves music',
      'They hate waiting',
      'Do you like it?',
      'I really love this'
    ]
  },
  {
    id: 19,
    title: 'LOOKING FOR',
    emoji: '🔍',
    sentences: [
      'I am looking for help',
      'Are you looking for this?',
      'He is looking for a job',
      'She is looking for a key',
      'We are looking for answers',
      'They are looking for him',
      'Looking for trouble',
      'What are you looking for?'
    ]
  },
  {
    id: 20,
    title: 'MONTHS / SEASONS',
    emoji: '🍂',
    sentences: [
      'January',
      'February',
      'Spring',
      'Summer',
      'Fall',
      'Winter',
      'March',
      'December'
    ]
  },
  {
    id: 21,
    title: 'MOODS / FEELINGS',
    emoji: '😊',
    sentences: [
      'I am happy',
      'You are sad',
      'He is angry',
      'She is excited',
      'They are worried',
      'We are tired',
      'It is beautiful',
      'I am scared'
    ]
  },
  {
    id: 22,
    title: 'NUMBERS REAL LIFE',
    emoji: '🔢📱',
    sentences: [
      'I have 5 apples',
      'There are 10 people',
      'It costs 20 dollars',
      'I worked 8 hours',
      'The price is 15 reais',
      'There are 365 days',
      'I have 3 brothers',
      'The temperature is 25 degrees'
    ]
  },
  {
    id: 23,
    title: 'THIS / THAT',
    emoji: '👉',
    sentences: [
      'This is good',
      'That is bad',
      'This is mine',
      'That is yours',
      'I like this one',
      'I prefer that one',
      'This is here',
      'That is there'
    ]
  },
  {
    id: 24,
    title: 'WANT / NEED',
    emoji: '🎯',
    sentences: [
      'I want to help',
      'You need to study',
      'He wants to play',
      'She needs a break',
      'We want to win',
      'They need money',
      'Do you want this?',
      'I need your help'
    ]
  }
];

// ===== WORD PAIRS FOR GAMES =====
// Used by Word Match, Word Drop, and Word Stack
const WORD_PAIRS = [
  // Class 1: IS / ARE
  { aula: 1, pt: 'ele está feliz', en: 'he is happy' },
  { aula: 1, pt: 'ela está triste', en: 'she is sad' },
  { aula: 1, pt: 'eu estou cansado', en: 'i am tired' },
  { aula: 1, pt: 'você está atrasado', en: 'you are late' },
  { aula: 1, pt: 'nós estamos prontos', en: 'we are ready' },
  { aula: 1, pt: 'eles estão aqui', en: 'they are here' },
  { aula: 1, pt: 'isso é grande', en: 'it is big' },
  { aula: 1, pt: 'ela é inteligente', en: 'she is smart' },

  // Class 2: NUMBERS
  { aula: 2, pt: 'um', en: 'one' },
  { aula: 2, pt: 'dois', en: 'two' },
  { aula: 2, pt: 'três', en: 'three' },
  { aula: 2, pt: 'quatro', en: 'four' },
  { aula: 2, pt: 'cinco', en: 'five' },
  { aula: 2, pt: 'seis', en: 'six' },
  { aula: 2, pt: 'sete', en: 'seven' },
  { aula: 2, pt: 'oito', en: 'eight' },

  // Class 3: DO YOU HAVE?
  { aula: 3, pt: 'você tem uma caneta?', en: 'do you have a pen?' },
  { aula: 3, pt: 'você tem tempo?', en: 'do you have time?' },
  { aula: 3, pt: 'você tem dinheiro?', en: 'do you have money?' },
  { aula: 3, pt: 'você tem um carro?', en: 'do you have a car?' },
  { aula: 3, pt: 'você tem um telefone?', en: 'do you have a phone?' },
  { aula: 3, pt: 'você tem um livro?', en: 'do you have a book?' },
  { aula: 3, pt: 'você tem uma ideia?', en: 'do you have an idea?' },
  { aula: 3, pt: 'você tem um plano?', en: 'do you have a plan?' },

  // Class 4: GET
  { aula: 4, pt: 'pegue o livro', en: 'get the book' },
  { aula: 4, pt: 'levante cedo', en: 'get up early' },
  { aula: 4, pt: 'prepare-se', en: 'get ready' },
  { aula: 4, pt: 'obtenha ajuda', en: 'get help' },
  { aula: 4, pt: 'perca-se', en: 'get lost' },
  { aula: 4, pt: 'fique com raiva', en: 'get angry' },
  { aula: 4, pt: 'vista-se', en: 'get dressed' },
  { aula: 4, pt: 'comece', en: 'get started' },

  // Class 5: GO / COME
  { aula: 5, pt: 'vá para casa', en: 'go home' },
  { aula: 5, pt: 'venha aqui', en: 'come here' },
  { aula: 5, pt: 'vá embora', en: 'go away' },
  { aula: 5, pt: 'volte', en: 'come back' },
  { aula: 5, pt: 'vá rápido', en: 'go fast' },
  { aula: 5, pt: 'entre', en: 'come inside' },
  { aula: 5, pt: 'saia', en: 'go out' },
  { aula: 5, pt: 'venha comigo', en: 'come with me' },

  // Class 6: GOING TO
  { aula: 6, pt: 'vou estudar', en: 'i am going to study' },
  { aula: 6, pt: 'ele vai trabalhar', en: 'he is going to work' },
  { aula: 6, pt: 'ela vai dormir', en: 'she is going to sleep' },
  { aula: 6, pt: 'vamos comer', en: 'we are going to eat' },
  { aula: 6, pt: 'eles vão brincar', en: 'they are going to play' },
  { aula: 6, pt: 'você vai vencer', en: 'you are going to win' },
  { aula: 6, pt: 'vai chover', en: 'it is going to rain' },
  { aula: 6, pt: 'vou ligar', en: 'i am going to call' },

  // Class 7: HAVE / HAS
  { aula: 7, pt: 'tenho uma caneta', en: 'i have a pen' },
  { aula: 7, pt: 'ele tem um livro', en: 'he has a book' },
  { aula: 7, pt: 'ela tem dinheiro', en: 'she has money' },
  { aula: 7, pt: 'eles têm tempo', en: 'they have time' },
  { aula: 7, pt: 'temos um plano', en: 'we have a plan' },
  { aula: 7, pt: 'você tem um trabalho', en: 'you have a job' },
  { aula: 7, pt: 'tem uma porta', en: 'it has a door' },
  { aula: 7, pt: 'tenho uma ideia', en: 'i have an idea' },

  // Class 8: HAVE TO / NEED TO
  { aula: 8, pt: 'tenho que ir', en: 'i have to go' },
  { aula: 8, pt: 'você precisa estudar', en: 'you need to study' },
  { aula: 8, pt: 'ele tem que trabalhar', en: 'he has to work' },
  { aula: 8, pt: 'ela precisa dormir', en: 'she needs to sleep' },
  { aula: 8, pt: 'temos que comer', en: 'we have to eat' },
  { aula: 8, pt: 'eles precisam praticar', en: 'they need to practice' },
  { aula: 8, pt: 'tem que ser feito', en: 'it has to be done' },
  { aula: 8, pt: 'preciso da sua ajuda', en: 'i need your help' },

  // Class 9: HERE / THERE
  { aula: 9, pt: 'aqui está o livro', en: 'here is the book' },
  { aula: 9, pt: 'lá está uma caneta', en: 'there is a pen' },
  { aula: 9, pt: 'aqui estão as chaves', en: 'here are the keys' },
  { aula: 9, pt: 'lá tem muitas pessoas', en: 'there are many people' },
  { aula: 9, pt: 'venha aqui', en: 'come here' },
  { aula: 9, pt: 'vá lá', en: 'go there' },
  { aula: 9, pt: 'fique aqui', en: 'stay here' },
  { aula: 9, pt: 'olhe lá', en: 'look there' },

  // Class 10: HOW MUCH / MANY
  { aula: 10, pt: 'quanto custa?', en: 'how much is it?' },
  { aula: 10, pt: 'quantas pessoas?', en: 'how many people?' },
  { aula: 10, pt: 'quanto dinheiro?', en: 'how much money?' },
  { aula: 10, pt: 'quantos livros?', en: 'how many books?' },
  { aula: 10, pt: 'quanto tempo?', en: 'how much time?' },
  { aula: 10, pt: 'quantos dias?', en: 'how many days?' },
  { aula: 10, pt: 'quanta água?', en: 'how much water?' },
  { aula: 10, pt: 'quantas horas?', en: 'how many hours?' },

  // Class 11: HOW
  { aula: 11, pt: 'como você está?', en: 'how are you?' },
  { aula: 11, pt: 'quantos anos você tem?', en: 'how old are you?' },
  { aula: 11, pt: 'como você se sente?', en: 'how do you feel?' },
  { aula: 11, pt: 'quanto tempo é?', en: 'how long is it?' },
  { aula: 11, pt: 'com que frequência?', en: 'how often?' },
  { aula: 11, pt: 'que distância?', en: 'how far?' },
  { aula: 11, pt: 'que tamanho?', en: 'how big?' },
  { aula: 11, pt: 'que velocidade?', en: 'how fast?' },

  // Class 12: IS / ARE QUESTIONS
  { aula: 12, pt: 'isso está certo?', en: 'is this right?' },
  { aula: 12, pt: 'você está pronto?', en: 'are you ready?' },
  { aula: 12, pt: 'ele está feliz?', en: 'is he happy?' },
  { aula: 12, pt: 'eles estão aqui?', en: 'are they here?' },
  { aula: 12, pt: 'é grande?', en: 'is it big?' },
  { aula: 12, pt: 'estamos atrasados?', en: 'are we late?' },
  { aula: 12, pt: 'ela é inteligente?', en: 'is she smart?' },
  { aula: 12, pt: 'você está cansado?', en: 'are you tired?' },

  // Class 13: CAN
  { aula: 13, pt: 'posso ajudar', en: 'i can help' },
  { aula: 13, pt: 'você consegue fazer', en: 'you can do it' },
  { aula: 13, pt: 'ele consegue falar inglês', en: 'he can speak english' },
  { aula: 13, pt: 'ela consegue dançar', en: 'she can dance' },
  { aula: 13, pt: 'podemos vencer', en: 'we can win' },
  { aula: 13, pt: 'eles conseguem cantar', en: 'they can sing' },
  { aula: 13, pt: 'pode funcionar', en: 'it can work' },
  { aula: 13, pt: 'posso tentar', en: 'i can try' },

  // Class 14: DAYS OF WEEK
  { aula: 14, pt: 'segunda-feira', en: 'monday' },
  { aula: 14, pt: 'terça-feira', en: 'tuesday' },
  { aula: 14, pt: 'quarta-feira', en: 'wednesday' },
  { aula: 14, pt: 'quinta-feira', en: 'thursday' },
  { aula: 14, pt: 'sexta-feira', en: 'friday' },
  { aula: 14, pt: 'sábado', en: 'saturday' },
  { aula: 14, pt: 'domingo', en: 'sunday' },
  { aula: 14, pt: 'hoje é segunda', en: 'today is monday' },

  // Class 15: DIRECTIONS
  { aula: 15, pt: 'vire à esquerda', en: 'go left' },
  { aula: 15, pt: 'vire à direita', en: 'turn right' },
  { aula: 15, pt: 'vá em frente', en: 'go straight' },
  { aula: 15, pt: 'vá para frente', en: 'go forward' },
  { aula: 15, pt: 'vá para trás', en: 'go back' },
  { aula: 15, pt: 'suba', en: 'go up' },
  { aula: 15, pt: 'desça', en: 'go down' },
  { aula: 15, pt: 'por aqui', en: 'this way' },

  // Class 16: DO / DOES / DID
  { aula: 16, pt: 'você entende?', en: 'do you understand?' },
  { aula: 16, pt: 'ele sabe?', en: 'does he know?' },
  { aula: 16, pt: 'você viu?', en: 'did you see?' },
  { aula: 16, pt: 'eu gosto', en: 'i do like it' },
  { aula: 16, pt: 'ela trabalha aqui', en: 'she does work here' },
  { aula: 16, pt: 'eles foram', en: 'they did go' },
  { aula: 16, pt: 'faça agora', en: 'do it now' },
  { aula: 16, pt: 'importa?', en: 'does it matter?' },

  // Class 17: LET ME / CAN I
  { aula: 17, pt: 'deixe-me ajudar', en: 'let me help' },
  { aula: 17, pt: 'posso ajudá-lo?', en: 'can i help you?' },
  { aula: 17, pt: 'deixe-me ver', en: 'let me see' },
  { aula: 17, pt: 'posso perguntar?', en: 'can i ask?' },
  { aula: 17, pt: 'deixe-me tentar', en: 'let me try' },
  { aula: 17, pt: 'posso ir?', en: 'can i go?' },
  { aula: 17, pt: 'deixe-me explicar', en: 'let me explain' },
  { aula: 17, pt: 'posso ficar?', en: 'can i stay?' },

  // Class 18: LIKE / LOVE / HATE
  { aula: 18, pt: 'eu gosto', en: 'i like it' },
  { aula: 18, pt: 'eu te amo', en: 'i love you' },
  { aula: 18, pt: 'eu odeio', en: 'i hate it' },
  { aula: 18, pt: 'ele gosta de esportes', en: 'he likes sports' },
  { aula: 18, pt: 'ela ama música', en: 'she loves music' },
  { aula: 18, pt: 'eles odeiam esperar', en: 'they hate waiting' },
  { aula: 18, pt: 'você gosta?', en: 'do you like it?' },
  { aula: 18, pt: 'eu realmente amo isso', en: 'i really love this' },

  // Class 19: LOOKING FOR
  { aula: 19, pt: 'estou procurando ajuda', en: 'i am looking for help' },
  { aula: 19, pt: 'você está procurando por isso?', en: 'are you looking for this?' },
  { aula: 19, pt: 'ele está procurando um trabalho', en: 'he is looking for a job' },
  { aula: 19, pt: 'ela está procurando uma chave', en: 'she is looking for a key' },
  { aula: 19, pt: 'estamos procurando respostas', en: 'we are looking for answers' },
  { aula: 19, pt: 'eles estão procurando por ele', en: 'they are looking for him' },
  { aula: 19, pt: 'procurando confusão', en: 'looking for trouble' },
  { aula: 19, pt: 'pelo que você está procurando?', en: 'what are you looking for?' },

  // Class 20: MONTHS / SEASONS
  { aula: 20, pt: 'janeiro', en: 'january' },
  { aula: 20, pt: 'fevereiro', en: 'february' },
  { aula: 20, pt: 'primavera', en: 'spring' },
  { aula: 20, pt: 'verão', en: 'summer' },
  { aula: 20, pt: 'outono', en: 'fall' },
  { aula: 20, pt: 'inverno', en: 'winter' },
  { aula: 20, pt: 'março', en: 'march' },
  { aula: 20, pt: 'dezembro', en: 'december' },

  // Class 21: MOODS / FEELINGS
  { aula: 21, pt: 'estou feliz', en: 'i am happy' },
  { aula: 21, pt: 'você está triste', en: 'you are sad' },
  { aula: 21, pt: 'ele está com raiva', en: 'he is angry' },
  { aula: 21, pt: 'ela está animada', en: 'she is excited' },
  { aula: 21, pt: 'eles estão preocupados', en: 'they are worried' },
  { aula: 21, pt: 'estamos cansados', en: 'we are tired' },
  { aula: 21, pt: 'é lindo', en: 'it is beautiful' },
  { aula: 21, pt: 'tenho medo', en: 'i am scared' },

  // Class 22: NUMBERS REAL LIFE
  { aula: 22, pt: 'tenho 5 maçãs', en: 'i have 5 apples' },
  { aula: 22, pt: 'há 10 pessoas', en: 'there are 10 people' },
  { aula: 22, pt: 'custa 20 dólares', en: 'it costs 20 dollars' },
  { aula: 22, pt: 'trabalhei 8 horas', en: 'i worked 8 hours' },
  { aula: 22, pt: 'o preço é 15 reais', en: 'the price is 15 reais' },
  { aula: 22, pt: 'há 365 dias', en: 'there are 365 days' },
  { aula: 22, pt: 'tenho 3 irmãos', en: 'i have 3 brothers' },
  { aula: 22, pt: 'a temperatura é 25 graus', en: 'the temperature is 25 degrees' },

  // Class 23: THIS / THAT
  { aula: 23, pt: 'isso é bom', en: 'this is good' },
  { aula: 23, pt: 'aquilo é ruim', en: 'that is bad' },
  { aula: 23, pt: 'isso é meu', en: 'this is mine' },
  { aula: 23, pt: 'aquilo é seu', en: 'that is yours' },
  { aula: 23, pt: 'gosto deste', en: 'i like this one' },
  { aula: 23, pt: 'prefiro aquele', en: 'i prefer that one' },
  { aula: 23, pt: 'isso está aqui', en: 'this is here' },
  { aula: 23, pt: 'aquilo está lá', en: 'that is there' },

  // Class 24: WANT / NEED
  { aula: 24, pt: 'quero ajudar', en: 'i want to help' },
  { aula: 24, pt: 'você precisa estudar', en: 'you need to study' },
  { aula: 24, pt: 'ele quer brincar', en: 'he wants to play' },
  { aula: 24, pt: 'ela precisa de um intervalo', en: 'she needs a break' },
  { aula: 24, pt: 'queremos vencer', en: 'we want to win' },
  { aula: 24, pt: 'eles precisam de dinheiro', en: 'they need money' },
  { aula: 24, pt: 'você quer isso?', en: 'do you want this?' },
  { aula: 24, pt: 'preciso da sua ajuda', en: 'i need your help' }
];
