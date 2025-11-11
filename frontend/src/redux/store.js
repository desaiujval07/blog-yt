import { combineReducers,configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import themeSlice from "./themeSlice";
import {

  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import blogSlice from "./blogSlice"
import commentSlice from "./commentSlice"

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice,
   theme: themeSlice,
    blog: blogSlice, // ✅ ADD THIS LINE
    comment: commentSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;

// import {combineReducers, configureStore} from "@reduxjs/toolkit";
// import authSlice from "./authSlice";
// import blogSlice from "./blogSlice";
// import themeSlice from "./themeSlice"
// import commentSlice from "./commentSlice"

// import {
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import companySlice from "./companySlice";
// import applicationSlice from "./applicationSlice";

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage,
//   }
//   const rootReducer = combineReducers({
//     auth:authSlice,
//     blog:blogSlice,
//     comment:commentSlice,
//     theme: themeSlice,
//   })
//   const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//       getDefaultMiddleware({
//         serializableCheck: {
//           ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//         },
//       }),
// });
// export default store;
