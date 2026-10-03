import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { connectDB } from "@/lib/mongoose";
import Contract from "@/models/Contract";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
    try {
        const session = await auth.api.getSession({
            headers: request.headers,
        });

        if (!session) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const formData = await request.formData();
        const file = formData.get("file");

        if (!(file instanceof File)) {
            return NextResponse.json(
                { error: "No file provided" },
                { status: 400 }
            );
        }

        const allowedTypes = [
            "application/pdf",
            "application/msword",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];

        if (!allowedTypes.includes(file.type)) {
            return NextResponse.json(
                { error: "Only PDF, DOC, and DOCX files are allowed." },
                { status: 400 }
            );
        }

        if (file.size > 10 * 1024 * 1024) {
            return NextResponse.json(
                { error: "File size must be less than 10MB." },
                { status: 400 }
            );
        }

        const uploadsDir = path.join(process.cwd(), "public", "uploads");

        await fs.mkdir(uploadsDir, { recursive: true });

        const fileName = `${Date.now()}-${file.name}`;
        const filePath = path.join(uploadsDir, fileName);

        const buffer = Buffer.from(await file.arrayBuffer());

        await fs.writeFile(filePath, buffer);

        await connectDB();

        const contract = await Contract.create({
            userId: session.user.id,
            originalName: file.name,
            fileName,
            fileType: file.type,
            fileSize: file.size,
            fileUrl: `/uploads/${fileName}`,
            status: "uploaded",
        });

        return NextResponse.json({
            success: true,
            contract,
        });
    } catch (error) {
        console.error("Contract upload error:", error);

        return NextResponse.json(
            { error: "Failed to upload contract" },
            { status: 500 }
        );
    }
}