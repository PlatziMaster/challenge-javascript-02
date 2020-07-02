const fibonacci = (n) => {
        var laentrega= new Array(n);
        laentrega[0]=1
        laentrega[1]=1
        if(n<2){
                laentrega.pop()
                return laentrega;
        }else{
                for(var i = 2 ; i <= n ; i++){
                        laentrega[i]=( laentrega[i-1] + laentrega[i-2])
                }
                laentrega.pop()
                return laentrega;
                }
        };


module.exports = fibonacci;

