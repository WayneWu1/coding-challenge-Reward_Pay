import { expensesCalculation, revenueCalculation } from "../src/calculations";
import { ExpensesRecord } from "../types/ExpensesRecord";
import { RevenueRecord } from "../types/RevenueRecord";

/**
 * Test Cases for Revenue Calculation
 */

test("REV-CASE-1: Calculates the revenue CORRECTLY", () => {
    const revMock: RevenueRecord [] = [
        { "account_category": "revenue","total_value": 100},
        { "account_category": "revenue","total_value": 200},
        { "account_category": "expense","total_value": 300},
    ];

    expect(revenueCalculation(revMock)).toBe(300);
})

test("REV-CASE-2: Calculates the revenue INCORRECTLY", () => {
    const revMock: RevenueRecord [] = [
        { "account_category": "revenue","total_value": 200},
        { "account_category": "revenue","total_value": 300},
        { "account_category": "expense","total_value": 400},
    ];

    expect(revenueCalculation(revMock)).not.toBe(600);
})

/**
 * Test Cases for Expenses Calculation
 */

test("EXP-CASE-1: Calculates the expenses CORRECTLY", () => {
    const revMock: ExpensesRecord [] = [
        { "account_category": "revenue","total_value": 100},
        { "account_category": "expense","total_value": 200},
        { "account_category": "expense","total_value": 300},
    ];

    expect(expensesCalculation(revMock)).toBe(500);
})

test("EXP-CASE-2: Calculates the revenue INCORRECTLY", () => {
    const revMock: ExpensesRecord [] = [
        { "account_category": "revenue","total_value": 200},
        { "account_category": "expense","total_value": 300},
        { "account_category": "expense","total_value": 400},
    ];

    expect(expensesCalculation(revMock)).not.toBe(600);
})