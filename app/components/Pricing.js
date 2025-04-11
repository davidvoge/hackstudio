import Button from "./Button";
const pricingData = [
  {
    id: "build",
    title: "Build",
    description:
      "Site performant et rapide livré clé-en-main rapidement (- de 30jours)",
    price: "À partir de 5K€",
    features: [
      {
        category: "Strategy",
        items: ["Challenge brief asynchrone"],
      },
      {
        category: "Build",
        items: ["Webdesign", "Website"],
      },
      {
        category: "Grow",
        items: ["Analytics config", "SEO Friendly"],
      },
    ],
    tags: ["lancement de projet", "site webflow"],
    isPopular: false,
  },
  {
    id: "growth",
    title: "Growth",
    description: "Augmentation des performances +20%",
    price: "À partir de 15K€",
    features: [
      {
        category: "Strategy",
        items: ["Audit", "Design thinking (journée présentielle)"],
      },
      {
        category: "Build",
        items: [
          "Branding web",
          "Webdesign",
          "Custom Website with custom features",
        ],
      },
      {
        category: "Grow",
        items: ["Marketing roadmap", "SEO Optimized website", "Data config"],
      },
    ],
    tags: ["Acquisition client", "Convertir"],
    isPopular: true,
  },
  {
    id: "scale",
    title: "Scale",
    description: "Personnalized KPI base on your goals",
    price: "Sur devis",
    features: [
      {
        category: "Strategy",
        items: ["Audits approfondis", "Design thinking (journée présentielle)"],
      },
      {
        category: "Build",
        items: [
          "Branding avancé",
          "Webdesign",
          "Premium Website with unlimited custom features",
        ],
      },
      {
        category: "Grow",
        items: [
          "Complete business roadmap",
          "Dashboard Analytics + advanced Data",
          "Complete SEO strategy",
        ],
      },
      {
        category: "Optimize",
        items: ["3 months of the roadmap execution"],
      },
    ],
    tags: [
      "Comprendre ses clients",
      "Maximiser sa conversion",
      "Réduire son churn",
    ],
    isPopular: false,
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3334 4L6.00008 11.3333L2.66675 8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingCard({ plan }) {
  return (
    <div
      className={`relative flex flex-col p-6 rounded-xl ${
        plan.isPopular ? "bg-base-300 border-2 border-primary" : "bg-base-100"
      }`}
    >
      {plan.isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="badge badge-ghost">Recommandé</span>
        </div>
      )}

      {/* En-tête */}
      <div className="mb-6">
        <h3 className="text-2xl font-medium mb-2">{plan.title}</h3>
        <p className="text-sm mb-4">{plan.description}</p>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {plan.tags.map((tag, index) => (
          <span key={index} className="badge badge-outline text-xs">
            {tag}
          </span>
        ))}
      </div>

      {/* Features */}
      <div className="flex-1 space-y-6">
        {plan.features.map((section, index) => (
          <div key={index}>
            <h4 className="text-md font-medium mb-3 text-neutral-content">
              {section.category}
            </h4>
            <ul className="space-y-3">
              {section.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-start gap-3 text-sm font-light"
                >
                  <span className="mt-0.5">
                    <CheckIcon />
                  </span>
                  <span className="text-light text-[0.875rem]">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 flex flex-col">
        <Button
          href="/contact"
          variant={`${plan.isPopular ? "btn" : "outline"}`}
        >
          Demander votre roadmap de malade
        </Button>
      </div>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="py-20 text-neutral-content">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-medium mb-4">
            Un offre adaptée à chaque étape de votre croissance
          </h2>
          <p className="text-md font-light">
            Nous transformons votre produit en actif de croissance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8  items-end">
          {pricingData.map((plan) => (
            <PricingCard key={plan.id} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
