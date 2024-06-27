---
title: Scripture
description: Choose from over 230 online bible versions, or import your own bibles.
---

<script>
    import Key from '../../../lib/components/markdown/Key.svelte';
</script>

# Scripture

Choose from over 200 bible versions from [API.Bible](https://scripture.api.bible/), or import you own local file from Zefania or beblia.com in XLM format, or OpenSong format. In the center you can find all of the books, chapters and verses.

## Search

Start searching (<Key>CTRL/CMD + F</Key>) to quickly select any verse in the bible, it will auto complete the book name. Can be like this: **"John 1:1-4"**, or like this: **"Genesis 1:1-2+5"**, then press <Key>Enter</Key> to show in output.

Also in the bottom there is a search icon you can use to search for content in the entire bible.

## Selecting

You can select verses manually by holding <Key>CTRL/CMD</Key> while clicking on them. Double clicking any verse will show it in the output. Pressing <Key>Enter</Key> when verses are selected will output them directly. Holding <Key>CTRL/CMD</Key> and pressing <Key>Arrow left/right</Key> will move the selection to the next verses.

## Create a collection

Select two or more of the scriptures in the left drawer panel, right click and press _"New collection"_. Collections are found in the same panel. Selecting one will preview only the first one in the center, but selecting it you can see that it's showing multiple versions at the same time.

## Options

On the right you have many options to change how the scriptures are displayed. Here you can also change the template used. Please note that for collections the templates must have at least as many textboxes as there are scriptures.

:::admonition type=tip
Enabling "Show version" will show the scripture name, but not any content inside parentheses. So you can hide e.g. the abbreviation.
:::

## Create a show

On the right side you can see a preview of what the output will look like. Here you can tweak some settings, and change the [template](./drawer#templates). Click "New show" to create a normal show from the scripture.

The "Max verses per slide" means the maximum amount of bible verses per slide before creating a new one. Say this is set to 3, and you select ten verses. Then you will get four slides, three with three verses and the last with one verse.
