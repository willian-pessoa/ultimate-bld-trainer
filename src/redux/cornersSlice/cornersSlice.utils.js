import { createCommsState } from "../../utils/createCommsState"

const letterScheme = "ABCDEFGJKLMNOPRSTUVWX"
const { allPairsToChoice, allPairsStatus } = createCommsState(letterScheme);

export const initialState = {
  letterScheme: letterScheme.split(""),
  allPairsStatus,
  allPairsToChoice,
  reviewBeforeSleep: [],
  queue: new Array(20).fill(""),
}
