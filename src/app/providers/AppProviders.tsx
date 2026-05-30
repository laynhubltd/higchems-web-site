import { StyleProvider } from '@ant-design/cssinjs'
import { ConfigProvider } from 'antd'
import type { ReactNode } from 'react'
import { higchemesTheme } from '@/app/theme/higchemesTheme'

interface AppProvidersProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <StyleProvider layer>
      <ConfigProvider theme={higchemesTheme}>{children}</ConfigProvider>
    </StyleProvider>
  )
}
