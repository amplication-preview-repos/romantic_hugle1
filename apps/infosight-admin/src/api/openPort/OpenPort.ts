export type OpenPort = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  portNumber: number | null;
  protocol: string | null;
};
