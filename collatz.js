const collatzConjecture = (n) =>{
    while(n!=1){
        console.log('value of n : ',n);
        if(n%2==0){
            n = n/2;
        }
        else{
            n = 3*n+1;
        }
    }
    return n;
};

const collatzConjectureRecursion = (n) =>{
    console.log('value of n in recursion',n);
    if(n==1){
        return n;
    }
    if(n%2==0){
        n = n/2;
    }
    else{
        n = 3*n+1;
    }

    return collatzConjectureRecursion(n);

};

console.log(collatzConjecture(910000000));
console.log(collatzConjectureRecursion(900000000));