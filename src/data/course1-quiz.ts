import { QuizQuestion } from './quiz-data';

export const course1QuizQuestions: QuizQuestion[] = [
  {
    id: 'c1-q1',
    category: 'Trading Basics',
    question: 'Trading is usually focused on:',
    options: [
      'Long-term growth of a company',
      'Short-term price movements',
      'Collecting dividends',
      'Avoiding any kind of risk'
    ],
    correctAnswer: 'Short-term price movements',
    explanation: 'Trading focuses on short-term price movements to capitalize on market volatility, while investing is more about long-term growth.'
  },
  {
    id: 'c1-q2',
    category: 'Trading Basics',
    question: 'True or False: Investing generally involves more frequent buying and selling than trading.',
    options: ['True', 'False'],
    correctAnswer: 'False',
    explanation: 'Trading involves more frequent transactions with shorter time horizons, while investing is focused on long-term holdings.'
  },
  {
    id: 'c1-q3',
    category: 'Forex',
    question: 'Which of these is the most liquid market in the world?',
    options: [
      'Stock market',
      'Forex market',
      'Commodities market',
      'Cryptocurrency market'
    ],
    correctAnswer: 'Forex market',
    explanation: 'The forex market is the largest and most liquid market globally, with over $6 trillion traded daily.'
  },
  {
    id: 'c1-q4',
    category: 'Forex',
    question: 'In forex trading, what does a "pip" represent?',
    options: [
      'A type of broker',
      'The smallest unit of price movement',
      'A standard trading account',
      'A financial institution'
    ],
    correctAnswer: 'The smallest unit of price movement',
    explanation: 'A pip (percentage in point) is the smallest price movement in forex trading, typically the fourth decimal place for most currency pairs.'
  },
  {
    id: 'c1-q5',
    category: 'Forex',
    question: 'If EUR/USD moves from 1.1000 to 1.1050, how many pips has it moved?',
    options: ['5', '50', '500', '0.5'],
    correctAnswer: '50',
    explanation: 'Each 0.0001 movement equals 1 pip. From 1.1000 to 1.1050 is 0.0050, which equals 50 pips.'
  },
  {
    id: 'c1-q6',
    category: 'Commodities',
    question: 'Which of the following is a soft commodity?',
    options: ['Gold', 'Oil', 'Wheat', 'Copper'],
    correctAnswer: 'Wheat',
    explanation: 'Soft commodities are agricultural products like wheat, corn, and coffee. Hard commodities are mined resources like gold, oil, and copper.'
  },
  {
    id: 'c1-q7',
    category: 'Shares',
    question: 'When a company issues shares for the first time to raise capital, this is called:',
    options: [
      'Secondary Market',
      'Futures Contract',
      'Initial Public Offering (IPO)',
      'Dividend Distribution'
    ],
    correctAnswer: 'Initial Public Offering (IPO)',
    explanation: 'An IPO is when a private company first offers its shares to the public to raise capital and become publicly traded.'
  },
  {
    id: 'c1-q8',
    category: 'Indices',
    question: 'Which of the following stock indices is based in Japan?',
    options: [
      'S&P 500',
      'Dow Jones Industrial Average',
      'Nikkei 225',
      'DAX 40'
    ],
    correctAnswer: 'Nikkei 225',
    explanation: 'The Nikkei 225 is Japan\'s premier stock index. The S&P 500 and Dow Jones are US indices, while the DAX 40 is German.'
  },
  {
    id: 'c1-q9',
    category: 'Indices',
    question: 'You expect the S&P 500 index to rise after strong economic data. Which action matches this view?',
    options: [
      'Short the index',
      'Go long on the index',
      'Avoid trading altogether',
      'Buy gold instead'
    ],
    correctAnswer: 'Go long on the index',
    explanation: 'Going long means buying with the expectation that prices will rise, which matches your bullish view on the S&P 500.'
  },
  {
    id: 'c1-q10',
    category: 'Trading Basics',
    question: 'True or False: Through Sky Links Capital, you can trade commodities, shares, forex, and indices via CFDs without owning the physical assets.',
    options: ['True', 'False'],
    correctAnswer: 'True',
    explanation: 'CFDs (Contracts for Difference) allow you to trade various markets without owning the underlying assets, providing flexibility and leverage.'
  }
];
