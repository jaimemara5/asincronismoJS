const fnAsync = () => {
    return new Promise((resolvem, reject) => {
        (true)
        ? setTimeout(()=> resolvem('Async!!'),200)
        : reject (new Error ('Error!'));
    });
}