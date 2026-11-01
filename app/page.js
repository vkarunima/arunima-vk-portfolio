import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import { profile, projects, experience, skills, education, certifications, leadership } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <Nav name={profile.name} />
      <main className="mx-auto max-w-5xl px-5">
        <Hero p={profile} />
        <Section id="about" title="About">
          <div className="max-w-2xl space-y-4 text-lg leading-relaxed">
            {profile.about.map((t) => <p key={t}>{t}</p>)}
          </div>
        </Section>
        <Section id="projects" title="Projects"><Projects items={projects} /></Section>
        <Section id="experience" title="Experience"><Experience items={experience} /></Section>
        <Section id="skills" title="Skills"><Skills items={skills} /></Section>
        <Section id="education" title="Education and activities">
          <Education education={education} certifications={certifications} leadership={leadership} />
        </Section>
        <Section id="contact" title="Contact"><Contact p={profile} /></Section>
      </main>
      <footer className="border-t border-line py-6 text-center text-sm text-muted">{profile.name}</footer>
    </>
  );
}
