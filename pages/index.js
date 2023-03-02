import Head from "next/head";
import Image from "next/image";
const collections = [
  {
    name: "Easy Product Management",
    href: "#",
    imageSrc: "/Frame 9.svg",
    imageAlt: "Easy Product Management",
    description:
      "Merchants can easily manage and update their product listings. This helps ensure accuracy and timeliness, which can lead to increased customer satisfaction.",
  },
  {
    name: "Efficient Employee Management",
    href: "#",
    imageSrc: "/Frame 189.svg",
    imageAlt: "Efficient Employee Management",
    description:
      "Merchants can easily manage their staff. This can include tracking hours worked, assigning tasks, and managing schedules. By streamlining these processes, merchants can focus more on growing their business.",
  },
  {
    name: "Customizable",
    href: "#",
    imageSrc: "/Frame.svg",
    imageAlt: "Customizable",
    description:
      "The ability to add merchant sites and domains means that each merchant can have their own unique look and feel. This can help differentiate their brand from competitors and create a more personalized shopping experience for customers.",
  },
];

export default function Home() {
  return (
    <>
      <div className="relative bg-gray-900">
        <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
          <img
            src="/image.png"
            alt=""
            className="h-full w-full object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gray-900 opacity-75"
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(63, 166, 161, 0.4), rgba(63, 166, 161, 0.4)), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
          }}
        />

        <div className="relative mx-auto flex max-w-6xl flex-col items-start py-16 px-6 text-left sm:py-30 lg:px-0">
          <h1 className="text-4xl font-bold tracking-tight text-white lg:text-6xl">
            Your Pharmaceuticals Management Made Super Easy
          </h1>
          <p className="mt-4 text-xl text-white">
            Streamline your pharmaceutical supply chain. From inventory
            management to order tracking, our B2B software makes it easy. Get
            real-time insights and analytics. Try it out today.
          </p>
          <a
            href="#"
            className="bg-white py-4 px-8 inline-block text-[#3FA6A1] font-bold text-base hover:bg-[#E8F8F7] transition-colors mt-8 rounded-md"
          >
            Become a Merchant
          </a>
        </div>
      </div>

      <section
        aria-labelledby="collection-heading"
        className="mx-auto max-w-xl px-4 sm:px-6 sm:pt-32 lg:max-w-7xl lg:px-8"
      >
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:space-y-0">
          {collections.map((collection) => (
            <a
              key={collection.name}
              href={collection.href}
              className="group block"
            >
              <div
                aria-hidden="true"
                className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6"
              >
                <img
                  src={collection.imageSrc}
                  alt={collection.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {collection.name}
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                {collection.description}
              </p>
            </a>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="social-impact-heading"
        className="mt-10 mx-auto max-w-7xl px-4 sm:px-6 sm:pt-32 lg:px-8"
      >
        <div className="relative overflow-hidden rounded-lg">
          <div className="absolute inset-0">
            <img
              src="/image4.jpg"
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="relative bg-gray-900 bg-opacity-5 py-32 px-6 sm:py-40 sm:px-12 lg:px-16"
          style={{
            backgroundImage:`linear-gradient(0deg, rgba(63, 166, 161, 0.4), rgba(63, 166, 161, 0.4)), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
          }}>
            <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
              <h2
                id="social-impact-heading"
                className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                <span className="block sm:inline">Are You Ready to Become a Merchant?</span>
              </h2>
              <p className="mt-3 text-xl text-white">
              "Empowering suppliers, enhancing pharmaceutical customer experiences - Your one-stop shop for all your pharmacy needs."
              </p>
              <a
                href="#"
                className="mt-8 bg-white py-4 px-8 inline-block text-[#3FA6A1] font-bold text-base hover:bg-[#E8F8F7] transition-colors mt-8 rounded-md"
              >
                Become a Merchant
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
