let money = prompt('Ваш бюджет на месяц?');
let time = prompt('Введите дату в формате YYYY-MM-DD');

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

let expenseQ1 = prompt('Введите обязательную статью расходов в этом месяце');
let expenseA1 = prompt('Во сколько обойдется?');

let expenseQ2 = prompt('Введите обязательную статью расходов в этом месяце');
let expenseA2 = prompt('Во сколько обойдется?');

appData.expenses[expenseQ1] = expenseA1;
appData.expenses[expenseQ2] = expenseA2;

alert('Бюджет на один день ' + money/30);

