import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
	const runTsxCommand = vscode.commands.registerCommand("extension.runTsx", (fileUri: vscode.Uri) => {
		if (!fileUri) {
			vscode.window.showErrorMessage("No file selected");
			return;
		}

		if (!fileUri.fsPath.endsWith(".tsx") && !fileUri.fsPath.endsWith(".ts")) {
			vscode.window.showErrorMessage("File is not a .ts or .tsx file");
			return;
		}

		let terminal = vscode.window.terminals.find((t) => t.name === "Run tsx");
		if (!terminal) {
			terminal = vscode.window.createTerminal("Run tsx");
		}

		terminal.show();
		terminal.sendText(`npx tsx "${fileUri.fsPath}"`);
	});

	context.subscriptions.push(runTsxCommand);
}

export function deactivate() {}
