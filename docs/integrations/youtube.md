---
title: YouTube
description: Clean youtu.be links out of the box, and — with a per-browser switch — timestamped links that start playing at the paused moment.
order: 7
---

# YouTube

YouTube links get special treatment in two tiers.

## What you get out of the box

Copy any YouTube tab and Pinza normalizes the messy watch-page URL to the short, clean form:

```text
https://youtu.be/dQw4w9WgXcQ
```

Shorts and live URLs are normalized the same way. Nothing to configure.

## The playhead: timestamped links

With the playhead enabled for your browser, Pinza reads the player itself. **Pause the video** at the moment you want to share and press your Copy shortcut — the link carries the timestamp:

```text
https://youtu.be/dQw4w9WgXcQ?t=213
```

The link starts playing right there for whoever opens it. (Pinza adds the timestamp only when the video is paused, so a link you copy while watching doesn't jump around.) You also get a nicer title — `Video title — Channel name` — and the channel's avatar on the pin.

{% shot "a paused YouTube video with Pinza's HUD showing the copied youtu.be link ending in ?t=213, the “Title — Channel” label, and the channel avatar on the pin.", "hud" %}

### Enabling it

Reading the player requires your browser's permission to run JavaScript on request. That's a browser setting:

**Safari**

1. Turn on the Develop menu: **Safari → Settings → Advanced → Show features for web developers**.
2. In the **Develop** menu, check **Allow JavaScript from Apple Events**.

**Chrome, Brave, Edge, and other Chromium browsers**

1. From the menu bar, choose **View → Developer → Allow JavaScript from Apple Events**.

{% shot "Safari's Develop menu open with “Allow JavaScript from Apple Events” checked — with a small inset of the same item in Chrome's View → Developer menu.", "menu" %}

The first time Pinza can use the playhead in a browser, it asks before doing so — the switch per browser also lives in **Settings → Integrations → YouTube**.

::: help
What does that browser setting actually allow? It lets Pinza ask the page for the player's current position — a small script that runs only when you press your Copy shortcut on a YouTube tab. Pinza never runs JavaScript on other pages.
:::

### Channel avatars

Fetching channel avatars is a separate toggle in the same section, on by default. Turn it off if you'd rather Pinza made no network requests for artwork.
