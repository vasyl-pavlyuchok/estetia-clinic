import SiteHeaderClient from '@/components/layout/SiteHeaderClient';
import { getHeaderTreatmentZones } from '@/lib/services';
import { getTranslations, getMessages } from 'next-intl/server';
import type { TreatmentZoneKey } from '@/lib/services';

const ZONE_KEYS: Record<TreatmentZoneKey, [string, string]> = {
  'rostro-cuello':     ['zoneRostroLabel', 'zoneRostroDesc'],
  'cuerpo-contorno':   ['zoneCuerpoLabel', 'zoneCuerpoDesc'],
  'cuero-cabelludo':   ['zoneCueroLabel',  'zoneCueroDesc'],
  'piel-textura':      ['zonePielLabel',   'zonePielDesc'],
  'estetica-integral': ['zoneEsteticaLabel','zoneEsteticaDesc'],
};

const SLUG_TO_NS: Record<string, string> = {
  'hydrafacial-md':                      'hydrafacialMd',
  'peeling-quimico-personalizado':       'peelingQuimico',
  'radiofrecuencia-facial-fraccionada':  'radiofrecuenciaFacialFraccionada',
  'microneedling-factores-crecimiento':  'microneedling',
  'bioestimulacion-acido-hialuronico':   'bioestimulacion',
  'toxina-botulinica':                   'toxinaBotulinica',
  'hilos-tensores-pdo':                  'hilosTensores',
  'mesoterapia-facial-regenerativa':     'mesoterapiaFacial',
  'criolipolis-coolsculpting':           'criolipolis',
  'radiofrecuencia-corporal-multipolar': 'radiofrecuenciaCorporal',
  'presoterapia-drenaje-linfatico':      'presoterapia',
  'cavitacion-ultrasonica':              'cavitacion',
  'rellenos-dermicos-acido-hialuronico': 'rellenosDermicos',
  'inductores-colageno-sculptra-radiesse':'inductoresColageno',
  'skinboosters-profhilo':               'skinboostersProfhilo',
  'mesoterapia-capilar-regenerativa':    'mesoterapiaCapilar',
  'prp-capilar':                         'prpCapilar',
  'laser-baja-intensidad-capilar':       'laserCapilar',
  'laser-fraccionado-co2':               'laserCo2',
  'ipl-fotorejuvenecimiento':            'iplFotorejuvenecimiento',
};

export default async function SiteHeader() {
  const zones = getHeaderTreatmentZones();
  const t = await getTranslations('nav');
  const messages = await getMessages() as Record<string, Record<string, string>>;
  const servicesT = await getTranslations('services');

  const translatedZones = zones.map((zone) => {
    const [labelKey, descKey] = ZONE_KEYS[zone.zoneKey] ?? ['', ''];
    return {
      ...zone,
      zoneLabel: labelKey ? t(labelKey as Parameters<typeof t>[0]) : zone.zoneLabel,
      zoneDescription: descKey ? t(descKey as Parameters<typeof t>[0]) : zone.zoneDescription,
      categories: zone.categories.map((cat) => {
        let catLabel = cat.categoryLabel;
        try { catLabel = servicesT(`category.${cat.category}` as Parameters<typeof servicesT>[0]); } catch { /* fallback */ }
        return {
          ...cat,
          categoryLabel: catLabel,
          treatments: cat.treatments.map((treatment) => {
            const ns = SLUG_TO_NS[treatment.slug];
            const translatedName = ns ? (messages[ns]?.heroH1 ?? treatment.name) : treatment.name;
            return { ...treatment, name: translatedName };
          }),
        };
      }),
    };
  });

  return <SiteHeaderClient zones={translatedZones} />;
}
