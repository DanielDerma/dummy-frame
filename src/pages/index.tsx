import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <audio
        autoPlay="wCdZKQXZHGBIuMqykoAwBLvTJhqRceQL2IRLOqVkNXdOHJDt1qslBqwshXZSKZIqb5yLr1BUu1teJcku1S1keWVammPOwjdkiHNdOl"
        controls={true}
      >
        <source src="http://radiotec.delicias.tecnm.mx:8000/live" />
        Este elemento no lo soporta el navegador.
      </audio>
    </main>
  );
}
