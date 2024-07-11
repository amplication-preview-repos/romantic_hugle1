import { OpenPort as TOpenPort } from "../api/openPort/OpenPort";

export const OPENPORT_TITLE_FIELD = "protocol";

export const OpenPortTitle = (record: TOpenPort): string => {
  return record.protocol?.toString() || String(record.id);
};
