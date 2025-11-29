"use client"
import { BookingEvent } from "@/lib/actions/booking.action";
import posthog from "posthog-js";
import React, { useState } from "react";

const BookEvent = ({ event_id, slug }: { event_id: string; slug: string }) => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [regNo, setRegNo] = useState("");
    const [section, setSection] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState("");
    const [loading, setloading] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setloading(true);

        const { success } = await BookingEvent({
            event_id,
            slug,
            email,
            name,
            whatsapp,
            regNo,
            section,
        });

        setError("");

        if (success) {
            setloading(false);
            setSubmitted(true);
            posthog.capture("event_booking", {
                event_id,
                slug,
                email,
                name,
                whatsapp,
                regNo,
                section,
            });
        } else {
            setloading(false);
            setError("You're already Booked");
        }
    };

    return (
        <div id="book-event">
            {error && <p className="text-sm text-red-600">{error}</p>}
            {submitted ? (
                <p className="text-sm">Thank You For Signing UP</p>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            id="name"
                            placeholder="Enter Your Name"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="whatsapp">WhatsApp Number</label>
                        <input
                            type="tel"
                            value={whatsapp}
                            onChange={(e) => setWhatsapp(e.target.value)}
                            id="whatsapp"
                            placeholder="Enter Your WhatsApp Number"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="regNo">Registration No</label>
                        <input
                            type="text"
                            value={regNo}
                            onChange={(e) => setRegNo(e.target.value)}
                            id="regNo"
                            placeholder="Registration No"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="section">Section</label>
                        <input
                            type="text"
                            value={section}
                            onChange={(e) => setSection(e.target.value.toUpperCase())}
                            id="section"
                            placeholder="e.g. JK242, JC321"
                            pattern="[A-Z0-9]+"
                            title="Use only capital letters and numbers"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            id="email"
                            placeholder="Enter Your Email Address"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="button-submit"
                        disabled={loading}
                    >
                        {loading ? "Submitting..." : "Submit"}
                    </button>
                </form>
            )}
        </div>
    );
};

export default BookEvent;
