import React from 'react';

function ContactBanner() {
    return (
        <div className="min-h-[40vh] bg-gradient-to-r from-sky-200 via-sky-100 to-white flex items-center justify-center">
          <div className="text-center px-6 py-12 animate-fade-up">
            <p className="text-sky-600 text-lg font-medium mb-2">
              Partner with us to enhance workspace experiences!
            </p>
            <h1 className="text-5xl font-bold text-sky-800">Contact Us</h1>
          </div>
        </div>
    );
}

export default ContactBanner;