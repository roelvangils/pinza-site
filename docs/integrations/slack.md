---
title: Slack
description: Copy links to Slack messages, and teach Pinza your workspace's Team ID so links open in the Slack app instead of the browser.
order: 6
---

# Slack

Select a message in Slack and press your Copy shortcut: Pinza copies a link straight to that message, ready to paste into a ticket, a to-do, or another conversation.

## Copying a message link

1. In Slack, **click the message** first so it's selected.
2. Make sure your cursor is **not** in the message input field.
3. Press your Copy shortcut.

You get a `https://yourworkspace.slack.com/archives/…` link that anyone in the workspace can open.

{% shot "Slack with a message selected (not the input field) and Pinza's HUD confirming the copied archives link.", "hud" %}

::: help
Slack gives Pinza very little to work with, so this is the most delicate of all app integrations. If your cursor is in a text field, Pinza backs off rather than guess — you may see a stray "L" typed instead, which {% kbd "⌘" %}{% kbd "Z" %} removes.
:::

## Making links open in the Slack app

By default, message links open in the browser. If Pinza knows your workspace's **Team ID**, it can copy `slack://` deep links that open in the Slack app directly.

Pinza discovers Team IDs on its own where it can — from links in your history and from your clipboard. To add one manually:

1. Open **Settings → Integrations → Slack Workspaces** and click the help button.
2. Open Slack **in your browser** (not the app) and sign in to the workspace.
3. Look at the address bar. The URL looks like `https://app.slack.com/client/TXXXXXXXX/…` — the part starting with `T` is the Team ID.
4. Copy the whole URL to your clipboard and return to Pinza. It picks the ID out for you.

{% shot "the Slack Workspaces help sheet in Settings: the numbered steps with the example app.slack.com URL and the “Open Slack in browser” button.", "dialog" %}
