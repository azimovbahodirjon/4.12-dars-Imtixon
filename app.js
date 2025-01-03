//Masala-1
function misol(str, subStr) {
    return str.replace(subStr, "");
}

// Masala-2
function misol(str) {
    return str.slice(1, -1);
}
console.log(misol("<div>"));

//Masala-3
function son(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}

// Masala-4 qila olmadim ustoz

//Masala-5
function sonlar(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}

// Masala-6 Qila olmadm ustoz

// Masala-7
function Misol(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i == 0 || arr[i] !== arr[i - 1]) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(res);

// Masala-8
function removeElements(arr, k, m) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i < k || i > m) {
            result.push(arr[i]);
        }
    }
    return result;
}

// Masala-9 Tushunmadm ustoz

//Masala-10  shu misola chatgpt dan yordam oldim ustoz
function Total(products) {
    let Sum = 0;

    products.forEach(product => {
        let counted = product.price - (product.price * product.discount / 100);
        Sum += counted;
    });

    return totalSum;
}