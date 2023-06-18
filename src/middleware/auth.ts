import { useMainStore } from '../store'

export default (to: any, from: any) => {
  const { isAuthenticated } = useMainStore()
  if (!isAuthenticated && to.name !== 'home') return { name: 'home' }
  if (isAuthenticated && to.name === 'home') return { name: 'sponsors' }
  return isAuthenticated || to.name === 'home'
}
