import * as vscode from "vscode";
import type { Data } from "./types/data";

export const createComponent = async (data: Data) => {
  let path: string;

  if (data?.path) {
    path = data.path;
  }

  const chosen = await vscode.window.showQuickPick(
    ["Option 1", "Option 2", "Option 3"],
    {
      placeHolder: "Choose an option",
    }
  );

  const name = await vscode.window.showInputBox({
    prompt: "Enter your name",
    placeHolder: "John Doe",
    ignoreFocusOut: true,
  });

  if (name) {
    vscode.window.showInformationMessage(`Hello, ${name}!`);
  } else {
    vscode.window.showWarningMessage("No name entered.");
  }
};
