// --- PARAMETERS --- //
param location string = 'westeurope'
param env string = 'dev'

// --- VARIABLES --- //
var systemName = 'dfx-stb'

module staticPage 'static-page.bicep' = {
  name: systemName
  params: {
    location: location
    env: env
    systemName: systemName
  }
}
