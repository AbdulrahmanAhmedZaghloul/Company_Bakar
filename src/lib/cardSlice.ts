import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface CardData {
  cardholderName: string;
  last4: string;
  expiryMonth: number;
  expiryYear: number;
  brand: string;
  cvc: string;
}

interface CardState {
  data: CardData | null;
  loading: boolean;
  error: string | null;
}

const initialState: CardState = {
  data: null,
  loading: false,
  error: null,
};

// جلب بيانات البطاقة باستخدام Axios
export const fetchCardData = createAsyncThunk(
  "card/fetchCardData",
  async () => {
    try {
      const response = await axios.get(
        "https://www.bakarcompany.somee.com/api/IssueCard/get-card-data"
      );
      return response.data; 
    } catch (error) {
      return error
    }
  }
);

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCardData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCardData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchCardData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default cardSlice.reducer;
