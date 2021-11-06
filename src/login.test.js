import Login from './pages/login';
import TestRenderer from 'react-test-renderer';

/*unit test for rendering (Login in user page)*/

//render the labels
  test('render login labels', ()=>{
    const testRenderer = TestRenderer.create(<Login/>);
    const testInstance = testRenderer.root;
  
    expect(testInstance.findByProps({test_id_h2: "1"}).children).toEqual([' Log in to Your Account']);
    expect(testInstance.findByProps({test_id_ename: "2"}).children).toEqual(['Email ID']);
    expect(testInstance.findByProps({test_id_pname: "4"}).children).toEqual(['Password']);
  });

  //render the input fiels and button
  test('render login input field', ()=>{
    const testRenderer = TestRenderer.create(<Login/>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({test_id_emailid: "3"}).props.placeholder).toEqual('example@domain.com');
    expect(testInstance.findByProps({test_id_password: "5"}).props.placeholder).toEqual('Enter your password');
    expect(testInstance.findByProps({test_button_id: "6"}).children).toEqual([' Login ']);
  });
