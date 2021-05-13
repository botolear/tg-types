import { Location } from "./location";
import { User } from "./user";

export interface InlineQuery {
  id: string;
  from: User;
  query: string;
  offset: string;
  chat_type?: "sender" | "private" | "group" | "supergroup" | "channel";
  location?: Location;
}
