const isNumbersPrime = (...numbers) => {
    let isPrime = true;

    for (let k = 0; k < numbers.length; k++) {
        if(numbers[k] < 2){
            //Eğer sayı 2 den küçükse başa dön
            continue
        }

        for (let i = 2; i < numbers[k]; i++) {
            isPrime = true;
            if (numbers[k] % i === 0) {
                //Sayı asal değil
                isPrime = false;
                break
            }
        }
        if(isPrime){
            //Sayı asal
            console.log("Sayı asaldır: " + numbers[k])
        }
    }
}
isNumbersPrime(1, 2, 3,4 ,5 ,6, 8, 10, 11, 12, 13, 15, 16, 17)


console.log("-------------------------------------------------------")
const isFriendNumbers = (number1, number2) => {
    let sumOfDivisorsNum1 = 1;
    let sumOfDivisorsNum2 = 1;

    for (let i = 2; i < number1; i++) {
        if(number1 % i === 0){
            sumOfDivisorsNum1 = sumOfDivisorsNum1 + i
        }
    }
    for (let i = 2; i < number2; i++) {
        if(number2 % i === 0){
            sumOfDivisorsNum2 = sumOfDivisorsNum2 + i
        }
    }
    if(sumOfDivisorsNum1 === number2 && sumOfDivisorsNum2 === number1){
        console.log(`${number1} ile ${number2} sayıları gardaş`)
    }
}
isFriendNumbers(220, 284)


console.log("-------------------------------------------------------")
// kendisi hariç pozitif tam bölenlerinin toplamı kendisine eşit olan sayı.
const perfectNumberList = (limit) => {
    let sumOfDivisorsNum = 1;

    console.log(limit + " sayısından küçük mükemmel sayılar")
    for (let k = 2; k < limit; k++) {
        sumOfDivisorsNum = 1
        for (let i = 2; i < k; i++) {
            if(k % i === 0){
                sumOfDivisorsNum = sumOfDivisorsNum + i;
            }
        }
        if(sumOfDivisorsNum === k){
            console.log("Mükemmel sayı: " + k)
        }
    }  
} 
perfectNumberList(1000)


console.log("-------------------------------------------------------")
const numberPrimeList = (limit) => {
    let isPrime = true;
    
    console.log(limit + " sayısından küçük asal sayılar")
    for (let k = 2; k < limit; k++) {
        isPrime = true

        for (let i = 2; i < k; i++) {
            if(k % i === 0){
                isPrime = false;
                break;
            }
        }
        
        if(isPrime){
            console.log(k)
        }
    }
}
numberPrimeList(1000)