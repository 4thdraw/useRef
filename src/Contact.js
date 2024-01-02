import React, { useEffect, useState, useRef } from 'react'
import "./contact.scss";
import "bootstrap/dist/css/bootstrap.css"
import "@fontsource/noto-sans-kr"
const Contact = () => {
    const [formData, setFormData] = useState(null);
    const forminfo = useRef(null);
    useEffect(() => {     
        const initializeState = () => {           
            const formElements = Array.from(forminfo.current.elements);   
            // form안의 input들을 나열한 것이 정렬은 아니므로 (노드리스트일뿐 정렬형데이터 ) 진짜 정렬로 전환하기
            const initialState = Object.fromEntries(
                formElements
                    .filter((element) => element.name)  // input name이 없는 요소는 없애고 다시 수집                 
                    .map((element) => [element.name, ''])  // 앞에는 이름, 뒤에는 값으로 만들어진 array 내보내면            
            );
            //Object.fromEntries 가 앞자리는 key 뒷자리는 값으로 해서 object로 만들어줌
            setFormData(initialState);
            //input name들을 수집해서 useState 변수를 업데이트해줌
            //input들에 name만 넣어서 retrun식에 넣어주면 알아서 useState상태변수에 추가가 되도록 됨
        };
        initializeState();
    }, []);
    return (
        <div className='contact bg-light py-5'>
            <form action="#none" className='cominfo container' ref={forminfo}>
                <fieldset className='text-center'>필수 정보</fieldset>
                <ul className='row my-3'>
                    <li className='col-12 mb-2'>
                        <input type="text" name='company' className='bg-white border d-block w-100' placeholder='회사 이름(필수)' required />
                    </li>
                    <li className='col-6 mb-2'>
                        <input type="text" name='wr_name' className='bg-white border  d-block w-100' placeholder='담당자 성함(필수)' required />
                    </li>
                    <li className='col-6 mb-2'>
                        <input type="text" name='wr_1' className='bg-white border  d-block w-100' placeholder='직책 (필수)' required />
                    </li>

                    <li className='col-6 mb-2'>
                        <input type="text" name='wr_tel' className='bg-white border  d-block w-100' placeholder='전화번호(필수)' required />
                    </li>
                    <li className='col-6 mb-2'>
                        <input type="text" name='wr_email' className='bg-white border  d-block w-100' placeholder='이메일 주소(필수)' required />
                    </li>

                    <li className='col-12 mb-2'>
                        <strong className='d-block'>프로젝트 개요</strong>
                        <textarea name="wr_content" className='bg-white border  d-block w-100' id="" cols="50" rows="10" placeholder='프로젝트와 관련된 기초 정보를 입력해 주세요.
                *만약 RFP가 있으시다면 아래 "파일 업로드"를 선택해 파일을 첨부하여 주십시오.'>

                        </textarea>
                    </li>
                </ul>
                <button onClick={() => {
                    console.log(formData)
                }}>보내기</button>
            </form>
        </div>
    )
}

export default Contact
