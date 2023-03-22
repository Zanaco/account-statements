import {AccountInfo} from '@azure/msal-browser'

export interface IdTokenClaims {
  aud: string
  iss: string
  iat: number
  nbf: number
  exp: number
  aio: string
  email: string
  name: string
  nonce: string
  oid: string
  preferred_username: string
  rh: string
  roles: string[]
  sub: string
  tid: string
  uti: string
  ver: string
}

export type IdTokenClaimsT = IdTokenClaims & {
  [key: string]: string | number | string[] | object | undefined | unknown
}

export type AccountInfoT = AccountInfo & {
  initials?: string
  fullname?: string
  idTokenClaims?: IdTokenClaimsT
  isManager: boolean
  get isAdmin(): boolean
  get isHR(): boolean
}

export class Account implements AccountInfoT {
  homeAccountId: string
  environment: string
  tenantId: string
  username: string
  localAccountId: string
  name?: string | undefined
  idTokenClaims?: IdTokenClaimsT
  isManager: boolean

  constructor({
    homeAccountId,
    environment,
    tenantId,
    username,
    localAccountId,
    name,
    idTokenClaims,
    isManager,
  }: AccountInfoT) {
    this.homeAccountId = homeAccountId
    this.environment = environment
    this.tenantId = tenantId
    this.username = username
    this.localAccountId = localAccountId
    this.name = name
    this.idTokenClaims = idTokenClaims
    this.isManager = isManager
  }

  get fullname(): string {
    return this.username.replace(/@(.*)$/, '').replace('.', ' ')
  }

  get initials(): string {
    const name = this.username.replace(/@(.*)$/, '').split(/[.-]/)

    if (name.length > 1) {
      return `${name[0][0]}${name[1][0]}`.toUpperCase()
    }

    return name[0].toUpperCase()
  }

  get isAdmin(): boolean {
    return !!this.idTokenClaims?.roles.find(
      role => role === process.env.REACT_APP_ADMIN_ROLE,
    )
  }

  get isHR(): boolean {
    return !!this.idTokenClaims?.roles.find(
      role => role === process.env.REACT_APP_HC_ROLE,
    )
  }
}
