import FormContactWizard from "./FormContactWizard";
export default function ContactSection() {
  return (
    <div className="container mx-auto px-4 py-12 lg:py-24 text-neutral-content">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
        {/* Section texte */}
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl lg:text-5xl font-medium">
            Discutons de votre projet
          </h1>

          <p className="text-lg text-neutral-content/80 leading-relaxed">
            Nous sommes là pour vous accompagner dans la réalisation de votre
            projet digital. Que ce soit pour un site web, une application mobile
            ou une solution e-commerce, notre équipe d'experts est prête à vous
            aider.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl font-medium">Pourquoi nous choisir ?</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary mt-1"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Une approche sur-mesure adaptée à vos besoins</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary mt-1"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>Une expertise technique de pointe</span>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5rem"
                  height="1.5rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary mt-1"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
                <span>
                  Un accompagnement personnalisé tout au long du projet
                </span>
              </li>
            </ul>
          </div>

          <div className="pt-6">
            <p className="text-sm text-neutral-content/60">
              * Nous vous répondrons dans les 24 heures ouvrées suivant votre
              demande.
            </p>
          </div>
        </div>

        {/* Formulaire */}
        <div className="flex-1">
          <FormContactWizard />
        </div>
      </div>
    </div>
  );
}
