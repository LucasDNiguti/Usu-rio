import App from "./app";

function main() {
    App.listen(3000, 'localhost', () => {
        console.log('Servidor rodando na porta 3000')
    })
}

main()