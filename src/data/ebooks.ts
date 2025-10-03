export interface Ebook {
  id: string;
  title: string;
  category: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  icon: string;
}

export const categories = ['All Categories', 'Beginner', 'Intermediate', 'Advanced'];

export const ebooks: Ebook[] = [
  // Beginner Guides (10 eBooks)
  {
    id: 'b1',
    title: 'Trading Fundamentals: From Basics to Your First Trade',
    category: 'Beginner',
    description: 'A comprehensive guide covering the essential foundations of trading, from understanding markets to placing your first trade.',
    icon: '📈'
  },
  {
    id: 'b3',
    title: 'Introduction to Gold Trading',
    category: 'Beginner',
    description: 'Learn the fundamentals of gold trading, including market dynamics, price factors, and basic trading strategies.',
    icon: '🥇'
  },
  {
    id: 'b4',
    title: 'Forex Trading for Absolute Beginners',
    category: 'Beginner',
    description: 'Start your forex journey with this beginner-friendly guide covering currency pairs, market basics, and first steps.',
    icon: '💱'
  },
  {
    id: 'b5',
    title: 'Stock Market Investing 101: How to Pick Your First Stock',
    category: 'Beginner',
    description: 'Master the basics of stock selection with practical guidance on fundamental analysis and company evaluation.',
    icon: '📊'
  },
  {
    id: 'b6',
    title: 'Basics of Technical Analysis',
    category: 'Beginner',
    description: 'Introduction to chart reading, basic indicators, and technical analysis principles for new traders.',
    icon: '📉'
  },
  {
    id: 'b7',
    title: 'Basics of Fundamental Analysis',
    category: 'Beginner',
    description: 'Learn to analyze economic indicators, company financials, and market conditions for informed trading decisions.',
    icon: '📋'
  },
  {
    id: 'b8',
    title: 'Understanding Candlestick Patterns for Beginners',
    category: 'Beginner',
    description: 'Master the art of reading candlestick charts and recognize key patterns for better market timing.',
    icon: '🕯️'
  },
  {
    id: 'b9',
    title: 'Introduction to Day Trading: Strategies for Success',
    category: 'Beginner',
    description: 'Explore day trading fundamentals, essential strategies, and risk management for short-term trading.',
    icon: '⏰'
  },
  {
    id: 'b10',
    title: 'A Beginner\'s Guide to Swing Trading',
    category: 'Beginner',
    description: 'Learn swing trading techniques to capture medium-term price movements with practical strategies.',
    icon: '🔄'
  },
  
  // Intermediate Level Guides (15 eBooks - includes reassigned items)
  {
    id: 'b2',
    title: 'Trading Psychology: Overcoming Common Mistakes',
    category: 'Intermediate',
    description: 'Develop the right mindset and avoid common psychological pitfalls that affect new traders.',
    icon: '🧠'
  },
  {
    id: 'i1',
    title: 'Advanced Chart Patterns for Profitable Trading',
    category: 'Intermediate',
    description: 'Master complex chart patterns and advanced technical analysis for more sophisticated trading strategies.',
    icon: '📈'
  },
  {
    id: 'i2',
    title: 'Algorithmic Trading Strategies: Building Your Own Trading Bot',
    category: 'Intermediate',
    description: 'Learn to create automated trading systems and implement algorithmic strategies effectively.',
    icon: '🤖'
  },
  {
    id: 'i3',
    title: 'Mastering Price Action Trading: Strategies and Techniques',
    category: 'Intermediate',
    description: 'Advanced price action concepts and practical techniques for reading market sentiment.',
    icon: '💹'
  },
  {
    id: 'i4',
    title: 'Swing Trading Strategies That Actually Work',
    category: 'Intermediate',
    description: 'Proven swing trading methodologies with real-world applications and backtested strategies.',
    icon: '🎯'
  },
  {
    id: 'i5',
    title: 'Options Trading Simplified: Strategies for Consistent Profits',
    category: 'Intermediate',
    description: 'Comprehensive guide to options trading with practical strategies for income generation.',
    icon: '🎲'
  },
  {
    id: 'i6',
    title: 'Intraday Trading Techniques: Proven Methods for Success',
    category: 'Intermediate',
    description: 'Advanced intraday trading strategies and techniques for short-term profit opportunities.',
    icon: '⚡'
  },
  {
    id: 'i7',
    title: 'How to Profit from Economic Indicators and News Trading',
    category: 'Intermediate',
    description: 'Learn to trade economic events and news releases for maximum profit potential.',
    icon: '📰'
  },
  {
    id: 'i8',
    title: 'Volume-Based Trading: Unlocking Market Dynamics',
    category: 'Intermediate',
    description: 'Master volume analysis and understand market dynamics through advanced volume techniques.',
    icon: '📊'
  },
  {
    id: 'i9',
    title: 'Trading with Fibonacci: Precision Entry and Exit Points',
    category: 'Intermediate',
    description: 'Advanced Fibonacci techniques for precise market timing and optimal trade entries.',
    icon: '🌀'
  },
  {
    id: 'i10',
    title: 'Forex Scalping: High-Speed Techniques and Strategies',
    category: 'Intermediate',
    description: 'Master high-frequency trading techniques and scalping strategies for quick profits.',
    icon: '🏃'
  },
  {
    id: 's5',
    title: 'Forex vs. Stocks vs. Commodities',
    category: 'Intermediate',
    description: 'Comprehensive comparison of different asset classes and their trading characteristics.',
    icon: '⚖️'
  },
  {
    id: 's1',
    title: 'How Gold Prices React to Economic Events',
    category: 'Intermediate',
    description: 'Deep analysis of gold price movements in response to economic indicators and events.',
    icon: '🥇'
  },
  {
    id: 's2',
    title: 'The Role of USD in Global Markets',
    category: 'Intermediate',
    description: 'Understanding the US dollar\'s impact on global financial markets and trading strategies.',
    icon: '💵'
  },
  {
    id: 's3',
    title: 'Trading the NFP Effectively',
    category: 'Intermediate',
    description: 'Master Non-Farm Payroll trading with proven strategies and risk management techniques.',
    icon: '📊'
  },
  {
    id: 'p1',
    title: 'Mental Edge: Mastering the Psychology of Trading',
    category: 'Intermediate',
    description: 'Develop mental resilience and psychological skills for consistent trading performance.',
    icon: '🧠'
  },
  {
    id: 'p2',
    title: 'Overcoming Fear, Greed, and Biases in Trading',
    category: 'Intermediate',
    description: 'Identify and overcome common psychological barriers that limit trading success.',
    icon: '😰'
  },
  {
    id: 'p3',
    title: 'Discipline and Mindfulness: Keys to Trading Success',
    category: 'Intermediate',
    description: 'Build trading discipline and mindfulness practices for better decision-making.',
    icon: '🧘'
  },
  {
    id: 'p4',
    title: 'Behavioral Finance: How Cognitive Biases Affect Your Trading',
    category: 'Intermediate',
    description: 'Understand behavioral finance principles and how they impact trading decisions.',
    icon: '🔍'
  },
  {
    id: 'p5',
    title: 'Managing Trading Stress: Techniques to Improve Performance',
    category: 'Intermediate',
    description: 'Practical stress management techniques for maintaining peak trading performance.',
    icon: '😌'
  },
  
  // Advanced Level Guides (15 eBooks - includes reassigned items)
  {
    id: 'a1',
    title: 'Quantitative Trading: Building and Implementing Quant Models',
    category: 'Advanced',
    description: 'Advanced mathematical models and quantitative strategies for sophisticated trading approaches.',
    icon: '🔢'
  },
  {
    id: 'a2',
    title: 'Advanced Options Strategies: Hedging and Income Generation',
    category: 'Advanced',
    description: 'Complex options strategies for portfolio hedging and consistent income generation.',
    icon: '⚖️'
  },
  {
    id: 'a3',
    title: 'Artificial Intelligence & Machine Learning in Trading',
    category: 'Advanced',
    description: 'Cutting-edge AI and ML applications in modern trading and investment strategies.',
    icon: '🤖'
  },
  {
    id: 'a4',
    title: 'Trading Volatility: Navigating Uncertain Markets',
    category: 'Advanced',
    description: 'Advanced volatility trading strategies and risk management in uncertain market conditions.',
    icon: '🌪️'
  },
  {
    id: 'a5',
    title: 'Mastering Order Flow: Advanced Techniques and Strategies',
    category: 'Advanced',
    description: 'Professional-level order flow analysis for institutional-grade trading decisions.',
    icon: '🌊'
  },
  {
    id: 'a6',
    title: 'Portfolio Optimization for Active Traders',
    category: 'Advanced',
    description: 'Advanced portfolio management techniques and optimization strategies for active trading.',
    icon: '📚'
  },
  {
    id: 'a7',
    title: 'High-Frequency Trading: Strategies, Risks, and Realities',
    category: 'Advanced',
    description: 'Deep dive into HFT strategies, technology requirements, and market impact analysis.',
    icon: '💨'
  },
  {
    id: 'a8',
    title: 'Professional Futures Trading: Mastering the Derivatives Market',
    category: 'Advanced',
    description: 'Comprehensive guide to futures trading with advanced strategies and risk management.',
    icon: '🔮'
  },
  {
    id: 'a9',
    title: 'Market Microstructure: Trading Mechanics and Liquidity',
    category: 'Advanced',
    description: 'Advanced understanding of market mechanics, liquidity provision, and microstructure trading.',
    icon: '🔬'
  },
  {
    id: 'a10',
    title: 'Institutional Trading Strategies for Individual Investors',
    category: 'Advanced',
    description: 'Adapt institutional-level strategies for individual trading with professional techniques.',
    icon: '🏛️'
  },
  {
    id: 's6',
    title: 'How Hedge Funds Trade Forex & Gold',
    category: 'Advanced',
    description: 'Insights into institutional trading strategies used by major hedge funds.',
    icon: '🏦'
  },
  {
    id: 's7',
    title: 'Risk & Money Management Strategies',
    category: 'Advanced',
    description: 'Advanced risk management and money management techniques for professional trading.',
    icon: '🛡️'
  },
  {
    id: 's8',
    title: 'Diversifying Your Trading Portfolio',
    category: 'Advanced',
    description: 'Strategic portfolio diversification techniques for reducing risk and maximizing returns.',
    icon: '🌐'
  },
  {
    id: 's9',
    title: 'Automated Trading Bots: Pros & Cons',
    category: 'Advanced',
    description: 'Comprehensive analysis of automated trading systems, benefits, and potential pitfalls.',
    icon: '🤖'
  },
  {
    id: 's10',
    title: 'Backtesting Your Trading Strategy',
    category: 'Advanced',
    description: 'Professional backtesting methodologies for validating and optimizing trading strategies.',
    icon: '🔙'
  }
];
