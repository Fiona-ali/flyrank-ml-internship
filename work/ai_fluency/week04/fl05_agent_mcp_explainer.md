# FL-05 — Agent Concepts and MCP Basics
**Fiona Ali Shaik · Week 4 · General AI Fluency**

## Explainer (about 760 words)

### Workflow and agent

A workflow is a path designed in advance. Its steps, order, and handoffs are mostly fixed: for example, collect facts, write a draft, review the draft, then revise it. A model can do work at each step, but the workflow decides what happens next. Anthropic describes workflows as systems where models and tools are orchestrated through predefined paths. Agents are different because the model can direct its own process and tool use, adjusting its next step based on what it learns from the environment. A useful agent needs feedback from real tool results and a way to stop or ask a person when it reaches a limit. An agent is not simply a longer prompt or a product label. More autonomy can add cost, latency, and compounding mistakes, so it should be used only where flexible decisions are needed. [Anthropic, “Building effective agents”](https://www.anthropic.com/engineering/building-effective-agents)

My FL-04 portfolio writing pipeline is a **workflow**. It has a fixed draft → critique → revise sequence. I start each run, give Claude the source facts and status, and then review its output. Claude does not independently decide which project to investigate, choose a different source, or publish the copy. The actual runs show why the fixed review step matters: Claude proposed unsupported claims about Pac-Man features and machine-learning results, then identified those claims when prompted to critique. Even after its critique, some revisions needed another human correction. This pipeline is not an agent merely because it has multiple stages.

### What MCP does

The Model Context Protocol (MCP) is an open standard for connecting an AI application to external data and capabilities through a common client–server pattern. The host is the application a person uses; its MCP client communicates with an MCP server; the server exposes selected services or data. This gives an AI application a consistent way to discover and use integrations instead of every model tool needing its own unrelated connection format. MCP is a connection protocol, not an agent and not a guarantee that a model’s answer is correct. The server’s permissions still limit what it can reach. [MCP introduction](https://modelcontextprotocol.io/docs/getting-started/intro)

The three primitives have different roles:

- **Tools** are callable functions, such as searching a repository or creating an issue. The model may choose to call a tool when the task calls for it. Some tools change external state, so their side effects and permissions matter.
- **Resources** are addressable information that a client can read into context, such as a document or a record. They are a way to provide data; reading a resource does not itself mean the model verified every claim in it.
- **Prompts** are reusable message templates that a person can choose and fill with arguments. They make a task easier to repeat, but do not fetch facts or take action on their own.

In short, tools let a model request an action, resources provide data, and prompts provide a reusable starting message. Which side chooses each primitive is part of the distinction: the model typically selects tools, the application decides which resources to include, and a person invokes a prompt. [MCP Python SDK, server concepts](https://py.sdk.modelcontextprotocol.io/servers/)

### Connector tasks completed

I used the connected **GitHub connector in ChatGPT** against my own public repository, `Fiona-ali/flyrank-ml-internship`. These were live connector calls and read-only:

1. **Check the live repository and owner.** The connector returned the repository metadata: owner `Fiona-ali`, default branch `main`, public visibility, and my available push permission. This confirms the target and branch before writing.
2. **Read a live repository file.** The connector fetched the first lines of the newly committed FL-04 workflow document from `work/ai_fluency/week04/fl04_portfolio_writing_workflow.md`. It returned the document title and workflow text from GitHub, which a chat model without the connection could not retrieve from the private integration context by itself.
3. **Search the repository for the Week 4 notebook.** The connector found `work/notebooks/w04_baseline_score.ipynb` and returned an excerpt naming its Refresh / Content Opportunity Scoring lane and editor-review decision. It also found the work index entry. This used the live repository’s indexed contents rather than an answer guessed from the prompt.

These calls show the connected GitHub integration being used for actual repository reads. I used the GitHub connector route, not a server newly installed in Claude. The assignment allows a connector / any MCP client; the connector tool results are recorded below. **Screenshots of the three connector calls still need to be attached to FlyRank**; this text log is not a screenshot.

### One concrete upgrade: make FL-04 an agent

To turn the workflow into a bounded agent, I would give it a read-only GitHub tool that retrieves a project’s README and repository link, plus a tool to check whether the portfolio page exposes that link. The agent could inspect one project at a time, compare its draft claims with retrieved source text, and decide whether to revise, request missing facts from me, or stop. It would need to cite the repository file or page behind each factual claim, avoid inferring metrics or my contribution, and stop after a small number of review rounds. The final publish action would remain behind my explicit human review. That upgrade adds flexible tool selection based on what the repository actually contains; it does not remove the need to check evidence or grant the agent write access.

## Connector evidence log

| Task | Connector operation | Observed result |
|---|---|---|
| Confirm target repo | GitHub `get_repo` | `Fiona-ali/flyrank-ml-internship`; owner `Fiona-ali`; branch `main`; public; push permission available |
| Retrieve a known file | GitHub `fetch_file` | Read `work/ai_fluency/week04/fl04_portfolio_writing_workflow.md`; confirmed title and content |
| Discover Week 4 notebook | GitHub `search` | Found `work/notebooks/w04_baseline_score.ipynb` and excerpt naming lane and decision |

These are read-only calls; no repository files were changed by the evidence tasks themselves. The FL-04 document was committed separately for the preceding assignment.

## Sources

- Anthropic, [Building effective agents](https://www.anthropic.com/engineering/building-effective-agents)
- Model Context Protocol, [Introduction](https://modelcontextprotocol.io/docs/getting-started/intro)
- MCP Python SDK, [Server concepts](https://py.sdk.modelcontextprotocol.io/servers/)
- Fiona Ali’s actual FL-04 pipeline and live GitHub connector results described above.
