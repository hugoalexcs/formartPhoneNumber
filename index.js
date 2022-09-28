const fs = require('fs');
const path = require('path')    


try{        
    const serviceKey = path.join(__dirname, '.','/data/numeros.txt')        

     const readData = fs.readFileSync(`${serviceKey}`, 'utf-8');
      let lista = readData.split('\n')
      let number = ''
      let numberCharacter = 0
      let sem9 = ''
      let listaFinal = []
      lista.forEach((data, i) => {
          number = data.replace(/\s/g, '').replaceAll('-', '').replaceAll('+', '')
          numberCharacter = number.length
         if (numberCharacter > 12) {
            sem9 = number.slice(0,4) + number.slice(5,numberCharacter)
        } else {
            sem9 = number
        } 
        if (numberCharacter > 5)    
         listaFinal.push(sem9)             
    })
    console.log(listaFinal )  

 //let ok = fs.writeFileSync(`${serviceKey}`, JSON.stringify(listaFinal)); 
 //5511 9 4177 6267
             
 } catch(e){
     console.log('ERROR', e)
 }