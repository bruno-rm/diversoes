import Image from "next/image";

const gallery = [
  {
    id: 1,
    image: "/diversoes-102026.jpeg",
    description: "2026",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-6  pb-5">
      <div>
        <h2 className="text-lg">
          Diversões Eletrônicas é uma banda formada em 2012. Tem como estilo
          queda livre, ritmo & noise. Sua busca parece misturar o nome de uma
          música famosa com a cena de Goiânia, mas não existe uma banda chamada
          "Diversões Eletrônicas" originária de Goiânia.
        </h2>
      </div>
      <div className="flex justify-center">
        {gallery.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm"
          >
            <Image
              src={item.image}
              alt={item.description}
              width={200}
              height={200}
              className="h-auto w-full object-cover"
            />

            <div className="p-4">
              <p className="text-sm text-right text-gray-700">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
