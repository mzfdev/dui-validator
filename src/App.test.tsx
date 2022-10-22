import { render } from 'react-dom';
import { describe } from 'vitest'
import App from './App';
import * as ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';


describe('App', () => { 

  let element: HTMLDivElement;

  beforeEach(()=>{
    element = document.createElement('div');
    document.body.appendChild(element);
    ReactDOM.render(<App/>,element);
  })

  afterEach(()=>{
    document.body.removeChild(element);
    element.remove();
  })

  it('should render', () => {
    const component = renderer.create(
      <App/>
    );
    const comp = component.toJSON();
    expect(comp).toMatchSnapshot();
  });

  it('should have title "Mi DUI es valido?"', () => {
    const title = element.querySelector('h1');
    expect(title?.textContent).toBe('Mi DUI es valido?');
  });

  it('should have an input text', () => {
    const input= element.querySelector('input');
    expect(input?.type).toBe('text');
  });
  it('should have a button with text "Validar"', () => {
    const button = element.querySelector('button');
    expect(button?.textContent).toBe('Validar');
  });
  /* Lo que demas que se les ocurra que puedan probar */
  it('should have a button element', () => {
    const button = element.querySelector('button');
    expect(button).toBeInTheDocument;
  });

  /*
    test('should have an title "Mi DUI es valido?"', () => {
    const title = element.querySelector('h1');
    expect(title?.textContent).toBe('Mi DUI es valido?');
  });

  test('should have an input text', () => {
    const input= element.querySelector('input');
    expect(input?.type).toBe('text');
  });

  test('should have a button with text "Validar"', () => {
    const button = element.querySelector('button');
    expect(button?.textContent).toBe('Validar');
  });
  */

})
