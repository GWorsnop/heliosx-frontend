"use client";
import completeQuestionnaire from "@/app/utils/completeQuestionnaire";
import React, { useEffect, useState } from "react";
import { Check, X } from "react-feather";

interface additionalInformation {
  [key: number]: string[];
}

export default function Questions() {
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

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  useEffect(() => {
    if (answers.length) {
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        completeQuestionnaire(answers, questions);
      }
    }
  }, [answers]);

  const handleAnswerChange = (answer: boolean) => {
    setAnswers((prevAnswers) => [...prevAnswers, answer]);
  };

  return (
    <div className="m-auto flex min-h-full w-full flex-col justify-center">
      <div className="mx-auto min-h-96 w-1/2 rounded-lg bg-white text-center">
        <h2 className="p-4 text-3xl">Client Questionnaire</h2>
        <div className="flex h-full min-h-64 flex-col pt-4">
          <p className="flex justify-center pb-4 text-xl">
            {questions[currentQuestionIndex]}
          </p>
          <div className="flex flex-col self-center pb-6 pl-4 text-start">
            <ul>
              {additionalInformation.hasOwnProperty(currentQuestionIndex) &&
                additionalInformation[currentQuestionIndex].map((info) => {
                  return <li className="px-2 text-sm text-gray-400">{info}</li>;
                })}
            </ul>
          </div>
        </div>
        <div className="flex justify-around">
          <button
            className="flex gap-1 rounded bg-green-500 px-4 py-2 font-bold shadow-md hover:bg-green-400 focus:outline-none"
            onClick={() => handleAnswerChange(true)}
          >
            <Check /> True
          </button>
          <button
            className="flex gap-1 rounded bg-red-500 px-4 py-2 font-bold shadow-md hover:bg-red-400 focus:outline-none"
            onClick={() => handleAnswerChange(false)}
          >
            <X /> False
          </button>
        </div>
      </div>
    </div>
  );
}
