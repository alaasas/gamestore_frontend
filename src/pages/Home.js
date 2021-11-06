import React, { useState} from "react";

import "./Home.css";
import Popup from "./Popups/popWindow.js";
import Popup2 from "./Popups/popWindow2.js";
import Popup3 from "./Popups/popWindow3.js";
import Popup4 from "./Popups/popWindow4.js";
import Popup5 from "./Popups/popWindow5.js";
import Popup6 from "./Popups/popWindow6.js";
import Popup7 from "./Popups/popWindow7.js";
import Popup8 from "./Popups/popWindow8.js";
import Popup9 from "./Popups/popWindow9.js";
import Popup10 from "./Popups/popWindow10.js";


function Game_content(){
//set state for image window popup
const [imagePopup1, setImagePopup1]=useState(false);
const [imagePopup2, setImagePopup2]=useState(false);
const [imagePopup3, setImagePopup3]=useState(false);
const [imagePopup4, setImagePopup4]=useState(false);
const [imagePopup5, setImagePopup5]=useState(false);
const [imagePopup6, setImagePopup6]=useState(false);
const [imagePopup7, setImagePopup7]=useState(false);
const [imagePopup8, setImagePopup8]=useState(false);
const [imagePopup9, setImagePopup9]=useState(false);
const [imagePopup10, setImagePopup10]=useState(false);

//return component
return (
  <div className="Home">
    <div className="HomeForm">
    <h3 test_id_h1 ="1">Welcome To Game Renting Store</h3>
    </div>
    <div className="HomeImges">
      <ul>
        <Popup trigger={imagePopup1} setTrigger={setImagePopup1}>
        </Popup>
          <img test_id_img1 = "2" src= {'https://assets1.ignimgs.com/2018/03/06/fortnite---button-1520296499714.jpg?width=300'} alt="pic" onClick={()=> setImagePopup1(true)}/>
        <Popup2 trigger={imagePopup2} setTrigger={setImagePopup2}>
        </Popup2> 
          <img test_id_img2 = "3" src= {'https://assets-prd.ignimgs.com/2021/08/17/call-of-duty-vanguard-button-00-1629164778736.jpg?width=300'} alt="pic" onClick={()=> setImagePopup2(true)}/>
        <Popup3 trigger={imagePopup3} setTrigger={setImagePopup3}>
        </Popup3> 
          <img test_id_img3 = "4" src= {'https://assets-prd.ignimgs.com/2020/11/14/marvels-spider-man-general-1605330330912.jpg?width=300'} alt="pic" onClick={()=> setImagePopup3(true)}/>
        <Popup4 trigger={imagePopup4} setTrigger={setImagePopup4}>
        </Popup4>
          <img test_id_img4 = "5" src= {'https://assets1.ignimgs.com/2018/06/13/super-smash-btros-ultimate---button-0001-1528851298611.jpg?width=300'} alt="pic" onClick={()=> setImagePopup4(true)}/>
        <Popup5 trigger={imagePopup5} setTrigger={setImagePopup5}>
        </Popup5>
          <img test_id_img5 = "6" src= {'https://assets-prd.ignimgs.com/2021/10/01/fifa-22-legacy-edition-button-1633122224466.jpg?width=300'} alt="pic" onClick={()=> setImagePopup5(true)}/>
        <Popup6 trigger={imagePopup6} setTrigger={setImagePopup6}>
        </Popup6>
          <img test_id_img6 = "7"  src= {'https://assets-prd.ignimgs.com/2021/10/21/lego-star-wars-castaway-button-1634780317249.jpg?width=300'} alt="pic" onClick={()=> setImagePopup6(true)}/>
        <Popup7 trigger={imagePopup7} setTrigger={setImagePopup7}>
        </Popup7>
          <img test_id_img7 = "8" src= {'https://assets-prd.ignimgs.com/2021/06/02/srx-button-1622596548857.jpg?width=300'} alt="pic" onClick={()=> setImagePopup7(true)}/>
        <Popup8 trigger={imagePopup8} setTrigger={setImagePopup8}>
        </Popup8>
          <img test_id_img8 = "9"  src= {'https://assets-prd.ignimgs.com/2020/09/28/dynasty-warriors-9-empires-button-001-1601330278777.jpg?width=300'} alt="pic" onClick={()=> setImagePopup8(true)}/>
        <Popup9 trigger={imagePopup9} setTrigger={setImagePopup9}>
        </Popup9>
          <img test_id_img9 = "10"  src= {'https://assets-prd.ignimgs.com/2021/06/25/crash-drive-3-button-1624640707993.jpg?width=300'} alt="pic" onClick={()=> setImagePopup9(true)}/>
        <Popup10 trigger={imagePopup10} setTrigger={setImagePopup10}>
        </Popup10>
          <img test_id_img10 = "11"  src= {'https://assets1.ignimgs.com/2019/06/04/legend-of-zelda-breath-of-the-wild---button-1559683061451.jpg?width=300'} alt="pic" onClick={()=> setImagePopup10(true)}/>
      </ul>
    </div>
  </div>
);
};
export default Game_content;