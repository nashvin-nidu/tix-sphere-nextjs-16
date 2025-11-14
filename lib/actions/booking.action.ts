'use server';

import Booking from "@/database/booking.model";
import connectToDatabase from "../mongodb";

export const BookingEvent = async ({event_id, slug, email }: {event_id:string, slug: string, email:string}) =>{
    try{
        await connectToDatabase();
        
        // Create booking - validation happens in pre-save hook
        await Booking.create({
            eventId: event_id,
            slug: slug,
            email: email
        });
        
        return({success: true});

    }catch(e){
        console.error(e);
        return ({success: false, errorData: e});
    }
}
