# Nvidia GPU Usage and Memory VS Code Extension
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/leonardo16.nvidia-gpu?color=green) 
![Visual Studio Marketplace Rating (Stars)](https://img.shields.io/visual-studio-marketplace/stars/leonardo16.nvidia-gpu?color=green)

This extension displays Nvidia GPU usage and memory usage in the status bar of Visual Studio Code.

## Features

- Shows GPU usage percentage
- Shows GPU memory usage in GB
- Automatically updates every 5 seconds

## Requirements

- Windows OS
- Nvidia GPU with installed drivers
- `nvidia-smi` utility must be in your PATH

## Installation

1. Install the extension from the VS Code marketplace or by loading the `.vsix` file.
2. Restart VS Code.
3. The GPU usage and memory usage should now appear in the status bar.

## Known Issues

This extension might not work correctly if you have multiple GPUs because it queries all GPUs.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
