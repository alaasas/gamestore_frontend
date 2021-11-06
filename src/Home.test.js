import Game_content from './pages/Home';
import TestRenderer from 'react-test-renderer';

/*unit test for rendering (Game Content Page)*/

//render the home page lable
  test('render Welcome statment', ()=>{
    const testRenderer = TestRenderer.create(<Game_content/>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({test_id_h1:"1"}).children).toEqual(['Welcome To Game Renting Store']);
  });

  //render games images
  test('should returen the correct image src', ()=>{
    const testRenderer = TestRenderer.create(<Game_content/>);
    const testInstance = testRenderer.root;
    expect(testInstance.findByProps({test_id_img1: "2"}).props.src).toEqual('https://assets1.ignimgs.com/2018/03/06/fortnite---button-1520296499714.jpg?width=300');
    expect(testInstance.findByProps({test_id_img2: "3"}).props.src).toEqual('https://assets-prd.ignimgs.com/2021/08/17/call-of-duty-vanguard-button-00-1629164778736.jpg?width=300');
    expect(testInstance.findByProps({test_id_img3: "4"}).props.src).toEqual('https://assets-prd.ignimgs.com/2020/11/14/marvels-spider-man-general-1605330330912.jpg?width=300');
    expect(testInstance.findByProps({test_id_img4: "5"}).props.src).toEqual('https://assets1.ignimgs.com/2018/06/13/super-smash-btros-ultimate---button-0001-1528851298611.jpg?width=300');
    expect(testInstance.findByProps({test_id_img5: "6"}).props.src).toEqual('https://assets-prd.ignimgs.com/2021/10/01/fifa-22-legacy-edition-button-1633122224466.jpg?width=300');
    expect(testInstance.findByProps({test_id_img6: "7"}).props.src).toEqual('https://assets-prd.ignimgs.com/2021/10/21/lego-star-wars-castaway-button-1634780317249.jpg?width=300');
    expect(testInstance.findByProps({test_id_img7: "8"}).props.src).toEqual('https://assets-prd.ignimgs.com/2021/06/02/srx-button-1622596548857.jpg?width=300');
    expect(testInstance.findByProps({test_id_img8: "9"}).props.src).toEqual('https://assets-prd.ignimgs.com/2020/09/28/dynasty-warriors-9-empires-button-001-1601330278777.jpg?width=300');
    expect(testInstance.findByProps({test_id_img9: "10"}).props.src).toEqual('https://assets-prd.ignimgs.com/2021/06/25/crash-drive-3-button-1624640707993.jpg?width=300');
    expect(testInstance.findByProps({test_id_img10: "11"}).props.src).toEqual('https://assets1.ignimgs.com/2019/06/04/legend-of-zelda-breath-of-the-wild---button-1559683061451.jpg?width=300');
  });
//   //render the input field and the craete button
//   test('render create account input field', ()=>{
//     const testRenderer = TestRenderer.create(<CreateAccount/>);
//     const testInstance = testRenderer.root;
//     expect(testInstance.findByProps({test_id_fullname: "3"}).props.placeholder).toEqual('Enter you full name');
//     expect(testInstance.findByProps({test_id_emailid: "5"}).props.placeholder).toEqual('example@domain.com');
//     expect(testInstance.findByProps({test_button_id: "8"}).children).toEqual([' Create ']);
//   });