# Jujutsu Kaisen Mini Calendar

A beautiful, themed **Electron desktop calendar widget** featuring characters from the anime/manga series *Jujutsu Kaisen*. Each month is represented by a different character with unique color themes and styling.

![Preview](https://img.shields.io/badge/Electron-29.0.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## Features

- **Monthly Character Themes**: Each of the 12 months features a different Jujutsu Kaisen character
- **Dynamic Color Schemes**: Custom color themes that match each character's aesthetic
- **Compact Widget Design**: Minimal 214x228px window that sits neatly on your desktop
- **Hover Navigation**: Small `<` and `>` circular buttons that fade in on hover
- **Keyboard Navigation**: Use arrow keys to navigate between months
- **Pixelated Art Style**: Retro pixel fonts and image rendering for a nostalgic feel
- **Draggable Window**: Frameless transparent window that can be dragged around the desktop

## Navigation

### 🖱️ **Hover Chevrons**
Slowly hover your mouse over the left or right edges of the character photo. Small `<` and `>` circular buttons will gracefully fade in. Click these to quickly cycle back and forth through the months!

### ⌨️ **Keyboard Arrows**
Click anywhere on the calendar widget to make sure it's "in focus", and then tap the **Left Arrow** or **Right Arrow** keys on your physical keyboard to flip through them instantly.

## Character Mapping

| Month | Character | Color Theme |
|-------|-----------|-------------|
| January | Yuji Itadori | Red/Pink |
| February | Nobara Kugisaki | Orange |
| March | Megumi Fushiguro | Blue |
| April | Maki Zenin | Green |
| May | Yuta Okkotsu | Gray |
| June | Suguru Geto | Purple |
| July | Satoru Gojo | Cyan |
| August | Kento Nanami | Yellow |
| September | Toji Fushiguro | Dark Gray |
| October | Ryomen Sukuna | Dark Pink |
| November | Choso | Brown |
| December | Yuki Tsukumo | Yellow |

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup
1. Clone this repository:
```bash
git clone https://github.com/SMD-ASIF/jujutsu-kaisen-mini-calendar.git
cd jujutsu-kaisen-mini-calendar
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
npm start
```
This will launch the **Electron desktop widget** on your computer.

## Usage

1. **Launch**: Run `npm start` to open the calendar widget
2. **Navigate Months**: 
   - Use the `<` and `>` buttons that appear on hover
   - Or use keyboard arrow keys (←/→)
3. **Move Widget**: Click and drag the calendar to reposition it on your desktop
4. **Current Date**: The widget automatically displays today's date

## Project Structure

```
jujutsu-kaisen-mini-calendar/
├── images/                 # Character images for each month
│   ├── Yuji.png
│   ├── Nobara.png
│   ├── Megumi.png
│   └── ... (12 total)
├── index.html              # Main HTML structure
├── main.js                 # Electron main process
├── renderer.js             # Frontend logic and calendar data
├── style.css               # Styling and themes
├── preload.js              # Electron preload script
├── package.json            # Dependencies and scripts
└── README.md               # This file
```

## Technical Details

- **Framework**: **Electron 29.0.0** - Cross-platform desktop application framework
- **Architecture**: Main process (`main.js`) + Renderer process (`renderer.js`)
- **Languages**: HTML, CSS, JavaScript
- **Window Properties**: 
  - Size: 214x228px
  - Frameless and transparent
  - Non-resizable
  - Draggable via `-webkit-app-region: drag`
- **Electron Features Used**:
  - `BrowserWindow` with transparent background
  - Preload scripts for secure context isolation
  - Native desktop integration

## Customization

### Adding New Themes
To modify character themes, edit the `calendarData` array in `renderer.js`:

```javascript
{
  month: 'MONTH_NAME',
  char: 'Character Name',
  img: 'images/character.png',
  theme: {
    outerBg: 'linear-gradient(...)',
    outerBorder: '#color',
    innerBg: '#color',
    innerBorder: '#color',
    textMain: '#color',
    textSub: '#color'
  }
}
```

### Replacing Images
Replace character images in the `images/` folder. Recommended size: 180x161px to fit the frame perfectly.

## Development

### Build Process
This is a simple Electron app without complex build steps. To package for distribution:

```bash
# Install electron-builder
npm install electron-builder --save-dev

# Add to package.json scripts:
"build": "electron-builder"

# Build the app
npm run build
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Character images and themes inspired by the *Jujutsu Kaisen* series
- Built with Electron for cross-platform desktop applications
- Pixel fonts from Google Fonts (Pixelify Sans, VT323)

---

**Made with ❤️ for Jujutsu Kaisen fans!**
