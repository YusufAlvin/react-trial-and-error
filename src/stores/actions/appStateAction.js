import { appStateActionEnum } from "../../constants/actionType";

export const hide = () => ({
  type: appStateActionEnum.HIDE,
  hide: false,
});

export const show = () => ({
  type: appStateActionEnum.HIDE,
  hide: true,
});