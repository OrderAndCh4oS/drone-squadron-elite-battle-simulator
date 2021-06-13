function * nUniqueRandomChoice(n, arr) {
    for(let i = 0; i < 5; i++) {
        yield arr.splice(~~(Math.random() * arr.length), 1)[0];
    }
}

console.log([
    ...nUniqueRandomChoice(5, [
        '@Joffnft',
        '@aebrer',
        '@NicolasCanu4',
        '@celad00r',
        '@superlumenary',
        '@orlainberlin',
        '@nacdelpicryl',
        '@CandyChrome9',
        '@Flygohr',
        '@6eyFt'
    ])]);

