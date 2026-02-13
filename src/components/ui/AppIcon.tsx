'use client';

import React from 'react';
import {
  ChevronRightIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  BuildingOffice2Icon,
  ChartBarIcon,
  BellIcon,
  CubeIcon,
  DocumentTextIcon,
  DocumentDuplicateIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CubeTransparentIcon,
  ArrowPathIcon,
  BeakerIcon,
  MagnifyingGlassIcon,
  CheckBadgeIcon,
  ServerStackIcon,
  SparklesIcon,
  CheckCircleIcon,
  DocumentMagnifyingGlassIcon,
  GlobeEuropeAfricaIcon,
  BuildingLibraryIcon,
  DocumentCheckIcon,
  CpuChipIcon,
  LockClosedIcon,
  CalendarIcon,
  CogIcon,
  ClockIcon,
  HandRaisedIcon,
  QuestionMarkCircleIcon,
  ArrowsRightLeftIcon,
  InformationCircleIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  NewspaperIcon,
  CheckIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

// Icon mapping for tree-shaking
const iconMap = {
  'chevron-right': ChevronRightIcon,
  'arrow-right': ArrowRightIcon,
  'academic-cap': AcademicCapIcon,
  'building-office': BuildingOfficeIcon,
  'building-office-2': BuildingOffice2Icon,
  'chart-bar': ChartBarIcon,
  bell: BellIcon,
  cube: CubeIcon,
  'document-text': DocumentTextIcon,
  'globe-alt': GlobeAltIcon,
  'user-group': UserGroupIcon,
  'shield-check': ShieldCheckIcon,
  'cube-transparent': CubeTransparentIcon,
  'arrow-path': ArrowPathIcon,
  beaker: BeakerIcon,
  'magnifying-glass': MagnifyingGlassIcon,
  'check-badge': CheckBadgeIcon,
  'server-stack': ServerStackIcon,
  sparkles: SparklesIcon,
  'check-circle': CheckCircleIcon,
  'document-magnifying-glass': DocumentMagnifyingGlassIcon,
  'globe-europe-africa': GlobeEuropeAfricaIcon,
  'building-library': BuildingLibraryIcon,
  'document-check': DocumentCheckIcon,
  'cpu-chip': CpuChipIcon,
  'lock-closed': LockClosedIcon,
  calendar: CalendarIcon,
  cog: CogIcon,
  clock: ClockIcon,
  'hand-raised': HandRaisedIcon,

  BeakerIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  MagnifyingGlassIcon,
  CubeIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  AcademicCapIcon,
  CpuChipIcon,
  ArrowRightIcon,
  GlobeEuropeAfricaIcon,
  ArrowsRightLeftIcon,
  InformationCircleIcon,
  UserIcon,
  ClipboardDocumentCheckIcon,
  NewspaperIcon,
  BuildingOffice2Icon,
  LockClosedIcon,
  ShieldCheckIcon,
  BuildingOfficeIcon,
  DocumentMagnifyingGlassIcon,
  ArrowPathIcon,
  CheckIcon,
  ChatBubbleLeftRightIcon,
} as const;

type IconVariant = 'outline' | 'solid';

interface IconProps {
  name: string; // Changed to string to accept dynamic values
  variant?: IconVariant;
  size?: number;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  [key: string]: any;
}

function Icon({
  name,
  variant = 'outline',
  size = 24,
  className = '',
  onClick,
  disabled = false,
  ...props
}: IconProps) {
  const IconComponent = iconMap[name as keyof typeof iconMap] || QuestionMarkCircleIcon;

  return (
    <IconComponent
      width={size}
      height={size}
      className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
      onClick={disabled ? undefined : onClick}
      {...props}
    />
  );
}

export default Icon;
