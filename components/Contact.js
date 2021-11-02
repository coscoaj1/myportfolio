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
      passHref
      className="min-h-screen bg-[#111828] py-6 sm:py-12 flex flex-col justify-center "
    >
      <div className="relative py-3 sm:max-w-xl mx-auto max-w-sm">
        <div className="absolute inset-0 bg-gradient-to-r from-[#818cf8] to-[#c25be2] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 rounded-3xl"></div>
        <div className="relative px-4 py-6 bg-white shadow-lg rounded-3xl sm:p-20">
          <div className="max-w-md mx-auto">
            <div>
              <h1 className="text-4xl font-bold">Contact Form</h1>
            </div>
            <div className="divide-y divide-gray-200 w-full h-auto">
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
                  <Form className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <Field
                        autoComplete="off"
                        id="name"
                        name="name"
                        type="name"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Name"
                      />
                      <ErrorMessage
                        name="name"
                        render={(msg) => (
                          <div className="text-red-500">{msg}</div>
                        )}
                      />
                      <label
                        htmlFor="name"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
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
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                      />
                      <ErrorMessage
                        name="email"
                        render={(msg) => (
                          <div className="text-red-500">{msg}</div>
                        )}
                      />

                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
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
                        className="peer placeholder-transparent h-30 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      />
                      <ErrorMessage
                        name="message"
                        render={(msg) => (
                          <div className="text-red-500">{msg}</div>
                        )}
                      />
                      <label
                        htmlFor="message"
                        className="absolute pb-2 left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Message:
                      </label>
                    </div>
                    {status && status.message && (
                      <div className="flex gap-1 items-center justify-center">
                        <FcCheckmark />
                        <div className="message">{status.message}</div>
                      </div>
                    )}

                    <div className="relative">
                      <button
                        type="submit"
                        className="bg-[#0891b2] text-white font-medium rounded-3xl px-7 py-2 mt-2 transition transform active:scale-90 duration-150"
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
