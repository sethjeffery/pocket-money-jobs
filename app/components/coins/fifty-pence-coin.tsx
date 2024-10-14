'use client'

import { styled } from '@mui/joy'

const Coin = styled('span')({
  clipPath:
    'polygon(45% 0%, 55% 0%, 87% 16%, 93% 24%, 100% 56%, 99% 64%, 79% 97%, 72% 100%, 28% 100%, 21% 97%, 1% 64%, 0% 56%, 7% 24%, 13% 16%)',
  backgroundColor: '#999',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '2.125em',
  height: '2em',

  '::after': {
    content: '"50p"',
    clipPath:
      'polygon(45% 0%, 55% 0%, 87% 16%, 93% 24%, 100% 56%, 99% 64%, 79% 97%, 72% 100%, 28% 100%, 21% 97%, 1% 64%, 0% 56%, 7% 24%, 13% 16%)',
    fontSize: '.65em',
    fontWeight: 'bold',
    backgroundColor: '#ddd',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '3em',
    height: '2.875em',
  },
})

const FiftyPenceCoin = () => {
  return <Coin />
}

export default FiftyPenceCoin
