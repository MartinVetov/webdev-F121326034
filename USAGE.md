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

