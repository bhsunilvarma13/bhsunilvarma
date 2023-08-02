import React from "react";
import axios from "axios";

async function getData(url: string) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching the JSX content:", error);
  }
}

export default async function BlogContent({
  filePromise,
}: {
  filePromise: Promise<any>;
}) {
  const file = await filePromise;

  const data = await getData(file.href);

  const HTMLData = { __html: data };

  return <div className="my-8" dangerouslySetInnerHTML={HTMLData} />;
}
