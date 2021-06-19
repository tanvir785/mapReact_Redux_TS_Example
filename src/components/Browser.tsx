import React, {FC} from 'react';
import { useAppDispatch } from '../app/hooks';
import background from '../images/background-map.jpg';
import { selectMarker } from '../redux/MapReducer';
import { IBrowserProps, IPointStyle } from '../interface/ICommon';

/*
Simple TypeScript component that displays the Map in a Point based system.
*/
const Browser: FC<IBrowserProps> = (props : IBrowserProps) => {
    const dispatch = useAppDispatch();
    //Set values
    const imageStyle = {} as IPointStyle;
    imageStyle.top = props.top;
    imageStyle.left = props.left;

    return (
        <img src ={background} alt ={""} style ={imageStyle} onClick = {() => dispatch(selectMarker(-1)) }></img>
    )
}

export default Browser;