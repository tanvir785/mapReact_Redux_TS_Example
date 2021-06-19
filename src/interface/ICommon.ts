export interface IPoint {
    top?: number;
    left?: number;
}
export interface IPointStyle extends IPoint{
    position?: 'absolute';
    cursor?: string;
}

export interface IBrowserProps extends IPointStyle {    
    name: string,
}

export interface IImageProps extends IPointStyle {
    index: number,
    selectedMarker: number,
}

export interface MapState {
    selectedMarker: number;
}

