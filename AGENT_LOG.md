# Agent log

One entry per agent session, newest at the bottom. Be honest: what went wrong is the useful part.

Exercise 1 — MCP Server
AI Assistance
Tool: ChatGPT

Purpose: Understanding the MCP protocol, debugging and code review.
Development Process
1. Studied JSON-RPC 2.0 and the MCP communication process.
2. Implemented the initialize and notifications/initialized handlers.
3. Implemented tools/list with two tools: find_lecture and count_lectures.
4. Implemented tools/call and JSON-RPC error handling.
5. Used ChatGPT to identify and explain JavaScript errors, including incorrect module imports and incorrect variable declarations.
6. Refactored the implementation to separate MCP protocol handling from tool execution.
7. Verified the implementation using the course-provided automated tests.
AI Contributions
ChatGPT provided explanations, debugging guidance, code review and refactoring suggestions. The initial implementation was developed incrementally by the student. Refactoring code was also proposed by ChatGPT.
Verification
The MCP server passed all 12 automated checks after refactoring.
Reflection
The exercise helped me understand the difference between JSON-RPC protocol errors and MCP tool execution errors, as well as the communication between an AI agent and an MCP server.
