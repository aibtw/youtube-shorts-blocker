# YouTube Shorts Blocker

**Disclaimer: This is human-refined, AI-generated code. 
You should ALWAYS check what it does before using it.** 

Skip this block if you want:
```
Do you have a short-content addiction problem? I did! So I 
decided to block it for myself, since youtube doesn't
give you the option to do so (at least until now).

Publicly available extensions ask for weird permissions, 
for some reason. Why would you want to read my data on ALL
sites?! Nope, thank you, I'll make my own extension.
```

This is a simple Chrome/Edge extension that hides YouTube
Shorts.

It blocks Shorts in places like:

- the sidebar Shorts button
- Shorts shelves on the home page
- Shorts suggestions on video pages
- direct `/shorts/...` pages

## How It Works

- injects CSS that hides Shorts UI
- blocks clicks on Shorts links
- redirects `/shorts/...` pages back to YouTube home
- watches for YouTube page updates and runs again

## Install Locally

1. Open Chrome or Edge.
2. Go to `chrome://extensions`.
3. Enable Developer mode.
4. Click Load unpacked.
5. Select this folder.

## Contributing

Feel free to contribute. I may or may not review your pull request.

YouTube changes its HTML often, so selectors may need updates later.

Please keep changes simple and focused. If you update the blocking logic,
test it on YouTube Home, video pages, the sidebar, and direct `/shorts/...`
links before opening a pull request.