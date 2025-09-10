"use client";
import { useState } from "react";

export default function Home() {
  const [category, setCategory] = useState("Sports");
  const categories = ["Global", "Business", "Entertainment", "Sports", "Health"];
  const tags = ["Donald Trump", "USA", "Politics", "2020"];

  // colores/sombras tuyos
  const radius = "rounded-[26px]";
  const card = `bg-white ${radius} shadow-[0_22px_50px_-24px_rgba(13,25,44,.18)]`;

  // tamaños del primer snippet
  const SIDEBAR_WIDTH = "18rem"; // w-72
  const COFFEE_H = "h-48";       // 12rem
  const SEARCH_H = "h-48";
  const JOURNALIST_H = "h-80";   // 20rem
  const FILM_H = "h-40";         // 10rem

  // subir Alex solo en desktop ancho
  const ALEX_SHIFT_XL = "xl:-mt-3";

  return (
    <main className="min-h-screen bg-[#EEF1F5] py-8 sm:py-10">
      {/* GRID RESPONSIVE:
         - base: 1 col
         - md:    2 cols
         - xl:    3 cols + sidebar fija (18rem)
      */}
      <div
        className="
          mx-auto w-full max-w-7xl
          px-4 sm:px-6 lg:px-8
          grid gap-6 sm:gap-8
          grid-cols-1
          md:grid-cols-2
          xl:[grid-template-columns:1fr_1fr_1fr_18rem]
        "
        style={{ gridTemplateColumns: undefined /* en xl manda la clase */ }}
      >
        {/* ===== HERO (full en móvil, 2 col en md, 3 col en xl) ===== */}
        <article className={`${card} order-1 col-span-1 md:col-span-2 xl:col-span-3 p-5 sm:p-6 min-w-0`}>
          <div className="flex flex-col gap-5 sm:gap-6 md:flex-row md:items-start">
            {/* Imagen hero */}
            <div className="relative w-full md:w-[40%] aspect-[16/9] md:aspect-[3/4] overflow-hidden rounded-[20px]">
              <img
                src="https://innovators.org.nz/wp-content/uploads/2023/04/n-tho-duc-XflP8HDNIIk-unsplash-scaled.jpg"
                alt="Hero image"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>

            {/* Texto */}
            <div className="flex-1 md:w-[60%] min-w-0">
              <h1 className="text-[22px] sm:text-[26px] leading-[1.18] tracking-[-0.005em] font-semibold text-[#1E293B]">
                Green plants are going to<br />
                Extinct about 500 times faster<br />
                than they should, Study finds
              </h1>
              <p className="mt-3 text-[13px] leading-relaxed text-[#64748B] max-w-[590px]">
                If you are the sort of person who just can not keep a plant alive, you are not alone
                according to a new study published June 10 in the journal Nature..
              </p>
              <div className="mt-5 flex items-center gap-3 text-[12px] text-[#748197]">
                <span className="h-8 w-8 rounded-full bg-[#E2E8F0] grid place-content-center">👤</span>
                <span className="font-medium text-[#334155]">Alexander Parkinson</span>
                <span>•</span>
                <time>Jun 20, 2019</time>
                <button className="ml-auto text-[#94A3B8]" aria-label="Bookmark">✎</button>
              </div>
            </div>
          </div>
        </article>

        {/* ===== SIDEBAR (apila tras el hero en móvil; fija a la derecha en xl) ===== */}
        <aside className={`order-2 xl:order-none xl:col-start-4 xl:row-span-7 flex flex-col gap-6`}>
          {/* Categorías */}
          <div className={`${card} p-3`}>
            <fieldset>
              <legend className="sr-only">Categories</legend>
              <ul className="space-y-2">
                {categories.map((label) => {
                  const active = category === label;
                  return (
                    <li key={label}>
                      <label
                        className={
                          "w-full flex items-center gap-3 rounded-[14px] px-3 py-2 text-[14px] cursor-pointer transition " +
                          (active ? "bg-[#EEF2FF] text-[#4F6AF3]" : "hover:bg-[#F8FAFC] text-[#374151]")
                        }
                      >
                        <input
                          type="radio"
                          name="category"
                          className="sr-only"
                          value={label}
                          checked={active}
                          onChange={() => setCategory(label)}
                        />
                        <span
                          aria-hidden="true"
                          className={
                            "h-9 w-9 grid place-content-center rounded-[12px] border " +
                            (active ? "border-[#CBD5FF] bg-white" : "border-[#E2E7EB] bg-white")
                          }
                        >
                          <span className={"h-2 w-2 rounded-full " + (active ? "bg-[#4F6AF3]" : "bg-[#CBD5E1]")} />
                        </span>
                        <span className="flex-1">{label}</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </fieldset>
          </div>

          {/* Film Card (sidebar) */}
          <div className={`${card} p-6`}>
            <div className="relative w-full overflow-hidden rounded-2xl" style={{ height: 160 }}>
              <img
                src="https://cw-gbl-gws-prod.azureedge.net/-/media/cw/apac/india/news/india-office-market.jpg?sc=0.375&rev=b2b9bc0c308c4c6bad897b4a7167a997&hash=323CC6252588EFCD27B7DFEF15CF383E"
                alt="Film cover"
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold leading-snug text-gray-800">An Inspiring Short Film</h3>
            <div className="flex items-center justify-between text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <span role="img" aria-label="views">👁</span>
                <span>80,989</span>
              </div>
            </div>
          </div>

          {/* Flechas */}
          <div className="flex justify-center gap-4">
            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-500 shadow-[0_24px_50px_-30px_rgba(13,25,44,.25)]" aria-label="Previous">←</button>
            <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-500 shadow-[0_24px_50px_-30px_rgba(13,25,44,.25)]" aria-label="Next">→</button>
          </div>

          {/* Tags compactos */}
          <div className="bg-white rounded-2xl p-4 flex justify-between items-center text-sm font-semibold shadow-[0_18px_40px_rgba(13,25,44,0.10)]">
            <span>Donald Trump</span>
            <div className="flex gap-2 items-center text-gray-500">
              <span>USA</span>
              <span className="bg-[#F1F5F9] px-2 py-1 rounded-full text-xs text-[#334155]">Politics</span>
              <span className="bg-[#4F6AF3] text-white px-2 py-1 rounded-full text-xs">2020</span>
            </div>
          </div>
        </aside>

        {/* ===== Coffee (col 1) ===== */}
        <article className={`${card} order-3 col-span-1 overflow-hidden`}>
          <div className="relative w-full overflow-hidden rounded-3xl" style={{ height: 192 }}>
            <img
              src="https://static.fabfitfun.com/magazine/wp-content/uploads/2020/08/21092117/perfect-coffee.jpg"
              alt="Perfect morning coffee"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="p-6">
            <h2 className="text-[18px] font-semibold text-[#0F172A] leading-snug">
              How to make the perfect morning coffee, according to the Science
            </h2>
            <div className="mt-2 flex items-center gap-3 text-[12px] text-[#748197]">
              <span className="h-8 w-8 rounded-full bg-[#E2E8F0] grid place-content-center">👩🏻‍💼</span>
              <span className="font-medium text-[#334155]">Tara Gibson</span>
              <span>•</span>
              <time>Jul 13, 2019</time>
            </div>
          </div>
        </article>

        {/* ===== Search (col 2–3 en xl, 2 cols en md) ===== */}
        <div className={`${card} order-4 col-span-1 md:col-span-2 xl:col-start-2 xl:col-span-2 ${SEARCH_H} flex flex-col min-w-0`}>
          <div className="px-6 pt-6 pb-3 flex items-center gap-3">
            <input
              type="search"
              placeholder="Search for articles"
              aria-label="Search for articles"
              className="flex-1 text-[14px] outline-none placeholder:text-[#A2B0C1] text-[#0F172A] bg-[#EEF2F7] rounded-lg px-3 py-2"
            />
            <button
              type="button"
              aria-label="Search"
              className="h-11 w-11 rounded-[14px] grid place-content-center bg-[#4F6AF3] text-white text-[18px]"
            >
              🔍
            </button>
          </div>
          <div className="px-6 pb-4 mt-auto">
            <div className="bg-[#F6F7FB] rounded-[16px] px-4 py-2.5 text-[12px] text-[#6B7280]">
              <span className="mr-3">#Politics</span>
              <span className="mr-3">#Science</span>
              <span className="mr-3">#Movies</span>
              <span>#Technology</span>
            </div>
          </div>
        </div>


        {/* ===== Alex (2 cols en md; 2 cols (2–3) en xl) ===== */}
        <section
          className={`${card} order-6 col-span-1 md:col-span-2 xl:col-start-2 xl:col-span-2 ${JOURNALIST_H} ${ALEX_SHIFT_XL} flex flex-col items-center text-center`}
        >
          <div className="w-24 h-24 rounded-full bg-[#e9eef6] flex items-center justify-center overflow-hidden mt-6" aria-hidden="true" />
          <div className="mt-5">
            <h3 className="text-lg font-bold text-gray-800">Alex Morrison</h3>
            <p className="text-sm text-gray-500">Senior Journalist</p>
          </div>
          <div className="flex w-full justify-around mt-4">
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold text-gray-800">34</span>
              <span className="text-xs text-gray-500">Articles</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold text-gray-800">980</span>
              <span className="text-xs text-gray-500">Followers</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-lg font-semibold text-gray-800">8.9</span>
              <span className="text-xs text-gray-500">Rating</span>
            </div>
          </div>
          <div className="flex gap-4 mt-6 w-full px-6">
            <button className="flex-1 py-2 rounded-xl border border-[#d9e0e8] text-gray-800">Chat</button>
            <button className="flex-1 py-2 rounded-xl bg-blue-600 text-white">Follow</button>
          </div>
        </section>
      </div>
    </main>
  );
}


