import Bg2Section from './sections/Bg2Section'
import Header from './sections/Header'
import HeroSection from './sections/HeroSection'

type Props = {}

const LandingPage = (_props: Props) => {
  return (
   <>
      <Header></Header>
      <HeroSection></HeroSection>
      <Bg2Section></Bg2Section>
    </>
  )
}

export default LandingPage