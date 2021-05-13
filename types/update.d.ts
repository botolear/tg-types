import { CallbackQuery } from "./callback_query";
import { ChosenInlineResult } from "./chosen_inline_result";
import { InlineQuery } from "./inline_query";
import { Message } from "./message";

export interface Update {
  update_id: number;
  message?: Message;
  edited_message?: Message;
  channel_post?: Message;
  edited_channel_post?: Message;
  inline_query?: InlineQuery;
  chosen_inline_result?: ChosenInlineResult;
  callback_query?: CallbackQuery;
}
