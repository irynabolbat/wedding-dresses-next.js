import { combineReducers, configureStore } from '@reduxjs/toolkit'
import collectionReducer from '@/store/slices/collectionSlice'
import cartReducer from '@/store/slices/cartSlice'
import favouritesReducer from '@/store/slices/favouritesSlice'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import persistReducer from 'redux-persist/es/persistReducer'

const persistConfig = {
  key: 'root',
  storage,
}

const reducers = combineReducers({
  collection: collectionReducer,
  cart: cartReducer,
  favourites: favouritesReducer
})

const persistedReducer = persistReducer(persistConfig, reducers)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
