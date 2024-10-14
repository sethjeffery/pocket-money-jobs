import { ComponentType, useMemo } from 'react'
import FiftyPenceCoin from './coins/fifty-pence-coin'
import PoundCoin from './coins/pound-coin'
import TwentyPenceCoin from './coins/twenty-pence-coin'
import TwoPoundCoin from './coins/two-pound-coin'

function Coins({ amount }: { amount: number }) {
  const coins = useMemo(() => {
    const result: ComponentType[] = []
    let remaining = amount
    while (remaining >= 20) {
      if (remaining >= 200) {
        result.push(TwoPoundCoin)
        remaining -= 200
      } else if (remaining >= 100) {
        result.push(PoundCoin)
        remaining -= 100
      } else if (remaining >= 50) {
        result.push(FiftyPenceCoin)
        remaining -= 50
      } else {
        result.push(TwentyPenceCoin)
        remaining -= 20
      }
    }
    return result
  }, [amount])

  return (
    <>
      {coins.map((Coin, index) => (
        <Coin key={index} />
      ))}
    </>
  )
}

export default Coins
