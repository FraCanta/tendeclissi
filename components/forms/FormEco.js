import React, { useState } from "react";
import toast from "react-hot-toast";

const FormEco = ({ inputs, setInputs, formType }) => {
  const [privacyChecked, setPrivacyChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (inputs.name && inputs.surname && inputs.message && inputs.phone) {
      try {
        const formDataMail = {
          ...inputs,
          formType,
          privacyChecked,
        };

        const res = await fetch(`/api/email`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formDataMail),
        });
        if (res.status === 200) {
          setInputs({
            name: "",
            surname: "",
            phone: "",
            message: "",
          });
          toast.success(
            `Hey ${inputs.name}, your message was sent successfully`
          );
        } else {
          throw new Error("Failed to send data");
        }
      } catch (error) {
        toast.error(
          `Hey ${inputs.name}, your message wasn't sent successfully`
        );
      }
    } else {
      toast.error("Please fill in all required fields");
    }
  };
  return (
    <>
      <div className="w-[90%] mx-auto lg:text-center flex flex-col items-center justify-center gap-4 py-12">
        <h2 className="text-white text-[2rem] lg:text-6xl xl:text-5xl 2xl:text-6xl">
          Ottieni l&apos;ecobonus sulle tende da sole con noi!
        </h2>
        <p
          className="max-w-6xl mx-auto text-lg text-white lg:text-xl"
          dangerouslySetInnerHTML={{
            __html:
              "Per ottenere la detrazione fiscale sulle tende da sole, <strong>inviaci un’email</strong> indicando gli interventi che vorresti dichiarare: ti aiuteremo a individuare tutte le <strong>spese includibili</strong> nel bonus e ti forniremo tutti i <strong>dettagli tecnici dei prodotti</strong>.",
          }}
        ></p>
        <form className="w-full max-w-3xl mx-auto " onSubmit={onSubmitForm}>
          <div className="flex flex-col gap-4 mb-6 -mx-1 lg:flex-row">
            <div className="w-full p-2 px-3 bg-white border md:w-1/2 border-yellow">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-purple px-[22px] py-[12px]  lg:px-[33px] lg:py-[15px]  leading-tight focus:outline-none focus:bg-white"
                id="name"
                name="name"
                required
                type="text"
                placeholder="Nome"
                value={inputs.name}
                onChange={handleChange}
              />
            </div>
            <div className="w-full p-2 px-3 bg-white border md:w-1/2 border-yellow">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-purple  px-[22px] py-[12px]  lg:px-[33px] lg:py-[15px]  leading-tight focus:outline-none focus:bg-white"
                id="surname"
                type="text"
                name="surname"
                required
                value={inputs.surname}
                onChange={handleChange}
                placeholder="Cognome"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 -mx-1">
            <div className="w-full p-2 px-3 bg-white border border-yellow">
              <input
                className="appearance-none block w-full bg-white text-gray-700 border border-purple  px-[22px] py-[12px]  lg:px-[33px] lg:py-[15px]  leading-tight focus:outline-none focus:bg-white"
                id="phone"
                type="text"
                value={inputs.phone}
                required
                onChange={handleChange}
                placeholder="Numero di telefono"
              />
            </div>
            <div className="w-full p-2 px-3 bg-white border border-yellow">
              <textarea
                id="message"
                onChange={handleChange}
                value={inputs.message}
                cols="10"
                rows="5"
                required
                className="block p-2.5 w-full text-base text-black bg-white border border-primary focus:ring-primary focus:border-primary"
                placeholder="Dicci di cosa hai bisogno..."
              ></textarea>
            </div>
          </div>

          <div className="flex items-center w-full my-4">
            <button
              className="flex w-full items-center justify-center uppercase 3xl:text-[35px] 4xl:text-[55px]  px-[22px] py-[12px]  lg:px-[33px] lg:py-[15px]  md:text-[25px] lg:text-xl fxl:text-[25px]   bg-primary text-white font-regular"
              type="submit"
            >
              Ricevi informazioni
            </button>
          </div>
          <div className="w-[90%] mx-auto py-8 lg:py-0">
            <div className="max-w-3xl mx-auto ">
              <input
                type="checkbox"
                id="privacy"
                name="privacy"
                value="SI"
                required
                onChange={() => setPrivacyChecked(!privacyChecked)}
                checked={privacyChecked}
              />{" "}
              <label htmlFor="privacy" className="text-white ">
                <span
                  dangerouslySetInnerHTML={{
                    __html:
                      "Ho letto l'<a href='/privacy-policy'><strong>informativa sulla privacy</strong></a> e acconsento alla memorizzazione dei miei dati, secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali n. 679/2016 (GDPR), per avere informazioni sui servizi di www.tendeclissi.it",
                  }}
                ></span>{" "}
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormEco;
