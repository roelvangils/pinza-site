---
title: MCP server
description: Let Claude or any MCP-capable AI assistant search, read, and reveal your pins — entirely on your Mac. A Pinza Pro feature.
order: 8
---

# MCP server

MCP (Model Context Protocol) is the open standard AI apps use to talk to local tools. Pinza's MCP server lets your AI assistant — Claude, Codex, Gemini, or any MCP client — work with your pins: *"find that article about tidal energy I saved last week"* becomes a real query against your own history.

Everything runs over a local socket on your Mac. No pin data leaves the machine.

> The MCP server is a [Pinza Pro](/help/faq/#is-there-a-subscription) feature.

## Setup

1. Open **Settings → Integrations → MCP Server** and turn the server on.
2. Click **Copy Claude Desktop config**. Pinza puts a ready-made snippet on your clipboard:

```json
{
  "mcpServers": {
    "pinza": {
      "command": "/Users/you/Library/Application Support/Pinza/pinza-mcp-bridge"
    }
  }
}
```

3. Paste it into your client's MCP configuration — for Claude Desktop that's `~/Library/Application Support/Claude/claude_desktop_config.json` — and restart the client.

Other MCP clients work the same way: point them at the bridge command from the snippet.

{% shot "the MCP Server section in Settings → Integrations: the server toggle on, the five tool toggles below it (copy_pin off), and the Copy Claude Desktop config button." %}

## The five tools

Each tool has its own toggle in Settings, so you decide exactly what an assistant may do:

| Tool | What it does | Default |
|---|---|---|
| `search_pins` | Full-text search across your pins | On |
| `list_pins` | List pins, filtered by app, site, or date | On |
| `get_pin` | One pin's details, including its highlights | On |
| `reveal_pin` | Pop a pin up on screen as a floating Card | On |
| `copy_pin` | Put a pin back on your clipboard | **Off** |

`copy_pin` is the only tool that writes — it can overwrite whatever is on your clipboard — so it ships turned off. Enable it deliberately if you want it.

{% shot "Claude Desktop answering a question like “find my pin about the Q3 budget” with a visible search_pins tool call and the pin it found — the payoff shot." %}
