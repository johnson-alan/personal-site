import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component'

import Layout from '../components/Layout'
import Hero from '../components/home/Hero'
import LargeText from '../components/home/LargeText'
import TextContainer from '../components/home/TextContainer'
import Image from '../components/Image'
import IPadPro from '../components/iPadPro'
import IPhone from '../components/iPhone'
import MacBook from '../components/MacBook'
import Footer from '../components/Footer'

import HTImage from '../../static/ht-xs-sm.png'
import BSImage from '../../static/bs.png'
// import AAPImage from '../../static/aap-psa.png'
import CWImage from '../../static/cw-spa.png'
import ACVideo from '../../static/ACVideo.mp4'
import AAPVideo from '../../static/AAPVideo.mp4'

const cwImageDims = 400

const hero1Styles = { start: '#fde7e9', end: '#fffcfc' }
const hero2Styles = { start: '#fffbe6', end: '#fffefa' }
const hero3Styles = { start: '#ecebf9', end: '#fbfbfe' }
const hero4Styles = { start: '#e6eeff', end: '#fafcff' }
const hero5Styles = { start: '#cde7fe', end: '#e6f3fe'}
const hero6Styles = { start: '#fff5cc', end: '#fffdf5'}
// aap: #ffcc00

const profBodyText = `I'm a Brooklyn-based developer building modern web applications.`

const buildStreamBodyText = `BuildStream uses IoT sensors and AI to monitor and optimize the
performance of heavy equipment on construction sites.`

const aapBodyText = `A self-service product selection app to be fitted in kiosks in the
aisles of Advance Auto Parts stores across the nation.`

const heroBodyText = `A new social media platform for travel enthusiasts to
  record and share their excursions around the world in longform stories
  and short live videos.`

const crosswordBodyText = `Full-featured mouse and keyboard-based crossword play.`

const alphabetCityBodyText = `A location-based word game where users find letters
  and create words in AR. Like Pokémon Go meets Words with Friends.`

class Home extends Component {
  constructor() {
    super()
    this.heroRefs = []
  }

  scrollToHero = idx => () =>
    scrollToComponent(this.heroRefs[idx], {
      offset: 0,
      align: 'top',
      duration: 500,
      ease: 'out-circ'
    })

  setHeroRef = ref => this.heroRefs.push(ref)

  render = () => (
    <Layout>
      <Hero
        gradientStart={hero4Styles.start}
        gradientEnd={hero4Styles.end}
        setRef={this.setHeroRef}
      >
        {[
          <LargeText
            key={'0'}
            accentColor="#306be8"
            text={profBodyText}
            actionText={`Some things I've been working on`}
            onChange={this.scrollToHero(1)}
          />
        ]}
      </Hero>
      <Hero
        gradientStart={hero5Styles.start}
        gradientEnd={hero5Styles.end}
        setRef={this.setHeroRef}
      >
        <MacBook singleImage={BSImage} />
        <TextContainer
          accentColor="#0479dc"
          headerText="BuildStream"
          bodyText={buildStreamBodyText}
          actionText="Learn more"
          actionLink="https://www.buildstream.co"
        />
      </Hero>
      <Hero
        gradientStart={hero6Styles.start}
        gradientEnd={hero6Styles.end}
        setRef={this.setHeroRef}
      >
        <IPadPro video={AAPVideo} />
        <TextContainer
          accentColor="#f8dc4e"
          headerText="Advance Auto Parts"
          bodyText={aapBodyText}
          actionText="Find a store"
          actionLink="https://stores.advanceautoparts.com"
        />
      </Hero>
      <Hero
        gradientStart={hero1Styles.start}
        gradientEnd={hero1Styles.end}
        setRef={this.setHeroRef}
      >
        <IPhone singleImage={HTImage} />
        <TextContainer
          accentColor="#ed1e2e"
          headerText="Hero Traveler"
          bodyText={heroBodyText}
          actionText="Visit the site"
          actionLink="https://herotraveler.com"
        />
      </Hero>
      <Hero gradientStart={hero2Styles.start} gradientEnd={hero2Styles.end}>
        <Image
          src={CWImage}
          alt="Crossword"
          width={cwImageDims}
          height={cwImageDims}
        />
        <TextContainer
          accentColor="#ffe761"
          headerText="Crosswords"
          bodyText={crosswordBodyText}
          actionText="Do a crossword"
          actionLink="https://crossword-spa.herokuapp.com"
        />
      </Hero>
      <Hero gradientStart={hero3Styles.start} gradientEnd={hero3Styles.end}>
        <IPhone video={ACVideo} />
        <TextContainer
          accentColor="#706fd3"
          headerText="Alphabet City"
          bodyText={alphabetCityBodyText}
          actionText="Explore your city"
          actionLink="https://expo.io/@allenhj/alphabet-city"
        />
      </Hero>
      <Footer accentColor={'#706fd3'} scrollToHero={this.scrollToHero(0)} />
    </Layout>
  )
}

export default Home
