import erc20 from 'config/abi/erc20.json'
import chunk from 'lodash/chunk'
import { getAddress, getMasterChefAddress } from 'utils/addressHelpers'
import multicall, { multicallv2 } from 'utils/multicall'
import { SerializedFarm } from '../types'
import { SerializedFarmConfig } from '../../config/constants/types'
import useActiveWeb3React from 'hooks/useActiveWeb3React'

const fetchFarmCalls = (farm: SerializedFarm, chainId: number) => {

  const { lpAddresses, token, quoteToken } = farm
  const lpAddress = getAddress(lpAddresses, chainId)
  return [
    // Balance of token in the LP contract
    {
      address: token.address,
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of quote token on LP contract
    {
      address: quoteToken.address,
      name: 'balanceOf',
      params: [lpAddress],
    },
    // Balance of LP tokens in the master chef contract
    {
      address: lpAddress,
      name: 'balanceOf',
      params: [getMasterChefAddress(chainId)],
    },
    // Total supply of LP tokens
    {
      address: lpAddress,
      name: 'totalSupply',
    },
    // Token decimals
    {
      address: token.address,
      name: 'decimals',
    },
    // Quote token decimals
    {
      address: quoteToken.address,
      name: 'decimals',
    },
  ]
}

export const fetchPublicFarmsData = async (farms: SerializedFarmConfig[], chainId: number): Promise<any[]> => {
  const farmCalls = farms.flatMap((farm) => fetchFarmCalls(farm, chainId))
  const chunkSize = farmCalls.length / farms.length
  const farmMultiCallResult = await multicallv2({abi: erc20, calls: farmCalls, chainId})
  return chunk(farmMultiCallResult, chunkSize)
}
