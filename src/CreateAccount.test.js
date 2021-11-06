import CreateAccount from './pages/CreateAccount';
import TestRenderer from 'react-test-renderer';

/*unit test for rendering (create user account page)*/

//render the labels
  test('render create account labels', ()=>{
    const testRenderer = TestRenderer.create(<CreateAccount/>);
    const testInstance = testRenderer.root;
  
    expect(testInstance.findByProps({test_id_h1:"1"}).children).toEqual(['Create Your Account ']);
    expect(testInstance.findByProps({test_id_fname: "2"}).children).toEqual(['Full Name']);
    expect(testInstance.findByProps({test_id_ename: "4"}).children).toEqual(['Email ID']);
    expect(testInstance.findByProps({test_id_pname: "6"}).children).toEqual(['Password']);
  });

  //render the input field and the craete button
  test('render create account input field', ()=>{
    const testRenderer = TestRenderer.create(<CreateAccount/>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({test_id_fullname: "3"}).props.placeholder).toEqual('Enter you full name');
    expect(testInstance.findByProps({test_id_emailid: "5"}).props.placeholder).toEqual('example@domain.com');
    expect(testInstance.findByProps({test_button_id: "8"}).children).toEqual([' Create ']);
  });

