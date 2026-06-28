// 1. Definindo a variável com a regex
const regexSenha = /^[a-z]+[1-9][0-9]*$/;

// 2. Criando uma função de validação
function validarSenha(senha) {
  if (regexSenha.test(senha)) {
    console.log(`✅ A senha "${senha}" é VÁLIDA.`);
    return true;
  } else {
    console.log(`❌ A senha "${senha}" é INVÁLIDA.`);
    return false;
  }
}

// 3. Testando os cenários do seu desafio
validarSenha("senha123");   // ✅ VÁLIDA
validarSenha("login7");     // ✅ VÁLIDA
validarSenha("admin100");   // ✅ VÁLIDA

validarSenha("login007");   // ❌ INVÁLIDA (Começa com 0 depois da letra)
validarSenha("senha0");     // ❌ INVÁLIDA (Número é apenas 0)
validarSenha("Senha123");   // ❌ INVÁLIDA (Tem letra maiúscula)
validarSenha("senha 123");  // ❌ INVÁLIDA (Tem espaço)