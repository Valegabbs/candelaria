import { readFileSync } from 'node:fs'

const source = readFileSync(new URL('../src/App.tsx', import.meta.url), 'utf8')

const expectedUrls = [
  'https://iecandelaria.com.br/',
  'https://escolapaulistaagrimensura.org.br/',
  'https://feasp.edu.br/',
]

const expectedFeaspTags = [
  'Engenharia Cartográfica e de Agrimensura',
  'Graduação em Pedagogia',
  'Georreferenciamento de Imóveis Rurais e Urbanos',
  'Pós-Graduação Educação Inclusiva',
  'Psicopedagogia',
  'Pós-Graduação Práticas de Libras',
]

for (const url of expectedUrls) {
  if (!source.includes(url)) {
    throw new Error(`Missing expected URL: ${url}`)
  }
}

const incorrectFeaspTags = ['Engenharia', 'Pedagogia', 'Psicologia', 'ADS', 'EDS']

for (const tag of incorrectFeaspTags) {
  if (source.includes(`'${tag}'`) || source.includes(`"${tag}"`)) {
    throw new Error(`Found incorrect FEASP tag: ${tag}`)
  }
}

for (const tag of expectedFeaspTags) {
  if (!source.includes(tag)) {
    throw new Error(`Missing expected FEASP tag: ${tag}`)
  }
}
