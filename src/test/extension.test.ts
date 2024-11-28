import * as assert from "assert";
import * as vscode from "vscode";
import * as sinon from "sinon";

const extensionId = "bensndev.run-with-tsx";

suite("Extension Test Suite", () => {
	vscode.window.showInformationMessage("Start all tests.");
	suite("Extension Test Suite", () => {
		vscode.window.showInformationMessage("Start all tests.");

		test("Extension should be present", () => {
			assert.ok(vscode.extensions.getExtension(extensionId));
		});

		test("should activate extension", async () => {
			const extension = vscode.extensions.getExtension(extensionId);
			if (extension) {
				await extension.activate();
				assert.strictEqual(extension.isActive, true);
			}
		});

		test("should register runTsx command", async () => {
			const commands = await vscode.commands.getCommands(true);
			assert.ok(commands.includes("extension.runTsx"));
		});

		test("should show error message if no file selected", async () => {
			const showErrorMessageStub = sinon.stub(vscode.window, "showErrorMessage");
			await vscode.commands.executeCommand("extension.runTsx");
			assert.ok(showErrorMessageStub.calledOnceWith("No file selected"));
			showErrorMessageStub.restore();
		});

		test("should show error message if file is not .ts or .tsx", async () => {
			const showErrorMessageStub = sinon.stub(vscode.window, "showErrorMessage");
			const fakeUri = vscode.Uri.file("/path/to/file.txt");
			await vscode.commands.executeCommand("extension.runTsx", fakeUri);
			assert.ok(showErrorMessageStub.calledOnceWith("File is not a .ts or .tsx file"));
			showErrorMessageStub.restore();
		});

		test("should create and show terminal with correct command", async () => {
			const fakeUri = vscode.Uri.file("/path/to/file.tsx");
			const createTerminalStub = sinon.stub(vscode.window, "createTerminal").returns({
				name: "Run tsx",
				show: sinon.fake(),
				sendText: sinon.fake(),
			} as any);
			await vscode.commands.executeCommand("extension.runTsx", fakeUri);
			assert.ok(createTerminalStub.calledOnce);
			createTerminalStub.restore();
		});
	});
});
