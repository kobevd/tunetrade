import fetcher from './_fetcher'
import useSWR from 'swr'

export default function useNetwork () {
  const { data, error, isLoading } = useSWR(`https://www.mapillary.com/connect?client_id=5492963020806334`, fetcher)
 
  return {
    network: data?.network,
    isLoading,
    isError: error
  }
}