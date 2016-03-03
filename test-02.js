/**
 * Created by AnaPinto on 3/3/2016.
 */

var calculator = new Calculator();
calculator.draw(); // prints calculator in UI and makes it functional

/**/


var Calculator = function()
{
    //Properties
    this.op1;
    this.op2;
    this.op;

};

Calculator.prototype.draw= function()
{
    t = document.createElement('table')
    r = document.createElement('tr')
    c7 = document.createElement('td')
    c8 = document.createElement('td')
    c9 = document.createElement('td')
    cC = document.createElement('td')
    t.appendChild(r)
    r.appendChild(c7)
    r.appendChild(c8)
    r.appendChild(c9)
    r.appendChild(cC)
    c7.innerText = '7'
    c7.addEventListener('click', saveNumber);
    c8.innerText = '8'
    c9.innerText = '9'
    cC.innerText = 'C'

    r = document.createElement('tr')
    c4 = document.createElement('td')
    c5 = document.createElement('td')
    c6 = document.createElement('td')
    cDiv = document.createElement('td')
    t.appendChild(r)
    r.appendChild(c4)
    r.appendChild(c5)
    r.appendChild(c6)
    r.appendChild(cDiv)
    c4.innerText = '4'
    c5.innerText = '5'
    c6.innerText = '6'
    cDiv.innerText = '/'

    r = document.createElement('tr')
    c1 = document.createElement('td')
    c2 = document.createElement('td')
    c3 = document.createElement('td')
    cMul = document.createElement('td')
    t.appendChild(r)
    r.appendChild(c1)
    r.appendChild(c2)
    r.appendChild(c3)
    r.appendChild(cMul)
    c1.innerText = '1'
    c2.innerText = '2'
    c3.innerText = '3'
    cMul.innerText = '*'

    r = document.createElement('tr')
    c0 = document.createElement('td')
    cEqual = document.createElement('td')
    cSum = document.createElement('td')
    cSus = document.createElement('td')
    t.appendChild(r)
    r.appendChild(c0)
    r.appendChild(cEqual)
    r.appendChild(cSum)
    r.appendChild(cSus)
    c0.innerText = '0'
    cEqual.innerText = '='
    cSum.innerText = '+'
    cSus.innerText = '-'

    var body = document.getElementsByTagName('body')[0];
    body.appendChild(t)

};


Calculator.prototype.saveNumber = function(e){
    this.op1 = e;
};



t = document.createElement('table')
    r = document.createElement('tr')
    c7 = document.createElement('td')
    c8 = document.createElement('td')
    c9 = document.createElement('td')
    cC = document.createElement('td')
    t.appendChild(r)
    r.appendChild(c7)
    r.appendChild(c8)
    r.appendChild(c9)
    r.appendChild(cC)
    c7.innerText = '7'
c7.addEventListener('click', saveNumber);
    c8.innerText = '8'
    c9.innerText = '9'
    cC.innerText = 'C'

    r = document.createElement('tr')
    c4 = document.createElement('td')
    c5 = document.createElement('td')
    c6 = document.createElement('td')
    cDiv = document.createElement('td')
    t.appendChild(r)
    r.appendChild(c4)
    r.appendChild(c5)
    r.appendChild(c6)
    r.appendChild(cDiv)
    c4.innerText = '4'
    c5.innerText = '5'
    c6.innerText = '6'
    cDiv.innerText = '/'

    r = document.createElement('tr')
    c1 = document.createElement('td')
    c2 = document.createElement('td')
    c3 = document.createElement('td')
    cMul = document.createElement('td')
    t.appendChild(r)
    r.appendChild(c1)
    r.appendChild(c2)
    r.appendChild(c3)
    r.appendChild(cMul)
    c1.innerText = '1'
    c2.innerText = '2'
    c3.innerText = '3'
    cMul.innerText = '*'

r = document.createElement('tr')
c0 = document.createElement('td')
cEqual = document.createElement('td')
cSum = document.createElement('td')
cSus = document.createElement('td')
t.appendChild(r)
r.appendChild(c0)
r.appendChild(cEqual)
r.appendChild(cSum)
r.appendChild(cSus)
c0.innerText = '0'
cEqual.innerText = '='
cSum.innerText = '+'
cSus.innerText = '-'

var body = document.getElementsByTagName('body')[0];
body.appendChild(t)

