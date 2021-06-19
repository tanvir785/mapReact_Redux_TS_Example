import React, { FC } from 'react';
import { useAppSelector } from './app/hooks';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importing the Bootstrap CSS
import sampleData from './data/map-data.json';
import Image from './components/Image';
import Browser from './components/Browser';
import InfoBox from './components/InfoBox.jsx';
import { selectMapMarker } from './redux/MapReducer';
import { IPointStyle} from './interface/ICommon';

/*

Main App Element : Responsible for rendering all the Sub components
Each component is broken by it's responsibility
Browser => Contains main map
Image => Contains individual markers
InfoBox => Contains the modal box

Marker is the selected index of the sample JSON array data
*/
export const App: FC = () => {

  const marker = useAppSelector(selectMapMarker);
  let initialPointStyle = {} as IPointStyle;

  return (
    <div className="App">
      <div className="main">
        <Browser {...initialPointStyle} name=''></Browser>
        {
          //  Iterating through data imported
              sampleData.map((item, index) => {
                initialPointStyle.top = item.position[0];
                initialPointStyle.left = item.position[1];
                return (<Image {...initialPointStyle} key={index} index={index} selectedMarker={marker} ></Image>)             
            })
        }
        {
          //If Marker => - 1 close the Modal box 
          //Else we have selected a Marker and we want to show the info from the sample data.
          marker !== -1 ?
            <InfoBox info={sampleData[marker]} open={true}></InfoBox>
            :
            <InfoBox info={[]} open={false}></InfoBox>
        }
      </div>
    </div>
  );
}

export default App;
