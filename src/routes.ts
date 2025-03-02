import { helloWorld } from "./commands";

type CommandsList = {
  command: string;
  callback: (arg: any[]) => any;
}[];

export const commands: CommandsList = [
  {
    command: "templates-flow.helloWorld",
    callback: helloWorld,
  },
];
