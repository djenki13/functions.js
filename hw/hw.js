function hello (name) {
    if (name) {
        console.log(`hello ${name}`)
    } else {
        console.log("hello world!")
    }
}
hello("Dan")
hello()

function counter  (num) {
    for (let i=num; i>=0; i--) {
        console.log(i)
    }
}

counter(14)