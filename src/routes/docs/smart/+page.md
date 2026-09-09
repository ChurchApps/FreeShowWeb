---
title: Smart
description: Smart Mode transcribes your microphone input to text (STT), and suggests relevant actions based on what is heard. Can also be linked to LLM models for better understanding and context.
---

# Smart

> Smart Mode transcribes your microphone input to text (STT), and suggests relevant actions based on what is heard. Can also be linked to LLM models for better understanding and context.

## Setup

Everything remains locally on your device except for if you use the API LLM Providers, then the transcript only will be uploaded, but it's made to be local first.

### Transcription

You will need a Speech-To-Text engine. Currently there's only "Nemotron". Download it by clicking the button in the program.

### LLM

This is optional. Currently it's being worked on, but hopefully this should help you get things in the program set up faster.
It's useful for auto presenting scriptures if you use API Scriptures.

You can choose one of the online providers, or run one yourself locally using "Ollama".

#### Ollama

If you want to use LLM features, and run locally, here's a guide to set up Ollama:

Go to [ollama.com](https://ollama.com/), click "Download" and install the program. Then load any model of choice.

The recommended one is "Gemma 3 4B", enter "ollama pull gemma3:4b" in Ollama to download.

## How it works

Currently it's main feature is to be able to suggest or auto present scripture verses, based on your installed scriptures, you should import and use local XML Bibles.

For example if you say "John three sixteen" or "John chapter three verse sixteen" it should suggest "John 3:16".

You can make it auto present if the confidence is above a certain threshold.
