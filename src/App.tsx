import { ThemeProvider } from "@/theme/theme-context"
import { LanguageProvider } from "@/i18n/language-context"
import { SkipLink } from "@/components/skip-link"
import { Nav } from "@/components/nav"
import { Hero } from "@/components/hero"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { Projects } from "@/components/projects"
import { Education } from "@/components/education"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div id="top" className="min-h-screen bg-paper text-ink">
          <SkipLink />
          <Nav />
          <Hero />
          <main id="content">
            <ExperienceTimeline />
            <Projects />
            <Education />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}
