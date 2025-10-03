import { QuizQuestion } from './quiz-data';

export const course3QuizQuestions: QuizQuestion[] = [
  {
    id: 'c3-q1',
    category: 'CFD Basics',
    question: 'A CFD allows you to:',
    options: [
      'Own the physical asset',
      'Exchange the difference in price between entry and exit',
      'Avoid all trading costs',
      'Trade only shares'
    ],
    correctAnswer: 'Exchange the difference in price between entry and exit',
    explanation: 'CFD stands for Contract for Difference. You profit or lose based on the price difference between opening and closing the position, without owning the underlying asset.'
  },
  {
    id: 'c3-q2',
    category: 'CFD Basics',
    question: 'True or False: With CFDs, you can profit from both rising and falling markets.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'CFDs allow you to go long (profit from rising prices) or go short (profit from falling prices), providing flexibility in any market condition.'
  },
  {
    id: 'c3-q3',
    category: 'Trading Direction',
    question: 'In CFD trading, going long means:',
    options: [
      'Expecting the price to fall',
      'Selling first, buying later',
      'Expecting the price to rise',
      'Holding the asset for years'
    ],
    correctAnswer: 'Expecting the price to rise',
    explanation: 'Going long means buying a CFD with the expectation that the price will increase, allowing you to sell later at a higher price.'
  },
  {
    id: 'c3-q4',
    category: 'Profit Calculation',
    question: 'If you open a gold CFD at $1,800 and close at $1,810 with 1 CFD, what\'s your profit?',
    options: ['$1', '$10', '$100', '$1,000'],
    correctAnswer: '$10',
    explanation: 'With 1 CFD, the profit is simply the price difference: $1,810 - $1,800 = $10. Each CFD contract represents one unit of the underlying asset.'
  },
  {
    id: 'c3-q5',
    category: 'Margin',
    question: 'Which best defines margin?',
    options: [
      'Total profit from a trade',
      'Broker\'s commission fee',
      'The deposit required to open a trade',
      'The spread between bid and ask'
    ],
    correctAnswer: 'The deposit required to open a trade',
    explanation: 'Margin is the amount of money you need to deposit to open and maintain a leveraged position. It\'s a fraction of the total position value.'
  },
  {
    id: 'c3-q6',
    category: 'Order Types',
    question: 'Which order type executes immediately at current price?',
    options: [
      'Limit order',
      'Market order',
      'Stop-loss order',
      'Trailing stop'
    ],
    correctAnswer: 'Market order',
    explanation: 'A market order executes immediately at the best available current market price, ensuring quick execution but not a specific price.'
  },
  {
    id: 'c3-q7',
    category: 'Contract Types',
    question: 'Open-ended CFDs usually:',
    options: [
      'Have fixed expiry dates',
      'Carry overnight financing charges',
      'Include funding in the price',
      'Are limited to commodities only'
    ],
    correctAnswer: 'Carry overnight financing charges',
    explanation: 'Open-ended (cash) CFDs don\'t have expiry dates but incur daily overnight financing charges when held beyond the trading day.'
  },
  {
    id: 'c3-q8',
    category: 'Margin Calculation',
    question: 'If you open a $110,500 CFD position with 10% margin, how much is your deposit?',
    options: ['$1,105', '$11,050', '$110,500', '$88.40'],
    correctAnswer: '$11,050',
    explanation: 'With 10% margin requirement, you need to deposit 10% of the position value: $110,500 × 0.10 = $11,050.'
  },
  {
    id: 'c3-q9',
    category: 'Contract Types',
    question: 'Why might traders prefer expiry-based CFDs?',
    options: [
      'They avoid daily financing charges',
      'They are commission-free',
      'They are only for forex',
      'They have tighter spreads than cash CFDs'
    ],
    correctAnswer: 'They avoid daily financing charges',
    explanation: 'Expiry-based CFDs have a set expiration date and include funding costs in the price, avoiding the daily overnight financing charges of cash CFDs.'
  },
  {
    id: 'c3-q10',
    category: 'Market Access',
    question: 'True or False: CFDs allow you to trade indices even though you can\'t directly buy an index.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'CFDs provide access to indices like the S&P 500 or FTSE 100, which cannot be directly purchased. You trade the price movements without owning the underlying basket of stocks.'
  }
];
