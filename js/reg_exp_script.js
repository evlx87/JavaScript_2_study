function magic() {
    let text = document.querySelector('.text').textContent;
    //console.log(text);

    //ищем все знаки ' и заменяем все одинарные кавычки на двойные
    const regexp = /'/g;
    console.log(text.replace(regexp, '\"'));
    document.querySelector('.out-1').textContent = text.replace(regexp, '\"');

    //модифицируем формулу
    console.log(text.replace(/(\W)(')|(^)(')/g, "$1\""));
    document.querySelector('.out-2').textContent = text.replace(/(\W)(')|(^)(')/g, "$1\"");
    // Скобки вокруг любой части регулярного выражения означают что эта часть совпадаемой подстроки будет запомнена. Раз запомнена, подстрока может выбрана для использования
    // $1  берет первое полученной совпадение из условий поиска и заменяет его

}

document.querySelector('.btn').onclick = magic;