export default function SupportSection() {
  return (
    <section
      id="support"
      className="w-full flex flex-col h-[calc(100vh-5rem)]"
      style={{ paddingLeft: '10vw', paddingRight: '10vw' }}
    >
      {/* Headline in Lilita One, top-left within the gutter */}
      <h1 className="text-[60px] font-['Lilita_One',cursive]">
        Support
      </h1>

      {/* Body and email centered in remaining space */}
      <div className="flex-1 flex flex-col items-center justify-center space-y-6 text-center">
        <p className="text-[28px]">
          If you are noticing Bugs or having other issues please do not hesitate to write us:
        </p>
        <a
          href="mailto:support@the-caos.club"
          className="text-[36px] text-[#B196FF] hover:underline"
        >
          support@the-caos.club
        </a>
      </div>
    </section>
  )
}
