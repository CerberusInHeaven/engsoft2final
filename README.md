# livraria-poo

Atividade final da cadeira de engenharia de software 2 
3 semestre, manhã 



Grupo : Nathan Bandeira 
        


DESIGN PATTERNS: Singleton

O Singleton é um padrão de design criacional que garante a existência de apenas uma única instância de uma classe durante a execução de um programa, fornecendo um ponto global de acesso a essa instância. 
Ele é amplamente usado em situações onde é necessário controlar o acesso a um recurso compartilhado ou garantir consistência de estado.

Features principais

Instância Única:
Apenas uma instância da classe é criada e reutilizada em todo o sistema.

Acesso Global:
A instância única é acessível por meio de um método estático, geralmente chamado getInstance.

Controle Centralizado:
Facilita o controle centralizado de recursos como configurações, logs, conexões de banco de dados, etc.

VANTAGENS: 

Benefícios:

Controle sobre o acesso à instância.
Economia de recursos, já que evita a criação de múltiplas instâncias.
Consistência global, útil para recursos compartilhados.


DESVANTAGENS:

Dificuldade de teste:
A dependência de uma instância global pode tornar testes unitários mais complexos.

Risco de acoplamento elevado:
Pode introduzir dependências globais indesejadas entre componentes.
        
Multithreading:
Em ambientes concorrentes, é necessário garantir que a criação da instância seja thread-safe, o que pode adicionar complexidade.