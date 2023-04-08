import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <iframe
        src="http://radiotec.delicias.tecnm.mx/"
        width="800"
        height="600"
      ></iframe>
    </main>
  );
}
