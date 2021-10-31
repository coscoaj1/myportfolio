import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sending");

    const data = {
      name,
      email,
      message,
    };

    fetch(`/api/contact`, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, *.*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("response received");
      if (response === 200) {
        setSubmitted(true);
        setName("");
        setEmail("");
        setBody("");
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#111828] py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-[#818cf8] to-[#c25be2] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-6 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-2xl font-semibold">Contact Form</h1>
            </div>
            <div className="divide-y divide-gray-200">
              <form className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div className="relative">
                  <input
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    autoComplete="off"
                    id="name"
                    name="name"
                    type="name"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Name"
                    value={name}
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    autoComplete="off"
                    id="email"
                    name="email"
                    type="text"
                    className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                    placeholder="Email address"
                    value={email}
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Email Address
                  </label>
                </div>
                <div className="relative h-30">
                  <textarea
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    autoComplete="off"
                    cols="40"
                    rows="3"
                    id="message"
                    name="message"
                    type="message"
                    placeholder="Message"
                    value={message}
                    className="peer placeholder-transparent h-30 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute pb-2 left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Message:
                  </label>
                </div>
                <div className="relative">
                  <button
                    type="submit"
                    onClick={(e) => {
                      handleSubmit(e);
                    }}
                    className="bg-[#0891b2] text-white rounded-md px-2 py-1 mt-2 transition transform active:scale-90 duration-150"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
