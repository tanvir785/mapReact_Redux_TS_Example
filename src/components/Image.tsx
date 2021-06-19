import React, {FC} from 'react';
import { useAppDispatch } from '../app/hooks';
import marker from '../images/marker.png';
import redmarker from '../images/marker-selected.png';
import { selectMarker } from '../redux/MapReducer';
import { IImageProps, IPointStyle } from '../interface/ICommon';

const Image: FC<IImageProps>  = ( props : IImageProps) => {
    
    const dispatch = useAppDispatch();
    const imageStyle = {} as IPointStyle;

    imageStyle.cursor = 'pointer';
    imageStyle.position = 'absolute' as 'absolute';
    imageStyle.top = props.top;
    imageStyle.left = props.left;    
    return (
    
            ( props.index === props.selectedMarker ? 
                <img alt =""  style ={imageStyle} onClick={() => dispatch(selectMarker(props.index))} src ={redmarker}></img>            
            :
                <img alt =""  style ={imageStyle} onClick={() => dispatch(selectMarker(props.index))} src ={marker}></img>
    
            )
        
    ) 
}

export default Image;
