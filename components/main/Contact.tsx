import React from 'react'

const Contact = () => {
    return (
        <section
            id="contact"
            className="min-h-screen bg-transparent border-blue-600 z-30 flex items-center justify-center py-20 px-4"
        >
            <div className="max-w-3xl w-full bg-transparent border-blue-600 border-2 rounded-3xl shadow-2xl p-10">
                <h2 className="text-3xl font-bold text-center text-white mb-6">
                    Get in Touch
                </h2>
                <p className="text-center text-white mb-10">
                    I&apos;d love to hear from you! Fill out the form below and I&apos;ll get back to you soon.
                </p>


                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-white mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white mb-1">Email</label>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white mb-1">Subject</label>
                        <input
                            type="text"
                            placeholder="What is this about?"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white mb-1">Message</label>
                        <textarea
                            placeholder="Write your message..."
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md transition-all duration-300"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
