"use client";
import completeQuestionnaire from "@/app/utils/completeQuestionnaire";
import React, { useEffect, useState } from "react";
import { Check, X } from "react-feather";
import { redirect } from "next/navigation";

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

export default function Questions() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  useEffect(() => {
    if (answers.length) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        completeQuestionnaire(answers, questions);
        redirect("/thankyou");
      }
    }
  }, [answers]);

  const handleAnswerChange = (answer: boolean) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  return (
    <div className="m-auto flex min-h-full w-full flex-col justify-center">
      <div className="mx-auto w-4/5 rounded-lg bg-white text-center md:w-1/2">
        <h2 className="p-4 text-xl md:text-3xl">Client Questionnaire</h2>
        <div className="flex h-full flex-col justify-center pt-4">
          <p className="flex justify-center md:text-xl">
            {questions[currentQuestionIndex]}
          </p>
          <div className="flex flex-col self-center py-6 pl-4 text-start">
            <ul>
              {additionalInformation.hasOwnProperty(currentQuestionIndex) &&
                additionalInformation[currentQuestionIndex].map((info, i) => {
                  return (
                    <li
                      key={i}
                      className="px-2 text-xs text-gray-400 md:text-sm"
                    >
                      {info}
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>
        <div className="flex justify-around pb-4">
          <button
            className="flex gap-1 rounded bg-green-500 px-4 py-2 font-bold shadow-md hover:bg-green-400 focus:outline-none"
            onClick={() => handleAnswerChange(true)}
          >
            <Check /> Yes
          </button>
          <button
            className="flex gap-1 rounded bg-red-500 px-4 py-2 font-bold shadow-md hover:bg-red-400 focus:outline-none"
            onClick={() => handleAnswerChange(false)}
          >
            <X /> No
          </button>
        </div>
      </div>
    </div>
  );
}
