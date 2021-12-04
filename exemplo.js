// const carrinho = { id: '9483iuorjd0l', nome: 'Ford' }
// console.log(carrinho)
// const { id, nome } = carrinho
// console.log(nome)

const listedString = "Banana, apple, pear, orange";

const {location} = {
  location: {
    country: 'Brasil',
    state: 'Rio de Janeiro',
    address: {
      street: 'Avenida Brasil',
      number: 1
    }
  }
};

const { country, state, address} = location
const { street, number} = address

// console.log(location)
// console.log(address)

const teste = [undefined, null, '','teste']

teste.forEach(t =>{
  console.log(!!t)
})