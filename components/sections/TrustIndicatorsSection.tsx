/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

type Brand = {
  name: string;
  domain: string;
};

const BRANDS: Brand[] = [
  { name: 'Allergan Aesthetics', domain: 'allerganaesthetics.com' },
  { name: 'Galderma', domain: 'galderma.com' },
  { name: 'Merz Aesthetics', domain: 'merzaesthetics.com' },
  { name: 'Alma Lasers', domain: 'alma-lasers.com' },
  { name: 'Candela Medical', domain: 'candelamedical.com' },
  { name: 'Cutera', domain: 'cutera.com' },
  { name: 'BTL Aesthetics', domain: 'btlaesthetics.com' },
  { name: 'Lumenis', domain: 'lumenis.com' },
  { name: 'InMode', domain: 'inmodemd.com' },
  { name: 'Cynosure Lutronic', domain: 'cynosurelutronic.com' },
  { name: 'HydraFacial', domain: 'hydrafacial.com' },
  { name: 'Venus Concept', domain: 'venusconcept.com' },
];

export default function TrustIndicatorsSection() {
  const marqueeItems = [...BRANDS, ...BRANDS];

  return (
    <section className="bg-background py-10 md:py-12" aria-label="Marcas de referencia">
      <div className="trust-marquee rounded-none border-x-0">
        <div className="trust-marquee-track" role="presentation">
          {marqueeItems.map((brand, index) => (
            <span key={`${brand.name}-${index}`} className="trust-brand-chip">
              <BrandLogo name={brand.name} domain={brand.domain} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function BrandLogo({ name, domain }: Brand) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <span className="trust-brand-fallback">{name}</span>;
  }

  return (
    <img
      src={`https://logo.clearbit.com/${domain}`}
      alt={name}
      loading="lazy"
      className="trust-logo-img"
      onError={() => setFailed(true)}
    />
  );
}
