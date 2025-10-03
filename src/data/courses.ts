import { Course, Quiz, Webinar, CourseCategory, CourseTopic } from '@/types/course';

export const courses: Course[] = [
  {
    id: '1',
    title: 'Getting started in the financial markets',
    slug: 'getting-started-financial-markets',
    category: 'Beginner' as CourseCategory,
    topics: ['Fundamental'] as CourseTopic[],
    summary: 'Learn the fundamentals of financial trading including forex, commodities, shares, and stock indices.',
    outcomes: [
      'Understand what financial trading is and how it differs from investing',
      'Learn about different types of financial markets',
      'Master the basics of forex, commodities, shares, and stock indices',
      'Understand risk management basics'
    ],
    duration: 90,
    lessonsCount: 10,
    thumbnail: '/src/assets/course-1-cover.jpg',
    featured: true,
    instructor: '',
    difficulty: 1,
    rating: 4.8,
    students: 2547,
    progress: 0,
    lessons: [
      { id: '1', title: 'Introduction to financial trading', type: 'video', duration: 12, completed: false },
      { id: '2', title: 'What is forex?', type: 'video', duration: 10, completed: false },
      { id: '3', title: 'Trading forex', type: 'video', duration: 12, completed: false },
      { id: '4', title: 'What are commodities?', type: 'video', duration: 8, completed: false },
      { id: '5', title: 'Trading commodities', type: 'video', duration: 10, completed: false },
      { id: '6', title: 'What are shares?', type: 'video', duration: 8, completed: false },
      { id: '7', title: 'Trading shares', type: 'video', duration: 10, completed: false },
      { id: '8', title: 'What are stock indices?', type: 'video', duration: 8, completed: false },
      { id: '9', title: 'Trading stock indices', type: 'video', duration: 10, completed: false },
      { id: '10', title: 'Quiz', type: 'quiz', duration: 15, completed: false }
    ]
  },
  {
    id: '2',
    title: 'How to trade as a beginner',
    slug: 'how-to-trade-beginner',
    category: 'Beginner' as CourseCategory,
    topics: ['Fundamental'] as CourseTopic[],
    summary: 'Learn who trades in the market, how buying and selling works, and essential trading concepts.',
    outcomes: [
      'Understand different types of market participants',
      'Learn how buying and selling works in markets',
      'Master the concept of spreads and going long vs short',
      'Understand leverage, stop loss, and take profit',
      'Avoid common beginner mistakes'
    ],
    duration: 90,
    lessonsCount: 9,
    thumbnail: '/src/assets/course-2-cover.jpg',
    featured: true,
    instructor: '',
    difficulty: 1,
    rating: 4.7,
    students: 1892,
    progress: 0,
    lessons: [
      { id: '1', title: 'Who trades in the market?', type: 'video', duration: 10, completed: false },
      { id: '2', title: 'Market participants and stakeholders', type: 'video', duration: 13, completed: false },
      { id: '3', title: 'How buying & selling works', type: 'video', duration: 11, completed: false },
      { id: '4', title: 'Understanding spreads', type: 'video', duration: 11, completed: false },
      { id: '5', title: 'Going long vs short', type: 'video', duration: 10, completed: false },
      { id: '6', title: 'Why traders short the market', type: 'video', duration: 8, completed: false },
      { id: '7', title: 'Introduction to Leverage', type: 'video', duration: 15, completed: false },
      { id: '8', title: 'Using Stop Loss & Take Profit', type: 'video', duration: 12, completed: false },
      { id: '9', title: 'Beginner Mistakes to Avoid', type: 'video', duration: 10, completed: false }
    ]
  },
  {
    id: '3',
    title: 'CFD trading explained',
    slug: 'cfd-trading-explained',
    category: 'Beginner' as CourseCategory,
    topics: ['Fundamental'] as CourseTopic[],
    summary: 'Understanding Contracts for Difference (CFDs) and how to trade them effectively.',
    outcomes: [
      'Understand what CFDs are and how they work',
      'Learn about different markets available through CFDs',
      'Master deal types and costs involved',
      'Understand why traders choose CFDs'
    ],
    duration: 45,
    lessonsCount: 4,
    thumbnail: '/src/assets/course-3-cover.jpg',
    featured: false,
    instructor: '',
    difficulty: 1,
    rating: 4.6,
    students: 1456,
    progress: 0,
    lessons: [
      { id: '1', title: 'Understanding Contracts for Difference (CFDs)', type: 'video', duration: 10, completed: false },
      { id: '2', title: 'Breaking down a CFD trade', type: 'video', duration: 15, completed: false },
      { id: '3', title: 'Deal types and costs', type: 'video', duration: 15, completed: false },
      { id: '4', title: 'Why consider trading CFDs', type: 'video', duration: 15, completed: false }
    ]
  },
  {
    id: '4',
    title: 'Strategic trade planning & risk',
    slug: 'strategic-trade-planning-risk',
    category: 'Beginner' as CourseCategory,
    topics: ['Risk Management'] as CourseTopic[],
    summary: 'Learn how to plan your trades strategically and manage risk effectively.',
    outcomes: [
      'Develop a trading plan',
      'Understand risk management principles',
      'Learn position sizing techniques',
      'Master trade entry and exit strategies'
    ],
    duration: 120,
    lessonsCount: 8,
    thumbnail: '/src/assets/hero-trader.png',
    featured: false,
    instructor: '',
    difficulty: 2,
    rating: 4.5,
    students: 987,
    progress: 0
  },
  {
    id: '5',
    title: 'Getting started with your first trade: a beginner\'s guide',
    slug: 'first-trade-beginners-guide',
    category: 'Beginner' as CourseCategory,
    topics: ['MT5'] as CourseTopic[],
    summary: 'Step-by-step guide to placing your very first trade safely and confidently.',
    outcomes: [
      'Learn how to place your first trade',
      'Understand order types',
      'Master basic trading platform navigation',
      'Practice with demo accounts'
    ],
    duration: 60,
    lessonsCount: 6,
    thumbnail: '/src/assets/hero-trader.png',
    featured: false,
    instructor: '',
    difficulty: 1,
    rating: 4.7,
    students: 2134,
    progress: 0
  },
  {
    id: '6',
    title: 'Essential tools every traders need',
    slug: 'essential-trading-tools',
    category: 'Beginner' as CourseCategory,
    topics: ['Technical'] as CourseTopic[],
    summary: 'Discover the essential tools and indicators every trader should know about.',
    outcomes: [
      'Learn about essential trading tools',
      'Understand basic technical indicators',
      'Master chart reading basics',
      'Discover useful trading resources'
    ],
    duration: 75,
    lessonsCount: 7,
    thumbnail: '/src/assets/hero-trader.png',
    featured: false,
    instructor: '',
    difficulty: 1,
    rating: 4.4,
    students: 1567,
    progress: 0
  },
  {
    id: '7',
    title: 'Technical analysis',
    slug: 'technical-analysis',
    category: 'Intermediate' as CourseCategory,
    topics: ['Technical'] as CourseTopic[],
    summary: 'Master the art of technical analysis for better trading decisions.',
    outcomes: [
      'Understand technical analysis principles',
      'Learn chart patterns and indicators',
      'Master trend analysis',
      'Apply technical analysis to trading decisions'
    ],
    duration: 180,
    lessonsCount: 12,
    thumbnail: '/src/assets/hero-trader.png',
    featured: true,
    instructor: '',
    difficulty: 3,
    rating: 4.6,
    students: 1234,
    progress: 0
  },
  {
    id: '8',
    title: 'Fundamental analysis',
    slug: 'fundamental-analysis',
    category: 'Intermediate' as CourseCategory,
    topics: ['Fundamental'] as CourseTopic[],
    summary: 'Learn how to analyze markets using fundamental analysis techniques.',
    outcomes: [
      'Understand fundamental analysis concepts',
      'Learn to read economic indicators',
      'Master news impact analysis',
      'Apply fundamental analysis to trading'
    ],
    duration: 150,
    lessonsCount: 10,
    thumbnail: '/src/assets/hero-trader.png',
    featured: true,
    instructor: '',
    difficulty: 3,
    rating: 4.5,
    students: 892,
    progress: 0
  },
  {
    id: '9',
    title: 'Advanced risk management',
    slug: 'advanced-risk-management',
    category: 'Advanced' as CourseCategory,
    topics: ['Risk Management'] as CourseTopic[],
    summary: 'Advanced strategies for managing risk in complex trading scenarios.',
    outcomes: [
      'Master advanced risk management techniques',
      'Learn portfolio risk assessment',
      'Understand correlation and diversification',
      'Apply advanced position sizing methods'
    ],
    duration: 240,
    lessonsCount: 15,
    thumbnail: '/src/assets/hero-trader.png',
    featured: false,
    instructor: '',
    difficulty: 5,
    rating: 4.8,
    students: 456,
    progress: 0
  },
  {
    id: '10',
    title: 'Advanced technical analysis',
    slug: 'advanced-technical-analysis',
    category: 'Intermediate' as CourseCategory,
    topics: ['Technical'] as CourseTopic[],
    summary: 'Take your technical analysis skills to the next level with advanced concepts.',
    outcomes: [
      'Master advanced chart patterns',
      'Learn complex indicator combinations',
      'Understand market structure analysis',
      'Apply advanced technical concepts'
    ],
    duration: 200,
    lessonsCount: 14,
    thumbnail: '/src/assets/hero-trader.png',
    featured: false,
    instructor: '',
    difficulty: 4,
    rating: 4.7,
    students: 623,
    progress: 0
  }
];

export const financialLiteracyQuiz: Quiz = {
  id: 'financial-literacy',
  title: 'Financial Literacy Assessment',
  questions: [
    {
      id: 'q1',
      prompt: 'What is the primary difference between trading and investing?',
      choices: [
        'Trading is always more profitable',
        'Trading focuses on short-term price movements while investing is long-term',
        'Investing requires more money',
        'There is no difference'
      ],
      correctIndex: 1,
      explanation: 'Trading typically focuses on short to medium-term price movements, while investing is a long-term approach focused on asset growth.',
      topicTag: 'basics'
    },
    {
      id: 'q2',
      prompt: 'What does CFD stand for?',
      choices: [
        'Contract for Difference',
        'Currency for Trading',
        'Capital Fund Derivative',
        'Cash Flow Document'
      ],
      correctIndex: 0,
      explanation: 'CFD stands for Contract for Difference, a financial derivative that allows trading on price movements without owning the underlying asset.',
      topicTag: 'cfd'
    },
    {
      id: 'q3',
      prompt: 'What is leverage in trading?',
      choices: [
        'A type of investment strategy',
        'Using borrowed money to increase potential returns',
        'A technical indicator',
        'A market condition'
      ],
      correctIndex: 1,
      explanation: 'Leverage allows traders to control larger positions with smaller amounts of capital by borrowing money, which can amplify both gains and losses.',
      topicTag: 'leverage'
    },
    {
      id: 'q4',
      prompt: 'What is a stop loss order?',
      choices: [
        'An order to buy more shares',
        'An order to close a position at a predetermined loss level',
        'An order to increase leverage',
        'An order to change brokers'
      ],
      correctIndex: 1,
      explanation: 'A stop loss order automatically closes a position when the price reaches a predetermined level to limit losses.',
      topicTag: 'risk-management'
    },
    {
      id: 'q5',
      prompt: 'Going "long" in trading means:',
      choices: [
        'Trading for a long time',
        'Buying an asset expecting its price to rise',
        'Trading with maximum leverage',
        'Selling an asset expecting its price to fall'
      ],
      correctIndex: 1,
      explanation: 'Going long means buying an asset with the expectation that its price will increase, allowing you to sell it later for a profit.',
      topicTag: 'basics'
    }
  ],
  recommendationMapping: {
    'basics': { category: 'Beginner' as CourseCategory, courseSlugs: ['getting-started-financial-markets', 'how-to-trade-beginner'] },
    'cfd': { category: 'Beginner' as CourseCategory, courseSlugs: ['cfd-trading-explained'] },
    'leverage': { category: 'Beginner' as CourseCategory, courseSlugs: ['strategic-trade-planning-risk'] },
    'risk-management': { category: 'Beginner' as CourseCategory, courseSlugs: ['strategic-trade-planning-risk', 'advanced-risk-management'] }
  }
};

export const webinars: Webinar[] = [
  {
    id: '1',
    title: 'Master the Art of Trading Psychology',
    dateTime: '2025-01-15T18:00:00Z',
    timezone: 'UTC',
    speakers: ['Sarah Johnson', 'Michael Chen'],
    description: 'Learn how to control emotions and develop the right mindset for successful trading.',
    registerUrl: 'https://example.com/register',
    tags: ['Psychology', 'Beginner'],
    thumbnail: '/src/assets/webinar-professional.png',
    isUpcoming: true
  },
  {
    id: '2',
    title: 'Advanced Technical Analysis Strategies',
    dateTime: '2025-01-20T16:00:00Z',
    timezone: 'UTC',
    speakers: ['David Rodriguez'],
    description: 'Deep dive into advanced chart patterns and technical indicators for professional trading.',
    registerUrl: 'https://example.com/register',
    tags: ['Technical Analysis', 'Advanced'],
    thumbnail: '/src/assets/webinar-professional.png',
    isUpcoming: true
  },
  {
    id: '3',
    title: 'Risk Management for New Traders',
    dateTime: '2025-01-10T14:00:00Z',
    timezone: 'UTC',
    speakers: ['Emma Wilson'],
    description: 'Essential risk management techniques every trader should know to protect their capital.',
    replayUrl: 'https://example.com/replay',
    tags: ['Risk Management', 'Beginner'],
    thumbnail: '/src/assets/webinar-professional.png',
    isUpcoming: false
  }
];