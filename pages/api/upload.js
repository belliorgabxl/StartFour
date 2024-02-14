import { NextResponse } from "next/server";
import { Readable } from "stream";
import Booked from "@/models/booking";
import connectMongoDB from "@/libs/mongodb";

export const revalidate = 0;


export default async function handlerPOST(req) {
  try {
    const { client, bucket } = await connectMongoDB();

    let image;
    const formData = await req.formData();

    for (const [key, value] of formData.entries()) {
      if (typeof value === "object") {
        image = Date.now() + value.name;
        const buffer = Buffer.from(await value.arrayBuffer());
        const stream = Readable.from(buffer);
        const uploadStream = bucket.openUploadStream(image, {});
        await stream.pipe(uploadStream);
      }
    }

    const newItem = new Booked({
      imageUrl: image,
    });
    await newItem.save();

    return NextResponse.json({ msg: "ok" });
  } catch (error) {
    console.error('Error in handlerPOST:', error);
    return NextResponse.error({ status: 500, body: 'Internal Server Error' });
  }
}

export async function handlerGET() {
  try {
    const { client, bucket } = await connectMongoDB();

    const booking = await Booked.find({});
    console.log(await Booked.find({}));

    return NextResponse.json(booking);
  } catch (error) {
    console.error('Error in handlerGET:', error);
    return NextResponse.error({ status: 500, body: 'Internal Server Error' });
  }
}
