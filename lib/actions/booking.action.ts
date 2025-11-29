'use server';

import Booking from "@/database/booking.model";
import connectToDatabase from "../mongodb";

export const BookingEvent = async ({
    event_id,
    slug,
    email,
    name,
    whatsapp,
    regNo,
    section,
}: {
    event_id: string;
    slug: string;
    email: string;
    name: string;
    whatsapp: string;
    regNo: string;
    section: string;
}) =>{
    try{
        await connectToDatabase();
        
        // Create booking - validation happens in pre-save hook
        await Booking.create({
            eventId: event_id,
            slug: slug,
            email: email,
            name,
            whatsapp,
            regNo,
            section,
        });
        
        return({success: true});

    }catch(e){
        console.error(e);
        return ({success: false});
    }
}
