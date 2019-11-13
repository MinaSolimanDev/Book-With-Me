import { Booking } from 'src/app/booking/shared/booking.model';

export class Rental {

  _id : string;
  title : string;
  city : string;
  street : string;
  category : string;
  image : string;
  bedrooms : number;
  shared : boolean;
  description : string;
  dailyRate : number;
  createdAt : string;
  bookings : Booking[];
}

