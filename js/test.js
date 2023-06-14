
console.log("Componente React")

function App() {
    return React.createElement(
      'div',
      null,
      React.createElement('h1', null, 'Hola mundo'),
      React.createElement('p', null, 'Desde React')
    );
  }
  
  ReactDOM.render(React.createElement(App), document.getElementById('aplicacion'));