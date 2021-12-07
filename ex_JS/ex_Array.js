const numbers = [2, 8, 16];
const users = [{ id: 4781, name: 'Juan Carlos' }, { id: 6538, name: 'Maria Benita' }, { id: 3874, name: 'Manuela Assis' }]


/* 1 - Mapas */
const mostrarMapas = () => {
  /* 1) Faça um map no array 'numbers', para que cada valor do array, seja multiplicado por 3 */
  console.log(numbers.map(num => num * 3))
  /* 2) Faça um map no array 'numbers', para que cada valor do array, seja somado com o último elemento */
  console.log(numbers.map((num, index, _array) => num + _array[_array.length - 1]))
  /* 3) Faça um map no array 'numbers', para que cada valor do array, seja subtraído com o primeiro elemento */
  console.log(numbers.map((num, index, _array) => num - _array[0]))
}

/* mostrarMapas() */


/* 2 - Filtros */
const mostrarFiltros = () => {
  /* 1) Faça um filter no array 'numbers', para que não contenha valores menores que 9 */
  console.log(numbers.filter(n => n >= 9))
  /* 2) Faça um filter no array 'numbers', para que não contenha dados do tipo número */
  console.log(numbers.filter(n => typeof n != 'number'))
  /* 3) Faça um filter no array 'users', para que não contenha o usuário com id 6538 */
  console.log(users.filter(u => u.id != 6538))
}

// mostrarFiltros()


/* 3 - Reduções */
const mostrarReduce = () => {

  /* 1) Faça um reduce no array 'users', para que cada objeto não contenha a propriedade 'name' */
  const _users = users.reduce((accumulator, currentValue) => {
    return [...accumulator, { id: currentValue.id }]
  }, [])

  console.log(_users)

  /* 2) Faça um reduce no array 'users', retornando um objeto com a seguinte estrutura: { [name]: { id: 4781 } } */
  const _users2 = users.reduce((accumulator, currentValue) => {
    return {
      ...accumulator,
      [currentValue.name]: { id: currentValue.id }
    }
  }, [])

  console.log(_users2)

}

mostrarReduce()


/* 4 - Busca */
const mostrarBusca = () => {
  /* 1) Faça um find no array 'users', buscando o objeto com a propriedade name igual a 'Manuela Assis' */
  console.log(users.find(u => u.name == 'Manuela Assis'))
  /* 2) Faça um find no array 'numbers', buscando o valor menor que 15 */
  console.log(numbers.find(n => n < 15))
  /* 3) Faça um includes no array 'numbers', testando se o valor 8 existe */
  console.log(numbers.includes(8))
  /* 4) Faça um some no array 'numbers', testando se algum valor maior que 4 existe */
  console.log(numbers.some(n => n >= 4))
  /* 5) Faça um every no array 'numbers', testando se todos os valores são do tipo string */
  console.log(numbers.every(n => typeof n == 'string'))
}

// mostrarBusca()

/* 5 - Desestruturação */
const mostrarDesestruturacao = () => {
  /* 1) Faça uma desestruturação do array 'users', extraindo o primeiro e segundo valor */
  const [firstUser, secondUser] = users
  console.log(firstUser)
  console.log(secondUser)

  /* 2) Faça uma desestruturação do array 'users', extraindo a propriedade name do primeiro valor */
  const [user] = users
  const { name } = user
  console.log(name)

  /* 3) Faça uma desestruturação do array 'users', extraindo a propriedade id do primeiro valor, e name do segundo valor */
  const [{ id: idPrimeiro }, { name: nameSegundo }] = users
  console.log(idPrimeiro)
  console.log(nameSegundo)

  // const [primeiroUsuario , segundoUsuario] = users
  // console.log(primeiroUsuario.id)
  // console.log(segundoUsuario.name)
}

// mostrarDesestruturacao()


/* 6 - Spread Operator */
const mostrarSpreadOperator = () => {
  /* 1) Crie um novo array com os valores dos arrays 'number' e 'users', usando o spread operator */
  console.log([...numbers, ...users])
}


/* 7 - Inserção */
const mostrarInsercao = () => {

  /* 1) Faça um push no array 'numbers', adicionado o valor 45 */
  numbers.push(45)
  console.log(numbers)

  /* 2) Faça um push no array 'users', adicionando o valor {id: 8893, name: 'Dominique Carlos'} */
  users.push({ id: 8893, name: 'Dominique Carlos' })
  console.log(users)

  /* 3) Faça um unshift no array 'users', adicionando o valor {id: 7436, name: 'Mariano Azevedo'} */
  users.unshift({ id: 7436, name: 'Mariano Azevedo' })
  console.log(users)

  /* 4) Faça um unshift no array 'numbers', adicionando os valores -20, -7, 89 */
  const numerosParaAdicionar = [-20, -7, 89]
  numbers.unshift(...numerosParaAdicionar)
  console.log(numbers)

}

// mostrarInsercao()