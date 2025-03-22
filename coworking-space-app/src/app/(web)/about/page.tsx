import React from 'react'
import AboutBody from '@/components/AboutBody'
import AboutMidBanner from '@/components/AboutMidBanner'
import AboutTopBanner from '@/components/AboutTopBanner'
import AboutTeam from '@/components/AboutTeam'

export default function About() {
    return (
        <div>
        <AboutTopBanner />
        <AboutBody />
        <AboutMidBanner />
        <AboutTeam />
    </div>
    );
  }
  