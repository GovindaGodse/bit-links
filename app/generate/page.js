"use client";

import React, { useState } from "react";

function Generate() {
  const [url, setUrl] = useState("");
  const [generatedShortURL, setGeneratedShortURL] = useState("");
  const isValidUrl = (value) => {
    try {
      const parsedUrl = new URL(value.trim());
      return (
        ["http:", "https:"].includes(parsedUrl.protocol) &&
        Boolean(parsedUrl.hostname)
      );
    } catch {
      return false;
    }
  };

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
        setGeneratedShortURL(result.shortUrl);
        setUrl("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex-centered grow flex-col gap-10">
      <h1 className="text-6xl font-bold">
        SHORT LINKS
      </h1>
      <section className="flex-centered gap-6">
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
          disabled={!isValidUrl(url)}
        >
          Generate
        </button>
      </section>

      <div className="flex-centered h-6 gap-2">
        {generatedShortURL && (
          <>
            <p className="text-sm font-semibold tracking-wide text-slate-300">
              Short url -
            </p>
            <a
              className="font-medium text-indigo-400 underline decoration-indigo-400/50 underline-offset-4 transition-colors hover:text-cyan-300 hover:decoration-cyan-300 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
              href={`/${generatedShortURL}`}
            >{`/${generatedShortURL}`}</a>
          </>
        )}
      </div>
    </div>
  );
}

export default Generate;
