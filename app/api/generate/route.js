import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  const body = await request.json();

  let client = await clientPromise;
  let db = client.db("bitlinks");
  const collection = db.collection("shortLinks");

  const document = await collection.findOne({ url: body.url });
  if (document) {
    return Response.json({
      message: "Link already exists",
      shortUrl: document.shortUrl,
    });
  }

  const shortUrl = "Test";

  const result = await collection.insertOne({
    url: body.url,
    shortUrl,
  });

  return Response.json(result);
}
