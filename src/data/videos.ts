// Video thumbnail imports
import videoSupportResistance from '@/assets/video-support-resistance.png';
import videoTrendLines from '@/assets/video-trend-lines.png';
import videoMovingAverages from '@/assets/video-moving-averages.png';
import videoMacd from '@/assets/video-macd.png';
import videoRsi from '@/assets/video-rsi.png';
import videoCandlesticksReversals from '@/assets/video-candlesticks-reversals.png';
import videoCandlesticksContinuation from '@/assets/video-candlesticks-continuation.png';
import videoPricePatternsReversals from '@/assets/video-price-patterns-reversals.png';
import videoPricePatternsContinuation from '@/assets/video-price-patterns-continuation.png';
import videoFibonacci from '@/assets/video-fibonacci.png';
import videoFlagsPennants from '@/assets/video-flags-pennants.png';
import videoTriangles from '@/assets/video-triangles.png';
import videoSymmetricalTriangle from '@/assets/video-symmetrical-triangle.png';
import videoDoubleTops from '@/assets/video-double-triple-tops.png';
import videoHeadShoulders from '@/assets/video-head-shoulders.png';
import videoThreeSoldiers from '@/assets/video-three-soldiers.png';
import videoMorningEveningStar from '@/assets/video-morning-evening-star.png';
import videoEngulfing from '@/assets/video-engulfing.png';
import videoHammerHanging from '@/assets/video-hammer-hanging.png';
import videoDoji from '@/assets/video-doji.png';
import videoMt5StopLoss from '@/assets/video-mt5-stop-loss.png';
import videoMt5Timeframe from '@/assets/video-mt5-timeframe.png';
import videoMt5CompletedTrades from '@/assets/video-mt5-completed-trades.png';
import videoMt5OpenTrades from '@/assets/video-mt5-open-trades.png';
import videoMt5CloseTrade from '@/assets/video-mt5-close-trade.png';
import videoMt5PlaceTrade from '@/assets/video-mt5-place-trade.png';
import videoMt5RealAccount from '@/assets/video-mt5-real-account.png';
import videoMt5DemoAccount from '@/assets/video-mt5-demo-account.png';
import videoMt5Download from '@/assets/video-mt5-download.png';
import videoCentralBank from '@/assets/video-central-bank.png';
import videoRecessionRisks from '@/assets/video-recession-risks.png';
import videoMarketPsychology from '@/assets/video-market-psychology.png';
import videoInflationGold from '@/assets/video-inflation-gold.png';
import videoDollarYuan from '@/assets/video-dollar-yuan.png';
import videoDollarTrade from '@/assets/video-dollar-trade.png';
import videoGeopoliticalEvents from '@/assets/video-geopolitical-events.png';
import videoCpi from '@/assets/video-cpi.png';
import videoPpi from '@/assets/video-ppi.png';

export interface Video {
  id: string;
  title: string;
  description: string;
  duration: string;
  views: string;
  rating: number;
  category: 'MT5 Tutorials' | 'Technical Indicators' | 'Fundamental Analysis' | 'Trading Psychology';
  thumbnail: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const categories = ['All Videos', 'MT5 Tutorials', 'Technical Indicators', 'Fundamental Analysis'];

export const featuredVideos: Video[] = [
  // Existing videos
  {
    id: '1',
    title: 'What is CPI?',
    description: 'Understanding Consumer Price Index and its impact on trading decisions and market movements.',
    duration: '8:45',
    views: '12.5K',
    rating: 4.8,
    category: 'Fundamental Analysis',
    thumbnail: videoCpi,
    level: 'Beginner'
  },
  {
    id: '4',
    title: 'The investor\'s guide to geopolitical events and market volatility',
    description: 'Learn how geopolitical events impact market volatility and trading opportunities.',
    duration: '18:25',
    views: '15.7K',
    rating: 4.7,
    category: 'Fundamental Analysis',
    thumbnail: videoGeopoliticalEvents,
    level: 'Intermediate'
  },
  {
    id: '5',
    title: 'How to open a real account on MT5',
    description: 'Step-by-step guide to opening and setting up your real trading account on MetaTrader 5.',
    duration: '12:35',
    views: '9.8K',
    rating: 4.8,
    category: 'MT5 Tutorials',
    thumbnail: videoMt5RealAccount,
    level: 'Beginner'
  },
  
  // MT5 Tutorials
  {
    id: 'mt5-1',
    title: 'How to download and open MetaTrader 5',
    description: 'Complete guide to downloading, installing, and opening MetaTrader 5 on your device.',
    duration: '10:15',
    views: '32.1K',
    rating: 4.9,
    category: 'MT5 Tutorials',
    thumbnail: videoMt5Download,
    level: 'Beginner'
  },
  {
    id: 'tech-1',
    title: 'Support and resistance',
    description: 'Learn to identify key support and resistance levels for better trade entries and exits.',
    duration: '8:15',
    views: '14.2K',
    rating: 4.7,
    category: 'Technical Indicators',
    thumbnail: videoSupportResistance,
    level: 'Beginner'
  },
  {
    id: 'tech-2',
    title: 'Trend lines (and channels)',
    description: 'Master the art of drawing trend lines and channels to identify market direction.',
    duration: '10:30',
    views: '12.8K',
    rating: 4.8,
    category: 'Technical Indicators',
    thumbnail: videoTrendLines,
    level: 'Beginner'
  },
  {
    id: 'mt5-2',
    title: 'How to open a demo account on MT5',
    description: 'Step-by-step process to create and set up your demo trading account.',
    duration: '8:30',
    views: '28.5K',
    rating: 4.8,
    category: 'MT5 Tutorials',
    thumbnail: videoMt5DemoAccount,
    level: 'Beginner'
  },
  {
    id: 'mt5-3',
    title: 'How to place a trade on MT5',
    description: 'Learn the fundamentals of placing your first trade using MetaTrader 5.',
    duration: '12:45',
    views: '24.7K',
    rating: 4.9,
    category: 'MT5 Tutorials',
    thumbnail: videoMt5PlaceTrade,
    level: 'Beginner'
  },
  {
    id: 'mt5-4',
    title: 'How to view open trades on MT5',
    description: 'Navigate the MT5 interface to monitor and manage your active positions.',
    duration: '9:20',
    views: '18.3K',
    rating: 4.7,
    category: 'MT5 Tutorials',
    thumbnail: videoMt5OpenTrades,
    level: 'Beginner'
  },
  {
    id: 'mt5-5',
    title: 'How to close a trade on MT5',
    description: 'Master different methods to close trades and lock in your profits or limit losses.',
    duration: '11:10',
    views: '21.9K',
    rating: 4.8,
    category: 'MT5 Tutorials',
    thumbnail: videoMt5CloseTrade,
    level: 'Beginner'
  },
  {
    id: 'mt5-6',
    title: 'How to view completed trades on MT5',
    description: 'Access your trading history and analyze past performance on MetaTrader 5.',
    duration: '7:55',
    views: '16.4K',
    rating: 4.6,
    category: 'MT5 Tutorials',
    thumbnail: videoMt5CompletedTrades,
    level: 'Beginner'
  },
  {
    id: 'mt5-7',
    title: 'How to change the Timeframe on MT5',
    description: 'Learn to switch between different chart timeframes for better market analysis.',
    duration: '6:40',
    views: '19.8K',
    rating: 4.7,
    category: 'MT5 Tutorials',
    thumbnail: videoMt5Timeframe,
    level: 'Beginner'
  },
  {
    id: 'mt5-8',
    title: 'How to set stop loss and take profits on MT5',
    description: 'Essential risk management: setting up stop loss and take profit orders.',
    duration: '13:25',
    views: '26.7K',
    rating: 4.9,
    category: 'MT5 Tutorials',
    thumbnail: videoMt5StopLoss,
    level: 'Beginner'
  },

  // Technical Indicators - Candlestick Patterns
  {
    id: 'tech-3',
    title: 'Moving averages',
    description: 'Understand different types of moving averages and their trading applications.',
    duration: '12:20',
    views: '16.5K',
    rating: 4.9,
    category: 'Technical Indicators',
    thumbnail: videoMovingAverages,
    level: 'Intermediate'
  },
  {
    id: 'tech-4',
    title: 'MACD',
    description: 'Learn the MACD indicator for trend confirmation and momentum analysis.',
    duration: '15:45',
    views: '11.3K',
    rating: 4.6,
    category: 'Technical Indicators',
    thumbnail: videoMacd,
    level: 'Intermediate'
  },
  {
    id: 'tech-5',
    title: 'RSI',
    description: 'Master the Relative Strength Index for identifying overbought and oversold conditions.',
    duration: '11:55',
    views: '9.7K',
    rating: 4.7,
    category: 'Technical Indicators',
    thumbnail: videoRsi,
    level: 'Intermediate'
  },
  {
    id: 'tech-6',
    title: 'Candlesticks: Reversals',
    description: 'Identify powerful reversal candlestick patterns for better trade timing.',
    duration: '18:30',
    views: '13.9K',
    rating: 4.8,
    category: 'Technical Indicators',
    thumbnail: videoCandlesticksReversals,
    level: 'Advanced'
  },
  {
    id: 'tech-7',
    title: 'Candlesticks: Continuation',
    description: 'Recognize continuation patterns that signal trend persistence.',
    duration: '16:25',
    views: '10.4K',
    rating: 4.7,
    category: 'Technical Indicators',
    thumbnail: videoCandlesticksContinuation,
    level: 'Advanced'
  },
  {
    id: 'tech-8',
    title: 'Price Patterns: Reversals',
    description: 'Master classic reversal patterns like head and shoulders and double tops/bottoms.',
    duration: '13:40',
    views: '8.9K',
    rating: 4.6,
    category: 'Technical Indicators',
    thumbnail: videoPricePatternsReversals,
    level: 'Intermediate'
  },
  {
    id: 'tech-9',
    title: 'Price Patterns: Continuation',
    description: 'Learn continuation patterns like triangles, flags, and pennants.',
    duration: '14:15',
    views: '12.1K',
    rating: 4.8,
    category: 'Technical Indicators',
    thumbnail: videoPricePatternsContinuation,
    level: 'Intermediate'
  },
  {
    id: 'tech-10',
    title: 'Fibonacci',
    description: 'Apply Fibonacci retracements and extensions for precise entry and exit points.',
    duration: '9:50',
    views: '11.7K',
    rating: 4.7,
    category: 'Technical Indicators',
    thumbnail: videoFibonacci,
    level: 'Intermediate'
  },
  {
    id: 'tech-11',
    title: 'Flags and Pennants',
    description: 'Master flag and pennant continuation patterns for trend trading.',
    duration: '13:20',
    views: '10.2K',
    rating: 4.7,
    category: 'Technical Indicators',
    thumbnail: videoFlagsPennants,
    level: 'Intermediate'
  },
  {
    id: 'tech-12',
    title: 'Ascending and Descending Triangles',
    description: 'Learn to identify and trade ascending and descending triangle patterns.',
    duration: '14:45',
    views: '9.8K',
    rating: 4.8,
    category: 'Technical Indicators',
    thumbnail: videoTriangles,
    level: 'Intermediate'
  },
  {
    id: 'tech-13',
    title: 'Symmetrical Triangle Pattern',
    description: 'Understand symmetrical triangles and how to trade breakouts effectively.',
    duration: '12:30',
    views: '8.9K',
    rating: 4.6,
    category: 'Technical Indicators',
    thumbnail: videoSymmetricalTriangle,
    level: 'Intermediate'
  },
  {
    id: 'tech-14',
    title: 'Double and Triple Tops/Bottoms',
    description: 'Recognize and trade powerful double and triple top/bottom reversal patterns.',
    duration: '16:15',
    views: '11.5K',
    rating: 4.9,
    category: 'Technical Indicators',
    thumbnail: videoDoubleTops,
    level: 'Advanced'
  },
  {
    id: 'tech-15',
    title: 'Head and Shoulders Pattern',
    description: 'Master the head and shoulders reversal pattern and its inverse formation.',
    duration: '17:40',
    views: '12.7K',
    rating: 4.8,
    category: 'Technical Indicators',
    thumbnail: videoHeadShoulders,
    level: 'Advanced'
  },
  {
    id: 'tech-16',
    title: 'Three White Soldiers / Three Black Crows',
    description: 'Learn these powerful three-candle reversal patterns for trend changes.',
    duration: '11:25',
    views: '9.3K',
    rating: 4.7,
    category: 'Technical Indicators',
    thumbnail: videoThreeSoldiers,
    level: 'Advanced'
  },
  {
    id: 'tech-17',
    title: 'Morning Star, Evening Star, and Shooting Star',
    description: 'Identify star patterns that signal potential trend reversals.',
    duration: '15:30',
    views: '10.6K',
    rating: 4.8,
    category: 'Technical Indicators',
    thumbnail: videoMorningEveningStar,
    level: 'Advanced'
  },
  {
    id: 'tech-18',
    title: 'Bullish and Bearish Engulfing Patterns',
    description: 'Master engulfing candlestick patterns for high-probability trade setups.',
    duration: '13:50',
    views: '11.9K',
    rating: 4.9,
    category: 'Technical Indicators',
    thumbnail: videoEngulfing,
    level: 'Advanced'
  },
  {
    id: 'tech-19',
    title: 'Hammer and Hanging Man Candlesticks',
    description: 'Learn to identify and trade hammer and hanging man reversal signals.',
    duration: '12:15',
    views: '9.7K',
    rating: 4.6,
    category: 'Technical Indicators',
    thumbnail: videoHammerHanging,
    level: 'Intermediate'
  },
  {
    id: 'tech-20',
    title: 'Doji Candlestick Patterns',
    description: 'Understand doji formations and their significance in market indecision.',
    duration: '10:40',
    views: '10.1K',
    rating: 4.7,
    category: 'Technical Indicators',
    thumbnail: videoDoji,
    level: 'Intermediate'
  },

  // Fundamental Analysis
  {
    id: 'fund-1',
    title: 'How inflation affects gold',
    description: 'Deep dive into the relationship between inflation rates and gold prices.',
    duration: '16:30',
    views: '18.5K',
    rating: 4.8,
    category: 'Fundamental Analysis',
    thumbnail: videoInflationGold,
    level: 'Intermediate'
  },
  {
    id: 'fund-2',
    title: 'Understanding the Dollar-Yuan Relationship: Impact on Global Trade',
    description: 'How USD/CNY dynamics affect international markets and trading opportunities.',
    duration: '20:15',
    views: '14.7K',
    rating: 4.7,
    category: 'Fundamental Analysis',
    thumbnail: videoDollarYuan,
    level: 'Advanced'
  },
  {
    id: 'fund-3',
    title: 'Central Bank Decisions: Trading Opportunities around Interest Rate Changes',
    description: 'Capitalize on central bank announcements and interest rate decisions.',
    duration: '22:45',
    views: '16.9K',
    rating: 4.9,
    category: 'Fundamental Analysis',
    thumbnail: videoCentralBank,
    level: 'Advanced'
  },
  {
    id: 'fund-4',
    title: 'Global Recession Risks: How to Navigate Economic Downturns',
    description: 'Strategies for trading during economic uncertainty and recession periods.',
    duration: '25:20',
    views: '12.3K',
    rating: 4.6,
    category: 'Fundamental Analysis',
    thumbnail: videoRecessionRisks,
    level: 'Advanced'
  },
  {
    id: 'fund-5',
    title: 'Stock Market Psychology: Why Investor Emotions Move Markets',
    description: 'Understanding market sentiment and crowd psychology in trading.',
    duration: '18:50',
    views: '13.8K',
    rating: 4.8,
    category: 'Fundamental Analysis',
    thumbnail: videoMarketPsychology,
    level: 'Intermediate'
  },
  {
    id: 'fund-6',
    title: 'What Happens to International Trade When the Dollar Strengthens?',
    description: 'Impact of USD strength on global trade and commodity markets.',
    duration: '19:35',
    views: '11.4K',
    rating: 4.7,
    category: 'Fundamental Analysis',
    thumbnail: videoDollarTrade,
    level: 'Intermediate'
  },
  {
    id: 'fund-7',
    title: 'What is PPI?',
    description: 'Producer Price Index explained and its significance for traders.',
    duration: '12:25',
    views: '15.2K',
    rating: 4.6,
    category: 'Fundamental Analysis',
    thumbnail: videoPpi,
    level: 'Beginner'
  }
];
