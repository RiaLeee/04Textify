import { Box, Button, Input } from "@mui/material";
import { useState } from "react";
import Tesseract from "tesseract.js";

export const ImageUpload = () => {

    const [image, setImage] = useState('');
    const [text, setText] = useState('');

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file))
            recognizeText(file);
        }
    };

    const recognizeText = (file) => {
        Tesseract.recognize(file, 'kor', {
            logger: (info) => console.log(info),
            psm: 6
        })
            .then(({ data: { text } }) => {
                setText(text);
            })
    };

    return <>
        <div>
            이미지변환 컴포넌트 <br />
            <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
                <input type="file" onChange={handleImageUpload} />
                <Input
                    accept="image/*"
                    id="file-upload"
                    type="file"
                    style={{ display: 'none' }} // 기본 Input 숨기기
                    onChange={handleImageUpload}
                />

                <label htmlFor="file-upload">
                    <Button variant="contained" component="span">
                        Upload Image
                    </Button>
                </label>
                {image && <img src={image} alt="Upload" />}
            </Box>



            <h3>인식된 문자: </h3>
            <textarea value={text} readOnly />

        </div>

    </>

};