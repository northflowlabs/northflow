import type { Metadata } from 'next';
import HGEExplorerLoginScreen from '@/components/HGEExplorerLoginScreen';

export const metadata: Metadata = {
  title: 'HGE Explorer — Login',
  description: 'Access portal for HGE Explorer.',
};

export default function HGEExplorerLoginPage() {
  return <HGEExplorerLoginScreen />;
}
