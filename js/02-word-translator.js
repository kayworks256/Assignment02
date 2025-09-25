let languageCode = prompt('Enter the language code (es, de, en, or fr)')
switch (languageCode) {
    case 'es':
    document.write('Hello World translated in Spanish is: Hola Mundo')
    break
    case 'de':
    document.write('Hello World translated in German is: Hallo Welt')
    break
    case 'en':
    document.write('Hello World translated in English is: Hello World')
    break
    case 'fr':
    document.write('Hello World translated in French is: Bonjour le monde')
    break
    default:
    document.write('Invalid input')
}