export * from "./callback_query";
export * from "./chat_location";
export * from "./chat_permissions";
export * from "./chat_photo";
export * from "./chat";
export * from "./chosen_inline_result";
export * from "./inline_query";
export * from "./location";
export * from "./message_entity";
export * from "./message";
export * from "./update";
export * from "./user";

export type RequiredParam<Type, Name extends keyof Type> = Type &
  Required<Pick<Type, Name>>;
export type ReplaceParam<Type, Name extends keyof Type, RType> = {
  [K in Name]: RType;
} &
  Omit<Type, Name>;
