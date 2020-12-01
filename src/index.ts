export * from './app'
export * from './config'

import { setup } from './app'

if (require.main === module) {
    setup()
}
