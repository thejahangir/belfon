import Hero from '../components/Hero';
import CapabilityStrip from '../components/CapabilityStrip';
import AboutIntro from '../components/AboutIntro';
import CoreServices from '../components/CoreServices';
import AdditionalServices from '../components/AdditionalServices';
import WhyBelfon from '../components/WhyBelfon';
import ProcessTimeline from '../components/ProcessTimeline';
import TechnologyExperience from '../components/TechnologyExperience';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <>
      <Hero />
      <CapabilityStrip />
      <AboutIntro />
      <CoreServices />
      <AdditionalServices />
      <WhyBelfon />
      <ProcessTimeline />
      <TechnologyExperience />
      <CTASection />
    </>
  );
}
