---
title: Google Drive
description: Copy Google Docs, Sheets, and Slides as Markdown, CSV, or plain text — or download them as Office files — from any Drive browser tab.
order: 3
---

# Google Drive

Connected to Google Drive, Pinza can turn the Google Doc in your browser tab into something genuinely portable: Markdown for an AI chat, CSV from a Sheet, or a proper Word/Excel/PowerPoint/PDF file in your Downloads folder.

## Setup

1. Open **Settings → Integrations → Google Drive**.
2. Click **Sign in with Google** and approve the request in your browser.

Pinza asks for **read-only** access to Drive. It never modifies or deletes anything. Click **Sign Out** in the same place to disconnect.

{% shot "the Google Drive section in Settings → Integrations in its connected state: the account shown as Connected with the Sign Out button.", "dialog" %}

## Using it

1. With a Google Doc, Sheet, or Slides deck open in a browser tab, press your Copy shortcut. The link is copied as usual.
2. Hover the HUD and open **Copy as…**. Extra entries appear for this document:
   - **Markdown / plain text** — clean text conversion, ideal for pasting into an AI assistant. For Docs, an AI-Ready Markdown option preserves images.
   - **CSV** — for Sheets.
   - **Office file / PDF** — downloads the document to `~/Downloads` and puts a file reference on your clipboard, ready to attach or drag.

The menu also shows the document's sharing state — Public, Anyone at your domain, or Restricted — so you know what the person you're sending the link to will actually see.

{% shot "the Copy as… menu for a Google Doc: the Drive entries (AI-Ready Markdown, Word file, PDF) plus the sharing-state line, e.g. “Restricted — only invited people”.", "menu" %}
