"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [f, i] = fio.split(' ');
    return `${i} ${f}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    if (array === null) return false;
    const set = new Set();
    for (const i of array){
        set.add(i);
    }
    return Array.from(set);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if(!array.length) return false;
    const init = {
        'min': array[0],
        'max': array[0]
    }
    array.reduce((init, val) => {
        if (init['min'] > val) init['min'] = val;
        if (init['max'] < val) init['max'] = val;
        return init;
    }, init)
    return init['max']/init['min'];
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor(){
        this.map = new Map();
    }

    push(key, value){
        if(typeof(key) === "string" && typeof(value) === "string") this.map.set(key, value);
    }

    get(key){
         return key ? this.map.get(key) : undefined;
    } 
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};