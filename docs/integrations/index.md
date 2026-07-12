---
title: Integrations overview
navTitle: Overview
description: What each Pinza integration adds, what setup it needs, and the small built-in ones that need none.
order: 1
---

# Integrations

Integrations live under **Settings → Integrations**. Each one is optional, and each adds something specific — a Bookmark button, cleaner Markdown, a timestamped YouTube link. All of them are free; only the MCP server requires Pinza Pro.

{% shot "settings-integrations-pane", "the full Settings → Integrations pane scrolled to the top: the Reminders anchors, Slack Workspaces, and the Google Drive / Notion / Raindrop sign-in sections with their status.", "window" %}

| Integration | What it adds | Setup |
|---|---|---|
| [Mistral OCR](/help/integrations/mistral-ocr/) | Turn any PDF into Markdown, even scans | Paste an API key |
| [Google Drive](/help/integrations/google-drive/) | Copy Docs, Sheets and Slides as Markdown, CSV, or Office files | Sign in with Google |
| [Notion](/help/integrations/notion/) | Copy Notion pages as AI-ready Markdown | Sign in with Notion |
| [Raindrop.io](/help/integrations/raindrop/) | A Bookmark button on the HUD | Sign in with Raindrop.io |
| [Slack](/help/integrations/slack/) | Links that open in the Slack app instead of the browser | Paste a workspace URL |
| [YouTube](/help/integrations/youtube/) | Timestamped links, channel names and avatars | A per-browser switch |
| [MCP server](/help/integrations/mcp/) (Pro) | Lets AI assistants search your pins, locally | Paste one config block |

::: help
The sign-in buttons use each service's own login page — Pinza never sees your password. The resulting access tokens, like all integration secrets, are stored in your macOS Keychain.
:::

## The built-in ones

A few smaller integrations need no account and no keys — just preferences in the same pane:

### Reminders

The HUD's **Remind me…** button writes to Apple Reminders. Here you define what "this evening" and "tomorrow morning" mean — two time pickers, nothing more.

{% shot "reminders-time-pickers", "close-up of the two Reminders time pickers — “This evening” and “Tomorrow morning” — with times set.", "dialog" %}

### Terminal

When Pinza opens a folder or an `ssh://` pin in a terminal, this is where you choose which one: Terminal, iTerm2, Warp, Alacritty, or Ghostty.

### Cards

Preferences for [floating Cards](/help/launcher/#cards): whether they stay above other apps (on by default) and whether they come back after relaunching Pinza (off by default). You can have up to 15 Cards on screen.

### GitHub

Not listed in Settings because there's nothing to set up: copy any github.com URL and the Copy as… menu automatically offers the repo slug, clone URLs, a `gh repo clone` command, and raw-file links.
