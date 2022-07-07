const letterScheme = "ABCDEFGJKLMNOPQRSTUVWX"

export const initialState = {
    letterScheme: letterScheme.split(""),
    allPairs: null,
    queue: new Array(50),
}

