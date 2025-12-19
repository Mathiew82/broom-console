import * as vscode from "vscode";

type Language = "es" | "en";
type ConsoleMethod = "log" | "debug" | "warn" | "error" | "info";

interface Messages {
  readonly noActive: string;
}

type LocalizedMessages = Record<Language, Messages>;

const messages: LocalizedMessages = {
  es: {
    noActive: "No se encontró ningún editor activo",
  },
  en: {
    noActive: "No active editor found",
  },
};

function getLanguage(): Language {
  return vscode.env.language.startsWith("es") ? "es" : "en";
}

async function removeConsole(methods: readonly ConsoleMethod[]): Promise<void> {
  const editor: vscode.TextEditor | undefined = vscode.window.activeTextEditor;

  if (!editor) {
    const lang: Language = getLanguage();
    vscode.window.showWarningMessage(messages[lang].noActive);
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

  await editor.edit((editBuilder: vscode.TextEditorEdit) => {
    editBuilder.replace(fullRange, newText);
  });
}

export function activate(context: vscode.ExtensionContext): void {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "removeConsoleLogAndDebug.remove",
      (): Promise<void> => removeConsole(["log", "debug"])
    )
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(
      "removeAllConsole.remove",
      (): Promise<void> =>
        removeConsole(["log", "debug", "warn", "error", "info"])
    )
  );
}

export function deactivate(): void {}
