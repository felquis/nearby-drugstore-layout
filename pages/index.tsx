import type { NextPage } from 'next'
import Head from "next/head";
import UserLocation from "../components/UserLocation";

export const locations = [
  {
    lat: -26.909413,
    lng: -48.694893,
    label: "Place 1",
    phone: "(01) 2345-6789",
  },
  {
    lat: -26.90072411564434,
    lng: -48.67754899066218,
    label: "Place 2",
    phone: "(02) 2345-6789",
  },
  {
    lat: -26.896070118570382,
    lng: -48.69431291250385,
    label: "Place 3",
    phone: "(03) 2345-6789",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nihil esse amet molestiae</title>
        <meta
          name="description"
          content="Rerum vero dolor pariatur dolorem eius maxime. Odio aut dolores et quas maxime reprehenderit ea architecto. Nihil esse amet molestiae sit voluptatibus cum autem et. Est in atque eligendi id dolores ratione facilis quaerat. Ab saepe nihil et. Animi architecto consequatur voluptatibus"
        />
      </Head>

      <main className="text-red-700 pb-4 bg-red-400">
        <header className="bg-red-50 px-2 sm:px-6 pt-6 pb-3">
          <p>www.example.com</p>

          <h1 className="text-3xl font-bold mt-8 text-red-500">
            Nihil esse amet <span className="text-red-700">molestiae</span>
          </h1>
        </header>

        <div className="py-2 px-2 sm:px-6">
          <UserLocation />
        </div>

        <footer className="bg-red-900 px-2 sm:px-6 py-2">
          <p className="text-sm text-white">Store</p>
        </footer>
      </main>
    </>
  );
};

export default Home
