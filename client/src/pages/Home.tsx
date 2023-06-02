import React from 'react'
import Card from '../Components/Card'
import Container from '../Components/Container'

import background from '../Assets/Hunde-slæd-1.jpg'

const Home = () => {
  return (
    <div>
        <Container>
            <Card image={background} alt="" big/>
        </Container>
    </div>
  )
}

export default Home