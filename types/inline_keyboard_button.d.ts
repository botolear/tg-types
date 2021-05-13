import { CallbackGame } from "./callback_game";
import { LoginUrl } from "./login_url";

export type InlineKeyboardButton =
  | InlineKeyboardButtonLoginUrl
  | InlineKeyboardButtonUrl
  | InlineKeyboardButtonCallbackData
  | InlineKeyboardButtonSwitchInlineQuery
  | InlineKeyboardButtonSwitchInlineQueryCurrentChat
  | CallbackGame
  | InlineKeyboardButtonPay;

export interface InlineKeyboardButtonUrl {
  text: string;
  url: string;
}

export interface InlineKeyboardButtonLoginUrl {
  text: string;
  login_url: LoginUrl;
}

export interface InlineKeyboardButtonCallbackData {
  text: string;
  callback_data: string;
}

export interface InlineKeyboardButtonSwitchInlineQuery {
  text: string;
  switch_inline_query: string;
}

export interface InlineKeyboardButtonSwitchInlineQueryCurrentChat {
  text: string;
  switch_inline_query_current_chat: string;
}

export interface InlineKeyboardButtonCallbackGame {
  text: string;
  callback_game: CallbackGame;
}

export interface InlineKeyboardButtonPay {
  text: string;
  pay: boolean;
}
