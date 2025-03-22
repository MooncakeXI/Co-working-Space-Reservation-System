interface CoworkingSpaceItem {
    _id: string;
    name: string;
    address: string;
    district: string;
    province: string;
    postalcode: string;
    tel: string;
    picture: string;
    id : string;
}

interface CoworkingSpaceJson {
    success: boolean;
    count: number;
    pagination: Object;
    data: CoworkingSpaceItem[];
}


interface BookingItem {
    nameLastname: string;
    tel: string;
    coworkingspace: string;
    startTime: string;   
    endTime: string;
    room_number: number;
}