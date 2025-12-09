import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  email?: string;
  company?: string;
  adSpend?: string;
  goals?: string;
  budget?: string;
};

const requiredFields: (keyof ContactPayload)[] = ["name", "email", "goals"];

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as ContactPayload;
    const missing = requiredFields.filter((field) => {
      const value = data[field];
      return !value || value.trim().length === 0;
    });

    if (missing.length > 0) {
      return NextResponse.json(
        {
          ok: false,
          message: `Missing required field${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}`
        },
        { status: 400 }
      );
    }

    await new Promise((resolve) => setTimeout(resolve, 600));

    console.info("Adcraze lead submission", {
      receivedAt: new Date().toISOString(),
      ...data
    });

    return NextResponse.json({
      ok: true,
      message: "Thanks for reaching out. The Adcraze team will respond within one business day."
    });
  } catch (error) {
    console.error("Failed to process contact submission", error);
    return NextResponse.json(
      {
        ok: false,
        message: "We could not process your request. Please try again or email hello@adcraze.com."
      },
      { status: 500 }
    );
  }
}
