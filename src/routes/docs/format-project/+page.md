---
title: FreeShow .project format
description: Overview of the .project format if you would like to convert something else into a FreeShow project file.
---

# FreeShow .project format

> Overview of the .project format if you would like to convert something else into a FreeShow project file.

A project file is a collection of many shows (songs/presentations), and can also include media files, overlays, etc.

The data type is **JSON** (optionally **ZIP** to include media files). Supported file extensions for both data types are _.project_ or _.shows_ (Or _.json_ / _.zip_ depending on the type).

A project file can be a simple .json file. But if you must include media (images/videos/audio) files, then the **project_file.json** must be renamed to **data.json**, and be added to a **.zip** archive along with the media files, in that case the `files` key as shown below, must also be added to the json format.

## JSON Format

```json
{
	"project": {
		"name": "Project Name",
		"created": 0, // date in Unix time
		"modified": 0, // date in Unix time
		"parent": "/", // leave as / (root)
		"shows": [
			// a list of the different project parts
			// supported types: show (song/presentation), section (text divider), image, video, audio, overlay, pdf, ppt
			// default "type" is "show"
			// a few examples:
			{ "id": "<show_id>" }, // see "shows" down below
			{
				"id": "section_id", // must be unique
				"type": "section",
				"name": "Section Name",
				"notes": "Further details...",
				"color": "" // optional, a color value in hex
			},
			{ "id": "image_path", "type": "image", "name": "Image Name" },
			{ "id": "video_path", "type": "video", "name": "Video Name" }
		]
	},
	"shows": {
		"<show_id>": {
			// a JSON formatted SHOW object
			// a show can be a song/presentation etc. (see below)
		}
	},
	// optional, if used in a show or in the project list add them here
	"overlays": {
		"<overlay_id>": {
			// very similar to a SHOW object
			"name": "Overlay Name",
			"color": null,
			"category": null,
			"items": []
		}
	},
	// optional, this is only needed if you create a ZIP project file with media files
	// can be any path/name.ext, but the basename (name.ext) must be the same as placed in the zip file
	"files": ["image_path", "video_path"]
}
```

## Show format

Click [here to see the SHOW format](./format-show).
