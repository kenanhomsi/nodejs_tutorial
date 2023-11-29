const{readFile,writeFile} =require('fs')

readFile('./content/first.txt','utf-8',(err,result)=>{
        if(err){
            return
        }
        const first=result;
        readFile('./content/second.txt','utf-8',(err,result)=>{
            if(err) {
                return
            }
            const second=result;
            writeFile('./content/threed.txt',`all in here ${first} and ${second}`,{flag:'a'},(err,result)=>{
                if(err){
                    return
                }
                console.log(result);
            })
            // writeFile('./content/four.txt',`this in the four file ${first} and ${second}`)
        })

})