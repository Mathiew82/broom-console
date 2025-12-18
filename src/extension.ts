import * as vscode from "vscode";

function removeConsole(methods: string[], successMessage: string) {
  const editor = vscode.window.activeTextEditor;

  if (!editor) {
    vscode.window.showWarningMessage("No hay ningún archivo abierto");
    return;
  }

  const document = editor.document;
  const text = document.getText();

  const methodsGroup = methods.join("|");
  const regex = new RegExp(
    `^[ \\t]*console\\.(${methodsGroup})\\(.*?\\);?[ \\t]*(\\r?\\n)?`,
    "gm"
  );

  const newText = text.replace(regex, "");

  const fullRange = new vscode.Range(
    document.positionAt(0),
    document.positionAt(text.length)
  );

  editor.edit((editBuilder) => {
    editBuilder.replace(fullRange, newText);
  });

  vscode.window.showInformationMessage(successMessage);
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("removeConsoleLogAndDebug.remove", () =>
      removeConsole(["log", "debug"], "console.[log|debug] eliminados")
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("removeAllConsole.remove", () =>
      removeConsole(
        ["log", "debug", "warn", "error", "info"],
        "console.[log|debug|warn|error|info] eliminados"
      )
    )
  );
}

export function deactivate() {}
