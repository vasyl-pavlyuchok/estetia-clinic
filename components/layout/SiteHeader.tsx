import SiteHeaderClient from '@/components/layout/SiteHeaderClient';
import { getServiceCategories } from '@/lib/services';

export default function SiteHeader() {
  const categories = getServiceCategories();

  return <SiteHeaderClient categories={categories} />;
}
