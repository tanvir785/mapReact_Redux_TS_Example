import React, { FC } from 'react';
import sampleData from '../data/map-data.json';
import Image from './Image';
import { IPointStyle, IImageListProps } from '../interface/ICommon';

const ImageList: FC<IImageListProps> = (props: IImageListProps) => {

    const initialPointStyle = {} as IPointStyle;

    initialPointStyle.cursor = 'pointer';
    initialPointStyle.position = 'absolute' as 'absolute';
    initialPointStyle.top = props.top;
    initialPointStyle.left = props.left;

    return (
        <>
            {
                //  Iterating through data imported
                sampleData.map((item, index) => {

                    initialPointStyle.top = item.position[0];
                    initialPointStyle.left = item.position[1];

                    return(<Image {...initialPointStyle} key={index} index={index} marker={props.marker} ></Image>)

                })
            }
        </>
    )
}

export default ImageList;