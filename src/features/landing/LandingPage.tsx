import Bg2Section from './sections/Bg2Section'
import Bg3Section from './sections/Bg3Section'
import Bg4Section from './sections/Bg4Section'
import Bg5Section from './sections/Bg5Section'
import Bg6Section from './sections/Bg6Section'
import FooterSection from './sections/FooterSection'
import Header from './sections/Header'
import HeroSection from './sections/HeroSection'

type Props = {}

const LandingPage = (_props: Props) => {
  return (
   <>
      <Header></Header>
      <HeroSection></HeroSection>
      <Bg2Section></Bg2Section>
      <Bg3Section></Bg3Section>
      <Bg4Section></Bg4Section>
      <Bg5Section></Bg5Section>
      <Bg6Section></Bg6Section>
      <FooterSection></FooterSection>
    </>
  )
}

export default LandingPage