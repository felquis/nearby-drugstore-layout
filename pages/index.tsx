import type { NextPage } from 'next'
import Head from 'next/head'
import LocationItem from "../components/LocationItem";
import UserLocation from "../components/UserLocation";

export const locations = [
  {
    lat: -26.909413,
    lng: -48.694893,
    label: "label",
    phone: "(01) 2345-6789",
  },
  {
    lat: -26.90072411564434,
    lng: -48.67754899066218,
    label: "label",
    phone: "(01) 2345-6789",
  },
  {
    lat: -26.896070118570382,
    lng: -48.69431291250385,
    label: "label",
    phone: "(01) 2345-6789",
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

      <main className="text-green-700 pb-4 bg-green-400">
        <header className="bg-green-50 px-2 sm:px-6 pt-6 pb-3">
          <p>www.example.com</p>

          <h1 className="text-3xl font-bold mt-8 text-green-500">
            Nihil esse amet <span className="text-green-700">molestiae</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 py-2 px-2 sm:px-6">
          <UserLocation />
        </div>

        <footer className="bg-green-900 px-2 sm:px-6 py-2">
          <p className="text-sm text-white">Drugstore</p>
        </footer>
      </main>
    </>
  );
};

export default Home
