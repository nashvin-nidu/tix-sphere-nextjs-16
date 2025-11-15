"use client"
import { BookingEvent } from "@/lib/actions/booking.action";
import posthog from "posthog-js";

import { useState } from "react"


const BookEvent = ({event_id, slug} : {event_id: string, slug: string}) => {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setloading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setloading(true);
        
        try{
            const {success} = await BookingEvent({event_id, slug, email})
            if(success){
                setloading(false);
                setSubmitted(true);
                setError('');
                posthog.capture("event_booking", {event_id, slug, email});
            }else {
                setloading(false);
                setError("You're already Booked");
            }
        }catch{
            setloading(false);
            setError("Network Error");
        }
    }


    return(
        <div id="book-event">
            {error && <p className="text-sm text-red-600">{error}</p>}
            {submitted? 
            (<p className="text-sm">Thank You For Signing UP</p>) 
            :
            (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            placeholder="Enter Your Email Address"
                            required
                        />
                    </div>
                    
                    <button type="submit" className="button-submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>           
                </form>
            ) }
        </div>
    )
}

export default BookEvent;