import idea from '../assets/idea.svg'

export default function IdeaSection() {
  return (
    <section
      id="idea"
      className="w-full flex flex-col h-[calc(100vh)]"
      style={{ paddingLeft: '10vw', paddingRight: '10vw' }}
    >
      {/* Headline: top‐left within the 10vw gutter */}
      <h1 className="text-[60px] font-['Lilita_One',cursive]">
        Idea
      </h1>

      {/* Illustration: takes the rest of the section, full width between gutters */}
      <div className="flex-1 flex items-center justify-center">
        <img
          src={idea}
          alt="Idea illustration"
          className="w-full h-auto drop-shadow-xl"
        />
      </div>
    </section>
  )
}
