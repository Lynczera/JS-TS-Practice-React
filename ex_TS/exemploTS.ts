// class User {
// 	private email;
// 	private name = '';
// 	protected address = '';
// 	// Só usar essa declaração caso não use Typescript	
// 	#password = '';

// 	constructor(email, name, password) {
// 		this.setEmail(email);
// 		this.name = name;
// 		this.#password = password;
// 	}
	
// 	getName() {
// 		return this.name;
// 	}
	
// 	public getEmail() {
// 		return this.email;
// 	}
	
// 	private setEmail(email) {
// 		return this
// 	}
	
// 	protected getPassword() {
// 		return this.#password;
// 	}
// }

// class Alumni extends User {
// 	public course;
	
// 	constructor(email) {
// 		super(email, '', '');
// 		this.date = new Date();
// 		this.address;
// 		this.course = 'Javascript';
// 	}
// }
// const _user = new User('', '', '');
// _user.getName();
// const newAlumni = new Alumni('teste@teste.com');



/* Exercícios */

/* Classes */
/* 
1) Crie uma classe chamada TV com as propriedades: marca, canal e volume. O canal deve ser 1 por padrão. O volume deve ser 50 por padrão.
2) Adicione métodos públicos para aumentar e diminuir o volume. O volume nunca pode estar abaixo de 0 ou acima de 100.
3) Adicione um método público para definir o canal. A TV só pode ter 50 canais no máximo, portanto, se você tentar definir o canal 60, a TV deverá permanecer no canal atual.
4) Adicione um método público para redefinir a TV para que ela volte ao canal 1 e ao volume 50. (Dica: considere usá-lo do construtor).
*/