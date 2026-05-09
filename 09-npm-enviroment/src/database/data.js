async function connectToDatabase(user, password) {

user === process.env.USERDATABASE && password === process.env.PASSWORD ? 
    console.log("Conexão com o banco estabelecida") : 
    console.log("Falha de login, não foi possível e conectar ao banco");

}

export default connectToDatabase