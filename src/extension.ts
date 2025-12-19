import * as vscode from "vscode";

type Language = "es" | "en";
type ConsoleMethod = "log" | "debug" | "warn" | "error" | "info";

interface Messages {
  readonly removed: string;
}

type LocalizedMessages = Record<Language, Messages>;

const messages: LocalizedMessages = {
  es: {
    removed: "Todos los console eliminados",
  },
  en: {
    removed: "All console removed",
  },
};

function getLanguage(): Language {
  return vscode.env.language.startsWith("es") ? "es" : "en";
}

function removeConsole(methods: readonly ConsoleMethod[]): void {
  const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

  if (!editor) {
    vscode.window.showWarningMessage("No active editor found");
    return;
  }

  const document: vscode.TextDocument = editor.document;
  const text: string = document.getText();

  const methodsGroup: string = methods.join("|");

  const regex: RegExp = new RegExp(
    `^[ \\t]*console\\.(${methodsGroup})\\(.*?\\);?[ \\t]*(\\r?\\n)?`,
    "gm"
  );

  const newText: string = text.replace(regex, "");

  const fullRange: vscode.Range = new vscode.Range(
    document.positionAt(0),
    document.positionAt(text.length)
  );

  editor.edit((editBuilder: vscode.TextEditorEdit) => {
    editBuilder.replace(fullRange, newText);
  });

  const lang: Language = getLanguage();
  vscode.window.showInformationMessage(messages[lang].removed);
}

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "removeConsoleLogAndDebug.remove",
      (): void => removeConsole(["log", "debug"])
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("removeAllConsole.remove", (): void =>
      removeConsole(["log", "debug", "warn", "error", "info"])
    )
  );
}

export function deactivate(): void {}
