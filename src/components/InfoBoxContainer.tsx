import React, { FC } from 'react';
import InfoBox from '../components/InfoBox.jsx';
import sampleData from '../data/map-data.json';
import { IImageListProps} from '../interface/ICommon';

export const InfoBoxContainer: FC<IImageListProps> = (props : IImageListProps) => {
    
    return (
      
            //If Marker => - 1 close the Modal box 
            //Else we have selected a Marker and we want to show the info from the sample data.
            props.marker !== -1 ?
              <InfoBox info={sampleData[props.marker]} open={true}></InfoBox>
              :
              <InfoBox info={[]} open={false}></InfoBox>
          
    )

}

