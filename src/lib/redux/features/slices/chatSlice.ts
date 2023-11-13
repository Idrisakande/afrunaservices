import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
const chatPersistConfig = {
  key: "chat",
  storage,
};

type TInitialChatState = {
 
};
const chatSlice = createSlice({
  initialState: {  } as TInitialChatState,
  name: "chat",
  reducers: {
    
  },
});

// Export your chatSlice and persist config
export { chatPersistConfig };
export const { } = chatSlice.actions;
export default chatSlice.reducer;
