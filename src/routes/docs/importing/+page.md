---
title: Importing
description: Import songs from many different programs.
---

<script>
    import Key from '../../../lib/components/markdown/Key.svelte';
</script>

# Importing

Access from the application menu: **File** -> **Import**. Or press <Key>CTRL/CMD + I</Key>. You can also press <Key>CTRL/CMD + ALT + I</Key> to quickly import directly from the clipboard.

Here you have a bunch of different options to import different file types from various programs. Most of them will create a new show.

## Supported files

- FreeShow
- ProPresenter 4-7 (If you have a .proBundle file, add .zip to the end and extract.)
- EasyWorship 6-7
- VideoPsalm
- OpenLP (OpenLyrics)
- OpenSong
- Quela (If you have a .qsp file, add .zip to the end and extract.)
- SoftProjector
- Songbeamer

<br>

- Text
- ChordPro
- PDF
- PowerPoint
- Lessons.church

:::admonition type=tip
Create and select a new empty show category to place all of the imported files here. Also if you do that when importing a VideoPsalm songbook the song number/ID will be automatically added to the title.
:::

## PowerPoint

Clicking on "PowerPoint" and selecting a presentation will import just the text and create a new show, which is useful for importing song lyrics.

But if you want to import the presentation as it is, with all of it styles, you currently have to import the presentation as PDF. If you have PowerPoint installed you can export it as PDF inside the application, if not you can use an online "PPTX to PDF converter".

## PDF

When importing a PDF file, all the pages will be converted to images, placed in the "documents/FreeShow/Import/" folder. And then added as backgrounds in a show.

## Project

A FreeShow project is a file containing a project and all of it shows, it's useful to easily transfer a project to another computer.

## Calendar

Import a calendar .ics file. It will be converted to the programs own calendar format, that can be accessed from the ["Calendar"](./calendar) drawer menu. If you import the same calendar multiple times, only the new/changed events are imported.

## FAQ

- **The EasyWorship files did not import the correct song names**

  The song names in EasyWorship are stored in a seperate file than the song content, so you need to select both the `SongsWords.db` (song content) file & the `Songs.db` (song data/names) file to get the proper names.
