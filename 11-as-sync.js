const {readFile, writeFile} = require('fs');
console.log('start')
//asynchronous file read write

//readFile first argument is the path name to the file. 
//second is the buffer most likely 'utf8'
//third argument is the call back function.
//The call back function first argument is an error check the second is the result

readFile('./content/first.txt','utf8', (err,result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt','utf8', (err, result)=>{
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `here is the result : ${first}, ${second}`,
            (err, result) =>{
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }
        )
    })
})
console.log("starting next task")
