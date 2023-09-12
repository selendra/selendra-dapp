import { DataNotDecodableError, UnknownVersionError} from '../../../../utils'
import {
    IdentityAddSubCall,
    IdentityProvideJudgementCall,
    IdentityRenameSubCall,
    IdentitySetIdentityCall,
    IdentitySetSubsCall,
} from '../../types/calls'
import {ChainContext, Call} from '../../types/support'

export const set_identity = {
    decode(ctx: ChainContext, call: Call) {
        let e = new IdentitySetIdentityCall(ctx, call)
        if (e.isV1030) {
            return {
                twitter: {
                    __kind: 'None',
                },
                ...e.asV1030.info,
            }
        } else if (e.isV1032) {
            return e.asV1032.info
        } else {
            throw new UnknownVersionError(e.constructor.name)
        }
    },
}

export const set_subs = {
    decode(ctx: ChainContext, call: Call) {
        let e = new IdentitySetSubsCall(ctx, call)
        if (e.isV1030) {
            return e.asV1030
        } else {
            throw new UnknownVersionError(e.constructor.name)
        }
    },
}

export const provide_judgement = {
    decode(ctx: ChainContext, call: Call) {
        let e = new IdentityProvideJudgementCall(ctx, call)
        if (e.isV1030) {
            const data = e.asV1030
            if (data.target.__kind === 'AccountId') return {...data, target: data.target.value}
            else throw new DataNotDecodableError(e.constructor.name, data)
        } else if (e.isV1050) {
            return e.asV1050
        } else if (e.isV2028) {
            const data = e.asV2028
            if (data.target.__kind === 'Id') return {...data, target: data.target.value}
            else throw new DataNotDecodableError(e.constructor.name, data)
        } else if (e.isV9111) {
            const data = e.asV9111
            if (data.target.__kind === 'Id') return {...data, target: data.target.value}
            else throw new DataNotDecodableError(e.constructor.name, data)
        } else if (e.isV9300) {
            const data = e.asV9300
            if (data.target.__kind === 'Id') return {...data, target: data.target.value}
            else throw new DataNotDecodableError(e.constructor.name, data)
        } else {
            throw new UnknownVersionError(e.constructor.name)
        }
    },
}

export const add_sub = {
    decode(ctx: ChainContext, call: Call) {
        let e = new IdentityAddSubCall(ctx, call)
        if (e.isV2015) {
            return e.asV2015
        } else if (e.isV2028) {
            const data = e.asV2028
            if (data.sub.__kind !== 'Index') return {...data, sub: data.sub.value}
            else throw new DataNotDecodableError(e.constructor.name, data)
        } else if (e.isV9111) {
            const data = e.asV9111
            if (data.sub.__kind !== 'Index') return {...data, sub: data.sub.value}
            else throw new DataNotDecodableError(e.constructor.name, data)
        } else {
            throw new UnknownVersionError(e.constructor.name)
        }
    },
}

export const rename_sub = {
    decode(ctx: ChainContext, call: Call) {
        let e = new IdentityRenameSubCall(ctx, call)
        if (e.isV2015) {
            return e.asV2015
        } else if (e.isV2028) {
            const data = e.asV2028
            if (data.sub.__kind !== 'Index') return {...data, sub: data.sub.value}
            else throw new DataNotDecodableError(e.constructor.name, data)
        } else if (e.isV9111) {
            const data = e.asV9111
            if (data.sub.__kind !== 'Index') return {...data, sub: data.sub.value}
            else throw new DataNotDecodableError(e.constructor.name, data)
        } else {
            throw new UnknownVersionError(e.constructor.name)
        }
    },
}
