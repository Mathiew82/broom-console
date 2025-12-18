import * as vscode from "vscode";

const messages = {
  es: {
    removed: "console eliminados",
  },
  en: {
    removed: "console removed",
  },
};

function removeConsole(methods: string[]) {
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

  const lang = vscode.env.language.startsWith("es") ? "es" : "en";

  vscode.window.showInformationMessage(messages[lang].removed);
}

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("removeConsoleLogAndDebug.remove", () =>
      removeConsole(["log", "debug"])
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("removeAllConsole.remove", () =>
      removeConsole(["log", "debug", "warn", "error", "info"])
    )
  );
}

export function deactivate() {}
