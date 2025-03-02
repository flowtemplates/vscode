import * as vscode from "vscode";

export const helloWorld = (data: any[]) => {
  console.log(data);
  vscode.window.showInformationMessage("Hello World from Templates Flow!");
};
