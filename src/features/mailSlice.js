import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    selectedMail: null,
    sendMessageIsOpen: false,
  },
  reducers: {
    selectEmail: (state, action) => {
      state.selectedMail = action.payload
    },
    openSendMesssage: state => {
      state.sendMessageIsOpen = true 
    },
    closeSendMessage: state => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { selectEmail, openSendMesssage, closeSendMessage } = mailSlice.actions;

export const getMail = state => state.mail.selectedMail;

export const selectMail = state => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
