import { DefaultTheme } from 'styled-components'

const themes = { stark: '#d4cdb2', lannister: '#9e0303', targaryen: '#272524', none: '#fff'}

export const starkTheme: DefaultTheme = { fundo: themes.stark, texto: '#fff' }
export const lannisterTheme: DefaultTheme = { fundo: themes.lannister, texto: '#fff' }
export const targaryenTheme: DefaultTheme = { fundo: themes.targaryen, texto: '#fff' }
export const noneTheme: DefaultTheme = { fundo: themes.none, texto: '#fff' }