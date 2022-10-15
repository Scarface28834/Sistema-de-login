var login, senha, entrada_login, entrada_senha, res;
login="hokage";
senha="1234";
entrada_login=prompt("Digite seu login");
entrada_senha=prompt("Digite a sua senha");
res=(login == entrada_login) && (senha == entrada_senha) ? "Acesso Ok!" : "Acesso Negado!";
document.write(res);