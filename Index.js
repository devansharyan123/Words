const { Command } = require('commander');
const fs = require('fs');
const program = new Command();

program
  .name('string-util')
  .description('CLI to some JavaScript string utilities')
  .version('0.8.0');

program.command('count')
  .description('counting number of words in a string')
  .argument('<file>', 'file to read')
  .action((file) => 
    {
      fs.readFile(file ,"UTF-8", function(err,data){
    let total = 0;
    if(err){
      console.log("Error :", err);
    }
    for(let i = 0; i < data.length ; i++){
      if(data[i] === ' '){
        total++;
      }
    }
    console.log(total);
  })
});

program.parse();