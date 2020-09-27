// neste arquivo vamos armazenar toda a configuração do babel
// os presets são conjuntos de configurações criados por terceiros: 
// preset-env: converte tudo o que o navegador não entende das novas funcionalidades do javascript para o modo antigo
// preset-react: converte o html que colocamos dentro do react para uma forma que o navegador entenda

module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'
    ]
}