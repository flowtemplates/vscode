import { createComponent } from "./commands";

type CommandsList = {
  command: string;
  callback: (arg: any) => any;
}[];

const base = "flow-templates";

export const commands: CommandsList = [
  {
    command: `${base}.createComponent`,
    callback: createComponent,
  },
];
