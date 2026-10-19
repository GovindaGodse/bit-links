"use client";

import React, { useState } from "react";

function Generate() {
  const [url, setUrl] = useState("");
  const [generatedShortURL, setGeneratedShortURL] = useState("");

  const handleOnChange = (e) => {
    setUrl(e.target.value);
  };

  const generate = () => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const requestBody = JSON.stringify({
      url,
    });

    const requestOptions = {
      method: "POST",
      headers: headers,
      body: requestBody,
      redirect: "follow",
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setGeneratedShortURL(result.shortUrl)
        setUrl("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex-centered grow flex-col gap-10">
      <h1 className="text-6xl font-bold">
        <span className="text-indigo-400">Bit</span> Links
      </h1>
      <section className="flex-centered gap-8">
        <input
          value={url}
          type="text"
          name="urlInput"
          id="urlInput"
          className="rounded-full border w-120 focus:outline-none focus:ring-0  border-transparent [background:linear-gradient(#0f172a,#0f172a)_padding-box,linear-gradient(to_right,#818cf8,#67e8f9)_border-box] px-4 py-2"
          placeholder="Paste your URL"
          onChange={handleOnChange}
        />
        <button
          className="app-button enabled:hover:cursor-pointer disabled:cursor-not-allowed px-4 py-2 rounded-full font-semibold"
          onClick={generate}
          disabled={url.trim().length === 0}
        >
          Generate
        </button>
      </section>
    </div>
  );
}

export default Generate;
