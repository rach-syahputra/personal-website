/* eslint-disable @typescript-eslint/no-explicit-any */
import type {
  ChainModifiers,
  Entry,
  EntryFieldTypes,
  EntrySkeletonType,
  LocaleCode
} from 'contentful'

export interface IContentfulAsset {
  sys: { id: string }
  fields: {
    file: {
      url: string
      details?: any
      fileName?: string
      contentType?: string
    }
  }
}

export interface TypeProjectsFields {
  title: EntryFieldTypes.Symbol
  techStacks: EntryFieldTypes.Object
  images: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
  description: EntryFieldTypes.Text
  explanation: EntryFieldTypes.Text
  screenshots: EntryFieldTypes.Array<EntryFieldTypes.AssetLink>
  id: EntryFieldTypes.Integer
  responsibilities: EntryFieldTypes.Array<EntryFieldTypes.Symbol>
  slug?: EntryFieldTypes.Symbol
  link: EntryFieldTypes.Symbol
}

export type TypeProjectsSkeleton = EntrySkeletonType<
  TypeProjectsFields,
  'projects'
>
export type TypeProjects<
  Modifiers extends ChainModifiers,
  Locales extends LocaleCode = LocaleCode
> = Entry<TypeProjectsSkeleton, Modifiers, Locales>
