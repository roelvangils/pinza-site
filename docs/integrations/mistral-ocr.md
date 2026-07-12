---
title: Mistral OCR
description: Turn any PDF into clean Markdown with Mistral's OCR — including scanned documents — straight from the Copy as… menu.
order: 2
---

# Mistral OCR

With a Mistral API key, the Copy as… menu on any PDF gains **Copy as Markdown using Mistral OCR**: the whole document, or just the current page, converted to clean Markdown. Because it's real OCR, it works on scanned PDFs that contain no selectable text at all.

## Try the free path first

For PDFs that already contain text, Pinza extracts it on your Mac with no key and no network: **Copy as… → Copy as Text**. If that comes back empty, the PDF is a scan — that's what OCR is for.

## Setup

1. Create an API key at [console.mistral.ai](https://console.mistral.ai). Mistral's usage-based pricing applies; OCR costs a fraction of a cent per page.
2. In Pinza, open **Settings → Integrations → Mistral** and paste the key.

The key is stored in your macOS Keychain. (Command-line users can set the `MISTRAL_PINZA` environment variable instead; the Keychain entry wins if both exist.)

## Using it

1. Copy a PDF — from Finder, Preview, Skim, or a browser tab showing a PDF.
2. Hover the HUD, click **Copy as…**, and choose **Copy as Markdown using Mistral OCR**.
3. Paste Markdown.

Until a key is configured, the menu item shows greyed out.

## Limits and privacy

- PDFs up to **50 MB**. Larger ones are declined with a clear message.
- The PDF is uploaded to Mistral's API for processing. If a document shouldn't leave your Mac, use the local **Copy as Text** instead.
- An internet connection is required.
