---
title: Project
description: A project is a playlist with all the songs, videos, presentations and other elements for your meeting.
---

<script>
    import Key from '../../../lib/components/markdown/Key.svelte';
</script>

# Project

A project is a playlist with all the songs, videos, presentations and other elements for your meeting. To add a new element you can drag it from the [drawer](./drawer), or drag a media file from the computer directly. Drag elements inside the project to rearrange them.

To navigate between elements you can click them or press the arrow down/up buttons on the keyboard.

## Private shows

When a show is in a project you can right click on it and click "Private", all private shows will have a lock icon and will not display in the shows list in the drawer. If that show has been added to any other projects it will also be private there, but any changes will show in all the projects.

## Sections

Click the button in the bottom of the project area to add a new section. Here you can add titles for reference in your playlist, and add lots of notes.

:::admonition type=tip
Press <Key>CTRL/CMD + F</Key> to start searching in the drawer, and press enter to quickly add the first result to the current project.
:::

## Project file

Go to File>Export>Project to export a .project file. This file is useful for transferring files between computers. The project file is a .zip file and a .json file containing all of your media in the project, including all shows/overlays/actions used.

Go to File>Import>Project to import a .project file.

You can also right click a project button/project title to export/import quicker.
