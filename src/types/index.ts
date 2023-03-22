import {DetailedHTMLProps, HTMLAttributes, ReactNode} from 'react'

export type DetailedHTMLPropsT = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export type DefaultProps = {
  children: ReactNode
} & DetailedHTMLPropsT

interface ErrorFieldT {
  errors: string[]
  name: string[]
  warnings: string[]
}

export interface AntdFormExceptionI<T = unknown> {
  values: T
  errorFields: ErrorFieldT[]
  outOfDate: boolean
}
