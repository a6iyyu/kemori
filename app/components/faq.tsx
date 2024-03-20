import React, { useEffect, useState } from "react";
import { question } from "~/types/questions";

export const FAQ: React.FC = () => {
  const [details, setDetails] = useState(question.map(() => false));
  const [arrowRotation, setArrowRotation] = useState(question.map(() => 180));

  const HandleQuestions = (i: number) => {
    setDetails((prevDetails) => {
      const updateDetails = [...prevDetails];
      updateDetails[i] = !updateDetails[i];
      return updateDetails;
    });
  };

  useEffect(() => {
    setArrowRotation(details.map((open) => (open ? 0 : 180)));
  }, [details]);

  return (
    <>
      <h3
        className="mx-auto mb-5 mt-16 h-fit w-fit cursor-default rounded-full border-2 border-solid border-slate-300 px-8 py-3 text-center text-sm font-semibold lg:text-lg"
        id="faq-section"
      >
        <span className="text-slate-200">FAQ</span>
      </h3>
      <section className="mx-auto grid h-fit w-4/5 place-items-center lg:w-3/5">
        <h3 className="h-fit w-fit cursor-default text-center text-3xl font-semibold lg:text-4xl">
          <span className="text-orange-500">Get your</span>
          &nbsp;
          <span className="text-violet-500">burning questions</span>
          <br />
          <span className="text-fuchsia-400">about Kemori,</span>
          &nbsp;
          <span className="text-rose-400">answered here</span>
        </h3>
      </section>
      <section className="mx-auto mt-4 grid h-fit w-4/5 cursor-default place-items-center text-center text-xl font-medium text-slate-50 lg:w-3/5">
        If our FAQs haven't covered your query, don't
        <br className="hidden lg:flex" />
        hesitate to contact us and let us know.
      </section>
      <section className="mx-auto mt-8 grid h-fit w-4/5 place-items-center">
        {question.map((quest, i) => (
          <div
            className="mt-5 grid h-fit w-full cursor-pointer place-items-center rounded-xl bg-slate-100 transition-all duration-300 ease-in-out first:mt-0 hover:bg-slate-300"
            onClick={() => HandleQuestions(i)}
            style={{ boxShadow: "0 0 1.5rem #bcbcbc99" }}
          >
            <div className="flex h-fit w-[90%] items-center justify-between py-5 font-black">
              {quest.question}
              <span className="h-fit w-fit">
                <img
                  src="/scroll-to-top.png"
                  alt=""
                  width={30}
                  className="transition-all duration-300 ease-in-out"
                  style={{ transform: `rotate(${arrowRotation[i]}deg)` }}
                />
              </span>
            </div>
            {details[i] && (
              <div className="grid h-fit w-full place-items-center rounded-b-xl pb-9">
                <div className="h-fit w-[90%] rounded-b-xl font-medium text-gray-800">
                  {quest.answer}
                </div>
              </div>
            )}
          </div>
        ))}
      </section>
    </>
  );
};