import { AppProviders } from '@/app/providers/AppProviders'
import { HomePage } from '@/presentation/pages/HomePage'

function App() {
  return (
    <AppProviders>
      <HomePage />
    </AppProviders>
  )
}

export default App
