import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Account, AccountInfoT} from '../../models/Account'
import {EmployeeI} from '../../models/Employee'
import {deserialize} from '../../utils'
import {RootState} from '../store'

export interface TokensI {
  idToken: string
  accessToken: string
}

export interface AuthSliceI {
  account: AccountInfoT
  employee: EmployeeI
  tokens: TokensI
  requestTokenRefresh: boolean
  subordinates: EmployeeI[]
}

const initialState: AuthSliceI = {
  tokens: {
    idToken: '',
    accessToken: '',
  },
  subordinates: [],
  employee: {
    department: '',
    employeeNumber: '',
    fullName: '',
    nrc: '',
    dateJoined: undefined,
    dob: undefined,
    grade: '',
    position: '',
    employeeEmailAddress: '',
    sex: '',
    managerEmployeeNumber: '',
    managerFullName: '',
    managerEmailAddress: '',
    searchable: '',
  },
  account: {
    homeAccountId: '',
    environment: '',
    tenantId: '',
    username: '',
    localAccountId: '',
    isAdmin: false,
    isHR: false,
    isManager: false,
  },
  requestTokenRefresh: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAccount: (state, action: PayloadAction<AccountInfoT>) => {
      state.account = deserialize<AccountInfoT>(action.payload)
    },
    setEmployee: (state, action: PayloadAction<EmployeeI>) => {
      state.employee = deserialize<EmployeeI>(action.payload)
    },
    setSubordinates: (state, action: PayloadAction<EmployeeI[]>) => {
      state.subordinates = deserialize<EmployeeI[]>(action.payload)
      state.account.isManager = !!action.payload.length
    },
    setTokens: (state, action: PayloadAction<TokensI>) => {
      state.tokens = action.payload
    },
  },
})

export const {setAccount, setTokens, setEmployee, setSubordinates} =
  authSlice.actions

export const selectAuth = ({auth}: RootState): AuthSliceI => ({
  tokens: auth.tokens,
  account: new Account({
    ...auth.account,
    isManager: !!auth.subordinates.length,
  }),
  requestTokenRefresh: auth.requestTokenRefresh,
  employee: auth.employee,
  subordinates: auth.subordinates,
})

export default authSlice.reducer
