
const dato = 10 ;
var laentrega= new Array(dato);

laentrega[0]=1
laentrega[1]=1

if(dato<2){
        laentrega.pop()
        console.log(laentrega);
}else{
        for(var i = 2 ; i <= dato ; i++){
                laentrega[i]=( laentrega[i-1] + laentrega[i-2])
        }
        laentrega.pop()
        console.log(laentrega);
}






