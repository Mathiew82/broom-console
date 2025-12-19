import * as assert from "assert";
import * as vscode from "vscode";

suite("Broom Console Extension Tests", () => {
  test("Remove console.log and console.debug", async () => {
    const document = await vscode.workspace.openTextDocument({
      content: `
console.log("test");
console.debug("debug");
const a = 1;
      `,
      language: "javascript",
    });

    const editor = await vscode.window.showTextDocument(document);

    await vscode.commands.executeCommand("removeConsoleLogAndDebug.remove");

    const result = editor.document.getText();

    assert.strictEqual(result.trim(), "const a = 1;");
  });

  test("Remove all console methods", async () => {
    const document = await vscode.workspace.openTextDocument({
      content: `
console.log("log");
console.warn("warn");
console.error("error");
const value = 42;
    `,
      language: "javascript",
    });

    const editor = await vscode.window.showTextDocument(document);

    await vscode.commands.executeCommand("removeAllConsole.remove");

    const result = editor.document.getText();

    assert.strictEqual(result.trim(), "const value = 42;");
  });

  test("Does not fail when no editor is active", async () => {
    await vscode.commands.executeCommand("workbench.action.closeAllEditors");
    await vscode.commands.executeCommand("removeAllConsole.remove");

    assert.ok(true);
  });

  test("Does nothing when file has no console statements", async () => {
    const originalContent = `
	const sum = (a, b) => a + b;
	const value = sum(2, 3);
	`;

    const document = await vscode.workspace.openTextDocument({
      content: originalContent,
      language: "javascript",
    });

    const editor = await vscode.window.showTextDocument(document);

    await vscode.commands.executeCommand("removeAllConsole.remove");

    const result = editor.document.getText();

    assert.strictEqual(result.trim(), originalContent.trim());
  });
});
