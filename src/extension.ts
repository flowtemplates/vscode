import * as vscode from "vscode";
import { commands } from "./routes";

export function activate(context: vscode.ExtensionContext) {
  // Register commands
  for (const { command, callback } of commands) {
    const disposable = vscode.commands.registerCommand(command, callback);
    context.subscriptions.push(disposable);
  }
}

export function deactivate() {}
