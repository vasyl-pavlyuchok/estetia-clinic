'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

type TeamMember = {
  index: string;
  name: string;
  role: string;
  focus: string;
  specialties: string[];
  credentials: string;
  photo: string;
};

const TEAM: TeamMember[] = [
  {
    index: '01',
    name: 'Dra. Elena Varela',
    role: 'Dirección Médica',
    focus: 'Armonización facial y bioestimulación avanzada con criterio conservador.',
    specialties: ['Toxina botulínica', 'Rellenos dérmicos', 'Bioestimulación'],
    credentials: 'Medicina Estética · 12 años de práctica clínica',
    photo: '/images/team/dra-elena-varela.webp',
  },
  {
    index: '02',
    name: 'Dr. Nicolás Ruiz',
    role: 'Medicina Estética Inyectable',
    focus: 'Precisión anatómica y resultados naturales de alta definición.',
    specialties: ['Hilos tensores', 'Toxina', 'Rinomodelación'],
    credentials: 'Cirugía Plástica · Formación en París y Milán',
    photo: '/images/team/dr-nicolas-ruiz.webp',
  },
  {
    index: '03',
    name: 'Dra. Sofía Méndez',
    role: 'Dermatología Estética',
    focus: 'Láseres, regeneración dérmica y protocolos de textura avanzados.',
    specialties: ['Láser fraccionado', 'Microneedling', 'IPL'],
    credentials: 'Dermatología Médico-Quirúrgica · Máster en tecnología láser',
    photo: '/images/team/dra-sofia-mendez.webp',
  },
];

export default function DreamTeamSection() {
  const t = useTranslations('dreamTeam');

  return (
    <section
      id="dream-team"
      className="bg-white py-20 md:py-24"
      aria-label={t('eyebrow')}
    >
      <div className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid gap-7 md:grid-cols-[1.08fr_0.92fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2C5F6F]">
              {t('eyebrow')}
            </p>
            <h2 className="font-heading mt-4 max-w-[16ch] text-4xl leading-tight text-black md:text-5xl">
              {t('h2')}
            </h2>
          </div>
          <p className="max-w-[48ch] text-[0.98rem] leading-relaxed text-black/72 md:justify-self-end">
            {t('sub')}
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {TEAM.map((member) => (
            <article
              key={member.name}
              className="flex flex-col overflow-hidden rounded-3xl border border-black/12 bg-white shadow-[0_20px_42px_-36px_rgba(0,0,0,0.35)]"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={member.photo}
                  alt={member.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                  className="font-heading absolute bottom-3 right-4 select-none text-[3rem] leading-none text-white/20"
                  aria-hidden="true"
                >
                  {member.index}
                </span>
                <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/40 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
                  {member.role}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-heading text-[1.65rem] leading-tight text-black">
                  {member.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-black/68">{member.focus}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {member.specialties.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-[#C9A96E]/40 bg-[#C9A96E]/10 px-2.5 py-1 text-[0.6rem] font-semibold uppercase tracking-[0.1em] text-[#7A5A24]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <p className="mt-auto border-t border-black/8 pt-5 text-[0.7rem] leading-relaxed text-black/42">
                  {member.credentials}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
