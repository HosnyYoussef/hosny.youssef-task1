
const yargs = require("yargs");
const notes = require('./notes')

// add command
yargs.command({
    command:'add',
    describe:'Add grade of student',
    // options i am dealing with
    builder:{
        id:{
            describe:'This is id description in add command',
            demandOption: true,
            type:'number'
        },
        name:{
            describe:'This is name description in add command',
            demandOption:true,
            type:'string'
        },
        subject:{
            describe:'This is subject description in add command',
            demandOption:true,
            type:'string'
        },
        grade:{
            describe:'This is grade description in add command',
            demandOption:true,
            type:'number'
        }

    },
    handler:(argv)=>{
      notes.addNote(argv.id,argv.name,argv.subject,argv.grade)
    }
})

// read command
yargs.command({
    command:'read',
    describe:'Read note',
    builder:{
        grade:{
            describe:'This is grade in read command',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.readNote(argv.title)
    }
}) 

//list command
yargs.command({
    command:'list',
    describe:'List note',
    handler:(argv)=>{
       notes.listNote(argv.name,argv.grade)
    }
})

// delete command
yargs.command({
    command:'delete',
    describe:'Delete note',
    builder:{
        name:{
            describe:'This is name in delete command',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
      notes.removeNote(argv.name)
    }
})




yargs.parse()