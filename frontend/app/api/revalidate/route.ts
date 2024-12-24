import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
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
  } catch (e) {
    return NextResponse.json({
      message: "Error revalidation ",
    });
  }
}

export const revalidate = 0;
