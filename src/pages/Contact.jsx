
import React from "react";

const Contact = () =>{
    return (
        <div className="min-h-screen bg-[#F8FAFC] py-20 px-4 md:px-32">
            <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#00477B] mb-10">Contact Us</h2>
            <form className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-6">
                <input type="text" name="name" placeholder="Your Name" className="w-full border rounded px-4 py-2" />
                <input type="email" name="email" placeholder="Your Email" className="w-full border rounded px-4 py-2" />
                <textarea name="message" rows="6" placeholder="Your Message" className="w-full border rounded px-4 py-2"></textarea>
                <button type="submit" className="bg-[#00477B] text-white px-6 py-2 rounded hover:bg-[#00365c]">Send Message</button>
            </form>
        </div>
    )
}

export default Contact