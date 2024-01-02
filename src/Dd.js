import { useEffect, useState, useRef } from "react"


function Comment() {

    const [nicknameValue, setNicknameValue] = useState("")
    const [commentConText, setcommentConText] = useState("")
    const [commentdata, setCommentdata] = useState([]); // 댓글등록시 글쓴이 데이터 array


    const commentRegistration = (e) => {
        e.preventDefault()
        setCommentdata((prev) => [{ nicknameValue, commentConText }, ...prev])
        alert("댓글이 등록되었습니다")

        console.log("이것을 DB로 넘겨야함", commentdata)
    }



    const nicknameChange = (event) => {
        setNicknameValue(event.target.value);
    }

    const commentConTextChange = (event) => {
        setcommentConText(event.target.value);
    }


    return (
        <>
            <div >
                <form action="">
                    <div >
                        <label for="nickname">이름/닉네임</label>
                        <input
                            type="text"
                            id="nickname"
                            name="nickname"
                            value={nicknameValue}
                            onChange={nicknameChange}
                        />
                    </div>
                    <div >
                        <textarea
                            name=""
                            id=""
                            cols="30" rows="10"
                            placeholder="내용을 적어주세요"
                            onChange={commentConTextChange}
                        ></textarea>
                        <button
                            onClick={(event) => {
                                commentRegistration(event);
                            }}
                        >등록</button>
                    </div>
                </form>
                <ul>
                    {
                        commentdata.map((el, i) => <li>
                            <p>{el.nicknameValue}</p>
                            <p>{el.commentConText}</p>
                        </li>)

                    }
                </ul>

            </div>
        </>
    );
}

export default Comment