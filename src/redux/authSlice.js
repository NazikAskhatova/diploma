const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const key = "AIzaSyC4KPSpYiOXBvojTRsYSb1KjtrZOQgoaE0";

const signhInUrl = "https://identifytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + key;
const signUpUrl = "https://identifytoolkit.googleapis.com/v1/accounts:signUp?key=" + key;

export const start = createAsyncThunk('auth/start', (data, thunkAPI) => {
// todo
});

const authSlise = createSlice({
    name: "auth",
    initialState: {
        localId: null,
        idToken: null,
        error: null,
        loading: false,
    },
    reducers: {
        init: (state, action) => {},
        success: (state, action) => {},
        loading: (state, action) => {},
        error: (state, action) => {},
    }
})