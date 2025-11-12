import { Event } from "@/database";
import connectToDatabase from "@/lib/mongodb";
import { v2 as cloudinary } from "cloudinary";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){

    try{
        // connected to DB
        await connectToDatabase();

        //We should get form data from the Post request.
        const formData = await req.formData();

        
        //parse the form data (excluding the image file)
        let event;
        try{
            event = Object.fromEntries(
                Array.from(formData.entries()).filter(([key]) => key !== 'image')
            );
        }catch{
            return NextResponse.json({message: 'Invalid JSON'}, {status: 400});
        }

        //get file from request FIRST (before converting to object)
        const file = formData.get('image');
        if(!file || typeof file === 'string') return NextResponse.json({message: 'Image file required'}, {status: 400});

        //convert the file into buffer
        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);


        //upload file to cloudinary
        const uploadResults = await new Promise((resolve, reject) =>{
            cloudinary.uploader.upload_stream({resource_type:'image', folder: "Events"}, (error, results) =>{
                if(error) return reject(error);
                resolve(results);
        
                
            }).end(buffer);
        })
        
        //setting the image into cloudinary url
        event.image = (uploadResults as {secure_url: string}).secure_url

        const tags = JSON.parse(formData.get("tags") as string);
        const agenda = JSON.parse(formData.get("agenda") as string);
        
        //create the event to MongoDB
        const eventCreated = await Event.create({
            ...event,
            tags: tags,
            agenda: agenda,
        });
        return NextResponse.json({message: "Event Created Successfully", event: eventCreated}, { status:201 });

    }catch(e){
        return NextResponse.json({message: 'Event creation failed', error: e instanceof Error ? e.message : "Unknown"}, {status: 500})
    }
}

export async function GET(){
    try{
        await connectToDatabase();

        //fetch data
        const events = await Event.find().sort({createdAt: -1});
        return NextResponse.json({message: "Events fetched successfully", events})
    }catch(e){
        return NextResponse.json({message: "Failed to Fetch" ,error: e}, { status:500 });
    }
}