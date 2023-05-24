import { atom } from "recoil";

export enum GraphUserFieldEnum {
  DISPLAY_NAME = "DISPLAY_NAME",
  EMAIL = "EMAIL",
}

const GraphUserFieldState = atom({
  key: "GraphUserFieldState",
  default: GraphUserFieldEnum.DISPLAY_NAME,
});

export default GraphUserFieldState;
