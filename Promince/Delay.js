function delay(ms) {
            return new Promise((resolve) =>{
                setTimeout(() => {
                    resolve()
            }, ms);
        })    
       }

        function orderProminse() {
            delay(2000).then(()=>{
                console.log(10)
                return delay(1000);
            }).then(()=>{
                console.log(20)
                return delay(1000);
            }).then(()=>{
                console.log(30)
                return delay(1000);
            }).then(()=>{
                console.log(40)
                return delay(1000);
            }).then(()=>{
                console.log(50)
                return delay(1000);
            }).then(()=>{
                console.log(60)
                return delay(1000);
            }).then(()=>{
                console.log(70)
                return delay(1000);
            }).catch((err) => {
                console.log("error")
            }).finally(()=>{
                console.log("OK")
            })
        }

        orderProminse()