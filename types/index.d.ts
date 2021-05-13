export * from "./callback_game";
export * from "./callback_query";
export * from "./chat_location";
export * from "./chat_permissions";
export * from "./chat_photo";
export * from "./chat";
export * from "./chosen_inline_result";
export * from "./force_reply";
export * from "./inline_query";
export * from "./inline_keyboard_button";
export * from "./inline_keyboard_markup";
export * from "./inline_query";
export * from "./keyboard_button_poll_type";
export * from "./keyboard_button";
export * from "./location";
export * from "./login_url";
export * from "./message_entity";
export * from "./message";
export * from "./reply_keyboard_markup";
export * from "./reply_keyboard_remove";
export * from "./update";
export * from "./user";

export type RequiredParam<Type, Name extends keyof Type> = Type &
  Required<Pick<Type, Name>>;
export type ReplaceParam<Type, Name extends keyof Type, RType> = {
  [K in Name]: RType;
} &
  Omit<Type, Name>;
