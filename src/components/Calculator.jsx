import { useState } from 'react';
import './Calculator.css';

function Calculator() {

    let operator = '';

    const Buttons = () => {

        function pressBtnHandler(e) {
            operator = e.target.textContent;
            clearBtns();
            e.target.className += ' pressed';
        }

        return (
            <div className='buttons'>
                <button className='calc-btn' onClick={pressBtnHandler}>+</button>
                <button className='calc-btn' onClick={pressBtnHandler}>-</button>
                <button className='calc-btn' onClick={pressBtnHandler}>*</button>
                <button className='calc-btn' onClick={pressBtnHandler}>/</button>
                <button className='calc-btn' onClick={pressBtnHandler}>x&#8319;</button>
            </div>
        )
    }

    const NumberBox = () => {
        return (
            <input type="number" className='calc-box'></input>
        )
    }

    const ResultBox = () => {
        const [result, setResult] = useState('0');

        function pressEqialBtnHandler() {
            const [firstNum, secondNum] = Array.from(document.getElementsByClassName('calc-box')).map(n => Number(n.value));
            const operations = {
                '+': (a, b) => a + b,
                '-': (a, b) => a - b,
                '*': (a, b) => a * b,
                '/': (a, b) => a / b,
                'xⁿ': (a, b) => (Math.pow(a, b))
            }
            const finalNum = operations[operator](firstNum, secondNum);
            setResult(`${finalNum}`);
        }
        function clearBtnHandler() {
            const [firstNum, secondNum] = Array.from(document.getElementsByClassName('calc-box'));
            setResult('0');
            firstNum.value = '';
            secondNum.value = '';
            operator = '';
            clearBtns();
        }
        return (
            <>
                <div>
                    <button className='calc-btn equal-btn' onClick={clearBtnHandler}>C</button>
                    <button className='calc-btn equal-btn' onClick={pressEqialBtnHandler}>=</button>
                </div>
                <p className='result'>{result}</p>
            </>
        )
    }

    return (
        <div className="container">
            <NumberBox />
            <Buttons />
            <NumberBox />
            <ResultBox />
        </div>
    )
}

function clearBtns() {
    Array
        .from(document.getElementsByClassName('buttons')[0].children)
        .map(c => c.className = 'calc-btn');
}

export default Calculator;