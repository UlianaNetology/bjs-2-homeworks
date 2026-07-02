"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  } else {
    arr.push(
      (-b + Math.sqrt(discriminant)) / (2 * a),
      (-b - Math.sqrt(discriminant)) / (2 * a)
    );
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  if (typeof percent === 'string') {
    percent = Number(percent);
  }
  if (typeof percent !== 'number' || isNaN(percent)) {
    return false;
  }

  if (typeof contribution === 'string') {
    contribution = Number(contribution);
  }
  if (typeof contribution !== 'number' || isNaN(contribution)) {
    return false;
  }

  if (typeof amount === 'string') {
    amount = Number(amount);
  }
  if (typeof amount !== 'number' || isNaN(amount)) {
    return false;
  }

  if (typeof countMonths === 'string') {
    countMonths = Number(countMonths);
  }
  if (typeof countMonths !== 'number' || isNaN(countMonths)) {
    return false;
  }

  const monthlyRate = (percent / 100) / 12;
  const creditBody = amount - contribution;

  if (creditBody <= 0) {
    return 0;
  }

  let monthlyPayment;

  if (monthlyRate === 0) {
    monthlyPayment = creditBody / countMonths;
  } else {
    monthlyPayment = creditBody * (
      monthlyRate + 
      (monthlyRate / ((1 + monthlyRate) ** countMonths - 1))
    );
  }

  const totalAmount = monthlyPayment * countMonths;
  return parseFloat(totalAmount.toFixed(2));
}