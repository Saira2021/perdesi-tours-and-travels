import Link from "next/link";
import { TOURS_INDEX_PATH } from "@/lib/site";

export default function TourNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-6 text-center">
      <h1 className="text-4xl font-display">This package isn&apos;t available</h1>
      <Link
        href={TOURS_INDEX_PATH}
        className="text-sm font-bold uppercase tracking-[0.2em] text-sage border-b-2 border-sage pb-1"
      >
        Back to all tours
      </Link>
    </div>
  );
}
