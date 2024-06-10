---
title: Functions
description: Enhance the presentations with special interactable functions, that can be triggered and used in different unique ways.
---

# Functions

> Enhance the presentations with special interactable functions, that can be triggered and used in different unique ways.

## Actions

Start various actions on startup, when [receiving a MIDI signal](./midi), or when activating a slide. These actions are the same as the [FreeShow API](./companion#the-api).

## Timers

Make sure the "Timers" tab on the left in the drawer is selected. Any timer in any show in the current project will show up first. Here you can control and create new timers. They can be added to a [stage display](./stage), or to any show with the [timer item](./items#timer).

### Editing timers

When creating or editing a timer you have some different options. You can choose "From start to end" which is e.g. from 5 minutes to 0. You can choose towards a time to count to a specific clock time. This will reset when the time passes 00:00 so it can't go more than 24 hours.

Lastly you can choose "Time until event" which will count towars the start time of a future event from the "Event" tab.

Enable "Overflow when reached end" to allow the time to go past the end time.

## Variables

In the overlays tab, there is a section called "Variables". Here you can currently create either text, or number. Use them to easily change the number or text value in any [variable item](./items#variable), on any slide. Most commonly used for a score counter.

## Triggers

In the overlays tab, there is also a section called "Triggers". Here you can send HTTP requests in the form of a link, often used to trigger camera presets. E.g: "http://IP?cam=2&preset=5". They can be drag to any slide, to be triggered on slide click.
