import { QuizQuestion } from './quiz-data';

export const course2QuizQuestions: QuizQuestion[] = [
  {
    id: 'c2-q1',
    category: 'Market Participants',
    question: 'Which of the following best describes a retail trader?',
    options: [
      'Manages billions in pension funds',
      'Trades small amounts with personal money',
      'Provides liquidity to the entire market',
      'Acts as a clearing house'
    ],
    correctAnswer: 'Trades small amounts with personal money',
    explanation: 'Retail traders are individual traders who trade with their own capital, typically in smaller amounts compared to institutional traders.'
  },
  {
    id: 'c2-q2',
    category: 'Market Participants',
    question: 'True or False: Market makers earn money mainly from commissions.',
    options: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Market makers primarily earn money from the bid-ask spread, not from commissions. They profit from the difference between buying and selling prices.'
  },
  {
    id: 'c2-q3',
    category: 'Market Participants',
    question: 'Which organization guarantees both sides of a trade and eliminates counterparty risk?',
    options: [
      'Market maker',
      'Clearing house',
      'Broker',
      'Exchange'
    ],
    correctAnswer: 'Clearing house',
    explanation: 'A clearing house acts as an intermediary between buyers and sellers, guaranteeing both sides of a trade and eliminating counterparty risk.'
  },
  {
    id: 'c2-q4',
    category: 'Trading Mechanics',
    question: 'If EUR/USD is quoted at 1.1000 / 1.1002, what is the spread?',
    options: ['0.2', '2 pips', '20 pips', '0.0002%'],
    correctAnswer: '2 pips',
    explanation: 'The spread is the difference between bid and ask prices. 1.1002 - 1.1000 = 0.0002, which equals 2 pips.'
  },
  {
    id: 'c2-q5',
    category: 'Trading Mechanics',
    question: 'Going short means:',
    options: [
      'Buying an asset expecting it to rise',
      'Borrowing and selling an asset expecting it to fall',
      'Selling shares you own to lock in profits',
      'Buying multiple positions at once'
    ],
    correctAnswer: 'Borrowing and selling an asset expecting it to fall',
    explanation: 'Shorting involves borrowing an asset, selling it, and hoping to buy it back later at a lower price to profit from the decline.'
  },
  {
    id: 'c2-q6',
    category: 'Trading Mechanics',
    question: 'Why might a trader short the market?',
    options: [
      'To increase liquidity',
      'To hedge or speculate on falling prices',
      'To reduce spreads',
      'To avoid commissions'
    ],
    correctAnswer: 'To hedge or speculate on falling prices',
    explanation: 'Traders short the market to profit from declining prices or to hedge existing long positions against potential losses.'
  },
  {
    id: 'c2-q7',
    category: 'Leverage',
    question: 'With 20:1 leverage, how much exposure does $500 give you?',
    options: ['$500', '$2,500', '$10,000', '$20,000'],
    correctAnswer: '$10,000',
    explanation: 'With 20:1 leverage, your $500 controls $10,000 worth of assets ($500 × 20 = $10,000).'
  },
  {
    id: 'c2-q8',
    category: 'Order Types',
    question: 'Which order type ensures execution but not price?',
    options: [
      'Limit order',
      'Market order',
      'Stop order',
      'Stop-limit order'
    ],
    correctAnswer: 'Market order',
    explanation: 'A market order executes immediately at the current market price, guaranteeing execution but not a specific price.'
  },
  {
    id: 'c2-q9',
    category: 'Risk Management',
    question: 'True or False: A stop loss is designed to lock in profits.',
    options: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'A stop loss is designed to limit losses by automatically closing a position when the price reaches a predetermined level. A trailing stop can lock in profits.'
  },
  {
    id: 'c2-q10',
    category: 'Trading Psychology',
    question: 'Which of these is NOT a common beginner mistake?',
    options: [
      'Over-leveraging',
      'Revenge trading',
      'Trading with a plan',
      'Ignoring costs'
    ],
    correctAnswer: 'Trading with a plan',
    explanation: 'Trading with a plan is good practice. Common mistakes include over-leveraging, revenge trading after losses, and ignoring transaction costs.'
  }
];
