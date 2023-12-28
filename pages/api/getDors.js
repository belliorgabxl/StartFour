import connectMongoDB from "@/libs/mongodb";
import Dors from "@/models/dormitory";
import { NextResponse } from "next/server";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { type, dorm_name, location, img, price, detail } =
      await request.json();
    await connectMongoDB();
    await Dors.create({ type, dorm_name, location, img, price, detail });
    return res.json({ message: "Update Dormitory Success" }, { status: 201 });
  }
  if (req.method === "GET") {
    await connectMongoDB();
    const dormitory = await Dors.find();
    return res.json({ dormitory });
  }
}
