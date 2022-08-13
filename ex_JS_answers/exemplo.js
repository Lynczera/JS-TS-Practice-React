// const carrinho = { id: '9483iuorjd0l', nome: 'Ford' }
// console.log(carrinho)
// const { id, nome } = carrinho
// console.log(nome)

const numbers = [2, 8, 16];
const users = [{ id: 4781, name: 'Juan Carlos' }, { id: 6538, name: 'Maria Benita' }, { id: 3874, name: 'Manuela Assis' }]

const listedString = "Banana, apple, pear, orange";

const { location } = {
  location: {
    country: 'Brasil',
    state: 'Rio de Janeiro',
    address: {
      street: 'Avenida Brasil',
      number: 1
    }
  }
};

const { country, state, address } = location
const { street, number } = address

// console.log(location)
// console.log(address)

const teste = [undefined, null, '', 'teste']

teste.forEach(t => {
  console.log(!!t)
})

const _users = users.reduce((accumulator, currentValue) => {
  return{
    names: [...accumulator.names, currentValue.name],
    ids: [...accumulator.ids, currentValue.id]
  }
}, {
  names: [],
  ids: []
})

const selectedPayments = [{type: 'food-card'}];

const selectedPaymentsTest = selectedPayments.reduce((accumalator, currentValue) => {	
	return {
		types: [...accumalator.types, currentValue.type],
	}
}, {
	types: ['credit-card', 'food-card'],
});

const splitTypesGroup = ['credit-card', 'food-card'];

const isPaymentValid = selectedPaymentsTest.types.every(selectedType => splitTypesGroup.some(typeInGroup => typeInGroup === selectedType));

console.log(isPaymentValid);