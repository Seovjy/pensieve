---
tags:
  - Finance
  - classnotes
created: 2026-09-09
---
> [!info] 
> Class notes are largely filtered through and compiled from my own understanding of the material. They are intended for self-learning and reference, not as an official source or absolute representation of the course content.

### Principle of Investment Valuation

- The net present value of the future expected cash flow: what it worths today
- Time value of money: what it worths in the future
- We compare different options in the same time frame.

---

###### Terms

- APR: annual percentage rate

We need to match the rate with the compound/discount period, say if certain payment or investment is compounded monthly or daily to have Effective Annual Rate.

If APR = 18%, if it is compounded monthly, then the EAR = $$ \left( 1 + \frac{18\%}{12} \right)^{12} -1 \approx 19.5618\% $$  

---

### Perpetuity & Annuity

$$

PV_1 = \frac{C}{r}

$$


When $t$ = 10, $PV_2$ = ${\frac{C}{r}}$. We discount back to $t$ = 0
  

$$
PV_2 = \frac{\frac{C}{r}}{(1+r)^{10}}
$$
  

$$
PV_1 - PV_2 = AV_{10}
$$

###### Growing Perpetuity  

$$
PV_3 = \frac {C}{r-g}
$$

---

### Investment Decisions
- Capital Budgeting: Evaluate potential projects and investments
- Clarify revenue, cost and the risks
- Focus on projects that create positive net present value

###### Different Evaluation Techniques

- Net Present Value (NPV)
- The Internal Rate of Return (IRR)
- The Payback Rule: The length of time it takes to recover the original investment.
- The Accounting Return: Accounting profit (ROI)
- The Profitability Index: NPV/Investment

---

### NPV  

$$
PV = \sum_{t}^{T} \frac{{\mathbf{E(CF)}_t}}{(1 + {\mathbf{k}})^t}
$$

${\mathbf{E(CF)}_t}$ = Expected Cash Flow
$k = r + premium$, required rate of return equal to opportunity cost of funds

### IRR

The internal rate of return is a "break-even" discount rate.

When IRR < $k$, NPV < 0, overpriced
When IRR > $k$, NPV > 0, underpriced

Pitfall: IRR cannot distinguish the different characteristics of the cash flows and can be misleading in short-term project.

---
  
### Project Analysis

Identify the crucial assumptions in investment proposals

###### Sensitivity Analysis

Identify key variables that have effect on cash flows, NPV, or other decision criteria.
Set each variable in turn at its most pessimistic or optimistic value and recalculate. (Can leverage Excel What-If Analysis to save time inputing changes)

###### Scenario Analysis

If key variables are interrelated, consider some possible scenarios and avoid the dangers of simplistic, one-dimensional or linear thinking.

###### Real Options

The flexibility to modify the projects when the future unfolds.

---

### Firm Valuation: Discounted Cash Flow (DCF) model

Firm’s value is tied to its ability to generate cash flows.

$$
\text {Net Assets} = Debt + Equity
$$

$$
\text {Value of Firm (Net Assets)} = \text {PV(Future Free Cash Flow)}
$$

$$
V_0 = \sum_{t=1}^{\infty} \frac{FCF_t}{(1 + k)^t}
$$

If FCF grows at a constant rate,

$$
V_0 = \frac{FCF_0 (1+g)}{(k-g)}
$$

For two-stage model,

$$
V_0 = \sum_{t=1}^{n} \frac{FCF_t}{(1 + k)^t} + \frac{FCF_{n+1}}{(k-g)}\frac{1}{(1 + k)^n}
$$

---
  
###### Free Cash Flow

Cash available to all owners (debt holders and equity holders) after meeting operation & investment needs.

Free Cash Flow (FCF) = 
Operating Cash Flow (OCF) - Fixed Capital Investment (Capex) - Working Capital Investment (∆NWC)

Operating Cash Flow (OCF) = EBIT + Depreciation - Tax

Alternative: OCF = Net Operating Profits After Tax (NOPAT) + Depreciation
tax shield reflected in $k$

---
  
###### Net Working Capital (NWC)

Measure firm’s [[Ratio Analysis#Liquidity Ratios|liquidity]] and short-term financial health

$$
\text {Current Assets - Current Liabilities}
$$


---

###### Cost of Capital $k$

- Required return in DCF: Investors require return on their investment, which is "cost" for firms.
- Firms' cost of capital provides an indication of how the market view the risk of firm assets.

###### Weighted Average Cost of Capital (WACC)

$$
WACC = \frac{D}{V} k_d (1-t) + \frac{E}{V}k_e
$$

Cost of debt $k_d$: Yield on the corporate long-term debt

Cost of equity $k_e$: Expected equity return
There are several methods to determine $k_e$
- Capital Asset Pricing Model (CAPM)
- Fama-French 3-factor Model
- Dividend growth model  

Reduction in taxes as a benefit comes from debt borrowing.
We reflect it in firm value, either FCF or $k$.

---

###### CAPM

Investors diversify, so the only risk premium they can earn is non-diversifiable risk, systematic risk.

In CAPM, systematic risk is measured by beta.

$$
\beta_i = \frac{\text{Cov}(R_i, R_m)}{\text{Var}(R_m)}
$$

  
Beta is the coefficient from a linear regression of a given risky asset's returns on market returns over certain period.

$$

r_i = r_f + \beta (r_m-r_f)

$$