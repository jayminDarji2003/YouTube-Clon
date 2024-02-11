import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
    name: 'chat',
    initialState: {
        chatMessage: [],
    },
    reducers: {
        addMessage: (state, action) => {
            // Check if the number of messages exceeds 20
            if (state.chatMessage.length >= 20) {
                // Remove one message from the top
                state.chatMessage.pop();
            }
            state.chatMessage.unshift(action.payload);
        }
    }
})

export const { addMessage } = ChatSlice.actions;
export default ChatSlice.reducer;