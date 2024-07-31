interface TypeBotInterface {
    _id?: string,
    formName: string,
    userId?: string,
    folderId?: string,
    flow: ElementInterface[],
    theme?: string
}

interface ElementInterface {
    type: string,
    category: string,
    name: string,
    link: string,
    _id?: string


}

export type { TypeBotInterface, ElementInterface }