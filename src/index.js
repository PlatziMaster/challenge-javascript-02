const fibonacci = (n) => {
var laentrega= new Array(n+1);
laentrega[0]=0;
laentrega[1]=1;


for( var i = 2; i <= (n-1) ; i++){

        laentrega[i]=( laentrega[i-1] + laentrega[i-2] );

}
  }


  module.exports = fibonacci;