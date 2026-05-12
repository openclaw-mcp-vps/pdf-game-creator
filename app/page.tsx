export default function Home() {
  const faqs = [
    {
      q: "What kinds of games can I embed in a PDF?",
      a: "You can embed quizzes, memory matching games, click-to-reveal interactions, and simple drag-and-drop puzzles — all powered by embedded JavaScript inside the PDF."
    },
    {
      q: "Which PDF readers support the interactive elements?",
      a: "Adobe Acrobat Reader and Adobe Acrobat Pro fully support embedded JavaScript. Some browser-based viewers have limited support, so we recommend Acrobat for the best experience."
    },
    {
      q: "Do I need coding skills to use PDF Game Creator?",
      a: "No. The visual editor lets you drag-drop game components, configure interactions with simple settings, and export a ready-to-play PDF — no code required."
    }
  ]

  return (
    <main className="min-h-screen flex flex-col items-center px-4 py-16">
      {/* Hero */}
      <section className="max-w-3xl w-full text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Document Tools
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-6">
          Create Interactive Games<br />
          <span className="text-[#58a6ff]">Inside PDF Documents</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Embed quizzes, puzzles, and interactive elements directly into your PDFs. Perfect for educators, marketers, and presentation designers who want to engage their audience.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
        >
          Start Creating — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No coding required.</p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🎮", title: "Visual Game Editor", desc: "Drag-drop game components onto your PDF canvas with zero code." },
            { icon: "📄", title: "Export Playable PDFs", desc: "Generate PDF files with embedded JavaScript games using PDF-lib." },
            { icon: "🎯", title: "Engage Your Audience", desc: "Quizzes, memory games, and puzzles that work inside any PDF reader." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <div className="font-semibold text-white mb-1">{f.title}</div>
              <div className="text-sm text-[#8b949e]">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm w-full mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro</div>
          <div className="text-5xl font-extrabold text-white mb-1">$19</div>
          <div className="text-[#8b949e] mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited PDF exports",
              "All game types included",
              "Visual drag-drop editor",
              "PDF-lib powered generation",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl w-full mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e]">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} PDF Game Creator. All rights reserved.
      </footer>
    </main>
  )
}
