---
title: Mirrors
description: Use mirrors to mirror a stage view or another show slide.
---

# Mirrors

> Use mirrors to mirror a stage view or another show slide.

Mirrors are for showing another shows item on either the same slide index, or a selected index. This can be used for showing multiple versions of a song/scripture in the same show. Or to show a stage display. In most cases you don't need mirrors, they are just there for some special cases.

## Stage display in output window

If you want to show a stage slide as a normal output window you should follow [this guide](./stage#slide), but if you want to show multiple on a slide, you can follow the current steps:

- Make sure you have created at least [two outputs](./outputs), call one of them "Stage".
- Go to the "Stage" page, and select the ["Slide" tab](./stage#slide) on the right and set it to the output that is not "Stage".
- [Create a show](./show#creating-a-show) called e.g. "Stage output".
- Create a slide, add a [mirror item](./items#mirror), toggle on "Enable stage", and select the correct stage slide.
- Now when you have just the "Stage" [output enabled](./outputs#how-to-use), click on the slide.
- After that you can enbale the main output, and disable the stage output, and it should work.
- You might want to change the [output window position](./output#settings).
