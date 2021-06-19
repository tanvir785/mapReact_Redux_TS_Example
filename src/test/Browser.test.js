import React from 'react';

import Browser from '../components/Browser';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { useAppDispatch } from '../app/hooks';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import {initialState} from '../redux/MapReducer'

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore([]);

describe('Browser', () => {
    let wrapper;
    let store;

    beforeEach(()=> {
        store = mockStore({
            myState: '',
          });
        wrapper =  mount(
            <Provider store={store}>
              <Browser />
            </Provider>
          ); 
    })

    it ('renders fine initially', () => {
        expect(wrapper).not.toBeNull();
    })
    it('shows my map', () => {
        expect(wrapper.find("img").prop("src")).toEqual("background-map.jpg");
    })
})