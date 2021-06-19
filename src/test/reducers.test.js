import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import reducer , {initialState, selectMarker} from '../redux/MapReducer'


  describe('Reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual(initialState)
    })
    it('should set the selected marker on the state', () => {    
      const actual = reducer(initialState, selectMarker(2));
      expect(actual.selectedMarker).toEqual(2);
    })
  });