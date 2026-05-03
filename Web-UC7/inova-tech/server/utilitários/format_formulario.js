export function formatar_dados(string) {
    const tradutor = new URLSearchParams(string)
    
    return Object.fromEntries(tradutor.entries())
}