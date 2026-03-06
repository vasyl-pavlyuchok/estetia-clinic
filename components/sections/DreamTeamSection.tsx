type TeamMember = {
  name: string;
  role: string;
  focus: string;
};

const TEAM: TeamMember[] = [
  {
    name: 'Dra. Elena Varela',
    role: 'Direccion Medica',
    focus: 'Armonizacion facial y bioestimulacion avanzada.',
  },
  {
    name: 'Dr. Nicolas Ruiz',
    role: 'Medicina Estetica Inyectable',
    focus: 'Precision anatomica y resultados naturales de alta definicion.',
  },
  {
    name: 'Dra. Sofia Mendez',
    role: 'Dermatologia Estetica',
    focus: 'Laseres, regeneracion dermica y protocolos de textura.',
  },
];

export default function DreamTeamSection() {
  return (
    <section
      id="dream-team"
      className="bg-[#F6F7F8] py-20 md:py-24"
      aria-label="The Aesthetic Dream Team"
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2C5F6F]">
          The Aesthetic Dream Team
        </p>
        <h2 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-black md:text-5xl">
          Talento medico con mirada editorial y obsesion por la simetria.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="rounded-3xl border border-black/12 bg-white p-6 shadow-[0_20px_42px_-36px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-56 overflow-hidden rounded-2xl border border-black/10 bg-[linear-gradient(160deg,#FFFFFF_0%,#ECEFF2_100%)]">
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute left-4 top-4 h-8 w-8 rounded-full border border-[#C9A96E]/55 bg-[#C9A96E]/14" />
              </div>
              <p className="mt-5 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#2C5F6F]">
                {member.role}
              </p>
              <h3 className="font-heading mt-2 text-2xl text-black">{member.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-black/72">{member.focus}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
