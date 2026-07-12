---
title: FAQ
description: Pricing, licensing, privacy, and the other questions everyone asks about Pinza.
section: support
order: 2
---

# FAQ

## Is there a subscription?

No. Pinza is free; Pinza Pro is $9.99, once. Every 1.x update is free. If a 2.0 ever ships as a paid upgrade, 1.x customers get 50% off.

## What stays free?

Everything that makes Pinza Pinza: all app integrations, both shortcuts, every Copy as… format, the account integrations, and the recents popover with your last 25 pins. The free tier is not a trial.

## What does Pro add?

Three things today: your **entire history** instead of the last 25 pins, the **Recently Deleted Bin** protected by Touch ID, and the **[MCP server](/help/integrations/mcp/)** for AI assistants. Features on [the roadmap](/help/whats-coming/) are included as they ship.

{% shot "the Pinza Pro pane's shipped-feature grid — Unlimited recents, Recently Deleted Bin, MCP server — with the $9.99 one-time price footer.", "dialog" %}

## How many Macs does one license cover?

Five. Deactivate a Mac from **Settings → Pinza Pro** to free a seat.

## What's the refund policy?

14 days, no questions asked — through Gumroad or by emailing [hello@pinza.app](mailto:hello@pinza.app).

## Why does Pinza ask for the Accessibility permission?

Reading the frontmost app's state — the tab URL, the selected file — uses macOS accessibility APIs and AppleScript. That's the entire use: read on shortcut press, never in the background. The [privacy policy](/privacy/) has the details.

## Where is my data?

On your Mac, in an encrypted SQLite database under `~/Library/Application Support/Pinza/`. The encryption key lives in your Keychain and never leaves the device. There's no account and no analytics.

::: help
Want the full technical picture? The [privacy policy](/privacy/) lists every network connection Pinza can make — favicons, previews, the integrations you enable — and how to turn each one off.
:::

## Apple Silicon or Intel?

Pinza is a universal binary and runs natively on both. It needs macOS 14 Sonoma or newer.

## Why isn't Pinza in the Mac App Store?

The App Store sandbox forbids apps that read other apps' state — which is Pinza's entire job. Every comparable utility (Alfred, Keyboard Maestro, Bartender, Hookmark) distributes directly for the same reason. Pinza is notarized by Apple and updates itself securely via Sparkle.

## Where are the release notes?

On the [releases page](https://github.com/roelvangils/pinza-updates/releases), and in the app whenever an update is offered.
