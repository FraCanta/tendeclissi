import React from "react";

const Form = () => {
  return (
    <form className="w-full max-w-3xl mx-auto  flex flex-col gap-6">
      <h4 className="text-2xl lg:text-4xl font-bold">I tuoi dati</h4>
      <div className="flex flex-col lg:flex-row -mx-3  gap-4">
        <div className="w-full md:w-1/2 px-3 p-2 bg-white border border-yellow">
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-purple  px-[33px] py-[15px]  leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Nome"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 p-2 bg-white border border-yellow">
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-purple  px-[33px] py-[15px]  leading-tight focus:outline-none focus:bg-white"
            id="grid-last-name"
            type="text"
            placeholder="Cognome"
          />
        </div>
      </div>
      <div className="flex flex-col  -mx-3 ">
        <div className="w-full  px-3 p-2 bg-white border border-yellow">
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-purple  px-[33px] py-[15px]  leading-tight focus:outline-none focus:border-white focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Indirizzo"
          />
        </div>
      </div>
      <div className="flex flex-col  -mx-3 gap-4 ">
        <div className="w-full  px-3 p-2 bg-white border border-yellow">
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-purple  px-[33px] py-[15px]  leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Numero di telefono"
          />
        </div>
      </div>
      <div className="flex flex-col  -mx-3 gap-4 ">
        <h4 className="text-2xl lg:text-4xl font-bold">Cosa ti serve</h4>
        <div className="w-full flex gap-6">
          <div class="flex items-center">
            <input
              id="bordered-radio-1"
              type="radio"
              value=""
              name="bordered-radio"
              class="w-8 h-8 text-primary  border-black "
            />
            <label
              for="bordered-radio-1"
              class="w-full py-4 ms-2 text-xl font-medium text-black"
            >
              Prodotto
            </label>
          </div>
          <div class="flex items-center">
            <input
              checked
              id="bordered-radio-2"
              type="radio"
              value=""
              name="bordered-radio"
              class="w-8 h-8 text-primary  border-black "
            />
            <label
              for="bordered-radio-2"
              class="w-full py-4 ms-2 text-xl font-medium text-black "
            >
              Servizio
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col  -mx-3 gap-4 ">
        <div className="w-full  px-3 p-2 bg-white border border-yellow">
          <select
            id="countries"
            class="bg-white border border-primary text-purple text-sm focus:ring-primary focus:border-primary block w-full px-[33px] py-[15px] "
          >
            <option selected>Seleziona</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col  -mx-3 gap-4 ">
        <h4 className="text-2xl lg:text-4xl font-bold">
          Richieste particolari
        </h4>
        <div className="w-full  px-3 p-2 bg-white border border-yellow">
          <textarea
            id="message"
            rows="10"
            class="block p-2.5 w-full text-base text-black bg-white  border border-primary focus:ring-primary focus:border-primary "
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-y-4">
        <label className="text-black ">
          <input type="checkbox" /> Accetto la privacy bla bla bla
        </label>
        <button
          className="flex w-full items-center justify-center uppercase 3xl:text-[35px] 4xl:text-[55px]  px-[33px] py-[15px]  md:text-[25px] lg:text-xl fxl:text-[25px]   bg-primary text-white font-regular"
          type="submit"
        >
          chiedi il preventivo
        </button>
      </div>
    </form>
  );
};

export default Form;
