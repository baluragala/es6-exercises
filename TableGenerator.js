class Component {
    render(){
        throw new Error('Please implement this method in child')
    }
}


class TableGenerator extends Component {
    constructor(data, title) {
        super()
        this.data = data;
        this.title = title;
    }

    getHeaders() {
        let headings = Object.keys(this.data[0]);
        let cols = headings.map(h => `<td>${h}</td>`);
        return `<tr>${cols.join('')}</tr>`
    }

    makeDataRow(row) {
        let cols = [];
        for (let v in row) {
            cols.push(`<td>${row[v]}</td>`)
        }
        return `<tr>${cols.join('')}</tr>`;
    }

    render() {
        let header = this.getHeaders();
        let body = [];
        for (let row of data) {
            body.push(this.makeDataRow(row))
        }
        let bodyMarkup = body.join('');
        let table = `<table>${header}${bodyMarkup}</table>`;
        document.body.innerHTML = table;
    }
}

let data = [
    {title: 'apple', price: 2, qty: 30},
    {title: 'banana', price: 1, qty: 30},
    {title: 'chikoo', price: 1, qty: 30}
];
let table = new TableGenerator(data, 'fruits');
table.render();