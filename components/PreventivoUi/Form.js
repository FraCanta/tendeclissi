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
    <form className="w-full max-w-3xl mx-auto flex flex-col gap-6">
      <h4 className="text-2xl lg:text-4xl font-bold">I tuoi dati</h4>
      <div className="flex flex-col lg:flex-row -mx-3 gap-4">
        <div className="w-full md:w-1/2 px-3 p-2 bg-white border border-yellow">
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-purple px-[33px] py-[15px] leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="Nome"
          />
        </div>
        <div className="w-full md:w-1/2 px-3 p-2 bg-white border border-yellow">
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
          <div className="w-full px-3 p-2 bg-white border border-yellow">
            <input
              className="appearance-none block w-full bg-white text-gray-700 border border-purple px-[33px] py-[15px] leading-tight focus:outline-none focus:border-white focus:bg-white"
              id="grid-address"
              type="text"
              placeholder="Indirizzo"
            />
          </div>
        </div>
      ) : null}

      <div className="flex flex-col -mx-3 gap-4">
        <div className="w-full px-3 p-2 bg-white border border-yellow">
          <input
            className="appearance-none block w-full bg-white text-gray-700 border border-purple px-[33px] py-[15px] leading-tight focus:outline-none focus:bg-white"
            id="grid-phone"
            type="text"
            placeholder="Numero di telefono"
          />
        </div>
      </div>
      <div className="flex flex-col -mx-3 gap-4">
        <h4 className="text-2xl lg:text-4xl font-bold">Cosa ti serve</h4>
        <div className="w-full flex gap-6">
          <div className="flex items-center">
            <input
              id="bordered-radio-1"
              type="radio"
              name="bordered-radio"
              className="w-8 h-8 text-primary border-black"
              checked={activeRadio === "bordered-radio-1"}
              onChange={handleRadioChange}
            />
            <label
              htmlFor="bordered-radio-1"
              className="w-full py-4 ms-2 text-xl font-medium text-black"
            >
              Prodotto
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="bordered-radio-2"
              type="radio"
              name="bordered-radio"
              className="w-8 h-8 text-primary border-black"
              checked={activeRadio === "bordered-radio-2"}
              onChange={handleRadioChange}
            />
            <label
              htmlFor="bordered-radio-2"
              className="w-full py-4 ms-2 text-xl font-medium text-black"
            >
              Servizio
            </label>
          </div>
        </div>
      </div>
      <div className="flex flex-col -mx-3 gap-4">
        <div
          className="relative w-full px-3 p-2 bg-white border border-yellow"
          onClick={toggleList}
        >
          <div className="flex items-center gap-6 justify-between">
            <div className="bg-white border border-primary text-purple text-sm focus:ring-primary focus:border-primary block w-full px-[33px] py-[15px]">
              <button className="w-full flex items-center justify-between text-sm lg:text-xl">
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
                className="absolute top-20 left-0 lg:right-0 bg-white w-full text-xl z-10 transition-colors duration-300 flex flex-col gap-2"
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
        <div className="flex flex-col -mx-3 gap-4">
          <div
            className="relative w-full px-3 p-2 bg-white border border-yellow"
            onClick={toggleSubList}
          >
            <div className="flex items-center gap-6 justify-between">
              <div className="bg-white border border-primary text-purple text-sm focus:ring-primary focus:border-primary block w-full px-[33px] py-[15px]">
                <button className="w-full flex items-center justify-between  text-sm lg:text-xl relative">
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
                  className="absolute top-20 left-0 lg:right-0 bg-white w-full text-xl z-10 transition-colors duration-300 flex flex-col gap-2"
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
      <div className="flex flex-col -mx-3 gap-4">
        <h4 className="text-2xl lg:text-4xl font-bold">
          Richieste particolari
        </h4>
        <div className="w-full px-3 p-2 bg-white border border-yellow">
          <textarea
            id="message"
            rows="10"
            className="block p-2.5 w-full text-base text-black bg-white border border-primary focus:ring-primary focus:border-primary"
            placeholder="Write your thoughts here..."
          ></textarea>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 items-center gap-y-8">
        <label className="text-black flex gap-4">
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
