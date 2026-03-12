import SiteHeaderClient from '@/components/layout/SiteHeaderClient';
import { getHeaderTreatmentZones } from '@/lib/services';

export default function SiteHeader() {
  const zones = getHeaderTreatmentZones();

  return <SiteHeaderClient zones={zones} />;
}
