"use client";
import { useState } from "react";
import rot13 from "@/lib/rot13";

export default function Rot13Converter() {
  const [text, setText] = useState("gnkvabzvn@tznvy.pbz");

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(text);
      alert(`${text} foi copiado.`);
    } catch (error) {
      console.error("Falha em copiar:", error);
    }
  }

  return (
    <div className="space-y-3 md:mb-[50%]">
      <div>
        <input value={text} readOnly />
      </div>

      <div className="flex gap-10">
        <button
          type="button"
          onClick={() => setText(rot13(text))}
          className="cursor-pointer  hover:text-[#b4b4b4]  font-medium transition"
        >
          Revelar
        </button>

        <button
          type="button"
          onClick={copyToClipboard}
          className=" cursor-pointer  hover:text-[#b4b4b4]   font-medium  transition"
        >
          Copiar
        </button>
      </div>
    </div>
  );
}
