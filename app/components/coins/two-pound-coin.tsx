'use client'

import { styled } from '@mui/joy'

const Coin = styled('span')({
  fontWeight: 'bold',
  borderRadius: '50%',
  backgroundColor: '#eee',
  border: '.15em solid gold',
  boxShadow: 'inset 0 0 0 .07em #bbb, 0 0 0 .07em #dcba03',
  color: '#black',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2em',
  height: '2em',

  '::after': {
    content: '"£2"',
    fontSize: '.7em',
    letterSpacing: '.08em',
  },
})

const TwoPoundCoin = () => {
  return <Coin />
}

export default TwoPoundCoin
