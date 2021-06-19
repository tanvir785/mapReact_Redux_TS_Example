import React from 'react';
import Browser from '../components/Browser';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore([]);

/*

The two test cases here are for Unit testing the main Browser component in App
It tests if the component renders fine & if it is rendering an image with the source equal to the background image source
*/

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
        expect(wrapper.find("img").prop("src")).toEqual("background-map.jpg");    //Source can be changed and it will fail the test
    })
})