'use client';
import { RPConfig } from '@pdf-viewer/react';

const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <RPConfig licenseKey="your-license-key">{children}</RPConfig>
);

export default AppProviders;
