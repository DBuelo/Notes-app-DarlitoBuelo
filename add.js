const fs = require('fs')

const add = function(note=[], oldNote) {
    let finalNote = JSON.parse(oldNote)
    
    finalNote.push(note)

    let objectNote = JSON.stringify(note)

    fs.writeFileSync('Task.txt', objectNote)
}

module.exports = add
