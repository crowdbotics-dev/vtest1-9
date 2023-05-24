import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiService } from "./api";
export const api_v1_main_menu_list = createAsyncThunk("main_menus/api_v1_main_menu_list", async payload => {
  const response = await apiService.api_v1_main_menu_list(payload);
  return response.data;
});
export const api_v1_main_menu_create = createAsyncThunk("main_menus/api_v1_main_menu_create", async payload => {
  const response = await apiService.api_v1_main_menu_create(payload);
  return response.data;
});
export const api_v1_main_menu_retrieve = createAsyncThunk("main_menus/api_v1_main_menu_retrieve", async payload => {
  const response = await apiService.api_v1_main_menu_retrieve(payload);
  return response.data;
});
export const api_v1_main_menu_update = createAsyncThunk("main_menus/api_v1_main_menu_update", async payload => {
  const response = await apiService.api_v1_main_menu_update(payload);
  return response.data;
});
export const api_v1_main_menu_partial_update = createAsyncThunk("main_menus/api_v1_main_menu_partial_update", async payload => {
  const response = await apiService.api_v1_main_menu_partial_update(payload);
  return response.data;
});
export const api_v1_main_menu_destroy = createAsyncThunk("main_menus/api_v1_main_menu_destroy", async payload => {
  const response = await apiService.api_v1_main_menu_destroy(payload);
  return response.data;
});
const initialState = {
  entities: [],
  api: {
    loading: "idle",
    error: null
  }
};
const main_menusSlice = createSlice({
  name: "main_menus",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_main_menu_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_main_menu_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload;
        state.api.loading = "idle";
      }
    },
    [api_v1_main_menu_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_main_menu_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_main_menu_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload);
        state.api.loading = "idle";
      }
    },
    [api_v1_main_menu_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_main_menu_retrieve.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_main_menu_retrieve.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities.filter(record => record.id !== action.payload.id), action.payload];
        state.api.loading = "idle";
      }
    },
    [api_v1_main_menu_retrieve.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_main_menu_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_main_menu_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_main_menu_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_main_menu_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_main_menu_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record => record.id === action.payload.id ? action.payload : record);
        state.api.loading = "idle";
      }
    },
    [api_v1_main_menu_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    },
    [api_v1_main_menu_destroy.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending";
      }
    },
    [api_v1_main_menu_destroy.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(record => record.id !== action.meta.arg?.id);
        state.api.loading = "idle";
      }
    },
    [api_v1_main_menu_destroy.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error;
        state.api.loading = "idle";
      }
    }
  }
});
export default {
  api_v1_main_menu_list,
  api_v1_main_menu_create,
  api_v1_main_menu_retrieve,
  api_v1_main_menu_update,
  api_v1_main_menu_partial_update,
  api_v1_main_menu_destroy,
  slice: main_menusSlice
};