# Usage

One row per agent session. In Gemini CLI, type `/stats` before you quit and copy the input and output tokens. Copilot shows credits instead of tokens: write those in the credits column. The free tier charges nothing, so record what the session **would cost at the provider's published list price**, and note once below the table which price list you used. Leave the cost empty for rows that only show credits.

## Exercise 1 — AI Usage

### Tools Used

|Tool        |Purpose                                              |Tokens          |Cost                                              |
|------------|-----------------------------------------------------|----------------|--------------------------------------------------|
| ChatGPT    | MCP explanations, debugging and refactoring         | Not available  | Subscription-based; exact allocated cost unknown |
| Gemini CLI | Final MCP integration and tool-selection experiment | Pending        | Pending                                          |

### Notes

- Development and testing were performed in GitHub Codespaces.
- The MCP server uses Node.js built-in modules without an external MCP SDK.
- The exact number of ChatGPT tokens used for this exercise is not available.
- Gemini CLI usage and cost will be documented after the final experiment.

### Verification

The implementation passed 12 out of 12 automated MCP checks.

## Exercise 1 — Gemini CLI Usage Report

### Environment

- Development environment: GitHub Codespaces
- AI client: Gemini CLI
- Model: `gemini-3.5-flash-lite`
- Integration: Custom MCP server over stdio
- Tools: `find_lecture`, `count_lectures`

### Session 1 — Specific Tool Description

**Session ID:** `bd9223f4-2791-49cb-ab00-acac98967855`

**Prompt:** What does lecture 7 cover?

**Tool description:** Find a course lecture by number and return its title and topics.

**Observed tool call:** `find_lecture(number: 7)`

| Metric | Value |
|---|---:|
| API requests | 6 |
| Input tokens | 38,720 |
| Output tokens | 134 |
| Cache reads | 16,207 |
| Tool calls | 1 |
| Tool success rate | 100% |
| Wall time | 11m 46s |
| Agent active time | 4m 14s |
| API time | 4m 11s |
| Tool execution time | 3.2s |

### Session 2 — Generic Tool Description

**Session ID:** `60692ed8-bac5-4897-adb8-1caefeaa4bfc`

**Prompt:** What does lecture 7 cover?

**Tool description:** Retrieve course information from local data.

**Observed tool call:** `find_lecture(number: 7)`

| Metric | Value |
|---|---:|
| API requests | 4 |
| Input tokens | 27,077 |
| Output tokens | 94 |
| Cache reads | 10,145 |
| Tool calls | 1 |
| Tool success rate | 100% |
| Wall time | 4m 28s |
| Agent active time | 14.3s |
| API time | 11.4s |
| Tool execution time | 2.9s |

### Combined Usage

| Metric | Total |
|---|---:|
| API requests | 10 |
| Input tokens | 65,797 |
| Output tokens | 228 |
| Cache reads | 26,352 |
| MCP tool calls | 2 |
| Successful MCP tool calls | 2 |
| Overall tool success rate | 100% |

Cache reads are reported separately and are not added again to the input token total.

### Cost

The exact monetary cost was not available from the Gemini CLI session summaries. No cost estimate is reported because the applicable API pricing, billing status and cache accounting have not been independently verified.

### Conclusion

Both sessions successfully used the custom MCP tool to retrieve lecture 7.

Changing the tool description from specific to generic did not change the observed tool selection. The second session consumed fewer tokens and required less API time, but these differences cannot be attributed solely to the description change.

The experiment demonstrates successful integration between Gemini CLI and the custom MCP server.


