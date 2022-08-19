
export enum ResultCodesEnum {
  Success = 1,
  Error = 0,
  CaptchaIsRequired = 10,
}
export type ResponseTypesDefault<D = {}, RC = ResultCodesEnum> = {
  data: D;
  messages: Array<string>;
  resultCode: RC;
};
