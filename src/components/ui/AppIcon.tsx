'use client';

import React from 'react';
import { 
  ChevronRightIcon,
  ArrowRightIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  ChartBarIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/24/outline';

// Icon mapping for tree-shaking
const iconMap = {
  'chevron-right': ChevronRightIcon,
  'arrow-right': ArrowRightIcon,
  'academic-cap': AcademicCapIcon,
  'building-office': BuildingOfficeIcon,
  'chart-bar': ChartBarIcon,
  'document-text': DocumentTextIcon,
  'globe-alt': GlobeAltIcon,
  'user-group': UserGroupIcon,
  'shield-check': ShieldCheckIcon,
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