import React, { FC } from 'react';
import { useAppSelector } from './app/hooks';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importing the Bootstrap CSS
import Browser from './components/Browser';
import ImageList from './components/ImageList';
import { markerIndex } from './redux/MapReducer';
import { IPointStyle} from './interface/ICommon';
import { InfoBoxContainer } from './components/InfoBoxContainer';

/*

Main App Element : Responsible for rendering all the Sub components
Each component is broken by it's responsibility
Browser => Contains main map
Image => Contains individual markers
InfoBox => Contains the modal box

Marker is the selected index of the sample JSON array data
*/
export const App: FC = () => {

  const marker:number = useAppSelector(markerIndex);

  let initialPointStyle = {} as IPointStyle;

  return (
    <div className="App">
      <div className="main">
        <Browser {...initialPointStyle} name=''></Browser>
        <ImageList {...initialPointStyle} marker = {marker} />
        <InfoBoxContainer marker = {marker} />
      </div>
    </div>
  );
}

export default App;
