"use client";
import completeQuestionnaire from "@/app/utils/completeQuestionnaire";
import React, { useEffect, useState } from "react";
import { Check, X } from "react-feather";
import { redirect } from "next/navigation";
import Image from "next/image";

interface additionalInformation {
  [key: number]: string[];
}

const questions: string[] = [
  "Are you aged between 18 and 65?",
  "Do you have any of these symptoms?",
  "Are you breastfeeding or pregnant or possibly pregnant?",
  "Are you currently taking any other medications?",
  "Do you agree to the following?",
];

const additionalInformation: additionalInformation = {
  1: ["Sore throat", "Itchy eyes", "Swelling"],
  4: [
    "You will read the patient information leaflet supplied with your medication",
    "You will contact us and inform your GP of your medication if you experience any side effects of treatment, if you start new medication or if your medical conditions change during treatment.",
    "The treatment is solely for your own use",
    "You have answered all the previous questions accurately and truthfully. You understand our prescribers take your answers in good faith and base their prescribing decisions accordingly, and that incorrect information can be hazardous to your health.",
  ],
};

export default function ThankYou() {
  return (
    <div className="m-auto flex min-h-full w-full flex-col justify-center">
      <div className="mx-auto w-4/5 rounded-lg bg-white text-center md:w-1/2">
        <h2 className="p-4 text-xl md:text-3xl">
          Thank you for completing the questionnaire
        </h2>
        <div className="flex justify-center">
          <Image
            src="/images/doctor.png"
            alt="Medexpress Logo"
            width={400}
            height={300}
          />
        </div>
        <div className="flex h-full flex-col justify-center px-4 pt-4">
          <p className="flex justify-center md:text-xl">
            A Genovian doctor will review your answers and decide whether or not
            it is appropriate to prescribe you medication.
          </p>
          <p className="flex justify-center py-4 md:text-xl">
            We will be in touch shortly with a response.
          </p>
        </div>
      </div>
    </div>
  );
}
