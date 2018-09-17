interface book {
    title: string,
    readonly author: string,
    published?: Date,
    pages?: number,
}

interface myFunc{
    str1: string,
    str2: string,
    str3: string,
}

function myFunction(a:myFunc){
    return [a.str1, a.str2, a.str3]
}

function myFunctionUpperCase(a:myFunc){
    let arr = [a.str1.toUpperCase, a.str2.toUpperCase, a.str3.toUpperCase]
    
    let arr2 = [a.str1, a.str2, a.str3]
    arr2.map(f => f.toUpperCase)

    return arr2
}