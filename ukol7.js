//prijimaci ukol czechitas
4. Co vypíší obě console.log() funkce?

var promenna;

const foo = (num) => {
    const promenna = 0;
    promenna = num;
    console.log(promenna); // výpis?
};

promenna = 6;
foo(5);

console.log(promenna); // výpis?
