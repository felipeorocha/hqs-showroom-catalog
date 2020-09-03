const PUBLIC_KEY = '64fb8c56cb75c786b7531654017de50d'
const PRIVATE_KEY = 'de00148d3055bc102d7918250750e2c3a6e4a7d4'

export const marvelApi = {
  publicKey: PUBLIC_KEY,
  privateKey: PRIVATE_KEY,
  baseUrl: `${window.location.protocol || 'http'}//gateway.marvel.com:80`,
}
