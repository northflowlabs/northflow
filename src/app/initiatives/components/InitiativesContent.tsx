'use client';

import React, { useState, useEffect } from 'react';

import InitiativeHero from './InitiativeHero';
import InitiativeGrid from './InitiativeGrid';
import EFOSHighlight from './EFOSHighlight';
import ParticipationFramework from './ParticipationFramework';
import StrategicTimeline from './StrategicTimeline';

export default function InitiativesContent() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-[1400px] mx-auto px-8 py-16">
          <div className="h-96 bg-muted animate-pulse rounded-lg" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <InitiativeHero />
      <InitiativeGrid />
      <EFOSHighlight />
      <StrategicTimeline />
      <ParticipationFramework />
    </div>
  );
}
