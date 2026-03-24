## Basic Information

| Item | Value |
|---|---|
| Name | Yutaro Wada |
| Education | Tohoku University, Faculty of Education (B.A.) |
| Current Role | Data Engineer |

### Profile

```txt
I work as a data engineer, helping companies make better use of their data.
I have experience building data infrastructure using dbt and Databricks, processing large-scale data efficiently, and conducting analytics to support business decision-making.
I aim to bridge the gap between technology and business, creating value through data.
```

### Accounts
- [GitHub](https://github.com/yutarowada0402)
- [Zenn](https://zenn.dev/taro_imo)

---

## Key Achievements & Strengths

### Business Contributions
- **Decision-making support**: Conducted PoC analysis demonstrating the effectiveness of ad slot utilization, supporting executive-level decisions for full-scale adoption
- **Operational efficiency**: Developed LLM tools that reduced SQL review workload by 50% and shortened document drafting time from 1 hour to a few minutes

### Technical Achievements
- **Performance improvement**: Rebuilt a large-scale data processing tool from VBA (3 hours / 50,000 records) to Python (20 minutes / 400,000 records)
- **Cost optimization**: Refactored complex queries, achieving 50% reduction in code volume and 66% reduction in query costs
- **Data infrastructure**: Designed and implemented multi-layer architecture (interface/dimension/fact/wide/mart) using dbt

### Team & Organizational Contributions
- Reduced onboarding time by 50% (new members productive within 1.5 months) through training program improvements
- Maintained 100% project utilization rate for a team of 7 through progress management and 1-on-1s, improving member retention

---

## Work History

### stable Inc. (2026/01 - Present)

**Role**: Data Engineer

#### Data Infrastructure Build & Operations for Major Publisher (2026/01 - Present)

**Project Overview**
```txt
Data infrastructure construction project using a multi-layer architecture with Databricks + dbt. Responsible for data mart development across multiple services and dashboard replacement from PowerBI to Databricks BI.
```

**Background & Challenges**
- Large-scale refactoring of complex mart groups required due to website renewal
- Declining maintainability of queries bloated by long-term operation
- Need to balance performance and quality under tight deadlines

**Approach**
- Re-confirmed business requirements to identify unnecessary processing and joins
- Developed a phased refactoring plan and executed changes while creating test cases
- Built efficient data update pipelines using dbt incremental models and partitioning
- Enforced code review and quality management using Git/GitHub

**Results**
- Achieved 50% reduction in SQL code volume and 66% reduction in query costs for specific mart groups, delivering ahead of schedule
- Currently driving PowerBI → Databricks BI dashboard replacement (as of February 2026)
- Continuously implementing multi-layer architecture with dbt

**Technologies Used**
`dbt` `Databricks` `Unity Catalog` `Delta Lake` `Databricks BI` `PowerBI` `Git` `GitHub` `uv`

---

#### Internal Handbook Construction & Operations (2026/01 - Present)

**Background & Challenges**
- Data modeling rules and internal procedures were siloed with individuals
- Scattered knowledge made onboarding time-consuming for new members

**Approach**
- Systematically organized data modeling rules (catalog/schema design, naming conventions, etc.)
- Built a static site with MkDocs, hosted securely using Cloudflare Pages + Zero Trust
- Integrated with Google Workspace to restrict access to employees only

**Results**
- Built a best practices repository accessible by the entire team
- Reduced onboarding time for new members

**Technologies Used**
`MkDocs` `Markdown` `Cloudflare Pages` `Cloudflare Zero Trust` `Google Workspace` `Git` `GitHub`

---

### Cograph Inc. (2024/03 - 2026/01)

**Role**: Data Analyst / Team Leader

#### Data Analysis & Quality Management for Major Web Service Company (2024/04 - 2026/01)

**Project Overview**
```txt
SQL quality management and data analysis for a web service with over 100 million members and approximately 60 million monthly active users, focused on campaign-related initiatives.
```

**Background & Challenges**
- Building and operating a data analytics infrastructure for campaign effectiveness measurement
- Ensuring quality of SQL written by marketers (requirement compliance, performance, readability)
- Providing quantitative evidence to support advertising slot adoption decisions

**Approach**

**1. Business Decision-Making Support**
- Led PoC analysis for ad slot utilization
- Validated PoC effectiveness through quantitative analysis to support full-scale adoption decisions

**2. SQL Quality Management & Operational Efficiency**
- Reviewed SQL created by team members (requirement compliance, performance, readability)
- Established pull request-based review workflow using Git (BitBucket)
- Fed review records into LLM to consolidate general validation knowledge and provided feedback to SQL generation tools
- Reduced SQL review workload by approximately 50%

**3. Data Analytics Infrastructure Build & Operations**
- Built and operated a point-related data analytics infrastructure using DOMO (BI tool)
- Analyzed effectiveness of point campaigns (customer development impact, ROI, etc.)
- Predicted point award quantities using multiple machine learning and statistical models

**4. LLM Tool Development**
- Developed a legal consultation search and draft creation tool using JIRA API (reduced document creation time from 1 hour to a few minutes)
- Developed a campaign guideline auto-generation tool using KINTONE API

**Results**
- Enabled full-scale adoption of ad slot utilization through PoC analysis
- Reduced SQL review workload by ~50% and built a feedback ecosystem for validation knowledge
- Delivered analysis results as insights used in management meetings and executive briefings
- Significantly reduced document creation time with LLM tools, improving quality by eliminating typos

**Technologies Used**
`BigQuery` `Python (pandas, scikit-learn, statsmodels, openai, langchain, streamlit)` `DOMO` `Git (BitBucket)` `JIRA API` `KINTONE API`

---

#### Team Operations Contributions (2024/09 - 2026/01)

**Background & Challenges**
- Maintaining stable project utilization rates for a business unit of approximately 7 members
- Need to streamline the new employee training program

**Approach**
- Managed member progress (daily reporting sessions, 1-on-1s, primary performance reviews)
- Planned and improved training programs; developed curricula tailored to each member's project
- Supported member mental conditioning (issue clarification, focused work environment)

**Results**
- Maintained 100% project utilization rate
- Reduced training period by 50% through program improvements (members fully productive within 1.5 months including BI training)
- Improved retention of members who had previously left early, extending average tenure from 3 months to 6 months

---

#### Housing Loan Cash Flow Expansion Tool Rebuild (2024/06 - 2025/03)

**Project Overview**
```txt
Project to replace and rebuild a housing loan statement cash flow calculation tool (Excel VBA) in Python.
```

**Background & Challenges**
- Existing VBA tool had very long processing times (3 hours / 50,000 records)
- Required support for up to 400,000 loan accounts
- Development and information management required under high-security environment

**Approach**
- Investigated VBA tool and identified unnecessary features
- Implemented large-scale data calculation and aggregation in Python (parallel processing, memory optimization)
- Configured processing chunks to match execution PC specs; measured performance and identified bottlenecks
- Created design documents and processing logic flow diagrams

**Results**
- Dramatically reduced processing time from 3 hours (50,000 records) to 20 minutes (400,000 records, on high-performance PC)
- Delivered high-quality data processing through analysis and optimization of third-party code
- Completed development and delivery under high-security environment

**Technologies Used**
`Python (pandas, numpy, concurrent.futures, pickle, openpyxl)` `Excel VBA`

---

### Career Transition Period (2023/01 - 2024/02)

**Background**
```txt
Period focused on transitioning from a public foundation to the private sector and pivoting to a data analyst role. Acquired necessary skill sets for data analysis through training and practical experience.
```

#### TSD Inc. (Tax Accounting Office) (2023/09 - 2024/02)
**Role**: Tax Accountant Assistant

**Responsibilities**
- Monthly accounting processing and trial balance preparation for corporate clients
- Corporate tax return preparation
- Year-end adjustment calculations and salary payment report preparation

**Skills Acquired**
- Foundational knowledge of accounting and taxation; monthly accounting processing skills
- Error prevention through self-checking procedures
- Structured reporting distinguishing unknowns, missing information, and progress

#### Recruit Co., Ltd. (2023/06 - 2023/07)
**Role**: Sales

**Responsibilities**
- Introductions to mid-career recruitment advertising services and appointment setting
- Average daily call volume: 150 calls

**Results**
- Achieved monthly order quota
- Acquired skills in customer segmentation, prioritization, and KPI-driven task management
- Developed client engagement and needs assessment skills

#### Estyle Inc. (2023/01 - 2023/05)
**Role**: Trainee (Data Science)

**Responsibilities**
- Data aggregation, analysis, and model implementation using Python (pandas, numpy, matplotlib, seaborn, scikit-learn, statsmodels, Optuna, etc.)
- Data retrieval, transformation, and aggregation using SQL
- Data connection, visualization, and EDA using Tableau

**Results**
- SIGNATE 31st Beginner-Only Competition: 4th place / 154 participants
- SIGNATE SOTA Challenge: Bronze medal (top 10%), awarded "Advanced" title

---

**Summary of This Period**
```txt
After exploring various paths toward a career transition, officially began career as a data analyst in March 2024. Since then, continuously deepening expertise in data engineering.
```

---

### The Nippon Foundation (2021/04 - 2022/12)

**Role**: Project Coordinator

#### Role Details

**Responsibilities**
- Interviews, screening, and management of grants to nonprofit organizations (from contract to completion)
- Procurement support (supplies, vehicles, etc.) for disaster volunteer organizations
- Progress management and reporting to relevant agencies for COVID-19 countermeasure programs (free PCR testing for elderly care facilities)

**Key Achievements**
- Conducted data aggregation, analysis, and proposals for the PCR testing program, published as academic analysis results
  - [Free PCR Testing for Elderly Care Facilities: Interim Report (Results)](https://www.nippon-foundation.or.jp/who/news/information/2021/20210825-60865.html)
  - [Free PCR Testing for Elderly Care Facilities: Academic Analysis Results](https://www.nippon-foundation.or.jp/who/news/information/2022/20220722-75220.html)
- Improved grant application workflow using Google Workspace (auto-reply via GAS, information centralization)

**Skills Acquired**
- Situation-appropriate information gathering and evidence-based communication
- Data aggregation, analysis, and proposal skills
- Operational efficiency improvements using Google Workspace

---

## Skill Set

### Programming Languages
`Python` `SQL` `SAS` `VBA` `Windows PowerShell`

### Databases & Data Infrastructure
`BigQuery` `Databricks` `Unity Catalog` `Delta Lake`

### Data Transformation & Modeling
`dbt` (multi-layer architecture design & implementation, incremental models)

### BI Tools
`Databricks BI` `PowerBI` `DOMO`

### Infrastructure & IaC
`AWS S3` `AWS IAM` `Terraform` `Cloudflare Pages` `Cloudflare Zero Trust`

### Development & Version Control
`Git` `GitHub` `BitBucket` `uv` `MkDocs`

### AI & LLM
`OpenAI API` `LangChain` `Streamlit` `RAG` `Claude Code`

### Project Management
`JIRA` `Confluence`

### Soft Skills
- Business decision-making support through data
- Requirements definition and stakeholder coordination
- Code review and quality management
- Documentation and knowledge management
- Team operations and member development

---

## Certifications

| Certification | Date Obtained |
|---|---|
| Statistics Certification Level 2 | February 2023 |
| TOEIC L&R 800 | November 2020 |
| JCCI Bookkeeping Level 3 | October 2020 |
| Class 1 Medium-Sized Vehicle License | May 2023 |
| Ordinary Motorcycle License | September 2018 |
| Class 1 Ordinary Vehicle License | September 2017 |

---

## Technical Articles & Interviews

### Zenn Articles
- [Built an internal portal site with Cloudflare Pages + MkDocs in about 4 hours](https://zenn.dev/taro_imo/articles/5fca8c6d29731e)
- [Getting Started with Open Table Formats on Databricks: Reading Notes Chapters 1-3](https://zenn.dev/taro_imo/articles/1ec4c559f6b734)
- [Switching between Full Refresh and Incremental in Databricks Job dbt Tasks](https://zenn.dev/taro_imo/articles/ce6a695c9dec7c)
- [dbt Cheat Sheet](https://zenn.dev/taro_imo/articles/a3019d09604324)
- [Automate Monthly Aggregation with Loop Processing in BigQuery](https://zenn.dev/taro_imo/articles/01214b3a793a3c)
- [PDF Translation Tool with markitdown and Grok 4.1: Translating O'Reilly Books into Japanese](https://zenn.dev/taro_imo/articles/c510256647efa0)
- [Let's Write Test Queries in SQL](https://zenn.dev/taro_imo/articles/1ddc1f2f3687ed)

### Note Articles
- [Reproducing Tableau in Python! Introduction to the Easy Analysis Library pygwalker](https://note.com/cograph_data/n/na02cbfeb35b7)
- [SAS-Python Rewrite Notes: For Those Who Have Had to Deal with SAS](https://note.com/cograph_data/n/n3147bba49ed2)
- [Introduction to Parallel Processing: Let's Start High-Speed Large-Scale Data Processing in Python with Dask](https://note.com/cograph_data/n/n6c8339b035f6)

### Interview Articles (Wantedly)
- [Employee Interview: Unexpected Challenges Are Opportunities for Growth. Skills and Experience Needed for a Data Analyst, Learned on the Job](https://www.wantedly.com/companies/co-graph/post_articles/958219)
- [Employee Interview: Making Study Accessible. Building a Culture of Cross-Functional Learning](https://www.wantedly.com/companies/co-graph/post_articles/936037)

---
