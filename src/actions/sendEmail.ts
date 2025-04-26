"use server";

import ContactFormEmail from "@/email/contact-form-email";
import { validateString } from "@/lib/utils";
import { Resend } from "resend";
import React from "react";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formaData: FormData) => {
  const name = formaData.get("name") as string;
  const email = formaData.get("email") as string;
  const message = formaData.get("message") as string;

  if (!name || !email || !message) {
    throw new Error("All fields are required");
  }

  if (!validateString(name, 100)) {
    return {
      error: "Invalid sender name",
    };
  }

  if (!validateString(email, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "work.sangita@gmail.com",
      replyTo: email,
      subject: `New message from ${formaData.get("name")}`,
      react: React.createElement(ContactFormEmail, {
        name: name,
        email: email,
        message: message,
      }),
    });
  } catch (error) {
    console.log("Error: ", error);
    return {
      error: "Something went wrong",
    };
  }
  return {
    data,
  };
};
