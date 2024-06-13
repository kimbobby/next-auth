import connectDB from "@/lib/db";
import { User } from "@/lib/schema";

export async function GET(request: Request) {
  //mongodb connection
  connectDB();
  //mongodb schema Query
  const users = await User.find({});
  return Response.json(users);
}
