'use server';

import Booking from "@/database/booking.model";
import connectToDatabase from "../mongodb";

export const BookingEvent = async ({event_id, email }: {event_id:string, email:string}) =>{
    try{
        await connectToDatabase();
        
        // Create booking - validation happens in pre-save hook
        const booking = await Booking.create({
            eventId: event_id,
            email: email
        });
        
        return({success: true, data: JSON.parse(JSON.stringify(booking))});

    }catch(e){
        console.error(e);
        return ({success: false, error: e instanceof Error ? e.message : 'Booking failed'});
    }
}
