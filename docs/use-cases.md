---
title: Example use cases
navTitle: Use cases
description: Ten practical, step-by-step examples of what Pinza is good at, from highlight links to PDF pages to AI-ready Markdown.
section: start
order: 2
---

# Example use cases

Ten everyday tasks, each a small recipe. All of them work in the free version unless marked Pro.

## Share the exact sentence, not just the page

Send someone a link that scrolls straight to the passage you mean.

1. In your browser, select the text you want to point at.
2. Press your Copy shortcut.
3. Paste. The link ends in `#:~:text=…` — when opened, the browser jumps to your selection and highlights it.

## Get back to page 37 of a PDF

1. Open the PDF in Preview or [Skim](https://skim-app.sourceforge.io) and go to the page you care about.
2. Press your Copy shortcut. Pinza copies a link that ends in `#page=37`.
3. Paste it into your notes. Skim links reopen the PDF on that exact page. Preview links open at-page in a browser.

## Turn a Google Doc into Markdown for an AI chat

1. [Connect Google Drive](/help/integrations/google-drive/) once.
2. With the Google Doc open in a browser tab, press your Copy shortcut.
3. Move the pointer over the HUD, click **Copy as…**, and choose the Markdown option.
4. Paste clean, AI-ready Markdown into Claude, ChatGPT, or wherever you need it. The same works for Notion pages with the [Notion integration](/help/integrations/notion/).

## Copy a file path for the Terminal

1. Select a file in Finder.
2. Press your Copy shortcut, then hover the HUD and click **Copy as…**.
3. Choose **Tilde Path (Escaped)** for a shell-safe `"~/…"` form, or **SCP Path** to get `MacBook:/path/to/file` for copying between machines.

## Read it this evening

1. Copy an article with your Copy shortcut.
2. Hover the HUD and click **Remind me…**.
3. Pick **This evening**. Pinza creates a reminder in Apple Reminders that links straight back to the page. The exact times behind "this evening" and "tomorrow morning" are yours to set in **Settings → Integrations**.

## Link to an email from your to-do list

1. Select a message in Apple Mail or Mimestream.
2. Press your Copy shortcut. You get a `message:` deep-link (Mail) or a direct Gmail URL (Mimestream).
3. Paste it into Things, Reminders, or your notes. Clicking it later reopens that exact message.

## Share a song with someone on a different music service

1. Play a track in Spotify and press your Copy shortcut.
2. Pinza copies a [song.link](https://song.link) URL that opens in the recipient's own music service.
3. Prefer a specific platform? **Copy as…** offers direct links for Apple Music, YouTube Music, Tidal, and more.

## Send a YouTube moment

1. [Turn on the YouTube playhead](/help/integrations/youtube/) for your browser once.
2. Pause the video at the moment you want to share.
3. Press your Copy shortcut. The link carries a `?t=` timestamp, so it starts playing right there.

## Keep a reference floating on screen

1. Press your Recents shortcut and select a pin you keep coming back to.
2. Press {% kbd "⇧" %}{% kbd "⌘" %}{% kbd "D" %} to float it as a Card — a small always-on-top window.
3. Drag it wherever you like. Cards stay above other apps while you work; close one like any window.

## Let your AI assistant search your pins (Pro)

1. Turn on the [MCP server](/help/integrations/mcp/) in **Settings → Integrations**.
2. Paste the one-block config snippet into Claude Desktop or another MCP client.
3. Ask your assistant things like "find the pin about the Q3 budget". Everything stays on your Mac.
