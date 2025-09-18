---
title: Templates
description: Create a template to quickly change the style of any show.
---

# Templates

> Create a template to quickly change the style of any show.

Template works very similar to [overlays](./overlays). Clicking on a template when a show is opened will override the style in the show with the style from the template. The show will remember the template, so it will always update if you edit the template. When you edit the show items (not the text) it will no longer update from the template.

You can also drag a template to a specific slide to apply the style to just that slide.

:::admonition type=tip

_For advanced users:_ If you need to change the between templates, and need the item layer position to change, but want the text content to move textbox position. One way to do that is to add the same text content to any textbox in your first and second template and the text content will move from the first box over to the other box with the same content!

:::

## FAQ

-   **How to switch the items around**

    Holding the shift key while pressing the template will swap the text content between different items on the slide.

-   **Multiple colors with templates**

    Each line in a template can have different colors, and those changes will be transferred over to the slide lines. But if the slide has multiple text colors and the template is set to override in an output style, the slide colors will be used instead. ([Read more](https://github.com/ChurchApps/FreeShow/issues/1241))
