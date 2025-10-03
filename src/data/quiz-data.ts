export interface QuizQuestion {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    category: "Basic Trading Knowledge",
    question: "What type of market allows traders to profit from both rising and falling prices?",
    options: ["Bear market only", "Sideways market", "Derivatives market", "Primary market"],
    correctAnswer: "C"
  },
  {
    id: "q2",
    category: "Basic Trading Knowledge",
    question: "What is an IPO?",
    options: ["Investment Policy Order", "Initial Public Offering", "Internal Profit Operation", "Institutional Purchase Offer"],
    correctAnswer: "B"
  },
  {
    id: "q3",
    category: "Basic Trading Knowledge",
    question: "Mutual funds allow investors to:",
    options: ["Avoid paying taxes", "Gain leverage", "Diversify with professional management", "Invest in cryptocurrency"],
    correctAnswer: "C"
  },
  {
    id: "q4",
    category: "Basic Trading Knowledge",
    question: "What does owning a stock represent?",
    options: ["A fixed income instrument", "A loan to the company", "Ownership in a company", "A short position"],
    correctAnswer: "C"
  },
  {
    id: "q5",
    category: "Basic Trading Knowledge",
    question: "What is the primary purpose of a stock exchange?",
    options: ["Issue government bonds", "Provide education to traders", "Facilitate buying and selling of securities", "Provide legal protection"],
    correctAnswer: "C"
  },
  {
    id: "q6",
    category: "Fundamental Analysis",
    question: "What does a balance sheet show?",
    options: ["Profitability", "Revenue trends", "Assets, liabilities, and equity", "Market prices"],
    correctAnswer: "C"
  },
  {
    id: "q7",
    category: "Fundamental Analysis",
    question: "What financial statement shows a company's profitability?",
    options: ["Balance Sheet", "Cash Flow Statement", "Income Statement", "Equity Report"],
    correctAnswer: "C"
  },
  {
    id: "q8",
    category: "Fundamental Analysis",
    question: "A company with a high P/E ratio might be:",
    options: ["Undervalued", "Overvalued", "Bankrupt", "Paying high dividends"],
    correctAnswer: "B"
  },
  {
    id: "q9",
    category: "Fundamental Analysis",
    question: "The EPS ratio is used to:",
    options: ["Measure how much profit is made per share", "Determine dividend growth", "Evaluate debt repayment", "Forecast interest rates"],
    correctAnswer: "A"
  },
  {
    id: "q10",
    category: "Fundamental Analysis",
    question: "GDP is a key indicator of:",
    options: ["Inflation", "Corporate profits", "Economic health", "Market volatility"],
    correctAnswer: "C"
  },
  {
    id: "q11",
    category: "Technical Analysis",
    question: "A candlestick with a long lower wick might indicate:",
    options: ["Buying pressure", "Overbought conditions", "Price stagnation", "Volume exhaustion"],
    correctAnswer: "A"
  },
  {
    id: "q12",
    category: "Technical Analysis",
    question: "MACD stands for:",
    options: ["Momentum Average Comparison Daily", "Moving Average Convergence Divergence", "Multi-Asset Chart Display", "Market Asset Capital Draw"],
    correctAnswer: "B"
  },
  {
    id: "q13",
    category: "Technical Analysis",
    question: "A 'double top' pattern usually signals:",
    options: ["Bullish continuation", "Trend reversal", "Trend consolidation", "High liquidity"],
    correctAnswer: "B"
  },
  {
    id: "q14",
    category: "Technical Analysis",
    question: "What does a 'Moving Average' help traders identify?",
    options: ["Dividend payout", "Price trends over time", "Economic cycles", "Fundamental value"],
    correctAnswer: "B"
  },
  {
    id: "q15",
    category: "Technical Analysis",
    question: "RSI is used to measure:",
    options: ["Trading volume", "Volatility", "Overbought and oversold levels", "Interest rate sensitivity"],
    correctAnswer: "C"
  },
  {
    id: "q16",
    category: "Risk Management",
    question: "A stop-loss order is designed to:",
    options: ["Lock in profits", "Prevent further loss", "Increase leverage", "Guarantee return"],
    correctAnswer: "B"
  },
  {
    id: "q17",
    category: "Risk Management",
    question: "Risk-to-reward ratio measures:",
    options: ["Expected return vs. risk", "Annual dividend", "Win rate", "Volatility only"],
    correctAnswer: "A"
  },
  {
    id: "q18",
    category: "Risk Management",
    question: "Diversification reduces:",
    options: ["Transaction costs", "All risk", "Systemic risk", "Unsystematic risk"],
    correctAnswer: "D"
  },
  {
    id: "q19",
    category: "Risk Management",
    question: "Which strategy protects against large losses?",
    options: ["Martingale strategy", "Averaging down", "Using stop-loss and proper position sizing", "Trading without margin"],
    correctAnswer: "C"
  },
  {
    id: "q20",
    category: "Risk Management",
    question: "What does 'position sizing' mean?",
    options: ["Choosing which sector to invest in", "Setting the amount to invest in a trade", "Predicting future trends", "Calculating fees"],
    correctAnswer: "B"
  }
];

export const getRandomQuestions = (count: number = 10): QuizQuestion[] => {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};