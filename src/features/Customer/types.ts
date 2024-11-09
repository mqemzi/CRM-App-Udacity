export interface Customer {
    firstName: string,
    lastName: string,
    region: string,
    id: number,
    active: ActiveState
}


export enum ActiveState {
    Active="ACTIVE",
    Inactive = "INACTIVE"
}
