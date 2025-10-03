import { Lesson } from "@/types/course";

export const course3Lessons: Lesson[] = [
  {
    id: "c3-l1",
    courseId: "course-3",
    title: "What are contracts for difference (CFDs)",
    type: "article",
    duration: 10,
    content: `# Understanding Contracts for Difference (CFDs)

A contract for difference (CFD) is a type of financial derivative that allows traders to benefit from changes in the price of an asset without owning it directly. Instead of purchasing shares, commodities, or currencies outright, you agree to exchange the difference between the price when the position is opened and when it is closed.

This gives traders a flexible way to participate in markets that might otherwise be less accessible.

# Markets Available Through CFDs

- **Company shares** – such as Tesla, Microsoft, or BP
- **Foreign exchange pairs** – like EUR/USD or EUR/JPY
- **Raw materials and commodities** – for example, crude oil, coffee, or gold
- **Equity indices** – such as the S&P 500, FTSE 100, or Nikkei 225
- **Other financial instruments** – including government bonds, interest rates, or even ETFs

# How Market Prices Change

The value of financial assets shifts constantly. A Microsoft share might be trading at $280 today but rise to $285 tomorrow. The US dollar could be worth €0.92 this week but fall to €0.88 a few weeks later.

These fluctuations are what make trading possible — and also what introduces risk.

# How CFDs Work

When trading a CFD, you don't take ownership of the asset. Instead, you decide whether you believe its price will rise or fall:

- If you expect the market to go up, you **go long** (buy).
- If you expect the market to fall, you **go short** (sell).

Because CFDs are derivatives, their value comes directly from the performance of the underlying asset. For instance, opening a CFD on gold allows you to trade on gold price movements without ever holding the physical metal.

# Opportunities and Risks

CFDs offer the chance to profit from both rising and falling markets, making them versatile tools for traders. However, this flexibility comes with risk. The further a market moves in your favor, the greater your profit — but losses grow just as quickly if the market moves against you.

That's why CFDs can be a powerful but risky way to trade, suitable for those who understand how they work and manage their exposure carefully.`,
    learningObjectives: [
      "Understand what CFDs are and how they work",
      "Learn the markets available for CFD trading",
      "Recognize the opportunities and risks of CFD trading",
      "Understand the concept of derivatives"
    ],
    keyTerms: {
      "CFD": "Contract for Difference - derivative tracking asset price without ownership",
      "Derivative": "Financial instrument whose value is based on underlying asset",
      "Underlying Asset": "The actual asset that a derivative's price is based on",
      "Two-way Trading": "Ability to profit from both rising and falling markets",
      "Going Long": "Buying with expectation of price increase",
      "Going Short": "Selling with expectation of price decrease"
    },
    resources: [],
    order: 1,
    isAssessment: false
  },
  {
    id: "c3-l2",
    courseId: "course-3",
    title: "Breaking down a CFD trade",
    type: "article",
    duration: 15,
    content: `# Introduction

A contract for difference, or CFD, is not just about predicting whether a market goes up or down. To really understand how CFDs work in practice, it's important to look closely at the entire trading process: how a trade is placed, how margin and leverage affect it, how profits and losses are calculated, and finally, how risk can be managed responsibly.

# Choosing a Market and Setting Up the Trade

Every CFD trade begins with choosing a market. This could be a share, a currency pair, a commodity, or even a stock index. Traders usually rely on some form of analysis to guide this.

# Direction and Order Types

Once a market is chosen, the next step is to decide on direction. If the trader expects prices to rise, they go long, meaning they buy the CFD. If they expect prices to fall, they go short, which is essentially selling the CFD. The way the order is placed also matters. A market order executes immediately at the best available price, while a limit order waits until the price reaches a chosen level before triggering. These choices shape not only how the trade begins but also how much control the trader has over the entry point.

- **Long (Buy):** Expecting the price to rise.
- **Short (Sell):** Expecting the price to fall.

**Order types:**

- **Market order** — immediate execution at the current price.
- **Limit order** — execution only at a chosen price level.

# Margin and Leverage

Unlike buying shares outright, CFD trading does not require the full value of the trade upfront. Instead, a trader deposits a fraction of the position's value, known as margin. This is possible because of leverage. Leverage means that a relatively small deposit controls a much larger market exposure.

- **Margin:** The deposit required to open a trade (e.g., 5% of total position size).
- **Leverage:** Multiplies your exposure; small capital controls a larger position.

[EXAMPLE]
With 10:1 leverage, a $500 margin can control a $5,000 position.
[/EXAMPLE]

**Risk note:** Leverage amplifies both profits and losses.

# Profit & Loss Calculation

Profits/losses depend on price movement × position size.

At the heart of a CFD trade is the difference between the opening and closing prices. Suppose a trader buys one CFD on gold when the price is $1,800. If the price rises to $1,810 and the trade is closed, the profit is $10. If instead the price falls to $1,790, the loss is $10. While these figures may seem small in a simple example, in larger positions or leveraged trades they can grow significantly. Understanding this calculation is key to appreciating both the potential and the danger of CFDs.

[EXAMPLE]
**Taking a CFD position on gold:**

- Trader goes long on gold at $1,800 with 1 CFD (each CFD = 1 ounce).
- Gold rises to $1,810 → Profit = $10.
- If gold falls to $1,790 → Loss = $10.
[/EXAMPLE]

Emphasize that the calculation is based on the difference between entry and exit prices.

# Risk management

Because of leverage, risk management becomes a vital part of CFD trading. Traders rarely rely on hope alone; they use tools to protect themselves.

A **stop-loss** order automatically closes the trade if losses reach a certain level, preventing small setbacks from turning into major ones. **Take-profit** orders do the opposite, securing gains once a target price is hit. Some traders also use **trailing stops**, which adjust automatically if the market moves in their favor, locking in profit while still giving the trade room to develop. These tools are often the difference between sustainable trading and uncontrolled risk.

**Definitions:**

- **Stop-loss orders:** Automatically close a trade to limit losses.
- **Take-profit orders:** Lock in gains at a chosen target price.
- **Trailing stops:** Move in line with favorable market moves, protecting profits.

**Lesson point:** Using these tools is crucial to avoid large, unmanaged losses.

# Closing a Trade & Recording Outcomes

- To realize profit or loss, the trade must be closed (opposite action to entry).
- After closure:
  - Review results against expectations.
  - Record the trade in a trading journal for continuous improvement.`,
    learningObjectives: [
      "Learn the complete CFD trade lifecycle",
      "Understand margin and leverage in CFD trading",
      "Calculate profit and loss on CFD positions",
      "Implement risk management tools effectively"
    ],
    keyTerms: {
      "Margin Requirement": "Minimum deposit needed to open and maintain position",
      "Leverage Ratio": "Multiplier showing exposure relative to capital (e.g., 10:1)",
      "P/L": "Profit and Loss calculation",
      "Stop-Loss": "Order to automatically close trade at predetermined loss level",
      "Take-Profit": "Order to automatically close trade at predetermined profit level",
      "Trailing Stop": "Stop loss that automatically adjusts as price moves favorably"
    },
    resources: [],
    order: 2,
    isAssessment: false
  },
  {
    id: "c3-l3",
    courseId: "course-3",
    title: "Deal types and costs",
    type: "article",
    duration: 15,
    content: `# Deal types and costs

When you trade CFDs, you're entering into a contract that mirrors the price movement of an underlying asset. Instead of physically owning that asset — whether it's a share, commodity, or currency pair — you agree with your provider to exchange the difference in value between the time the trade is opened and the moment it's closed.

For instance, a CFD based on a US index might be priced per point of movement. If that index rises or falls, the profit or loss on your position is calculated against the size of your contract. Closing the trade simply involves placing the opposite order to your opening position.

# Types of CFD Contracts

CFDs come in more than one form, and the way they are structured affects both costs and trading style.

**Open-ended CFDs (Cash CFDs)**

These contracts are designed for flexibility. They don't usually have a fixed expiry, allowing you to keep a position open for as long as you wish while the market is trading. Because of this, the quoted price is normally close to the actual spot price of the underlying asset. However, holding the trade overnight incurs a financing charge, which can add up if the position is left open for weeks at a time. For this reason, open-ended CFDs are often used by short-term traders who expect price moves within hours or days.

**Expiry-based CFDs (Futures/Forwards)**

The alternative is a CFD with a set end date. These are often linked to futures-style pricing and are popular for markets like energy, metals, or stock indices. While the spreads are usually wider than those of open-ended CFDs, there's an advantage: overnight funding is included in the price, meaning you won't pay a daily financing fee. Traders who want to capture a longer-term trend — perhaps over several months — often prefer this style of contract.

# Costs You Need to Know

Trading CFDs involves more than just spreads. Several other charges can affect your results:

**Margin requirements**

To open a CFD trade, you place a deposit called margin. This represents a fraction of the trade's total value and allows you to control a much larger exposure. The required margin can vary depending on the asset class, its volatility, and your broker's rules. While the position remains active, that margin amount is tied up and released only once the trade is closed.

**Financing charges**

If you keep an open-ended CFD trade overnight, a financing cost is applied. This reflects the cost of maintaining the exposure in the underlying market and can either be credited or debited depending on whether you're long or short.

**Currency conversion**

Some trades are quoted in a different currency than your account base. For example, buying a US-listed company through CFDs might generate profit or loss in dollars, which would then be converted to your account currency. In these cases, brokers often charge a small conversion fee.

**Commissions on equities**

Unlike CFDs on commodities or indices, share CFDs may carry a commission. This usually mirrors the mechanics of the underlying equity market, where a small percentage fee is charged based on the total notional value of the trade.

[EXAMPLE]
Imagine you expect a major technology stock to rise and you decide to open a CFD position. The stock is quoted at $220.50 / $221.00, and you buy 500 CFDs at the ask price of $221.00. Your provider charges a commission of 0.08% on the full notional value.

- Trade value = 500 × $221.00 = $110,500
- Commission = $110,500 × 0.08% = $88.40

Although you only needed to deposit a fraction of this as margin — say 10% ($11,050) — the commission is calculated on the full exposure. If the stock climbs to $225.00 and you close the position, your gross profit is (225.00 – 221.00) × 500 = $2,000, before costs.
[/EXAMPLE]

# Key Takeaway

CFD trading is not just about predicting market direction — it's about understanding the structure of the contracts and the costs that come with them. Open-ended CFDs are flexible but incur daily funding charges, while expiry-based CFDs are better suited for longer horizons. And regardless of the style, traders must account for margin, commissions, and conversion fees when calculating their true results.`,
    learningObjectives: [
      "Understand different types of CFD contracts",
      "Calculate all costs associated with CFD trading",
      "Compare cash CFDs vs expiry-based CFDs",
      "Factor costs into profitability calculations"
    ],
    keyTerms: {
      "Cash CFD": "Open-ended CFD with overnight financing charges",
      "Futures CFD": "CFD with fixed expiry date and funding built into price",
      "Overnight Financing": "Daily interest charge for holding leveraged positions",
      "Commission": "Percentage fee charged on notional value of trade",
      "Notional Value": "Full value of position before leverage",
      "Margin Deposit": "Collateral required to open leveraged position"
    },
    resources: [],
    order: 3,
    isAssessment: false
  },
  {
    id: "c3-l4",
    courseId: "course-3",
    title: "Why consider trading CFDs?",
    type: "article",
    duration: 15,
    content: `# Why trade CFDs

Now that you know what CFDs are and how they work, the next question is: why choose them over traditional investing methods? CFDs offer a range of unique benefits that make them attractive to active traders. Let's break down some of the key advantages.

# Profiting in Both Directions

In conventional investing, the main opportunity comes from buying an asset and waiting for its value to rise. CFDs, on the other hand, allow you to trade whether markets are climbing or falling. If you expect a stock, currency, or index to lose value, you can open a short position and potentially benefit from the decline. This flexibility means you're not limited to bullish markets — opportunities exist in downturns as well as rallies.

# Wide Market Access in One Place

Traditionally, you might need multiple brokers to access different asset classes — one for equities, another for forex, and perhaps another for commodities. CFD platforms typically bring all of these markets together in a single account. That means with just one provider you can trade everything from global stock indices to precious metals, currencies, and even government bonds. CFDs also make it possible to trade on instruments that aren't usually available for direct investment — for example, you can't "buy" an index itself, but you can trade an index CFD.

# Extended Trading Hours

Underlying markets such as stock exchanges often close at set times each day. For instance, many European equities stop trading in the late afternoon. CFD trading, however, often goes beyond those fixed hours. Some providers keep major markets like indices, forex, and commodities open almost 24 hours a day. This allows you to react to overnight news, earnings reports, or economic events instead of waiting until the next session.

# Efficient Use of Capital with Leverage

Another defining feature of CFDs is leverage. Instead of paying the full cost of an asset upfront, you only need to commit a percentage of the position value as a margin deposit. This means you can gain exposure to a much larger position than your initial outlay.

[EXAMPLE]
Take silver as an example:

- Buying ten ounces outright at $25 each would normally require $250.
- A CFD broker with a 10% margin requirement would only ask for $25 to open the same exposure.
[/EXAMPLE]

Leverage amplifies potential returns — but it also magnifies losses, which is why risk control is essential.

# The Bottom Line

CFDs give traders the ability to profit from rising and falling markets, access thousands of global instruments through a single platform, trade outside of traditional hours, and make efficient use of capital through leverage. These features make them a versatile trading product — though they must always be approached with careful risk management.`,
    learningObjectives: [
      "Understand the advantages of CFD trading",
      "Compare capital efficiency of CFDs vs direct ownership",
      "Recognize the importance of risk management with CFDs",
      "Evaluate if CFD trading suits your trading style"
    ],
    keyTerms: {
      "Capital Efficiency": "Ability to control large positions with less capital",
      "Extended Trading Hours": "Ability to trade outside regular exchange hours",
      "Multi-Asset Platform": "Single platform providing access to multiple markets",
      "Risk Control": "Strict discipline in managing position sizes and using stops",
      "Two-Way Trading": "Ability to profit from both rising and falling markets"
    },
    resources: [],
    order: 4,
    isAssessment: false
  },
  {
    id: "c3-quiz-final",
    courseId: "course-3",
    title: "Course 3 Assessment Quiz",
    type: "quiz",
    duration: 15,
    content: "Interactive quiz to test your understanding of CFD trading.",
    learningObjectives: [
      "Assess your understanding of CFD fundamentals and mechanics",
      "Evaluate your knowledge of margin and leverage in CFD trading",
      "Test your comprehension of different CFD contract types",
      "Verify your grasp of costs and profit calculations"
    ],
    keyTerms: {
      "Assessment": "Evaluation tool to measure learning progress",
      "Quiz": "Interactive test with multiple-choice and true/false questions",
      "CFD Mechanics": "Understanding how CFDs work and are traded"
    },
    resources: [],
    order: 5,
    isAssessment: true
  }
];
