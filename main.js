const csv = require('csv-parser')
const fs = require('fs')
const results = []
const domains = []
fs.createReadStream('challenge.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('data', (data) => domains.push(data.url))
    .on('end', () => {
    
      const domainlist = domains.map(urls => { 
        const parts = urls.split('/')
        return parts[2]
      })
   
    
      let deduped = []
      domainlist.forEach(domain =>{
        if(!deduped.includes(domain)){
          deduped.push(domain)
        }
      })
      console.log(deduped)
    })