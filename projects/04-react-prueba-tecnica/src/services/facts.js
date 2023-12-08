const CAT_ENDPOINT_RANDON_FACT = 'https://catfact.ninja/fact'

export const getRandonFact = async () => {
  const res = await fetch(CAT_ENDPOINT_RANDON_FACT)
  const data = await res.json()
  const { fact } = data
  return fact
}
