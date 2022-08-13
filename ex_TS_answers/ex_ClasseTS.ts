// Exercícios

// Classes
// 1) Crie uma classe chamada TV com as propriedades: marca, canal e volume. O canal deve ser 1 por padrão. O volume deve ser 50 por padrão.

class TV {
  public marca : String = '';
  public canal : number = 1;
  public volume : number = 50;

  aumentarVolume(){
    if(this.volume < 100){
      this.volume+=1
    }
  }

  diminuirVolume(){
    if(this.volume > 0){
      this.volume -= 1
    }
  }

  setCanal(canal: number){
    if(canal <= 50 && canal > 0){
      this.canal = canal
    }
  }

  resetTv(){
    this.canal = new TV().canal
    this.volume = new TV().volume
  }
}

const tv = new TV();

// 2) Adicione métodos públicos para aumentar e diminuir o volume. O volume nunca pode estar abaixo de 0 ou acima de 100.


tv.diminuirVolume()
console.log(tv)
tv.aumentarVolume()
tv.aumentarVolume()
console.log(tv)


// 3) Adicione um método público para definir o canal. A TV só pode ter 50 canais no máximo, portanto, se você tentar definir o canal 60, a TV deverá permanecer no canal atual.

tv.setCanal(60)
console.log(tv)
tv.setCanal(49)
console.log(tv)

// 4) Adicione um método público para redefinir a TV para que ela volte ao canal 1 e ao volume 50. (Dica: considere usá-lo do construtor).

tv.resetTv()
console.log(tv)