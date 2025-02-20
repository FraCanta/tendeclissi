import React from "react";

const Faq = () => {
  return (
    <div className="flex flex-col justify-center w-full lg:py-10 3xl:py-20">
      <div className="w-[90%] mx-auto flex flex-col gap-8 py-20 lg:py-0 text-black 3xl:gap-14">
        <h3 className="text-[48px] uppercase font-bold 3xl:text-[52px]">Faq</h3>
        <p className="max-w-3xl text-xl 3xl:text-3xl 3xl:max-w-6xl">
          La nostra squadra è sempre a tua disposizione per rispondere a
          qualsiasi dubbio e aiutarti a scegliere la copertura più adatta per le
          tue esigenze. Hai qualche domanda o curiosità sui nostri prodotti e
          servizi? Mandaci un’email!
        </p>
        <div className="flex flex-col gap-y-10 3xl:gap-y-20">
          <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 3xl:gap-20">
            <div className="flex flex-col gap-2 text-black">
              <h4 className="font-bold text-[25px] 3xl:text-[35px]">
                Potete motorizzare una vecchia tenda?
              </h4>
              <p className="text-lg 3xl:text-2xl">
                Certamente! Faremo un sopralluogo per verificare il modello e
                capire se è necessario fare altre modifiche oltre
                all’installazione del motore, dopodiché si potrà procedere con
                il preventivo e l’operazione di motorizzazione.
              </p>
            </div>
            <div className="flex flex-col gap-2 text-black">
              {" "}
              <h4 className="font-bold text-[25px] 3xl:text-[35px]">
                Potete sostituire componenti rotti o danneggiati?
              </h4>
              <p className="text-lg 3xl:text-2xl">
                Sì, i nostri servizi includono anche le operazioni di
                riparazione. Nel caso di un danno a un singolo braccio sarà
                necessario sostituire entrambe le braccia della tenda, in modo
                da garantire un movimento omogeneo del tessuto e un’usura
                uniforme.
              </p>
            </div>
          </div>
          <div>
            <div className="grid grid-cols-1 gap-6 xl:grid-cols-2 3xl:gap-20">
              <div className="flex flex-col gap-2 text-black">
                {" "}
                <h4 className="font-bold text-[25px] 3xl:text-[35px]">
                  Posso lavare il tessuto della tela?
                </h4>
                <p className="text-lg 3xl:text-2xl">
                  Si può sempre pulire manualmente la tela, utilizzando prodotti
                  appositi per il tipo di tessuto e un panno umido. Sconsigliamo
                  invece i lavaggi ad alta pressione, che possono danneggiare le
                  cuciture o le saldature delle tende con più di 2 anni di vita.
                </p>
              </div>
              <div className="flex flex-col gap-2 text-black">
                {" "}
                <h4 className="font-bold text-[25px] 3xl:text-[35px]">
                  Potete installare una tenda sul cappotto di un’abitazione?
                </h4>
                <p className="text-lg 3xl:text-2xl">
                  Assolutamente: adoperando lavorazioni e materiali specifici è
                  possibile ancorare correttamente la tenda allo strato più
                  solido della casa. Contattaci per maggiori informazioni sul
                  procedimento e per richiedere un preventivo su misura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
