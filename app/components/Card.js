export default function Card({
  children,
  cols = 5, // Nombre de colonnes par défaut
  imagePosition = "top", // Position de l'image : "top" ou "bottom"
  icon, // Icône optionnelle
  title, // Titre optionnel
  className = "", // Classes supplémentaires
}) {
  const contentOrder =
    imagePosition === "bottom" ? "order-first" : "order-last";
  const imageOrder = imagePosition === "bottom" ? "order-last" : "order-first";

  // Gestion des colonnes avec un mapping explicite
  const getColSpanClass = (cols) => {
    switch (cols) {
      case 5:
        return "col-span-12 lg:col-span-5";
      case 7:
        return "col-span-12 lg:col-span-7";
      default:
        return "col-span-12";
    }
  };

  return (
    <div className={`card bg-base-300 ${getColSpanClass(cols)} ${className}`}>
      <div className="card-body flex flex-col h-full gap-6">
        {/* En-tête avec icône et titre si fournis */}
        {(icon || title) && (
          <div className="flex flex-col gap-3">
            <div className={`flex items-center gap-3 ${contentOrder}`}>
              {icon && (
                <div className="p-2 rounded-full bg-base-200 text-primary">
                  {icon}
                </div>
              )}
              {title && (
                <h3 className="card-title text-neutral-content">{title}</h3>
              )}
            </div>
            <div className={`flex flex-col gap-4 ${contentOrder}`}>
              {children}
            </div>
          </div>
        )}

        {/* Contenu principal */}

        {/* Zone d'image/contenu spécial */}
        <div
          className={`h-32 w-full bg-base-200 bg-opacity-5 rounded-md ${imageOrder}`}
        />
      </div>
    </div>
  );
}
