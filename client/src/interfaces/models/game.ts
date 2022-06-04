
export interface ILocation {
    x: number;
    y: number;
}

export interface ICell extends ILocation {
    state: 'dead' | 'alive'
}