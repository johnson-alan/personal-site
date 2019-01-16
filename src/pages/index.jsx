import React, { Component } from 'react'
import scrollToComponent from 'react-scroll-to-component'

import Layout from '../components/Layout'
import Hero from '../components/home/Hero'
import LargeText from '../components/home/LargeText'
import TextContainer from '../components/home/TextContainer'
import Image from '../components/Image'
import IPhone from '../components/iPhone'
import Footer from '../components/Footer'

import HTImage from '../../static/ht-xs-sm.png'
import CWImage from '../../static/cw-spa.png'
import ACVideo from '../../static/ACVideo.mp4'

const imageDims = 400

const hero4Styles = { start: '#e6eeff', end: '#fafcff' }
const hero1Styles = { start: '#fde7e9', end: '#fffcfc' }
const hero2Styles = { start: '#fffbe6', end: '#fffefa' }
const hero3Styles = { start: '#ecebf9', end: '#fbfbfe' }

const profBodyText = `I'm a Brooklyn-based developer building modern web applications.`

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

  setHeroRef = ref => this.heroRefs.push(ref)

  scrollToHero = idx => () =>
    scrollToComponent(this.heroRefs[idx], {
      offset: 0,
      align: 'top',
      duration: 500,
      ease: 'out-circ'
    })

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
          width={imageDims}
          height={imageDims}
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
