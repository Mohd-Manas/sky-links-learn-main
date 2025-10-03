import { Lesson } from "@/types/course";

// Course 1 Images
import tradingVsInvestingImg from "@/assets/course1-lesson1-trading-vs-investing-table.png";
import howTradesWorkImg from "@/assets/course1-lesson1-how-trades-work.jpg";
import bullsBearsVolatilityImg from "@/assets/course1-lesson1-bulls-bears-volatility.jpg";
import volatilityLiquidityImg from "@/assets/course1-lesson1-volatility-liquidity.jpg";
import bullsBearsImg from "@/assets/course1-bulls-bears.jpg";
import volatilityHighImg from "@/assets/course1-volatility-high.jpg";
import volatilityLowImg from "@/assets/course1-volatility-low.jpg";
import liquidityHighImg from "@/assets/course1-liquidity-high.jpg";
import liquidityLowImg from "@/assets/course1-liquidity-low.png";
import forexHoursImg from "@/assets/course1-forex-hours.jpg";
import pipEurUsdImg from "@/assets/course1-pip-eurusd.jpg";
import pipUsdJpyImg from "@/assets/course1-pip-usdjpy.png";
import eurUsdExampleImg from "@/assets/course1-eurusd-example.jpg";
import usdJpyExampleImg from "@/assets/course1-usdjpy-example.jpg";
import interestRatesImg from "@/assets/course1-interest-rates.jpg";
import economicDataImg from "@/assets/course1-economic-data.jpg";
import speculatorsImg from "@/assets/course1-speculators.jpg";
import hedgersImg from "@/assets/course1-hedgers.jpg";
import brokersImg from "@/assets/course1-brokers.png";
import sharesOwnershipImg from "@/assets/course1-shares-ownership.jpg";
import sharesExampleImg from "@/assets/course1-shares-example.png";
import companyPerformanceImg from "@/assets/course1-company-performance.jpg";
import priceFactorsImg from "@/assets/course1-price-factors.jpg";
import marketSentimentImg from "@/assets/course1-market-sentiment.jpg";
import demandSupplyImg from "@/assets/course1-demand-supply.png";
import stockbrokerTypesImg from "@/assets/course1-stockbroker-types.jpg";

export const course1Lessons: Lesson[] = [
  {
    id: "c1-l1",
    courseId: "course-1",
    title: "Introduction to financial trading",
    type: "article",
    duration: 12,
    content: `Financial trading is the global exchange of financial instruments—such as currencies, commodities, shares, or stock indices—between buyers and sellers. The aim is often to profit from price changes, but trading can also be used to protect investments from market risks. With the rise of online platforms, nearly anyone can participate in trading, accessing markets that once were open only to institutions.

Before jumping into how to trade, it's important to understand:
- What trading actually is (and what it isn't)
- The main types of markets you can trade in
- The different styles of trading you might choose

Getting these fundamentals right will give you a strong foundation for everything else in the course.

### Trading vs. Investing

![Trading vs Investing](${tradingVsInvestingImg})

[EXAMPLE]
**Trader:** Buys Apple stock in the morning, sells it the same day for a 2% gain.
**Investor:** Buys Apple stock and holds it for 10 years, benefiting from growth and dividends.
[/EXAMPLE]

**Key takeaway:** Trading is about capturing short-term opportunities. Investing is about building wealth over time.

### The Main Markets in Trading

Put simply, financial trading is the act of buying and selling assets with the aim of making a profit or meeting a specific need. These assets fall into several major markets:

- **Shares:** Units of ownership in a company. Owning shares means holding a small stake in that business, such as Microsoft, Netflix, or HSBC.
- **Stock indices:** A single value that tracks the overall performance of a group of companies. Popular examples are the S&P 500 in the US, the FTSE 100 in the UK, and Japan's Nikkei 225.
- **Forex (Foreign Exchange):** The worldwide market for trading currencies like the euro, US dollar, and Japanese yen.
- **Commodities:** Physical goods and raw materials, from metals like gold and silver to energy resources like crude oil and natural gas, and agricultural products such as wheat or coffee.
- **Cryptocurrencies:** Digital or virtual currencies secured by cryptography, operating on decentralized networks like blockchain. Well-known examples include Bitcoin, Ethereum, and Ripple.

People and organizations participate in these markets for different reasons—sometimes to speculate on price changes, and sometimes out of necessity. For example, a business importing electronics from Japan may need to buy Japanese yen through the forex market to pay its supplier, while a tech-savvy investor might purchase Bitcoin as a store of value or for future transactions.

### How Trades Actually Work

Let's break down the trading process in simple terms, using Sky Links Capital as an example broker:

![How Trades Work](${howTradesWorkImg})

1. **Placing your order:** You log in to your Sky Links Capital trading account and choose the asset you want to trade—this could be a share, currency pair, commodity, index, or cryptocurrency. You decide whether to buy (go long) or sell (go short) based on your analysis, and then enter the details of your order.

2. **Order routing:** As a Straight-Through Processing (STP) broker, Sky Links Capital does not act as a counterparty to your trade. Instead, your order is routed directly to our network of liquidity providers—such as banks and financial institutions—for the best available market price, with no dealing desk intervention.

3. **Trade execution:** Once your order reaches the market, it is filled at the current market price (if placed as a market order) or at the specific price you set (if placed as a limit order). STP execution ensures fast processing and access to competitive, real-market pricing.

4. **Market movement & exit:** After execution, the price of your asset will continue to fluctuate based on market activity, news, and investor sentiment. You monitor the trade through your Sky Links Capital account and decide when to close it—either locking in a profit or cutting a loss.

[EXAMPLE]
You buy gold at $1,950 an ounce using Sky Links Capital. Later that day, gold rises to $1,970. You decide to close your position, and the $20 increase per ounce becomes your profit (minus any trading fees).
[/EXAMPLE]

### Key Market Concepts

Before diving deeper into each asset class, it's important to understand a few foundational terms that describe how markets behave: bulls and bears, volatility, and liquidity.

**Bulls vs. Bears**

Financial markets are often described as a contest between two forces: bulls and bears.

![Bulls vs Bears and Volatility](${bullsBearsVolatilityImg})

- **Bulls** are traders and investors who believe prices will rise and aim to buy assets in anticipation of growth.
- **Bears** take the opposite stance, expecting prices to fall and looking for opportunities to sell.

When bullish sentiment dominates, buying activity pushes prices upward, creating a bull market. Conversely, when bearish sentiment prevails, selling pressure outweighs demand, driving prices lower into a bear market.

**What is Volatility?**

Volatility measures how much and how quickly an asset's price moves within a certain timeframe.

![Volatility and Liquidity](${volatilityLiquidityImg})

In most markets, control shifts between bulls and bears, causing prices to fluctuate. In highly volatile markets, prices can swing dramatically in a short period, offering greater potential rewards but also higher risks.

Risk-tolerant traders may be drawn to volatile assets for the chance of larger gains, while risk-averse participants often prefer markets with steadier, smaller price changes.

**What is Liquidity?**

Liquidity refers to how quickly and easily you can buy or sell an asset without significantly affecting its price.

Highly liquid markets—such as major currency pairs—have plenty of active buyers and sellers, making it easy to enter and exit trades at competitive prices.

In less liquid markets, fewer participants can mean it takes longer to execute trades, and prices may move more sharply. These conditions can add an extra layer of risk for traders.`,
    learningObjectives: [
      "Understand what financial trading is and how it differs from investing",
      "Learn about the main markets available for trading",
      "Understand how trades are executed through brokers",
      "Grasp key trading concepts like bulls/bears, volatility, and liquidity"
    ],
    keyTerms: {
      "Trading": "The act of buying and selling financial instruments to profit from short to medium-term price movements",
      "Investing": "Long-term wealth building through asset ownership, focusing on business growth rather than price movements",
      "Leverage": "Using borrowed capital to increase position size and potential returns (also increases risk)",
      "Volatility": "The degree of price variation over time; higher volatility means larger price swings",
      "Liquidity": "How easily an asset can be bought or sold without affecting its price",
      "STP Broker": "Straight-Through Processing broker that routes orders directly to liquidity providers without dealing desk intervention",
      "Bull Market": "Market characterized by rising prices and optimistic sentiment",
      "Bear Market": "Market characterized by falling prices and pessimistic sentiment"
    },
    resources: [],
    order: 1,
    isAssessment: false
  },
  {
    id: "c1-l2",
    courseId: "course-1",
    title: "What is forex?",
    type: "article",
    duration: 10,
    content: `The foreign exchange market—better known as **forex or FX**—is where currencies are bought and sold. It's the **biggest and most liquid market in the world**, with trillions of dollars traded every single day. Unlike stock exchanges that operate during specific hours, forex runs **24 hours a day, five days a week**, connecting traders from London to Tokyo to New York in a seamless global network.

### Why Does Forex Exist?

At its core, forex exists because different countries use different currencies, and people, companies, and governments need to exchange them.

Here are a few reasons why currency exchange happens:

- **International trade:** An importer in the UK buying electronics from Japan needs Japanese yen to pay the supplier.
- **Tourism:** A traveler from Europe visiting the USA needs to convert euros into US dollars.
- **Investment flows:** Large funds may invest in overseas markets, requiring them to buy foreign currencies.
- **Speculation:** Traders buy and sell currencies to profit from changes in exchange rates.

### How the Forex Market Works

The forex market is **decentralized**—meaning it's not run from a single exchange like the stock market. Instead, it's an **over-the-counter (OTC)** network where banks, brokers, hedge funds, and retail traders connect electronically.

**Key participants include:**

- **Central banks** – Influence currency value through interest rates and monetary policy.
- **Commercial banks & financial institutions** – Handle large-scale currency transactions.
- **Corporations** – Exchange currencies for international business.
- **Brokers** – Provide trading platforms for retail traders.
- **Retail traders** – Individuals trading for profit or investment.

### How Forex is Traded

The foreign exchange market operates differently from many other financial markets. Unlike shares or commodities, which are typically traded on centralized exchanges such as the New York Stock Exchange or London Stock Exchange, forex has no single physical location.

Instead, currency trading happens through a global network of banks, financial institutions, and brokers in what's called the **over-the-counter (OTC) market**. Here, prices are constantly being updated as participants around the world buy and sell currencies in real time.

Because forex follows the global flow of business and finance, it operates **24 hours a day, five days a week**. As one trading session closes in one part of the world, another opens elsewhere—creating a continuous cycle that moves from Asia → Europe → North America. Brokers like Sky Links Capital stream live prices throughout the week, giving traders access to the market whenever it's active.

### Forex Market Hours (UK Time)

![Forex Market Hours](${forexHoursImg})

- **Sydney:** 01:00 - 10:00
- **Tokyo:** 04:00 - 13:00
- **London:** 11:00 - 20:00
- **New York:** 16:00 - 01:00

### Advantages of Trading Forex

**High Liquidity**
Forex is the world's most liquid market, with trillions traded daily. This means trades can be opened or closed almost instantly, often with minimal slippage and precise execution.

**24/5 Market Hours**
The market operates around the clock from Monday to Friday, moving through global sessions in Sydney, Tokyo, London, and New York. You can trade at nearly any time that suits your schedule.

**Leverage**
Forex often provides higher leverage than other markets, letting you control larger positions with smaller capital. While this can boost profits, it also increases potential losses—risk management is key.

**Low Transaction Costs**
Most forex trades have relatively low costs, with the main expense being the **spread**—the difference between the buy (ask) and sell (bid) price. On major currency pairs like EUR/USD, spreads are typically very tight, sometimes less than one pip. This means more of your potential profits stay in your pocket rather than going to trading fees.`,
    learningObjectives: [
      "Understand what the forex market is and why it exists",
      "Learn about the decentralized OTC nature of forex trading",
      "Understand the 24-hour trading cycle across global sessions",
      "Recognize the key advantages of forex trading including liquidity and low costs"
    ],
    keyTerms: {
      "Forex (FX)": "Foreign exchange market where currencies are traded; the world's largest and most liquid financial market",
      "OTC": "Over-the-counter; trading done directly between parties without a centralized exchange",
      "Trading Session": "Period when a major financial center is active (Asian, European, North American)",
      "Spread": "The difference between the buy (ask) and sell (bid) price; represents the main trading cost in forex",
      "Central Bank": "National institution that manages monetary policy and influences currency value through interest rates"
    },
    resources: [],
    order: 2,
    isAssessment: false
  },
  {
    id: "c1-l3",
    courseId: "course-1",
    title: "Trading forex",
    type: "article",
    duration: 12,
    content: `### The Major, Minor, and Exotic Pairs

Forex pairs are grouped into categories:

**Major pairs** – Include the US dollar and other major economies (e.g., EUR/USD, GBP/USD, USD/JPY). They're highly liquid and widely traded.

**Minor pairs** – Do not include the US dollar but involve other major currencies (e.g., EUR/GBP, AUD/NZD).

**Exotic pairs** – Pair a major currency with one from a smaller or emerging economy (e.g., USD/TRY, EUR/SEK). These can be more volatile and less liquid.

### What is a "pip"?

A **pip** (short for percentage in point or price interest point) is the standard unit of measurement for price movement in the forex market. It represents the smallest change in value for most currency pairs.

**How it works:**

- For most pairs, **1 pip = 0.0001** of the quoted price (the fourth decimal place).
- For pairs involving the Japanese yen, **1 pip = 0.01** (the second decimal place).

[EXAMPLE]
If **EUR/USD** moves from 1.1000 to 1.1001, that's a **1-pip increase**.

![EUR/USD Pip Example](${eurUsdExampleImg})

If **USD/JPY** moves from 145.50 to 145.51, that's also **1 pip**.

![USD/JPY Pip Example](${usdJpyExampleImg})
[/EXAMPLE]

**Why pips matter:**

Pips are used to calculate both profit/loss and the size of a price move. For example, if you bought EUR/USD and it moved 50 pips in your favor, the profit you make depends on your position size (lot).

### What is a Lot?

A **lot** is the standardized quantity of a currency you trade in forex. It determines how much each pip movement is worth in monetary terms.

**Types of lots:**

1. **Standard Lot** – 100,000 units of the base currency
2. **Mini Lot** – 10,000 units of the base currency
3. **Micro Lot** – 1,000 units of the base currency
4. **Nano Lot** – 100 units of the base currency (not all brokers offer this)

[EXAMPLE]
If you trade a **standard lot on EUR/USD**, each pip is typically worth **$10**.
- **Mini lot:** $1 per pip
- **Micro lot:** $0.10 per pip
[/EXAMPLE]

### How Pips and Lots Work Together

Let's say you buy 1 standard lot of EUR/USD at 1.1000 and close the trade at 1.1050. That's a **50-pip gain**.

- **Standard lot** (100,000 units): 50 pips × $10 = **$500 profit**
- **Mini lot** (10,000 units): 50 pips × $1 = **$50 profit**
- **Micro lot** (1,000 units): 50 pips × $0.10 = **$5 profit**

**Key takeaway:**
- **Pip** = measurement of price change
- **Lot** = size of your trade
- The bigger the lot, the more each pip is worth (and the higher the risk)

### Pip Values by Lot Size

| Lot Size | Pip Value |
|---|---|
| Standard Lot | $10 |
| Mini Lot | $1 |
| Micro Lot | $0.10 |
| Nano Lot | $0.01 |

### What Moves the Forex Markets?

Currency values are not fixed—they fluctuate constantly based on a complex mix of economic, political, and market forces. Every second, global events, financial data releases, and shifts in investor sentiment can cause exchange rates to rise or fall. Understanding these drivers is essential for traders, as they help explain why markets move and provide clues for predicting future price trends.

Several factors influence the value of currencies, including:

- **Economic indicators** – GDP growth, inflation rates, and employment data
- **Interest rates** – Higher interest rates often attract foreign capital, boosting a currency
- **Political stability** – Uncertainty can weaken a currency
- **Market sentiment** – Traders' perceptions and risk appetite can drive prices`,
    learningObjectives: [
      "Understand currency pair classifications (majors, minors, exotics)",
      "Learn what pips are and how they measure price movements",
      "Understand lot sizes and how they determine pip values",
      "Calculate potential profits and losses using pips and lots",
      "Identify key factors that drive forex market movements"
    ],
    keyTerms: {
      "Pip": "Smallest price increment in forex trading (typically 0.0001 for most pairs, 0.01 for JPY pairs)",
      "Lot": "Standardized trading size unit (standard = 100,000 units of base currency)",
      "Major Pairs": "Currency pairs that include the US Dollar paired with other major currencies",
      "Minor Pairs": "Currency pairs between major currencies that don't include the US Dollar",
      "Exotic Pairs": "Pairs consisting of a major currency and an emerging market currency",
      "Base Currency": "The first currency in a forex pair (the one being bought or sold)",
      "Quote Currency": "The second currency in a forex pair (used to determine the price)"
    },
    resources: [],
    order: 3,
    isAssessment: false
  },
  {
    id: "c1-l4",
    courseId: "course-1",
    title: "What are commodities?",
    type: "article",
    duration: 8,
    content: `**Commodities** are basic goods or raw materials that are used to produce other goods and services. Unlike company shares or currencies, commodities are physical, tangible items—think of oil, gold, coffee, or wheat.

They've been traded for thousands of years, from ancient marketplaces to today's sophisticated global exchanges. Commodities play a vital role in the global economy, influencing everything from the cost of your morning coffee to the price of a plane ticket.

### Main Categories of Commodities

Commodities fall into two main groups—**hard commodities**, which are mined or extracted, and **soft commodities**, which are grown or produced—each with unique characteristics, uses, and market drivers.

### Hard Commodities

These are natural resources that are mined or extracted from the earth. They typically require significant industrial processes before reaching the market.

- **Examples:** Crude oil, natural gas, gold, silver, copper, aluminum
- **Key Traits:** Non-perishable, often used in manufacturing, construction, and energy production
- **Example in Action:** Gold is seen as a **safe-haven asset** in times of economic uncertainty, while oil prices can surge when geopolitical tensions disrupt supply chains

### Soft Commodities

These are agricultural products or livestock that are grown or raised rather than mined.

- **Examples:** Wheat, corn, coffee, sugar, cocoa, soybeans, cattle
- **Key Traits:** **Perishable**, heavily influenced by weather patterns, seasons, and agricultural conditions
- **Example in Action:** Coffee prices can spike after poor harvests in major producing countries like Brazil, while droughts can push wheat prices higher

### Who Trades Commodities?

From producers who bring raw materials to market, to speculators chasing price movements, hedgers managing risk, and brokers facilitating trades—commodity markets are driven by a diverse mix of participants, each playing a unique role.

**Producers**
These are the companies or individuals who extract, grow, or manufacture commodities—such as mining firms, oil companies, and farmers. Producers often sell their output directly into the market to generate revenue or secure contracts in advance to guarantee future prices.

**Speculators**
![Speculators](${speculatorsImg})

Traders and investors who buy and sell commodities purely to profit from price movements. They don't take delivery of the physical goods; instead, they trade futures contracts or CFDs to capitalize on market trends and volatility.

**Hedgers**
![Hedgers](${hedgersImg})

Businesses that use commodities to protect against unfavorable price movements. For example, a food manufacturer might purchase wheat futures to lock in ingredient costs, or an airline might secure fuel contracts to manage operational expenses.

**Brokers**
Intermediaries who connect buyers and sellers in the commodities market. They facilitate trades for both retail and institutional clients, often providing market analysis, trading platforms, and order execution services.`,
    learningObjectives: [
      "Understand what commodities are and their role in the global economy",
      "Learn the difference between hard and soft commodities",
      "Identify the various participants in commodity markets and their motivations",
      "Recognize factors that influence commodity prices"
    ],
    keyTerms: {
      "Commodities": "Basic goods or raw materials used to produce other goods and services",
      "Hard Commodities": "Natural resources that are mined or extracted (metals, energy)",
      "Soft Commodities": "Agricultural products or livestock that are grown or raised",
      "Hedging": "Using derivatives to offset potential losses from adverse price movements",
      "Safe Haven": "Asset that retains or increases value during market turbulence or economic uncertainty",
      "Futures Contract": "Agreement to buy or sell a commodity at a predetermined price on a future date"
    },
    resources: [],
    order: 4,
    isAssessment: false
  },
  {
    id: "c1-l5",
    courseId: "course-1",
    title: "Trading commodities",
    type: "article",
    duration: 8,
    content: `### Ways to Trade Commodities

**Futures Contracts**
A futures contract is an agreement to buy or sell a commodity at a set price on a future date. These are widely used by both hedgers and speculators.

[EXAMPLE]
Buying an oil futures contract today to profit if oil prices rise in the coming months.
[/EXAMPLE]

**Spot Trading**
Buying and selling commodities for immediate delivery at the current market price. Spot prices reflect the most recent market value of a commodity.

**CFDs (Contracts for Difference)**
With CFDs, you trade commodity price movements without owning the physical asset. This allows you to go long (buy) or short (sell) and profit from both rising and falling prices.

**ETFs (Exchange-Traded Funds)**
Commodity ETFs allow you to invest in a basket of commodities or a single commodity without trading futures directly.

### Factors That Influence Commodity Prices

**Supply and Demand**
If demand rises or supply is disrupted, prices can jump quickly. This is the most fundamental driver of commodity prices.

**Weather Conditions**
Particularly important for agricultural commodities. Droughts, floods, or unseasonable temperatures can dramatically affect crop yields and prices.

**Geopolitical Events**
Political instability can disrupt supply chains, especially for energy commodities. Wars, sanctions, or trade disputes can cause significant price volatility.

**Global Economic Health**
Strong economic growth can increase demand for raw materials, while slowdowns can decrease it. Industrial commodities are especially sensitive to economic cycles.

**Currency Fluctuations**
Many commodities are priced in US dollars, so a stronger or weaker USD affects prices globally. A stronger dollar typically makes commodities more expensive for buyers using other currencies.

### Where Are Commodities Traded?

Commodities are bought and sold on both organized exchanges and over-the-counter (OTC) markets. The method depends on the type of commodity and the way it's being traded.

**Major Commodity Exchanges:**

- **Chicago Mercantile Exchange (CME Group)** – One of the largest global marketplaces for trading commodity futures, covering agricultural products, metals, and energy
- **London Metal Exchange (LME)** – Specializes in non-ferrous metals like copper, aluminum, and zinc
- **Intercontinental Exchange (ICE)** – Trades energy products, agricultural commodities, and metals
- **New York Mercantile Exchange (NYMEX)** – Focuses on energy and metals, including oil, natural gas, and gold
- **Tokyo Commodity Exchange (TOCOM)** – Japan's largest commodity futures exchange, offering metals, energy, and agricultural contracts

**Over-the-Counter (OTC) Markets**

In OTC markets, commodities are traded directly between buyers and sellers, often via brokers. These trades are typically customized contracts, allowing more flexibility in terms and pricing.

Modern commodity trading is heavily digital. Brokers like Sky Links Capital offer online platforms where traders can speculate on commodity price movements via CFDs without owning the physical assets.`,
    learningObjectives: [
      "Learn different methods of trading commodities",
      "Understand the differences between futures, spot, CFDs, and ETFs",
      "Identify key price drivers in commodity markets",
      "Know the major commodity exchanges and how they operate"
    ],
    keyTerms: {
      "Futures Contract": "Agreement to buy/sell an asset at predetermined future date and price",
      "Spot Trading": "Immediate transaction at current market price for immediate delivery",
      "CFD": "Contract for Difference allowing price speculation without owning underlying asset",
      "ETF": "Exchange-Traded Fund tracking commodity prices or baskets of commodities",
      "CME": "Chicago Mercantile Exchange - major derivatives and futures exchange",
      "LME": "London Metal Exchange - world's largest market for industrial metals futures"
    },
    resources: [],
    order: 5,
    isAssessment: false
  },
  {
    id: "c1-l6",
    courseId: "course-1",
    title: "What are shares?",
    type: "article",
    duration: 8,
content: `**Shares**, also called **stocks or equities**, represent units of ownership in a company. When you own shares, you effectively own a small portion of that business. This gives you certain rights—such as a share of the company's profits (in the form of dividends) and, in some cases, voting rights on major business decisions.

![Shares Ownership](${sharesOwnershipImg})

[EXAMPLE]
If a company has 1,000,000 shares in total and you own 10,000 of them, you own **1% of the company**. This means you're entitled to 1% of any declared dividends and can vote on matters proportionate to your ownership stake.

![Shares Example](${sharesExampleImg})
[/EXAMPLE]

### Why Do Companies Issue Shares?

Companies issue shares primarily to **raise capital**—money that can be used to fund business growth, launch new projects, invest in research and development, or strengthen their overall financial position. Selling shares allows a business to access substantial funds without taking on debt or committing to regular interest payments, as would be required with a loan.

When shares are sold to the public for the first time, it's known as an **Initial Public Offering (IPO)**. After the IPO, the company's shares can be bought and sold on a stock exchange, giving it ongoing visibility in the financial markets.

[EXAMPLE]
A technology firm may issue shares to secure the capital needed to develop innovative software, build new data centers, or expand its operations into global markets. By attracting investors, the company can accelerate its growth while sharing both risks and rewards with its shareholders.
[/EXAMPLE]

### How Share Value is Determined

A share's value—known as its **share price**—is influenced by a combination of internal company factors and wider market conditions.

**Company Performance**
Strong earnings, steady revenue growth, and a healthy balance sheet tend to boost investor confidence, often leading to higher share prices. Conversely, poor results or missed targets can cause prices to fall.

**Market Sentiment**
The overall mood and expectations of investors can drive prices up or down, even before concrete results are announced. Positive news or optimism about future prospects can push prices higher, while fear or uncertainty can drag them lower.

**Economic Conditions**
Interest rates, inflation levels, and GDP growth all influence share prices. For example, rising interest rates may discourage borrowing and reduce corporate profits, potentially lowering share values.

**Industry Trends**
Developments within a specific sector can impact all companies in that space. For instance, a surge in demand for electric vehicles can lift the share prices of battery manufacturers and related suppliers.

**In short:** When demand for a company's shares increases—whether due to strong performance, positive sentiment, or favorable economic conditions—prices rise. When demand falls, prices decline.`,
    learningObjectives: [
      "Understand what shares represent and the rights they confer",
      "Learn why companies issue shares and the IPO process",
      "Identify the multiple factors that influence share prices",
      "Grasp the relationship between supply, demand, and share price movements"
    ],
    keyTerms: {
      "Shares": "Units of ownership in a company (also called stocks or equities)",
      "Dividend": "Portion of company profits distributed to shareholders",
      "IPO": "Initial Public Offering - when a company first sells shares to the public",
      "Market Sentiment": "Overall attitude of investors toward a particular security or market",
      "Equity": "Ownership interest in a company represented by shares",
      "Shareholder": "Individual or entity that owns shares in a company"
    },
    resources: [],
    order: 6,
    isAssessment: false
  },
  {
    id: "c1-l7",
    courseId: "course-1",
    title: "Trading shares",
    type: "article",
    duration: 12,
    content: `Trading shares is the process of buying and selling company stock with the aim of making a profit. Traders look to benefit from short-term price changes, while long-term investors may hold shares for years to gain from both price appreciation and dividends.

Modern share trading is typically done online through brokers like Sky Links Capital, which provide access to global markets via user-friendly platforms.

### Where Are Stocks Traded?

Stocks are bought and sold on **stock exchanges**—regulated marketplaces where companies list their shares and investors trade them. These exchanges ensure fair pricing, transparency, and orderly trading.

**Major Global Stock Exchanges:**

- **New York Stock Exchange (NYSE)** – The largest stock exchange in the world, home to major companies like Apple, Coca-Cola, and IBM
- **NASDAQ** – Known for technology-focused listings such as Microsoft, Amazon, and Tesla
- **London Stock Exchange (LSE)** – One of the oldest exchanges, hosting companies from around the world
- **Tokyo Stock Exchange (TSE)** – Japan's largest exchange, listing global giants like Toyota and Sony
- **Hong Kong Stock Exchange (HKEX)** – A key gateway for Asian companies and international investors

### Primary vs Secondary Markets

**Primary Market**
Where companies issue new shares for the first time through an Initial Public Offering (IPO) to raise capital.

**Secondary Market**
Where existing shares are traded between investors after the IPO. Most day-to-day share trading happens here.

### Online Trading Platforms

Today, you don't have to physically visit an exchange to trade shares. Online brokers like Sky Links Capital provide access to global stock markets via digital trading platforms, letting you buy and sell shares from your computer or smartphone.

### Who is a Stockbroker?

A **stockbroker** is a licensed professional or firm that buys and sells shares (and other securities) on behalf of clients. Their primary role is to give investors access to stock markets, which individuals can't trade on directly.

In the past, trading meant calling your broker, who would then pass your instructions to a dealer on the stock exchange floor. Today, this process is almost entirely digital, with online platforms allowing you to place trades in seconds.

### Types of Stockbrokers

![Types of Stockbrokers](${stockbrokerTypesImg})

**1. Full-Service Broker**
- Creates and manages an investment strategy based on the client's goals
- Executes trades on the client's behalf
- Offers in-depth research, portfolio management, and personalized advice
- **Commission Level:** High

**2. Advisory Broker**
- Provides market insights, trade recommendations, and investment ideas
- Final decision to buy or sell rests with the client
- **Commission Level:** Medium

**3. Execution-Only Broker**
- Simply carries out the client's buy or sell orders
- No market analysis or investment advice is provided
- Usually operates via an online trading platform
- **Commission Level:** Low

### Choosing the Right Broker

When selecting a broker, consider:

- **Your market knowledge** – Beginners may benefit from advisory or full-service brokers
- **Time commitment** – Active traders might prefer an execution-only broker for speed and cost efficiency
- **Costs** – Balance the services offered with commission rates and fees

### Trading Times

Shares can only be traded during the opening hours of their respective stock exchanges. Below are examples of trading hours (UK time, April–October; may change with daylight saving):

| Exchange | Open | Close |
|---|---|---|
| New York Stock Exchange (NYSE) | 14:30 | 21:00 |
| NASDAQ | 14:30 | 21:00 |
| London Stock Exchange (LSE) | 08:00 | 16:30 |
| Tokyo Stock Exchange (TSE) | 00:00 | 06:00 |`,
    learningObjectives: [
      "Learn where and when shares are traded globally",
      "Understand the difference between primary and secondary markets",
      "Know the types of stockbrokers and their services",
      "Understand how to choose the right broker for your needs",
      "Recognize the trading hours of major global exchanges"
    ],
    keyTerms: {
      "Stock Exchange": "Organized, regulated marketplace where securities are bought and sold",
      "Primary Market": "Market where new securities are issued and sold for the first time",
      "Secondary Market": "Market where existing securities are traded between investors",
      "Stockbroker": "Licensed professional or firm that executes buy and sell orders for clients",
      "Full-Service Broker": "Broker providing comprehensive services including advice, research, and portfolio management",
      "Execution-Only Broker": "Broker that simply executes orders without providing advice (lowest cost)"
    },
    resources: [],
    order: 7,
    isAssessment: false
  },
  {
    id: "c1-l8",
    courseId: "course-1",
    title: "What are stock indices?",
    type: "article",
    duration: 10,
    content: `An **index** (plural: **indices**) measures the performance of a selected group of stocks that together reflect a specific market, industry, or investment theme. It acts as a **benchmark** for a particular segment of the financial world—whether it's an entire national stock market, a single sector, or a trend such as technology or renewable energy.

Instead of analyzing hundreds of individual stocks, traders and investors can look at an index to quickly gauge the overall performance and sentiment of a market.

[EXAMPLE]
The **S&P 500** measures the performance of 500 of the largest publicly traded companies in the United States. If the S&P 500 is rising, it suggests that overall investor confidence in U.S. large-cap companies is strong.
[/EXAMPLE]

### Why Indices Exist

Indices serve several important purposes in the financial markets:

- **Benchmarking performance** – Investors compare their portfolio returns to an index to see if they're outperforming or underperforming the market
- **Market sentiment indicators** – An index reflects whether investors as a whole are optimistic (bullish) or pessimistic (bearish)
- **Basis for financial products** – Many investment products such as ETFs (Exchange-Traded Funds) and index funds are designed to track an index
- **Sector or theme tracking** – Indices help investors focus on specific industries or trends without picking individual stocks

### Types of Indices

**Global Indices**
Represent the performance of stocks from multiple countries.
- Example: MSCI World Index (covers developed markets globally)

**Country Indices**
Represent one nation's stock market.
- Example: FTSE 100 (UK), Nikkei 225 (Japan), S&P 500 (USA)

**Sector Indices**
Focus on specific industries.
- Example: NASDAQ Biotechnology Index (biotech companies)

**Thematic Indices**
Focus on investment themes like renewable energy, AI, or emerging markets.

### Notable Indices & Components

| Index | Region/Focus | No. of Cos. | Notable Components |
|---|---:|---|---|
| S&P 500 | USA | 500 | Apple, Microsoft, Amazon |
| Dow Jones Industrial Average | USA | 30 | Coca-Cola, Boeing, IBM |
| NASDAQ 100 | USA (Tech-heavy) | 100 | Tesla, Nvidia, Meta |
| FTSE 100 | UK | 100 | BP, HSBC, Unilever |
| DAX 40 | Germany | 40 | BMW, Siemens, Adidas |
| Nikkei 225 | Japan | 225 | Sony, Toyota, Panasonic |

### How Indices Are Calculated

An index's value is determined using a **weighting method** that decides how much influence each company has on its movements.

**Market Capitalization Weighted**
Larger companies—those with a higher total share value—have more impact than smaller ones. For example, in the S&P 500, a price change in Apple can move the index more than a smaller firm.

**Price Weighted**
Higher-priced stocks have a greater impact on the index, regardless of company size. The Dow Jones Industrial Average works this way, meaning a $400 stock can shift the index more than a $50 stock making the same percentage move.

**Equal Weighted**
Every company counts the same, offering a more balanced view of average performance but often making the index more volatile since smaller companies carry equal weight to large ones.

The chosen weighting method affects how traders interpret index movements, as it determines which stocks drive the most change.`,
    learningObjectives: [
      "Understand what stock indices are and their purposes",
      "Learn about major global, country, sector, and thematic indices",
      "Understand different index calculation methodologies",
      "Recognize how weighting methods affect index movements"
    ],
    keyTerms: {
      "Index": "Measure of performance for a basket of stocks representing a market segment or theme",
      "Benchmark": "Standard against which portfolio performance is measured",
      "Market-cap Weighted": "Index where larger companies (by market value) have greater influence",
      "Price-weighted": "Index where higher-priced stocks have more impact regardless of company size",
      "Equal-weighted": "Index where all component companies have the same influence",
      "MSCI": "Morgan Stanley Capital International - provider of global equity indices"
    },
    resources: [],
    order: 8,
    isAssessment: false
  },
  {
    id: "c1-l9",
    courseId: "course-1",
    title: "Trading stock indices",
    type: "article",
    duration: 10,
    content: `You can't directly buy an index—it's just a calculated number. Instead, traders use financial instruments to speculate on the price movements of an index or to invest in its performance.

### Popular Ways to Trade Indices

**Index CFDs**
Contracts for Difference allow traders to speculate on price changes without owning the underlying stocks.

**Index Futures**
Agreements to buy/sell an index at a predetermined price in the future.

**Index ETFs**
Funds that replicate an index's performance and can be bought like a stock.

### Why Trade Indices?

**Diversification in One Trade**
Instead of buying multiple stocks, one index trade gives exposure to many companies at once.

**Market Sentiment Plays**
Indices reflect the overall mood of investors, making them useful for macroeconomic strategies.

**Volatility Opportunities**
Indices often move sharply in response to big events like interest rate changes or political news.

**Hedging**
Investors can use index trades to protect portfolios from market downturns.

**Leverage Access (CFDs)**
Control a larger position with a smaller deposit (note: leverage amplifies both gains **and** losses).

### Factors That Move Index Prices

**Economic Data**
GDP growth, unemployment, inflation reports can shift sentiment significantly. Positive economic data typically supports index rises, while negative data can trigger declines.

**Corporate Earnings**
Strong or weak results from major companies in the index can influence overall value. During earnings season, indices can be particularly volatile.

**Interest Rate Changes**
Central bank decisions impact borrowing costs and stock valuations. Rate increases often pressure indices lower, while rate cuts can boost them.

**Global Events**
Elections, trade negotiations, pandemics, and wars can cause sudden market reactions. Geopolitical uncertainty often drives volatility.

**Sector Trends**
For sector indices, industry-specific news plays a major role. For example, oil price changes significantly affect energy sector indices.

### How Index Trading Works with Sky Links Capital

Trading indices through Sky Links Capital is straightforward:

1. **Choose your index** – Select from global benchmarks like S&P 500, NASDAQ 100, FTSE 100, and DAX 40
2. **Decide your direction** – Go long if you expect the index to rise, or short if you expect it to fall
3. **Set trade parameters** – Choose position size, stop-loss, and take-profit levels
4. **Monitor & manage** – Track market movements and adjust your position as needed

[EXAMPLE]
Suppose U.S. unemployment data comes in better than expected. You anticipate a rally in the U.S. stock market and decide to go long on the S&P 500 CFD with Sky Links Capital. If the index rises by 2% over the day, your position generates a profit proportional to your trade size. If it falls instead, you incur a loss.
[/EXAMPLE]`,
    learningObjectives: [
      "Learn different methods of trading indices",
      "Understand the benefits of index trading including diversification",
      "Identify key factors that move index prices",
      "Know how to execute an index trade through a broker"
    ],
    keyTerms: {
      "Index CFD": "Contract for Difference tracking an index's price movements without owning underlying stocks",
      "Index Futures": "Standardized contracts to buy/sell an index at a future date and price",
      "Index ETF": "Exchange-Traded Fund that replicates an index's performance",
      "Diversification": "Risk management strategy through exposure to multiple assets simultaneously",
      "Hedging": "Strategy to offset potential losses in investments using opposing positions",
      "Long Position": "Buying with expectation that price will rise",
      "Short Position": "Selling with expectation that price will fall"
    },
    resources: [],
    order: 9,
    isAssessment: false
  },
  {
    id: "c1-quiz-final",
    courseId: "course-1",
    title: "Course 1 Assessment Quiz",
    type: "quiz",
    duration: 15,
    content: "Interactive quiz to test your understanding of financial markets fundamentals.",
    learningObjectives: [
      "Assess your understanding of trading vs investing concepts",
      "Evaluate your knowledge of forex market fundamentals",
      "Test your comprehension of commodities and shares",
      "Verify your grasp of stock indices and market mechanics"
    ],
    keyTerms: {
      "Assessment": "Evaluation tool to measure learning progress and understanding",
      "Quiz": "Interactive test with multiple-choice and true/false questions",
      "Scoring": "Guide to interpret quiz results and identify areas for improvement"
    },
    resources: [],
    order: 10,
    isAssessment: true
  }
];
