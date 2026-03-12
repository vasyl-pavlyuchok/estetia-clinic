/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

type Brand = {
  name: string;
  domain: string;
  logoUrl?: string;
};

const BRANDS: Brand[] = [
  {
    name: 'Allergan Aesthetics',
    domain: 'allerganaesthetics.com',
    logoUrl: 'https://global.allerganaesthetics.com/assets/trends/allerganlogo1.png',
  },
  {
    name: 'Galderma',
    domain: 'galderma.com',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e7/GALDERMA_LOGO.jpg',
  },
  {
    name: 'Merz Aesthetics',
    domain: 'merzaesthetics.com',
    logoUrl:
      'https://cdn.cookielaw.org/logos/db32da98-29e7-4aa3-acdf-969aba036d51/65ea00a3-8fed-4bb3-954c-810f6ae54acc/3c409938-374f-4bf3-a581-3a2e452d5cbc/MerzAesthetics_Logo.png',
  },
  {
    name: 'Alma Lasers',
    domain: 'alma-lasers.com',
    logoUrl: 'https://skinelements.co.uk/wp-content/uploads/alma-lasers-logo.png',
  },
  {
    name: 'Candela Medical',
    domain: 'candelamedical.com',
    logoUrl: 'https://mma.prnewswire.com/media/750578/Candela_Logo.jpg?p=twitter',
  },
  {
    name: 'Cutera',
    domain: 'cutera.com',
    logoUrl: 'https://companieslogo.com/img/orig/CUTR_BIG-66df5419.png?t=1742379286',
  },
  {
    name: 'BTL Aesthetics',
    domain: 'btlaesthetics.com',
    logoUrl:
      'https://btlaesthetics.vidocto.com/assets/img/logo.png',
  },
  {
    name: 'Lumenis',
    domain: 'lumenis.com',
    logoUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0yFzaEe7uDWgQYu1LMxrXtaWuYbv0Q3lRyw&s',
  },
  {
    name: 'InMode',
    domain: 'inmodemd.com',
    logoUrl: 'https://www.aeskinsolutions.com/wp-content/uploads/2018/12/InMode-Logo.png',
  },
  {
    name: 'Cynosure Lutronic',
    domain: 'cynosurelutronic.com',
    logoUrl: 'https://static.cdnlogo.com/logos/c/60/cynosure.svg',
  },
  {
    name: 'HydraFacial',
    domain: 'hydrafacial.com',
    logoUrl: 'https://aspenmedispa.com/wp-content/uploads/2019/06/HF_Logo_Black.png',
  },
  {
    name: 'Venus Concept',
    domain: 'venusconcept.com',
    logoUrl: 'https://uspto.report/TM/86536616/mark.png',
  },
];

export default function TrustIndicatorsSection() {
  const marqueeItems = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-white py-10 md:py-12" aria-label="Marcas de referencia">
      <div className="trust-marquee rounded-none border-x-0">
        <div className="trust-marquee-track" role="presentation">
          {marqueeItems.map((brand, index) => (
            <span key={`${brand.name}-${index}`} className="trust-brand-chip">
              <BrandLogo {...brand} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandLogo({ name, domain, logoUrl }: Brand) {
  const [failed, setFailed] = useState(false);
  const isVenusConcept = name === 'Venus Concept';
  const isBtlAesthetics = name === 'BTL Aesthetics';
  const logoClassName = `trust-logo-img${isVenusConcept ? ' trust-logo-img--venus' : ''}${
    isBtlAesthetics ? ' trust-logo-img--btl' : ''
  }`;

  if (failed) {
    return <span className="trust-brand-fallback">{name}</span>;
  }

  return (
    <img
      src={logoUrl ?? `https://logo.clearbit.com/${domain}`}
      alt={name}
      loading="lazy"
      className={logoClassName}
      onError={() => setFailed(true)}
    />
  );
}
