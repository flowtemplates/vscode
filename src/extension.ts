import * as vscode from "vscode";
import { commands } from "./routes";

export function activate(context: vscode.ExtensionContext) {
  // Register commands
  commands.forEach(({ command, callback }) => {
    let disposable = vscode.commands.registerCommand(command, callback);
    context.subscriptions.push(disposable);
  });
}

export function deactivate() {}
