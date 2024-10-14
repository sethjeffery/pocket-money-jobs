'use client'

import { styled } from '@mui/joy'

const Coin = styled('span')({
  clipPath:
    'polygon(45% 0%, 55% 0%, 87% 16%, 93% 24%, 100% 56%, 99% 64%, 79% 97%, 72% 100%, 28% 100%, 21% 97%, 1% 64%, 0% 56%, 7% 24%, 13% 16%)',
  backgroundColor: '#999',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '1.875em',
  height: '1.75em',

  '::after': {
    content: '"20p"',
    clipPath:
      'polygon(45% 0%, 55% 0%, 87% 16%, 93% 24%, 100% 56%, 99% 64%, 79% 97%, 72% 100%, 28% 100%, 21% 97%, 1% 64%, 0% 56%, 7% 24%, 13% 16%)',
    fontSize: '.5em',
    fontWeight: 'bold',
    backgroundColor: '#eee',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3.5em',
    height: '3.25em',
  },
})

const TwentyPenceCoin = () => {
  return <Coin />
}

export default TwentyPenceCoin
