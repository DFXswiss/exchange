// --- PARAMETERS --- //
param location string
param env string

// --- VARIABLES --- //
var systemName = 'dfx-mex'

module staticPage 'static-page.bicep' = {
  name: 'static-page-${systemName}'
  params: {
    location: location
    env: env
    systemName: systemName
  }
}
