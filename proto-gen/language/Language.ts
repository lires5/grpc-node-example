// Original file: proto/language.proto


// Original file: proto/language.proto

export const _language_Language_Code = {
  CODE_UNSPECIFIED: 'CODE_UNSPECIFIED',
  CODE_EN: 'CODE_EN',
  CODE_FA: 'CODE_FA',
} as const;

export type _language_Language_Code =
  | 'CODE_UNSPECIFIED'
  | 0
  | 'CODE_EN'
  | 1
  | 'CODE_FA'
  | 2

export type _language_Language_Code__Output = typeof _language_Language_Code[keyof typeof _language_Language_Code]

export interface Language {
}

export interface Language__Output {
}
