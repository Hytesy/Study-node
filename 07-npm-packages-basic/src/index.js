import chalk from "chalk"
import logSymbols from "log-symbols"

console.log(chalk.blue("Hello package"));

console.log(logSymbols.success, "Server iniciado com sucesso");


console.log(logSymbols.error, chalk.red.italic("Falha ocorrida"));
