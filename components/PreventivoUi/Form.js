import React, { useState, useEffect } from "react";

const Form = ({ content, onCategoryChange, onRadioChange }) => {
  const [showList, setShowList] = useState(false);
  const [showSubList, setShowSubList] = useState(false);

  const [isArrowRotated, setIsArrowRotated] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Seleziona");
  const [activeRadio, setActiveRadio] = useState("bordered-radio-1");
  const [categoryOptions, setCategoryOptions] = useState([
    "Cappottine",
    "Tende da sole",
    "Tende da sole per esterni e giardini",
  ]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // Previeni il comportamento predefinito del submit
    // Qui puoi gestire l'invio dei dati del form, come un'API call o un'altra logica
  };

  const subcategoryMap = {
    Cappottine: ["Cappottine mobili", "Cappottine fisse"],
    "Tende da sole": ["Tende a caduta", "Tende classiche", "Tende a guscio"],
    "Tende da sole per esterni e giardini": [
      "Pergole",
      "Vele ombreggianti",
      "Copertura box auto",
    ],
  };

  const toggleList = () => {
    setShowList(!showList);
    setIsArrowRotated(!isArrowRotated);
  };

  const toggleSubList = () => {
    setShowSubList(!showSubList);
    setIsArrowRotated(!isArrowRotated);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setSubcategories(subcategoryMap[category] || []);
    onCategoryChange(category);
    toggleList();
    toggleSubList();
  };

  const handleRadioChange = (event) => {
    const selectedRadio = event.target.id;
    setActiveRadio(selectedRadio);
    onRadioChange(selectedRadio);

    if (selectedRadio === "bordered-radio-2") {
      setCategoryOptions([
        "Motorizzazione delle tende da sole",
        "Riparazione e manutenzione di tende da sole",
      ]);
    } else {
      setCategoryOptions([
        "Cappottine",
        "Tende da sole",
        "Tende da sole per esterni e giardini",
      ]);
    }
  };

  useEffect(() => {
    setSelectedCategory("Seleziona");
    setSelectedSubcategory("");
  }, [categoryOptions]);

  return (
    <form
      className="flex flex-col w-full max-w-3xl gap-6 mx-auto"
      onSubmit={handleSubmit}
    >
      <h4 className="text-2xl font-bold lg:text-4xl">I tuoi dati</h4>
      <div className="flex flex-col gap-4 -mx-3 lg:flex-row">
        <div className="w-full p-2 px-3 bg-white border md:w-1/2 border-yellow">
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-purple px-[33px] py-[15px] leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Nome"
          />
        </div>
        <div className="w-full p-2 px-3 bg-white border md:w-1/2 border-yellow">
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-purple px-[33px] py-[15px] leading-tight focus:outline-none focus:bg-white"
            id="grid-last-name"
            type="text"
            placeholder="Cognome"
          />
        </div>
      </div>
      {content.addressInput ? (
        <div className="flex flex-col -mx-3">
          <div className="w-full p-2 px-3 bg-white border border-yellow">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-purple px-[33px] py-[15px] leading-tight focus:outline-none focus:border-white focus:bg-white"
              id="grid-address"
              type="text"
              placeholder="Indirizzo"
            />
          </div>
        </div>
      ) : null}

      <div className="flex flex-col gap-4 -mx-3">
        <div className="w-full p-2 px-3 bg-white border border-yellow">
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-purple px-[33px] py-[15px] leading-tight focus:outline-none focus:bg-white"
            id="grid-phone"
            type="text"
            placeholder="Numero di telefono"
          />
        </div>
      </div>
      <div className="flex flex-col gap-4 -mx-3">
        <h4 className="text-2xl font-bold lg:text-4xl">Cosa ti serve</h4>
        <div className="flex w-full gap-6">
          <div className="flex items-center">
            <input
              id="bordered-radio-1"
              type="radio"
              name="bordered-radio"
              className="w-8 h-8 border-black text-primary"
              checked={activeRadio === "bordered-radio-1"}
              onChange={handleRadioChange}
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 text-xl font-medium text-black ms-2"
            >
              Prodotto
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="bordered-radio-2"
              type="radio"
              name="bordered-radio"
              className="w-8 h-8 border-black text-primary"
              checked={activeRadio === "bordered-radio-2"}
              onChange={handleRadioChange}
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 text-xl font-medium text-black ms-2"
            >
              Servizio
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 -mx-3">
        <div
          className="relative w-full p-2 px-3 bg-white border border-yellow"
          onClick={toggleList}
        >
          <div className="flex items-center justify-between gap-6">
            <div className="bg-white border border-primary text-purple text-sm focus:ring-primary focus:border-primary block w-full px-[33px] py-[15px]">
              <button className="flex items-center justify-between w-full text-sm lg:text-xl">
                {selectedCategory === "Seleziona"
                  ? "Seleziona"
                  : selectedCategory}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="0.8em"
                  height="0.8em"
                  viewBox="0 0 28 28"
                  className={
                    isArrowRotated
                      ? "origin-[50% 55%] rotate-180 transition-all duration-300"
                      : "transition-all duration-300"
                  }
                >
                  <path
                    fill="currentColor"
                    d="M4.22 9.47a.75.75 0 0 1 1.06 0L14 18.19l8.72-8.72a.75.75 0 1 1 1.06 1.06l-9.25 9.25a.75.75 0 0 1-1.06 0l-9.25-9.25a.75.75 0 0 1 0-1.06"
                  />
                </svg>
              </button>
            </div>
            {showList && (
              <ul
                className="absolute left-0 z-10 flex flex-col w-full gap-2 text-xl transition-colors duration-300 bg-white border top-20 lg:right-0 border-yellow"
                style={{ padding: "20px 0 28px" }}
              >
                <li
                  className="cursor-pointer"
                  style={{ padding: "6px 24px" }}
                  onClick={() => handleCategorySelect("Seleziona")}
                >
                  Seleziona
                </li>
                {categoryOptions.map((option) => (
                  <li
                    key={option}
                    className="cursor-pointer"
                    style={{ padding: "6px 24px" }}
                    onClick={() => handleCategorySelect(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {selectedCategory !== "Seleziona" && (
        <div className="px-3 py-2 ">
          <span className="text-2xl font-semibold">{selectedCategory}</span>
        </div>
      )}
      {selectedCategory !== "Seleziona" && subcategories.length > 0 && (
        <div className="flex flex-col gap-4 -mx-3">
          <div
            className="relative w-full p-2 px-3 bg-white border border-yellow"
            onClick={toggleSubList}
          >
            <div className="flex items-center justify-between gap-6">
              <div className="bg-white border border-primary text-purple text-sm focus:ring-primary focus:border-primary block w-full px-[33px] py-[15px]">
                <button className="relative flex items-center justify-between w-full text-sm lg:text-xl">
                  {selectedSubcategory ? selectedSubcategory : "Seleziona"}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="0.8em"
                    height="0.8em"
                    viewBox="0 0 28 28"
                    className={
                      isArrowRotated
                        ? "origin-[50% 55%] rotate-180 transition-all duration-300"
                        : "transition-all duration-300"
                    }
                  >
                    <path
                      fill="currentColor"
                      d="M4.22 9.47a.75.75 0 0 1 1.06 0L14 18.19l8.72-8.72a.75.75 0 1 1 1.06 1.06l-9.25 9.25a.75.75 0 0 1-1.06 0l-9.25-9.25a.75.75 0 0 1 0-1.06"
                    />
                  </svg>
                </button>
              </div>
              {showSubList && (
                <ul
                  className="absolute left-0 z-10 flex flex-col w-full gap-2 text-xl transition-colors duration-300 bg-white border top-20 lg:right-0 border-yellow"
                  style={{ padding: "20px 0 28px" }}
                >
                  {subcategories.map((subcategory) => (
                    <li
                      key={subcategory}
                      className="cursor-pointer"
                      style={{ padding: "6px 24px" }}
                      onClick={() => setSelectedSubcategory(subcategory)}
                    >
                      {subcategory}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="flex flex-col gap-4 -mx-3">
        <h4 className="text-2xl font-bold lg:text-4xl">
          Richieste particolari
        </h4>
        <div className="w-full p-2 px-3 bg-white border border-yellow">
          <textarea
            id="message"
            rows="10"
            className="block p-2.5 w-full text-base text-black bg-white border border-primary focus:ring-primary focus:border-primary"
            placeholder="Dacci tutte le informazioni che ritieni necessarie per preparare il [preventivo/sopralluogo]..."
          ></textarea>
        </div>
      </div>
      <div className="grid items-center w-full grid-cols-1 gap-y-8">
        <label className="flex gap-4 text-black">
          <input type="checkbox" />
          <span
            dangerouslySetInnerHTML={{
              __html:
                "Ho letto l'<a href='/privacy-policy'><strong>informativa sulla privacy</strong></a> e acconsento alla memorizzazione dei miei dati, secondo quanto stabilito dal regolamento europeo per la protezione dei dati personali n. 679/2016 (GDPR), per avere informazioni sui servizi di www.tendeclissi.it",
            }}
          ></span>
        </label>
        <button
          className="flex w-full items-center justify-center uppercase 3xl:text-[35px] 4xl:text-[55px] px-[33px] py-[15px] md:text-[25px] lg:text-xl fxl:text-[25px] bg-primary text-white font-regular"
          type="submit"
        >
          chiedi il preventivo
        </button>
      </div>
    </form>
  );
};

export default Form;
