import React from 'react';
import { MessageCircle, Users, Zap, Shield } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    Icon: MessageCircle,
    title: 'Real-time Chat',
    description: 'Instant message delivery with real-time typing indicators',
  },
  {
    Icon: Users,
    title: 'Group Chats',
    description: 'Create and manage multiple group conversations',
  },
  {
    Icon: Zap,
    title: 'Fast & Reliable',
    description: 'Lightning-fast message delivery with 99.9% uptime',
  },
  {
    Icon: Shield,
    title: 'Secure',
    description: 'End-to-end encryption for all your conversations',
  },
];

export default function Features() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
}