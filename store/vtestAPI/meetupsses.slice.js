import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_meetupss_list = createAsyncThunk("meetupsses/api_v1_meetupss_list", async payload => {
  const response = await apiService.api_v1_meetupss_list(payload);
  return response.data;
});
export const api_v1_meetupss_create = createAsyncThunk("meetupsses/api_v1_meetupss_create", async payload => {
  const response = await apiService.api_v1_meetupss_create(payload);
  return response.data;
});
export const api_v1_meetupss_retrieve = createAsyncThunk("meetupsses/api_v1_meetupss_retrieve", async payload => {
  const response = await apiService.api_v1_meetupss_retrieve(payload);
  return response.data;
});
export const api_v1_meetupss_update = createAsyncThunk("meetupsses/api_v1_meetupss_update", async payload => {
  const response = await apiService.api_v1_meetupss_update(payload);
  return response.data;
});
export const api_v1_meetupss_partial_update = createAsyncThunk("meetupsses/api_v1_meetupss_partial_update", async payload => {
  const response = await apiService.api_v1_meetupss_partial_update(payload);
  return response.data;
});
export const api_v1_meetupss_destroy = createAsyncThunk("meetupsses/api_v1_meetupss_destroy", async payload => {
  const response = await apiService.api_v1_meetupss_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const meetupssesSlice = createSlice({
  name: "meetupsses",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_meetupss_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_meetupss_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [api_v1_meetupss_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_meetupss_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_meetupss_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [api_v1_meetupss_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_meetupss_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_meetupss_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [api_v1_meetupss_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_meetupss_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_meetupss_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_meetupss_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_meetupss_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_meetupss_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_meetupss_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_meetupss_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_meetupss_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    },
    [api_v1_meetupss_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  api_v1_meetupss_list,
  api_v1_meetupss_create,
  api_v1_meetupss_retrieve,
  api_v1_meetupss_update,
  api_v1_meetupss_partial_update,
  api_v1_meetupss_destroy,
  slice: meetupssesSlice
};