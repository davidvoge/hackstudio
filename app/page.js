export default function Home() {
  return (
    <>
      <section className="bg-secondary h-screen">
        <div className="flex flex-col items-center justify-center h-full mx-auto max-w-5xl">
          <div className="card bg-base-100 w-96 shadow-sm p-4">
            <h1>HackStudio</h1>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">
                Donne moi ton email putain
              </legend>
              <input
                type="email"
                className="input"
                placeholder="Ton puteain d'email de malade"
              />
              <p className="fieldset-label">On va te spammer !</p>
            </fieldset>
          </div>
        </div>
      </section>
    </>
  );
}
