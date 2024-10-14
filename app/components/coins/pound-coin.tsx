'use client'

import { styled } from '@mui/joy'

const Coin = styled('span')({
  fontWeight: 'bold',
  borderRadius: '50%',
  backgroundColor: '#ffdf38',
  boxShadow: 'inset 0 0 0 0.07em #dcba03',
  color: '#black',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.75em',
  height: '1.75em',

  '::after': {
    content: '"£1"',
    fontSize: '.7em',
    letterSpacing: '.08em',
  },
})

const PoundCoin = () => {
  return <Coin />
}

export default PoundCoin
