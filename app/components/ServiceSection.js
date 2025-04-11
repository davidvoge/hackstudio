import Card from "./Card";

const services = [
  {
    id: "impact",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
        />
      </svg>
    ),
    title: "Impact client",
    description: "Graphique montrant la progression moyenne des KPIs clients",
    example: 'ex: "Conversion +18%", "Engagement +35%"',
    imagePosition: "bottom",
    cols: 7,
  },
  {
    id: "products",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "Nos derniers produits",
    description: "Cliquables des 3 derniers projets avec nom du client",
    example: 'hover révélant les résultats clés (ex: "+42% de conversion")',
    imagePosition: "top",
    cols: 5,
  },
  {
    id: "methodology",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
        />
      </svg>
    ),
    title: "Methodologie",
    description: "Timeline sûrement qui montre les différents étapes",
    imagePosition: "top",
    cols: 5,
  },
  {
    id: "pillars",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Nos pilliers",
    description: "Brand/Design, Tech/Dev, Stratégie Marketing, Data",
    subDescription: "description de chaque pilier au survol (2 phrases)",
    imagePosition: "bottom",
    cols: 7,
  },
];

export default function ServiceSection() {
  return (
    <section className="py-12 bg-neutral text-neutral-content">
      <div className="container mx-auto px-4">
        <h2 className="text-[2.125rem] font-medium text-neutral-content mb-8">
          Titre de la section
        </h2>

        <div className="grid grid-cols-12 gap-6">
          {services.map((service) => (
            <Card
              key={service.id}
              cols={service.cols}
              imagePosition={service.imagePosition}
              icon={service.icon}
              title={service.title}
            >
              <p className="font-light">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
