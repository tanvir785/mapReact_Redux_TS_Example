//Declaring interfaces that are reused in the app

/*

Interfaces describe the type and definition for data
Rather than having one general interface, they have been broken down into easy to follow types

*/
export interface IPoint {   //Describes a point on the surface
    top?: number;
    left?: number;
}
export interface IPointStyle extends IPoint{    //Describes the css styling of the point
    position?: 'absolute';
    cursor?: string;
}

//Props
export interface IBrowserProps extends IPointStyle {    
    name: string,
}

export interface IImageProps extends IPointStyle {
    index: number,
    selectedMarker: number,
}

export interface MapState {     //This is used in Reducer
    selectedMarker: number;
}

