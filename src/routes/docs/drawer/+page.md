---
title: Drawer
description: The drawer is a simple way to access many of the essential tools without leaving the presentation view.
---

<script>
    import Key from '../../../lib/components/markdown/Key.svelte';
</script>

# The drawer

> The drawer is a simple way to access many of the essential tools without leaving the presentation view.

The drawer is located at the bottom of the application, it can be opened by clicking on any tab, or you can resize it by dragging on the line at the top of the drawer. In the drawer you get access to a lot of essential tools. When opened you have a navigation area at the left, a content area in the center, and a clock, info or more tools on the right side.

#### Drawer search

The drawer has a search bar on the right to quickly find what you are looking for. Click the icon or press <Key>CTRL/CMD + F</Key> to start a search.

:::admonition type=tip
Hold <Key>CTRL/CMD</Key> while pressing any <Key>Arrow keys</Key> to navigate inside the drawer.

Press <Key>CTRL/CMD + D</Key> to toggle the drawer.
:::

Here is a list of all the tabs you can find in the drawer:

## Shows

This is where all your songs, events, presentations, and more are located. Click on them to open the preview, or double click to start the show.

On the left you can organize them into categories by dragging any show over the category.
On the right side you get information about the current selected show.

:::admonition type=tip

You can right click a category to mark it as "Archive". Doing this will hide it from the "All" tab and searches.

:::

## Media

Here you find all of the selected media from your computer. Click on them to open a preview of the file, or double click to show it in the output. They can also be dragged on slides.

On the left side you can add new folders from your device. Here you can also find all the media files marked as favourite, and play online videos.

Read [more here](./media).

## Audio

Here you can find audio files from your computer. Works the same as [media](#media), can also be dragged over slides. You can play multiple files at the same time. And change the volume at the right side.

There is also a "Microphones" tab, that should work mostly the same as other audio. Click any to unmute any of the incoming audio signals.

There is also an "Audio streams" tab where you can add a direct "http://" audio stream, which is commonly from a radio station. You can find some good ones here: [https://fmstream.org/](https://fmstream.org/) (Make sure it is marked as _mp3_)

## Overlays

Overlays are just like a normal slide, but it will show over the current slide output when clicked, and you can have multiple at the same time. These can be dragged over slides just like media backgrounds. You can also lock them in the output if you want them to stay there after "Clear all" is pressed.

Left side is the same as [shows](#shows). On the right side there is a button to refresh example overlays, click this to get new overlays after an update if there are any.

Read [more here](./overlays).

## Templates

Templates are like a slide, with a set look that you can click to apply the same style to any show, and it will update with any changes in the future as long as the style matches the template. You can also apply the style to single slides by dragging them over the slides.

Read [more here](./templates).

## Scripture

Show bible verses easily, from [API.Bible](https://scripture.api.bible/) or any local scripture in XML format.

Read [more here](./scripture).

## Calendar

Create repeated events, and easily create a slideshow from any selected events. You can also schedule actions to run at a certain time.

Read [more here](./calendar).

## Functions

Various functions including Actions, Timers, Variables & Triggers.

Read [more here](./functions).
