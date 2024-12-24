import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  revalidatePath("/");
  revalidatePath("/about");
  revalidatePath("/products");
  revalidatePath("/contact");
  revalidatePath("/news");
  revalidatePath("/clinical-management");
  revalidatePath("/patient-engagement");
  revalidatePath("/management-perspective");

  return NextResponse.json({
    message: "Revalidate successful",
  });
}

export const revalidate = 0;
