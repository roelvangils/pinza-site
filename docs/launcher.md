---
title: The Launcher
description: The Spotlight-style window for searching, previewing, and managing all your pins, with a full keyboard reference.
section: using
order: 2
---

# The Launcher

The Launcher is a Spotlight-style window over your pin history: a search field on top, your pins on the left, a live preview on the right. It's built for keyboard use.

{% shot "the full Launcher window: search field on top, the pin list on the left with one row selected, the rich preview card on the right, group chips under the search field, and the hint bar along the bottom." %}

## Turning it on

Out of the box, your Recents shortcut opens a compact popover from the menu bar icon. If you prefer the Launcher instead:

1. Open **Settings → General**.
2. Set **Window Style** to **Launcher**.

{% shot "close-up of the Window Style segmented control in Settings → General with Popover and Launcher side by side, Launcher selected.", "dialog" %}

The same Recents shortcut now opens the Launcher. You can switch back anytime.

::: hint
The HUD's **Reveal in Launcher** button ({% kbd "⌘" %}{% kbd "L" %}) opens the Launcher too, with that pin already selected — regardless of your window style.
:::

## Finding things

Start typing. The search covers your pins' titles and content, and the placeholder tells you the size of what you're searching ("Search 25 pins…").

- **Group chips** under the search field filter to a group. Start typing a group's name and press {% kbd "⇥" %} to accept the inline suggestion.

{% shot "close-up of the search field with a group name half-typed and the inline autocomplete ghost completing it, group chips visible below.", "hud" %}
- {% kbd "esc" %} first clears your query; a second press closes the window.
- While there's no search, a sort toggle lets you order pins by your preference; press {% kbd "⌃" %}{% kbd "⌘" %}{% kbd "1" %}/{% kbd "2" %}/{% kbd "3" %} to switch modes directly.

The right-hand preview follows your selection. Drag the divider between the panes to resize them; double-click it to reset.

## Acting on pins

The Launcher's core convention: **{% kbd "↩" %} copies, {% kbd "⌘" %}{% kbd "↩" %} opens.** (The compact popover is the other way around — there, {% kbd "↩" %} opens.)

Right-click any pin — or press {% kbd "⌘" %}{% kbd "K" %} — for the full actions menu.

::: hint
Pins are draggable. Select one or several and drag them straight out of the Launcher — into a message as links, into a folder as files, wherever a drop makes sense.
:::

### Selection and navigation

| Shortcut | Action |
|---|---|
| {% kbd "↑" %} {% kbd "↓" %} | Move through the list |
| {% kbd "⇧" %}{% kbd "↑" %} / {% kbd "⇧" %}{% kbd "↓" %} | Extend the selection |
| {% kbd "⌘" %}{% kbd "↑" %} / {% kbd "⌘" %}{% kbd "↓" %} | Move the selected pin up or down the list |
| {% kbd "⌘" %}{% kbd "1" %}–{% kbd "9" %} | Copy the nth pin directly |
| {% kbd "⌥" %}{% kbd "⌘" %}{% kbd "1" %}–{% kbd "9" %} | Open the nth pin directly |
| {% kbd "⌘" %}{% kbd "A" %} | Select all (press again to cycle group / all) |
| {% kbd "⌘" %}{% kbd "E" %} | Invert the selection |
| {% kbd "⌘" %}{% kbd "F" %} | Jump back to the search field |

### Copying and opening

| Shortcut | Action |
|---|---|
| {% kbd "↩" %} | Copy the selection |
| {% kbd "⌘" %}{% kbd "↩" %} | Open the selection |
| {% kbd "⌘" %}{% kbd "C" %} | Copy without closing the window |
| {% kbd "⇧" %}{% kbd "⌘" %}{% kbd "C" %} | Copy as Markdown link(s) |
| {% kbd "⌥" %}{% kbd "⌘" %}{% kbd "C" %} | Copy the title(s) only |
| {% kbd "⌘" %}{% kbd "O" %} | Open |
| {% kbd "⌘" %}{% kbd "Y" %} | Quick Look (files) |
| {% kbd "⌘" %}{% kbd "S" %} | Share… |
| {% kbd "⌘" %}{% kbd "I" %} | Get Info (single file) |

### Managing pins

| Shortcut | Action |
|---|---|
| {% kbd "⌘" %}{% kbd "P" %} | Pin to the top ({% kbd "⇧" %}{% kbd "⌘" %}{% kbd "P" %} unpins) |
| {% kbd "⌘" %}{% kbd "L" %} | Lock a pin so it can't be deleted ({% kbd "⇧" %}{% kbd "⌘" %}{% kbd "L" %} unlocks) |
| {% kbd "⌘" %}{% kbd "G" %} | Group the selected pins (asks for a name) |
| {% kbd "⌘" %}{% kbd "R" %} | Remind me… |
| {% kbd "⇧" %}{% kbd "⌘" %}{% kbd "D" %} | Float the pin as a Card |
| {% kbd "⌘" %}{% kbd "X" %} or {% kbd "⌘" %}{% kbd "⌫" %} | Delete the selection |
| {% kbd "⌘" %}{% kbd "Z" %} | Undo a deletion ({% kbd "⇧" %}{% kbd "⌘" %}{% kbd "Z" %} redoes) |

::: help
Deleted something you shouldn't have? {% kbd "⌘" %}{% kbd "Z" %} brings it back on the spot, and with Pinza Pro the [Recently Deleted Bin](/help/settings/#recently-deleted) keeps deleted pins for 30 days by default.
:::

### Window and app

| Shortcut | Action |
|---|---|
| {% kbd "⌘" %}{% kbd "W" %} or {% kbd "esc" %} | Close the Launcher |
| {% kbd "⌘" %}{% kbd "," %} | Open Settings |
| {% kbd "⌘" %}{% kbd "U" %} | Check for updates |

Hold {% kbd "⌘" %}{% kbd "⌥" %} to peek: every row reveals its raw URL or path, plus numbered chips for the {% kbd "⌘" %}{% kbd "1" %}–{% kbd "9" %} picks.

{% shot "the Launcher in Power-Peek mode (⌘⌥ held): each row showing its raw URL or path and the numbered 1–9 chips on the first rows." %}

## Cards

{% kbd "⇧" %}{% kbd "⌘" %}{% kbd "D" %} detaches a pin as a **Card** — a small floating window with the pin's preview that stays on screen while you work. Cards float above other apps by default and you can keep up to 15 of them. Their behavior is configurable under **Settings → Integrations → Cards**.

{% shot "two or three Cards floating over a desktop — one web page, one file — while another app is frontmost, showing they stay on top.", "dialog" %}
