"use client";

export function InquiryForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-card p-8 rounded-2xl border border-border shadow-sm space-y-5"
    >
      <div className="grid grid-cols-2 gap-4">
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-foreground/60">
            Your name
          </span>
          <input
            type="text"
            className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-sage"
          />
        </label>
        <label className="block">
          <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-foreground/60">
            WhatsApp
          </span>
          <input
            type="tel"
            className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-sage"
          />
        </label>
      </div>
      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-foreground/60">
          Destination
        </span>
        <select className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-sage">
          <option>Kalam Valley</option>
          <option>Hunza & Gilgit</option>
          <option>Skardu</option>
          <option>Naran–Kaghan</option>
          <option>Fairy Meadows</option>
          <option>Custom itinerary</option>
        </select>
      </label>
      <label className="block">
        <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-foreground/60">
          Group size & dates
        </span>
        <textarea
          rows={3}
          className="mt-2 w-full bg-background border border-border rounded-md px-4 py-3 text-sm focus:outline-none focus:border-sage"
          placeholder="E.g. 2 adults, mid-July, 6–7 days"
        />
      </label>
      <button
        type="submit"
        className="w-full bg-sage text-cream py-4 rounded-full text-xs font-bold uppercase tracking-[0.22em] hover:bg-ink transition-colors"
      >
        Send Inquiry
      </button>
    </form>
  );
}
