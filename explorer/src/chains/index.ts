import {ChainApi} from './interfaces/chainApi'
import {ProcessorConfig} from './interfaces/processorConfig'

export function getChain(): {config: ProcessorConfig; api: ChainApi} {
    switch (process.env.CHAIN) {
        case 'selendra':
            return require('./selendra')
        default:
            throw new Error(`Unsupported chain ${process.env.CHAIN}`)
    }
}