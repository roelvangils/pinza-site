---
title: Supported apps
description: The 40+ Mac apps Pinza understands, what it copies from each, and the quirks worth knowing.
section: reference
order: 2
---

# Supported apps

Press your Copy shortcut and Pinza copies whatever is most useful *for the app you're in*. This page lists every app it understands and what you get. All app support is free.

Reliability varies with how much an app lets Pinza see. Most integrations are rock-solid; the notes call out the few that are best-effort.

## Browsers

Pinza copies the **URL and title of the active tab** in:

Safari, Google Chrome, Chrome Canary, Brave, Vivaldi, Microsoft Edge, Arc, Zen, and Firefox.

Three extras work in any of them:

- **Highlight links** — select text on the page first, and the copied link ends in `#:~:text=…`, reopening scrolled to your selection with it highlighted.

{% shot "highlight-link-hud", "a browser with a sentence selected and the HUD showing the copied link ending in #:~:text=…, demonstrating a highlight link.", "hud" %}
- **PDF tabs** — when the tab is showing a PDF, Pinza offers to download it and copy a file reference instead.
- **[YouTube](/help/integrations/youtube/)** — clean `youtu.be` links, and timestamps if you enable the playhead.

::: help
Firefox exposes the least to automation, so its support is best-effort: the URL comes from reading the address bar, and highlight links can be less reliable than elsewhere.
:::

## Terminals

Pinza copies the **working directory** of your foreground shell — and if you're SSH'd into a remote machine, an `ssh://user@host` link instead:

Terminal, iTerm2, Warp, kitty, Alacritty, Ghostty.

{% shot "terminal-ssh-hud", "a terminal window SSH'd into a server, with the HUD showing the copied ssh://user@host link — the surprising one.", "hud" %}

## Files and system

| App | What Pinza copies |
|---|---|
| Finder | The paths of all selected files (or the front window's folder) |
| System Settings | A deep link that reopens the exact pane you're viewing |
| Preview | A link to the PDF **at the current page** (`#page=12`) |
| Skim | The same, as a `skim://` link that reopens Skim on that page |

::: hint
Preview's page links are honored by browsers, but Preview itself ignores the page number when reopening a file — it returns to wherever you last were. Skim links round-trip perfectly; if you live in PDFs, Skim is the better companion.
:::

{% shot "skim-page-link-hud", "a PDF open in Skim on page 37, with the HUD showing the copied skim:// link ending in #page=37.", "hud" %}

## Mail, notes, and tasks

| App | What Pinza copies |
|---|---|
| Apple Mail | A `message:` deep link to the selected message |
| Mimestream | A direct Gmail URL to the selected message |
| Apple Notes | A shared-note link — works for notes shared via iCloud |
| Apple Reminders | A deep link to the selected reminder |
| Apple Calendar | A deep link to the selected event |
| Things 3 | A `things:///` link to the selected to-do — with live status, and quick actions to complete or reopen it from the pin |
| Bear | A `bear://` link to the current note |
| Obsidian | An `obsidian://` link to the current note |
| Notion | A link to the current page |
| SnippetsLab | A link to the selected snippet |

::: help
Notes, Reminders, and Calendar offer no real automation interface, so these are driven through their menus — they work, but count them as best-effort. Obsidian links are parsed from the window title; a ` - ` inside a vault or note name can confuse them.
:::

{% shot "things-tooltip-quick-actions", "a Things 3 pin's hover tooltip: the to-do with its live status (Open) and the status-aware quick actions (Complete, Cancel) in the pin's menu.", "dialog" %}

## Messaging

**Slack** — a link to the selected message. Click the message first, and keep your cursor out of the input field. Details and setup for `slack://` deep links: [the Slack integration](/help/integrations/slack/).

## Media

| App | What Pinza copies |
|---|---|
| Spotify | A [song.link](https://song.link) URL that opens in anyone's music service; Copy as… adds direct links per platform |
| Apple Music | A `music.apple.com` link to the current track — catalog content only, not local uploads |
| Apple Podcasts | A link to the episode you're playing (or last played this session) |
| Apple Books | A `books.apple.com` link to the book you're reading |
| App Store | The web URL of the app page you're viewing |
| Setapp | The setapp.com page of the app you're viewing |
| Feishin | A Spotify search link for the playing track (self-hosted libraries have no shareable URLs) |

::: help
App Store and Setapp are driven through their share buttons, the most fragile mechanism Pinza uses. Apple Books resolves the link online, which can take half a second.
:::

## Code editors

| App | What Pinza copies | Requirement |
|---|---|---|
| Xcode | The path of the current source file | — |
| VS Code, VS Code Insiders, Cursor, Windsurf | A `vscode://file/…`-style link to the current file | Add `${activeEditorLong}` to the `window.title` setting so the editor shows the full path |
| JetBrains IDEs (IntelliJ, PyCharm, WebStorm, and family) | A `jetbrains://` navigation link to the current file | The link resolves when the project is open |

## Everything else

Apps without a dedicated integration still work more often than not: any document-based Mac app that tells the system what file it has open — TextEdit, Pages, and most native editors — yields its document's path.

If an app you use copies nothing, or the wrong thing, [say so](mailto:hello@pinza.app). App support is the product; requests directly shape releases.
