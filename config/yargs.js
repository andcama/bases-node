const argv = require("yargs").option("b", {
    alias: "base",
    type: "number",
    demandOption:true,
    describe:'Its the base of table multiplier'
  }).check((argv,options)=>{
      console.log('yargs',argv)
      if(isNaN(argv.b)){
          throw 'The number base it must be a number'
      }
      return true
  })
  
  .option("l", {
      alias: "list",
      type: "boolean",
      default:false,
      describe:'Show table in console'
    })

    .option("h", {
        alias: "until",
        type: "number",
        default:20,
        describe:'This is the number that limit the table  '
      })
  
  .argv;

module.exports=argv;