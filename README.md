# Run with tsx

**Run with tsx** is a Visual Studio Code extension that simplifies running TypeScript files using [tsx](https://github.com/esbuild-kit/tsx). With just a right-click, you can execute your `.ts` files in an integrated terminal.

## Features

- Adds a **Run with tsx** option to the context menu for `.ts` files.
- Automatically opens and reuses an integrated terminal for running files.
- Makes it easier to work with TypeScript files without needing to manually run commands.

## Installation

### From VS Code Marketplace

1. Open the Extensions view in Visual Studio Code (`Ctrl+Shift+X` or `Cmd+Shift+X` on macOS).
2. Search for **Run with tsx**.
3. Click **Install**.

### From `.vsix` File

1. Download the `.vsix` file from the [Releases](https://github.com/bnewmandev/projectp/releases).
2. In Visual Studio Code, click the `...` menu in the Extensions view and select **Install from VSIX...**.
3. Choose the downloaded `.vsix` file.

## Usage

1. Right-click on a ts file in the Explorer or Editor and select **Run with tsx**.
2. The command will:
   - Open an integrated terminal (or reuse an existing one named `Run tsx`).
   - Execute `npx tsx <file-path>`.

## Requirements

- **Node.js** (>= 14.x): Ensure you have Node.js installed.
- **tsx**: If `tsx` is not installed globally, the extension will use `npx tsx`.

## Release Notes

### 1.0.0

- Initial release.
- Adds **Run with tsx** context menu option.
- Executes TypeScript files in the integrated terminal.

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out the [issues](https://github.com/your-repo/run-tsx-extension/issues) or submit a pull request.

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## GitHub Actions Secrets

To enable the GitHub Actions workflow for releasing the extension, you need to set up the following secrets in your repository settings:

- `VSCE_PAT`: Personal Access Token for publishing to the Visual Studio Marketplace. You can generate it from [here](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
