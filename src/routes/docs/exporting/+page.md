---
title: Exporting
description: FreeShow can export a song to various different formats.
---

<script>
    import Key from '../../../lib/components/markdown/Key.svelte';
</script>

# Exporting

Access from the application menu: **File** -> **Export**. Or press <Key>CTRL/CMD + E</Key>.

These are the currently supported export options:

### Project

This will export a [.project](./format-project) file, containing the current project list and all of the shows contents. This can be imported by FreeShow on another device. _Media files have to be transported manually right now._

### SHOW

Exports a standard FreeShow [.show](./format-show) file, with all the formatting included.

### TXT

Will create a text file from all the selected shows.

### PDF

Will create a PDF for each of the selected shows. Here you can tweak a lot of settings, like to only export lyrics, only slides, or both.
