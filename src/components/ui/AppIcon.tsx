'use client';

import React from 'react';
import {
  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
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
  Bars3Icon,
  XMarkIcon,
  NewspaperIcon,
  ClipboardDocumentCheckIcon,
  InformationCircleIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  BookmarkIcon,
  TrashIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline';

// Icon mapping for tree-shaking
const iconMap = {
  'chevron-right': ChevronRightIcon,
  'chevron-up': ChevronUpIcon,
  'chevron-down': ChevronDownIcon,
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
  'bars-3': Bars3Icon,
  'x-mark': XMarkIcon,
  newspaper: NewspaperIcon,
  'clipboard-document-check': ClipboardDocumentCheckIcon,
  'information-circle': InformationCircleIcon,
  user: UserIcon,
  'chat-bubble-left-right': ChatBubbleLeftRightIcon,
  bookmark: BookmarkIcon,
  trash: TrashIcon,
  'x-circle': XCircleIcon,

  ChevronRightIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  CalendarIcon,
  BellIcon,
  CubeIcon,
  DocumentTextIcon,
  DocumentDuplicateIcon,
  DocumentMagnifyingGlassIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  CogIcon,
  ClockIcon,
  HandRaisedIcon,
  MagnifyingGlassIcon,
  BeakerIcon,
  DocumentCheckIcon,
  UserGroupIcon,
  Bars3Icon,
  XMarkIcon,
  NewspaperIcon,
  ClipboardDocumentCheckIcon,
  InformationCircleIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  BookmarkIcon,
  TrashIcon,
  XCircleIcon,
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
