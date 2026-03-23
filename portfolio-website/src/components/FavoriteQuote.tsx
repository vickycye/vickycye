export function FavoriteQuote() {
  return (
    <section className="bg-[var(--rectangle-orange2)] border-y border-[var(--palette-dark-gray)] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <blockquote className="max-w-4xl mx-auto text-center py-6">
        <p className="text-4xl md:text-5xl text-white">
          AI is the new electricity. Just as electricity transformed almost everything 100 years ago, today I actually have a hard time thinking of an industry that I don&apos;t think AI will transform in the next several years.
        </p>
        <footer className="mt-8 text-xl text-white/90">
          — Andrew Ng
        </footer>
      </blockquote>
      </div>
    </section>
  );
}
