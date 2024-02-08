import { createSlice } from "@reduxjs/toolkit";

const localValue =
    localStorage.getItem("themeModeValue") === "true" ? true : false;

const initialState = {
    value: localValue,
};
export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        setDarkMode: (state) => {
            state.value = true;
            localStorage.setItem("themeModeValue", true);
        },
        setWhiteMode: (state) => {
            state.value = false;
            localStorage.setItem("themeModeValue", false);
        },
    },
});
export const { setDarkMode, setWhiteMode } = themeSlice.actions;

export default themeSlice.reducer;
