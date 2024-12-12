---
title: FreeShow .show format
description: Overview of the .show format if you would like to convert something else into a FreeShow show file.
---

# FreeShow .show format

> Overview of the .show format if you would like to convert something else into a FreeShow show file.

The data type is **JSON**. Supported file extensions are _.show_ or _.json_.

<!-- ## Required values -->

## JSON values

```json
{
	"name": "Show name",
	"category": null, // the category id (can be left as null, unsorted)
	"settings": {
		"activeLayout": "<layout_id>", // the id of the layout, as set below
		"template": null // apply a template (can be left at null)
	},
	"timestamps": {
		"created": 0, // date in Unix time
		"modified": 0, // date in Unix time
		"used": null // can be null initially
	},
	"meta": {
		// these are the default keys, they are all optional
		// custom keys can also be added
		"number": "",
		"title": "",
		"artist": "",
		"author": "",
		"composer": "",
		"publisher": "",
		"copyright": "",
		"CCLI": "",
		"year": "",
		"key": ""
	},
	"slides": {
		"<slide_id>": {
			"group": "Verse", // slide group name
			"color": "#5825f5", // preview color in hex format
			"settings": {
				// optional params
				"color": "", // slide background color (default is black)
				"resolution": { "width": 1920, "height": 1080 } // defaults to Full HD if unset
			},
			"children": ["<slide_id2>"], // optional, if more slides should be connected to this slide (don't add to layout if set as a child)
			"notes": "", // slide specific notes
			"items": [
				{
					"type": "text", // default is textbox (probably what you need)
					// if type is text lines should be set
					// each object in this array will get a new line
					"lines": [
						{
							"align": "", // text align (horizontal) in CSS format (defaults to "text-align:center;")
							"text": [
								// split text into multiple objects to get different styles on the same line
								{
									"value": "Hello World!", // text content
									"style": "font-size:100px;" // text style in CSS format
								}
							]
						}
					],
					"style": "top:120px;left:50px;height:840px;width:1820px;", // item style in CSS format (position should at least be set)
					"align": "", // text align (vertical) in CSS format (defaults to "align-items:center;")
					"language": "" // optional, if the textbox language is translated from an original textbox
				}
			]
		},
		"<slide_id2>": {
			// if this is used as a child slide, the group must be null
			"group": null,
			"color": null, // color can also be null, as the group parent color is used
			"settings": {},
			"notes": "",
			"items": []
		}
	},
	"layouts": {
		// multiple layouts can be used to rearrange the same slide groups with different orders
		// only one layout is required
		// the same slide groups can be added multiple times in the same layout
		"<layout_id>": {
			"name": "Default", // layout name
			"notes": "", // presentation notes
			"slides": [
				{ "id": "<slide_id>" }, // the slide group id
				{ "id": "<slide_id>", "background": "<media_id>" } // you can optionally add background media to the slide, as set below
				// more layout slide cues can be added like overlays, audio, actions, etc.
			]
		}
	},
	"media": {
		// optional, if background media is used
		"<media_id>": {
			"path": "", // path to background file or base64 encoded data
			"name": "" // media name
		}
	}
}
```

<!-- ## Optional values

```json
{
    ...,
    "locked": true, // disable edits
}
``` -->

Click [here for the full TS types](https://github.com/ChurchApps/FreeShow/blob/main/src/types/Show.ts).
