type Data =
  | {
      scheme: "file";
      path: string;
      _formatted: string;
      query: string;
      fragment: string;
    }
  | undefined;

export type { Data };
