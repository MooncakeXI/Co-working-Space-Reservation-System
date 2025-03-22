import React from 'react'

function ContactBody() {
    return (
        <>
        <div className="bg-white py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6 animate-fade-up">
          {/* Hours */}
          <div className="bg-sky-50 hover:bg-sky-100 transition p-8 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-sky-700 mb-2">HOURS</h2>
            <p className="text-gray-600">9:00 AM - 5:00 PM</p>
            <p className="text-gray-500">Mon-Fri (Excl. Holidays)</p>
          </div>

          {/* Phone */}
          <div className="bg-sky-50 hover:bg-sky-100 transition p-8 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-sky-700 mb-2">PHONE</h2>
            <p className="text-gray-600">(+66) 2999 8844</p>
          </div>

          {/* Email */}
          <div className="bg-sky-50 hover:bg-sky-100 transition p-8 rounded-lg shadow text-center">
            <h2 className="text-2xl font-bold text-sky-700 mb-2">EMAIL</h2>
            <p className="text-gray-600">connect@coworkhub.com</p>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="bg-sky-100 py-16 text-center px-6">
        <h2 className="text-2xl font-semibold text-sky-800 mb-4 animate-fade">
          Ready to connect with our team?
        </h2>
        <p className="max-w-3xl mx-auto text-gray-600 animate-fade">
          Whether you're a space owner looking to list or a company searching
          for the perfect coworking environment — our team is here to help.
          Let's build the future of work together!
        </p>
      </div>
      </>
    )
}

export default ContactBody