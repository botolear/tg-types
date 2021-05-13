import { KeyboardButtonPollType } from "./keyboard_button_poll_type";

export type KeyboardButton =
  | KeyboardButtonText
  | KeyboardButtonRequestContact
  | KeyboardButtonRequestLocation
  | KeyboardButtonRequestPoll;

export interface KeyboardButtonText {
  text: string;
}

export interface KeyboardButtonRequestContact {
  text: string;
  request_contact: boolean;
}

export interface KeyboardButtonRequestLocation {
  text: string;
  request_location: boolean;
}

export interface KeyboardButtonRequestPoll {
  text: string;
  request_poll: KeyboardButtonPollType;
}
