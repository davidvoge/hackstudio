import Image from "next/image";
import Button from "@/app/components/Button";
import ServiceSection from "@/app/components/ServiceSection";
import hackstudio_hero from "@/public/hackstudio_hero.png";
import Pricing from "@/app/components/Pricing";
import ContactSection from "@/app/components/ContactSection";
const keyPoints = [
  {
    text: "Data et mesures qui convertissent, sans se disperser",
  },
  {
    text: "Stack data, CRM & automatisation intégrés dès le début",
  },
  {
    text: "Couvrir tout le growth pour attaquer vos vrais besoins",
  },
];

export default function Home() {
  return (
    <>
      <div className="text-neutral-content">
        <div className="container mx-auto px-4 py-12 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-24">
            {/* Contenu texte */}
            <div className="flex flex-col flex-1 gap-3 animate-fade-in">
              <h1 className="text-4xl lg:text-[2.5rem] font-medium">
                (Re)prenez le contrôle de
                <br />
                vos produits digitaux.
                <br />
                Pour de vrai.
              </h1>

              <p className="leading-relaxed font-light">
                Fini les prestas inutiles et les free-lances qui ne se parlent
                pas. On aligne tech, design, dev, data & stratégie marketing
                pour lever des systèmes qui optimisent votre croissance.
              </p>

              <ul className="space-y-1">
                {keyPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 min-h-6 font-light"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1rem"
                      height="1rem"
                      viewBox="0 0 16 16"
                      fill="none"
                      className="flex-shrink-0"
                    >
                      <g clipPath="url(#clip0_106_946)">
                        <path
                          d="M4.99967 7.99998L6.99967 9.99998L10.9997 5.99998M14.6663 7.99998C14.6663 11.6819 11.6816 14.6666 7.99967 14.6666C4.31778 14.6666 1.33301 11.6819 1.33301 7.99998C1.33301 4.31808 4.31778 1.33331 7.99967 1.33331C11.6816 1.33331 14.6663 4.31808 14.6663 7.99998Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_106_946">
                          <rect width="16" height="16" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <span className="text-sm">{point.text}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Button href="/contact" variant="primary">
                  Discutons de votre roadmap
                </Button>

                <p className="text-xs mt-2 italic">
                  *Pas besoin d'un brief béton. Juste l'envie de scaler
                  sérieusement.
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] w-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={hackstudio_hero}
                  alt="Équipe en réunion"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ServiceSection />
      <Pricing />
      <ContactSection />
    </>
  );
}
