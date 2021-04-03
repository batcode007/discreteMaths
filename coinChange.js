const coinChange = (coinDenominations, n) => {
    const coinList = [];
    for (let i = 0; i < coinDenominations.length; i++) {
        while (n >= coinDenominations[i]) {
            coinList.push(coinDenominations[i]);
            n = n - coinDenominations[i];
        }
        if (n == 0) break;
    }
    return coinList;
};

console.log(coinChange([25, 10, 5, 1], 21));