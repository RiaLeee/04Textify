import { Box, Button } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ContentCopy from '@mui/icons-material/ContentCopy';
import InsertPhoto from '@mui/icons-material/InsertPhoto';
import { useEffect, useState } from 'react';
import Tesseract from 'tesseract.js';
import style from '../style/ImageUpload.module.css';
import { Loading } from './Loading';
import { CustomAlert } from './CustomAlert';

export const ImageUpload = () => {
    const [image, setImage] = useState('');
    const [text, setText] = useState('');
    const [fileName, setFileName] = useState('');
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState('');
    const [alertOpen, setAlertOpen] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('success');

    const handleImageUpload = (e) => {
        setAlertOpen(false);
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
            setFileName(file.name);
            recognizeText(file);
        }
    };

    const recognizeText = (file) => {
        setLoading(true);
        setProgress(0);
        setError('');

        Tesseract.recognize(file, 'kor', {
            logger: (info) => setProgress(info.progress * 100),
            psm: 6,
        })
            .then(({ data: { text } }) => {
                setText(text);
                setLoading(false);
                setProgress(100);
            })
            .catch(() => {
                setLoading(false);
                setError('텍스트 인식 중 오류가 발생했습니다. 다시 시도해 주세요.');
                showAlert('텍스트 인식이 완료되었습니다!', 'success');
            });
    };

    const showAlert = (message, severity) => {
        setAlertMessage(message);
        setAlertSeverity(severity);
        setAlertOpen(true);
    };

    const handleAlertClose = () => {
        setAlertOpen(false);
    };


    return (
        <div className={style.mainContainer}>
            <Box component="section" className={style.uploadContainer}>
                <p className={style.firstP}>
                <InsertPhoto sx={{ fontSize: '15px', color: '#8d0529', marginRight: '1px' ,marginTop: '4px' }} />
                이미지 업로드 OR 붙여넣기
                </p>
                <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    className={style.wineButton}
                    sx={{
                        backgroundColor: '#8d0529',
                        color: 'white',
                        '&:hover': {
                            backgroundColor: '#a00000',
                        },
                    }}
                >
                    Upload file
                    <input
                        type='file'
                        className={style.hiddenInput}
                        onChange={handleImageUpload}
                    />
                </Button>
                <p className={style.fileName}>{fileName}</p>
            </Box>

            <h3>Result</h3>
            <div className={style.resultContainer}>
                <Box component="section" className={style.imageContainer}>
                    {image ? (
                        <img src={image} alt="Upload" className={style.uploadImage} />
                    ) : (
                        <span className={style.span}>image</span>
                    )}
                </Box>

                <div className={style.separator}></div>

                <div className={style.textContainer}>
                    {loading ? (
                        <Loading value={progress} />
                    ) : error ? (
                        <p className={style.errorMessage}>{error}</p>
                    ) : text ? (
                        <>
                            <textarea value={text} readOnly className={style.text} />
                            <button
                                onClick={() => {
                                    navigator.clipboard.writeText(text);
                                    showAlert('텍스트가 복사되었습니다.', 'success');
                                }}
                                className={style.copyButton}
                                startIcon={<ContentCopy style={{ marginRight: '4px' }}/>}

                            >복사
                            </button>
                        </>
                    ) : (
                        <textarea className={style.span} disabled>
                            텍스트 결과
                        </textarea>

                    )}

                    {alertOpen && (
                        <CustomAlert
                            severity={alertSeverity}
                            onClose={handleAlertClose}
                            style={{ marginTop: '20px' }}
                        >
                            {alertMessage}
                        </CustomAlert>
                    )}
                </div>
            </div>





        </div>
    );
};
