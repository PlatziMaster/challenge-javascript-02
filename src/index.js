const fibonacci = (n) => {
  const serie = [0,1];

  for (let i=1; i < n; ++i) {
    let [ last, now ] = [
      serie[serie.length-2],
      serie[serie.length-1]
    ];

    let next = last + now;
    serie.push(next)
  }

  serie.shift();
  return serie;
}


module.exports = fibonacci;