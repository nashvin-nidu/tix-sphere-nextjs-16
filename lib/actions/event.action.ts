"use server"
import Event, { IEvent } from "@/database/event.model";
import connectToDatabase from "../mongodb";



export const  SimilarEventDetails = async (slug: string) => {
    try{
        await connectToDatabase();
        const event = await Event.findOne({slug});
        if(!event) throw Error;
        return await Event.find({_id: {$ne: event._id}, tags: {$in: event.tags}}).lean<IEvent[]>()
    }catch{
        return [];
    }
}


