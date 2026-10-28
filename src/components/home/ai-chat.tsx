"use client";

import { MessageCircle, Send, X } from "lucide-react";
import { useEffect, useId, useRef, useState, type ReactNode } from "react";

type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  text: string;
};

const welcome = "Hoi! 👋 Waarmee kan ik je vandaag helpen?";

export function OpenChatButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => window.dispatchEvent(new Event("fastticket-open-chat"))}
    >
      {children}
    </button>
  );
}

export function AiChat() {
  const titleId = useId();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: "welcome", role: "assistant", text: welcome },
  ]);

  useEffect(() => {
    const openChat = () => setOpen(true);
    window.addEventListener("fastticket-open-chat", openChat);
    return () => window.removeEventListener("fastticket-open-chat", openChat);
  }, []);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  function sendMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = draft.trim();
    if (!text) return;

    setMessages((current) => [
      ...current,
      { id: crypto.randomUUID(), role: "user", text },
      {
        id: crypto.randomUUID(),
        role: "assistant",
        text: "De assistent is nog niet gekoppeld. Maak een ticket aan, dan pakken we je vraag op.",
      },
    ]);
    setDraft("");
  }

  return (
    <div className="fixed right-4 bottom-4 z-40 sm:right-6 sm:bottom-6">
      <section
        id="fastticket-ai"
        aria-labelledby={titleId}
        aria-hidden={!open}
        inert={!open}
        className={`absolute right-0 bottom-16 w-[min(100vw-2rem,22.5rem)] origin-bottom-right overflow-hidden rounded-lg border border-border bg-card text-foreground shadow-[0_18px_50px_rgba(35,40,37,.12)] transition duration-200 motion-reduce:transition-none ${
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-3 scale-95 opacity-0"
        }`}
      >
        <header className="flex items-center justify-between gap-3 border-b border-border bg-card px-4 py-3">
          <div>
            <h2 id={titleId} className="text-sm font-semibold text-foreground">
              FastTicket AI
            </h2>
            <p className="text-xs text-gold-ink">Supportassistent</p>
          </div>
          <button
            type="button"
            className="grid size-8 place-items-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground"
            aria-label="Sluit chat"
            onClick={() => setOpen(false)}
          >
            <X className="size-4" aria-hidden="true" />
          </button>
        </header>
        <div className="flex max-h-[min(52vh,24rem)] flex-col gap-3 overflow-y-auto bg-background px-4 py-4">
          {messages.map((message) => (
            <p
              key={message.id}
              className={
                message.role === "user"
                  ? "ml-8 rounded-lg rounded-br-md bg-primary px-3 py-2 text-sm text-primary-foreground"
                  : "mr-8 rounded-lg rounded-bl-md border border-border bg-card px-3 py-2 text-sm text-foreground"
              }
            >
              {message.text}
            </p>
          ))}
        </div>
        <form className="flex items-center gap-2 border-t border-border bg-card p-3" onSubmit={sendMessage}>
          <label className="sr-only" htmlFor="ai-bericht">
            Bericht aan FastTicket AI
          </label>
          <input
            id="ai-bericht"
            ref={inputRef}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            placeholder="Typ je bericht..."
            className="h-10 min-w-0 flex-1 rounded-lg border border-input bg-background px-3 text-sm outline-none focus-visible:border-gold-ink focus-visible:ring-3 focus-visible:ring-gold-ink/30"
          />
          <button
            type="submit"
            className="grid size-10 shrink-0 place-items-center rounded-lg bg-primary text-gold"
            aria-label="Verstuur bericht"
          >
            <Send className="size-4" aria-hidden="true" />
          </button>
        </form>
      </section>

      <button
        type="button"
        className="grid size-14 place-items-center rounded-lg bg-primary text-gold shadow-[0_12px_30px_rgba(35,40,37,.18)] ring-1 ring-gold/50 transition hover:-translate-y-0.5"
        aria-expanded={open}
        aria-controls="fastticket-ai"
        aria-label={open ? "Sluit FastTicket AI" : "Open FastTicket AI"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? (
          <X className="size-5" aria-hidden="true" />
        ) : (
          <MessageCircle className="size-5" aria-hidden="true" />
        )}
      </button>
    </div>
  );
}
