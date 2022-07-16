import './styles.css';

(function helloWebpack(){
    const container = document.getElementById('container');
    const hello = document.createElement('h1');
    hello.innerHTML = 'hello, webpack';
    container.appendChild(hello);
})();