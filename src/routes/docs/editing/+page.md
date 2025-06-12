---
title: Editing
description: The different tools for editing a show.
---

<script>
    import Key from '../../../lib/components/markdown/Key.svelte';
</script>

# Editing a show

To edit a show, go to the "Edit" view in the top, with a show active. Here you can select any slide, or add new on the left, change text and move/resize items in the center, and see more tools on the right side.

You can zoom in/out or enable [chords](./chords) in the bottom center. And if you hold <Key>CTRL/CMD</Key> and scroll up or down over the slides in the left panel you can show more slides at once.

:::admonition type=tip
Hold ALT and press Enter when the cursor is placed anywhere in a textbox to split the text in two slides.
:::

## Tools

On the right side there are different tabs to edit the style of the slide or the contents, see under for more information:

### 1. Item content

Edit the style of the text or content inside all items, or the current selected items.

### 2. Item style

Edit the item style of all items, or the current selected items.

### 3. Items

Add new items, or change the order current [items](items).

### 4. Filters

Set filters for the slide, choose for either the background, the foreground or both.

### 5. Slide

Change the background color, or add notes to the current slide.

## Item styling

### Auto Size

When enabling the "Auto size" option, the text will be resized to fit inside the current textbox. You can choose between two text fit options:

1. Shrink to fit: Text is set font size by default, but can shrink if the text does not fit in the textbox. (default)
2. Grow to fit: Text will grow to fill the entire textbox, but maximum the set font size.

### Text scrolling

When selecting a textbox you can choose to enable text scrolling if you want some effects.

### CSS

In some places there is a textbox to change the CSS directly. You don't need to use this if you don't know it, but if you know CSS you can do many different special things with the browser styling language.

## Modes

At the bottom you can change the edit mode, first you can click on "Chords" to [add chords](./chords). Also you can toggle "Text edit".

### Text edit

This works in a similar way to the "Quick lyrics" when [creating a show](./show#creating-a-show), or it is the same if it is empty. It will automatically change slides in the current layout based on the content of the text after editing. It will update the content when the textarea loses focus (If you press esc, or click on another area). Useful for copying/pasting song lyrics, and for splitting/joining slides.

Slides are seperated with an empty line, and labeled by **[Group name]**. And textboxes are seperated with **[#1]**, **[#2]**, etc. Textboxes can also be marked with a language ID **[#3:en]**.
