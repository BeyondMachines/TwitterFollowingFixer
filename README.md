# TwitterFollowingFixer

## Twitter Following Tab Auto-Opener

A browser extension that automatically opens the "Following" tab when you visit Twitter/X, ensuring you always see content from accounts you follow.

Made for people who prefer feeds of things they are interested in, not what the algorithm wants them to be interested in.

## Features

- Automatically switches to the "Following" tab on page load
- Compatible with both twitter.com and x.com
- Works on both Chrome and Firefox

## Will it be published as an official extension?

Yes but that will take several days/up to a week.

## Installation

### Chrome

1. **Download the extension**
   - Clone this repository or download as ZIP
```bash
   git clone https://github.com/BeyondMachines/TwitterFollowingFixer.git
```

2. **Open Chrome Extensions page**
   - Navigate to `chrome://extensions/`
   - Or go to Menu → More Tools → Extensions

3. **Enable Developer Mode**
   - Toggle the "Developer mode" switch in the top-right corner

4. **Load the extension**
   - Click "Load unpacked"
   - Select the extension folder

5. **Done!**
   - Visit Twitter/X and the extension will automatically open the Following tab

### Firefox

1. **Download the extension**
   - Clone this repository or download as ZIP
```bash
   git clone https://github.com/BeyondMachines/TwitterFollowingFixer.git
```

2. **Open Firefox Add-ons Debug page**
   - Navigate to `about:debugging#/runtime/this-firefox`
   - Or type `about:debugging` and click "This Firefox"

3. **Load the extension**
   - Click "Load Temporary Add-on..."
   - Navigate to the extension folder and select `manifest.json`

4. **Done!**
   - Visit Twitter/X and the extension will automatically open the Following tab
   - Note: In Firefox, temporary extensions are removed when you close the browser


## How It Works

The extension uses a content script that:
1. Waits for the page to load
2. Finds the tab element with `role="tab"` that contains "Following" text
3. Clicks it if it's not already selected (`aria-selected="false"`)
4. Monitors for page navigation and repeats the process (Twitter is a SPA)

## Troubleshooting

### Extension not working?

1. **Check if the extension is enabled**
   - Chrome: `chrome://extensions/`
   - Firefox: `about:addons`

2. **Refresh the Twitter/X page**
   - The extension runs on page load

3. **Check the browser console**
   - Press F12 → Console tab
   - Look for "Clicked Following tab" message or errors

4. **Twitter's UI changed**
   - Twitter may update their interface
   - Open an issue if the extension stops working

### Still on "For You" tab?

- Make sure you're on the home timeline (`twitter.com/home` or `x.com/home`)
- The extension may need a moment to load - try refreshing

## Privacy

This extension:
- Does NOT collect any data
- Does NOT track your activity
- Only modifies the Twitter/X webpage locally in your browser
- Does NOT communicate with external servers
- Requires no special permissions

## Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## License

MIT License - feel free to use and modify as needed.

## Support

If you find this extension helpful, consider:
- Starring this repository
- Reporting issues
- Contributing improvements
