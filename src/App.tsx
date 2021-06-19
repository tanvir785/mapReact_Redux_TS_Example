import React, {  FC, useEffect } from 'react';
import { useAppSelector } from './app/hooks';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Importing the Bootstrap CSS
import sampleData from './data/map-data.json';
import Image from './components/Image';
import Browser from './components/Browser';
import InfoBox from './components/InfoBox.jsx';
import { selectMapMarker } from './redux/MapReducer';
import { IPointStyle} from './interface/ICommon';

export const App: FC = () => {

  useEffect(() => {
  }, []);
  
  const marker = useAppSelector(selectMapMarker);
  let initialPointStyle = {} as IPointStyle;

  return (
    <div className="App">
      <div className="main">
        <Browser {...initialPointStyle} name=''></Browser>
        {
              sampleData.map((item, index) => {
                initialPointStyle.top = item.position[0];
                initialPointStyle.left = item.position[1];
                return (<Image {...initialPointStyle} key={index} index={index} selectedMarker={marker} ></Image>)             
            })
        }
        {
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
