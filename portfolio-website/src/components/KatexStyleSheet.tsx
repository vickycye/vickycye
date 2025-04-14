'use client';

// components/KatexStylesheet.tsx
export default function KatexStyleSheet() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.css"
        integrity="sha512-fHwaWebuwA7NSF5Qg/af4UeDx9XqUpYpOGgubo3yWu+b2IQR4UeQwbb42Ti7gVAjNtVoI/I9TEoYeu9omwcC6g=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </>
  );
}