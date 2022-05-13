import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
  app: 'UniformConf', // Your site here
  plugins: [
    googleAnalytics({
      trackingId: 'UA-228440757-1'
    })
  ]
})