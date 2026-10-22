import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const { shortUrl } = await params;

  let client = await clientPromise;
  let db = client.db("bitlinks");
  const collection = db.collection("shortLinks");

  const document = await collection.findOne({ shortUrl });
  if (document) {
    redirect(document.url);
  } else {
    notFound();
  }
}
