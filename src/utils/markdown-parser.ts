import { load } from 'js-yaml'

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export class ParseMarkdownYAML {
  constructor(private strList: string[]) {}

  parse(str: string) {
    const raw = str

    const parts = /-{3,}\n(.*?)-{3,}\n*(.*)$/gms.exec(raw)
    if (!parts) {
      return { text: raw }
    }

    const text = parts.pop()
    const parseYAML = load(parts[1])
    const meta: Partial<NonNullable<ParsedModel['meta']>> = {}
    const { categories, tags, date, updated, created } = parseYAML as any

    if (date || created) meta.date = new Date(date || created).toISOString()
    if (updated) meta.updated = new Date(updated).toISOString()

    meta.categories = categories
    meta.tags = tags

    Object.keys(meta).forEach((key) => {
      const value = meta[key]
      if (typeof value === 'undefined') delete meta[key]
    })

    return { meta, text } as ParsedModel
  }

  start() {
    const files = this.strList
    const contents = [] as ParsedModel[]
    for (const file of files) {
      contents.push(this.parse(file))
    }
    return contents
  }
}

export interface ParsedModel {
  meta?: {
    title: string
    updated: string
    date: string
    categories: Array<string>
    tags: Array<string>
    slug: string
  }
  text: string
}
