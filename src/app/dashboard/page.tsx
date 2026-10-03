"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function DashboardPage() {
  const router = useRouter();
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [isPending, session, router]);

  const handleUpload = async () => {
    if (!file) {
      setUploadMessage("Please select a contract first.");
      return;
    }

    setUploading(true);
    setUploadMessage("");

    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/contracts/upload", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (!response.ok) {
      setUploadMessage(data.error || "Upload failed.");
      setUploading(false);
      return;
    }

    setUploadMessage("Contract uploaded successfully.");
    setFile(null);
    setUploading(false);
  };

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/login");
    router.refresh();
  };

  if (isPending || !session) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#020617] text-[#F8FAFC]">
        Loading...
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#020617] px-6 py-12 text-[#F8FAFC]">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              Welcome, {session.user.name}
            </h1>

            <p className="mt-2 text-[#94A3B8]">
              {session.user.email}
            </p>
          </div>

          <button
            onClick={handleLogout}
            className="rounded-md border border-[#4169E1] px-5 py-2.5 text-sm font-semibold text-[#4169E1] transition hover:bg-[#4169E1] hover:text-white"
          >
            Sign Out
          </button>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-[#0F172A] p-6">
          <h2 className="text-xl font-semibold">
            RechtLens Dashboard
          </h2>

          <div className="mt-6 rounded-2xl border border-white/10 bg-[#0F172A] p-6">
            <h2 className="text-xl font-semibold">
              Upload Contract
            </h2>

            <p className="mt-2 text-sm text-[#94A3B8]">
              Upload a contract to begin analysis.
            </p>

            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="mt-5 block w-full rounded-lg border border-white/10 bg-[#020617] p-3 text-sm text-[#94A3B8]"
            />

            <button
              type="button"
              onClick={handleUpload}
              disabled={uploading}
              className="mt-4 rounded-lg bg-[#4169E1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5A7BFF] disabled:opacity-60"
            >
              {uploading ? "Uploading..." : "Upload Contract"}
            </button>
            {uploadMessage && (
              <p className="mt-3 text-sm text-[#94A3B8]">
                {uploadMessage}
              </p>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}