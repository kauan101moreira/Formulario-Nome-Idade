class NomeIdade {
	
	constructor() {
		this.arrayPessoas = [];
	}
	
	salvar() {
		let pessoa = this.lerDados();
		
		if(this.validaCampos(pessoa)) {
			this.adicionar(pessoa);
		}
		
		this.listaTabela();
	}
	
	listaTabela() {
		let tbody = document.getElementById('tbody');
		tbody.innerText = '';
		
		for(let i = 0; i < this.arrayPessoas.length; i++ ) {
			let tr = tbody.insertRow();
			
			let td_nome = tr.insertCell();
			let td_idade = tr.insertCell();
			
			td_nome.innerText = this.arrayPessoas[i].nome;
			td_idade.innerText = this.arrayPessoas[i].idade;
			
			td_idade.classList.add('center');
		}
	}
	
	adicionar(pessoa) {
		this.arrayPessoas.push(pessoa);
	}
	
	lerDados() {
		let pessoa = []
		
		pessoa.nome = document.getElementById('nome').value;
		pessoa.idade = document.getElementById('idade').value;
		
		document.getElementById('nome').value = '';
		document.getElementById('idade').value = '';
		
		return pessoa;
	}
	
	validaCampos(pessoa) {
		let msg = '';
		
		if(pessoa.nome == '') {
			msg += 'Informe um nome \n';
		}
		
		if(pessoa.idade == '') {
			msg += 'Informe uma idade \n';
		}
		
		if(isNaN(pessoa.idade)) {
			msg += 'Informe uma idade válida'
		}
		
		if(msg != '') {
			alert(msg);
			return false;
		}
		
		return true;
	}
}

var nomeIdade = new NomeIdade();