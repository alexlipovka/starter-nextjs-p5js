import Image from "next/image";
import { P5jsContainer } from "./P5jsContainer";
import { mySketch } from "./sketches/mysketch";

export default function Home() {
  return (
    <main className="w-lvw h-lvh p-0 m-0 overflow-hidden">
        <P5jsContainer sketch={mySketch} />
    </main>
  );
}
