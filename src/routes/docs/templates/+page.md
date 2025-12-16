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

## Style Overwrites

![Screenshot style overwrite](/images/docs/style-overwrites-done.webp)

Style Overwrites allow you to customize the style of specific words or sentences within a slide, while keeping the rest of the template's styling intact. This feature is particularly useful for emphasizing certain text elements consistently across slides.

For example, you can:

- Make the word "Jesus" always appear **bold**.
- Apply a style to any text inside parentheses, such as making it *italic* and grey.

Style Overwrites support both plain text and regular expressions (regex), giving you flexibility to define patterns for text styling.

In order to add a regex, place your regex pattern between two forward slashes. For example, to match any text within parentheses, you would use the pattern `/\(.*?\)/`

### How to Use Style Overwrites

1. Open the template editor
2. Navigate to the "Style Overwrites" section in the slide settings.
   
    ![Screenshot style overwrite](/images/docs/style-overwrite-main.webp)

3. Select one or create a new style overwrite template.

    ![Screenshot style overwrite edit](/images/docs/style-overwrite-editing.webp)

4. Save your changes. The overwrites will be applied on top of the template.

:::admonition type=info

Style Overwrites are non-destructive. You can revert to the original template style at any time by clearing the overwrites.

:::

### Examples

- **Example 1:** To make the word "Jesus" bold:
  - Add "Jesus" as a plain text overwrite.

- **Example 2:** To style any text inside parentheses:
  - Use the regex pattern `/\(.*?\)/`

Style Overwrites provide a powerful way to fine-tune text presentation without altering the overall template design.


## Custom Template on First Slide

This option allows you to set a specific template to be applied automatically to the first slide. This is particularly useful for setting an introductory style that differs from the rest of the presentation.

Create the template you want to use for the first slide, then edit the template of your main slides, select the "Custom Template on First Slide" option and choose your first-slide template.

![Screenshot style overwrite](/images/docs/style-overwrite-main.webp)