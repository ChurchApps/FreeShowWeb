---
title: Show
description: A show is your slideshow. It can be song lyrics, events, presentations, images, bible verses, and much more.
---

# Showtime

> A show is your slideshow. It can be song lyrics, events, presentations, images, bible verses, and much more.

## Creating a show

First you have to go to "Shows" in the [drawer](./drawer). At the bottom center you will find a **New show** button. Clicking it will display a popup. Here you can type a name, and select a category the new show will be placed in. The selected category will default to the currently opened category, or the set category of the opened show. There are buttons for an empty show, web search for lyrics and quick lyrics, which is recommended if you want to create song lyrics. The program will try to apply groups automatically. Finally, once text is pasted/typed, press **New show** to create your new show.

## Quick Lyrics
![Screenshot of Quick Lyrics window](/images/docs/Show_type-Quick_Lyrics.webp)
### Syntax
#### Song Parts (Groups)

Parts of a song can be marked using the part name in square brackets (e.g. **[Verse]**). A group will be created for each part. These groups can be added and removed from show layouts. This makes it possible to have multiple "arrangements" of the same song parts/groups into different layouts.

If there are multiple of the same song parts there is no need to add a number to the end of the group name. FreeShow will by default automatically add numbers to the labels accordingly.

Here is a Quick Lyrics example song with two verses, chorus and bridge:
```
[Verse]
Line 1
Line 2
Line 3
Line 4

[Chorus]
Line 1
Line 2
Line 3

[Verse]
Line 5
Line 6
Line 7
Line 8

[Bridge]
Line 1
Line 2

[Chorus]
Line 1
Line 2
Line 3
```
![Screenshot of Quick Lyrics example song with two verses, chorus and bridge](/images/docs/Show_type-Quick_Lyrics_example_song_with_two_verses_chorus_and_bridge.webp)


#### Divide into slides with blank lines
Lines of a song part can be divided into separate slides by adding an empty line between the song part lines. However normally this is not needed as you can also set how many lines are display in the **Styles** section of the **Settings**. During the show presentation a progress indicator will display below the song part slide to show how much of the song part has already been displayed.

Here is an example of a verse with four lines that is divided so that the first two lines are on one slide and lines three and four are on the second slide:
```
[Verse]
Line 1
Line 2

Line 3
Line 4
```
![Screenshot of a verse with four lines that is divided in two](/images/docs/Show_type-Quick_Lyrics_divided_verse.webp)

#### Metadata Import
Metadata can be imported in Quick Lyrics by adding lines to the text box using the metadata field name, an equal sign and the text that the metadata field should be set to (e.g. **Title=Song Title**).

**NOTE:** For the **Song ID (CCLI)** field just use **CCLI=**.
Here is an example metadata import text:
```
Title=Song Title
CCLI=1234567
Copyright=© 2011 The Best Words Ever Sung; © 2011 ACME Song Factory LTD.
Author=John Doe | Jill Doe | Samuel Somebody
```
![Screenshot of Import Metadata Example](/images/docs/Show_type-Quick_Lyrics_Import_Metadata_Example.webp)

You can add custom metadata options in **Settings**>**General**>**Manage metadata**, that way they can also be parsed from Quick Lyrics.
For custom metadata fields with spaces, both of the following lines will work:
```
custom title with spaces=Some Text
customtitlewithspaces=Some Text
```

### Options
Under the Quick Lyrics text entry box is an **Options** button. Clicking on this will show the following options.
![Screenshot of Quick Lyrics options](/images/docs/Show_type-Quick_Lyrics.webp)
**NOTE:** FreeShow will remember the settings for these options for future Quick Lyric imports.

#### Auto assign groups
If **Auto assign groups** option is on and square brackets are not used this will attempt to add the most likely song part (group) based on how the song is structured (whether that is a verse, pre-chorus, chorus or bridge). Otherwise, it will be placed in the default **Verse** group.

#### Format text
If the **Format text** option is on, it will auto capitalize the first letter in each line, remove trailing white spaces and punctuations. And split long lines into multiple lines.

#### Max lines per slide
Entering a number into the **Max lines per slide** field will cause Quick Lyrics to auto split after the requested number of lines breaking the song parts into multiple slides. This can better be done by setting the maximum number of lines in the **Styles** section of the **Settings**.

## Finding your shows

All your shows can be found in the "Shows" tab in the drawer. Here you can organize them into different categories, the category changes the icon a show has in the project list. In the top right corner of the drawer you will find a search bar to search through all of your shows. When a show is opened or changed, the text content will be cached, so you can search by the content as well as the title.

## Slides

One [group](./groups) can have multiple slides. Right clicking a slide gives you different options.

One of them is to disable a slide, this can be useful if you might use a slide sometimes but not always, or for more advenced uses. Keyboard navigation & slide timers will skip disabled slides, but you can still click it to play as normal.

## Presenting

When opening a show, you will by default get a _"WYSIWYG"_ view, meaning the style of each slide will match the style of the output. You can click any slide to show it, and use the arrow right/left keys to change slides, or press spacebar. In the bottom of the show view you have some buttons to change the [layout](./layouts) of the current view.

:::admonition type=tip
Pressing spacebar at the end of a show will go to the next show in the current project.

Pressing the arrow keys will always change the slides of the current outputted show, even when another show is active. But pressing spacebar will always play active show.
:::

## Backgrounds

Adding backgrounds are as easy as [dragging them](./media#add-as-backgrounds) over any of the slides. Say you add a background to the first slide, then that background will be applied to all the concurrent slides as "ghost" backgrounds, meaning they behave the same as the first slide when clicked, but you can only interact with the element on one slide. If you don't want any background to play on a specific slide, you can right click on the slide, choose "Slide actions", "Start action", and click "Clear background".

:::admonition type=tip
If the background can't be found, e.g. the file is moved, or different computer, the program will auto search and find any media with matching file name, as long as it's inside a folder added to "Media" in the drawer.
:::

## Importing a show

If you have any existing lyrics from other programs, you can [import](./importing) them from the application menu.
