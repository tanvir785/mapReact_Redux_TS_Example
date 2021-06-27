import { RootState } from './../app/store';
import { createSlice, PayloadAction  } from '@reduxjs/toolkit'
import { MapState } from '../interface/ICommon';

export const initialState : MapState = {
    selectedMarker: -1
}
export const MapSlice = createSlice({       
    name: "map",
    initialState,
    reducers: {
        selectMarker: (state, action: PayloadAction<number>) => {
            state.selectedMarker =  action.payload;
        },
    }
})

export const { selectMarker }=  MapSlice.actions;

export const markerIndex = (state: RootState) => state.map.selectedMarker;

export default MapSlice.reducer;