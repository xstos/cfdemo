import { reactive, html} from 'https://esm.sh/@arrow-js/core';
import {hi} from './util.js'

var data = reactive({
    clicks: 0,
    items: []
});
function myItem(item) {
    return html`${item}`
}
const buttonStyle ="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
var template = html`
    <div>
        <button class="${buttonStyle}" @click="${() => {
            data.items.pop()
            return data.clicks++;
        }}">
            Fired ${() => data.clicks} arrows
            
        </button>
        ${()=>data.items.map(myItem)}
    </div>
`

template(document.body)
data.items.push('hi')
data.items.push('hi2')

console.log(hi())

const response = await fetch('/derp');
const resp = await response.text();
console.log(resp)