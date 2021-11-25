import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FcCheckmark } from "react-icons/fc";

function Contact() {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Must be at least 3 characters")
      .required("Name required."),
    email: Yup.string()
      .required("Email required")
      .min(6, "Must be at least 6 characters"),
    message: Yup.string()
      .required("Message required")
      .min(12, "Must be at least 12 characters"),
  });

  return (
    <div
      id="contact"
      className="bg-[#202124] flex flex-col justify-center my-8 rounded-3xl"
    >
      <div className="relative rounded-3xl sm:max-w-xl mx-auto max-w-sm bg-[#191919]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#818cf8] to-[#c25be2] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
        <div className="relative px-4 py-6  bg-[#272727] shadow-lg rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-4xl font-bold text-gray-300">Contact Form</h1>
            </div>
            <div className="w-full h-auto divide-y divide-gray-200">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  message: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, actions) => {
                  actions.setSubmitting(false);
                  actions.setStatus({ message: "Email sent!" });

                  setTimeout(() => {
                    actions.resetForm();
                  }, 3000);

                  fetch(`/api/contact`, {
                    method: "POST",
                    headers: {
                      Accept: "application/json, text/plain, *.*",
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(values),
                  }).then((response) => {
                    console.log("response received");
                  });
                }}
              >
                {({ status }) => (
                  <Form className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative bg-[#1232323]">
                      <Field
                        autoComplete="off"
                        id="name"
                        name="name"
                        type="name"
                        className="peer placeholder-transparent h-10 w-full text-gray-200 focus:outline-none bg-[#424242]"
                        placeholder="Name"
                      />
                      <ErrorMessage
                        name="name"
                        render={(msg) => (
                          <div className="text-red-500 bg-[#1232323]">
                            {msg}
                          </div>
                        )}
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-gray-200 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-300 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-200 peer-focus:text-sm"
                      >
                        Full Name
                      </label>
                    </div>
                    <div className="relative">
                      <Field
                        autoComplete="off"
                        id="email"
                        name="email"
                        type="email"
                        className="bg-[#424242] peer placeholder-transparent h-10 w-full border-b- border-gray-700 text-gray-200 focus:outline-none"
                        placeholder="Email address"
                      />
                      <ErrorMessage
                        name="email"
                        render={(msg) => (
                          <div className="text-red-500 bg-[#1232323]">
                            {msg}
                          </div>
                        )}
                      />

                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-300 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="relative h-30">
                      <Field
                        as="textarea"
                        autoComplete="off"
                        cols="40"
                        rows="3"
                        id="message"
                        name="message"
                        type="message"
                        placeholder="Message"
                        className="bg-[#424242] peer placeholder-transparent h-30 w-full text-gray-200 focus:outline-none focus:borer-rose-600"
                      />
                      <ErrorMessage
                        name="message"
                        render={(msg) => (
                          <div className="text-red-500 bg-[#1232323]">
                            {msg}
                          </div>
                        )}
                      />
                      <label
                        htmlFor="message"
                        className="absolute pb-2 left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-200 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-300 peer-focus:text-sm"
                      >
                        Message:
                      </label>
                    </div>
                    {status && status.message && (
                      <div className="flex items-center justify-center gap-1">
                        <FcCheckmark />
                        <div className="message">{status.message}</div>
                      </div>
                    )}

                    <div className="relative">
                      <button
                        type="submit"
                        className="bg-[#03d8c5] text-black font-medium rounded-3xl px-7 py-2 mt-2 transition transform active:scale-90 duration-150"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
