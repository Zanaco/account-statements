import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/dist/query'
import authReducer from './slices/authSlice'
import auxReducer from './slices/auxSlice'
import loaderReducer from './slices/loaderSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    aux: auxReducer,
    loader: loaderReducer,
  } as any,
  middleware: gDM =>
    gDM({
      serializableCheck: {
        ignoredActions: ['alert/setAlert'],
      },
    }).concat([
    //   contractApi.middleware,
    ] as any),

  // .concat([unauthenticatedMiddleware]), // not the cleanest solution
})

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
