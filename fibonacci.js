
const dato = 18 ;
var laentrega= new Array(dato+1);
laentrega[0]=0;
laentrega[1]=1;


for( var i = 2; i <= (dato-1) ; i++){

        laentrega[i]=( laentrega[i-1] + laentrega[i-2] );

}

laentrega.pop();
console.log(laentrega);




