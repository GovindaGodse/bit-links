import clientPromise from "@/lib/mongodb";

function generateShortUrl() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

  return Array.from(
    { length: 6 },
    () => characters[Math.floor(Math.random() * characters.length)],
  ).join("");
}

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

  let shortUrl;
  do {
    shortUrl = generateShortUrl();
  } while (await collection.findOne({ shortUrl }));

  const result = await collection.insertOne({
    url: body.url,
    shortUrl,
  });

  return Response.json(result);
}
