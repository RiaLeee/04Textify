import style from '../style/IntroText.module.css';

export const IntroText = () => {
    return <>
        <div className={style.div}>
            <h2>이미지 텍스트 자동 추출</h2>
            <p>
                Textify 에서는 한 번의 클릭으로 이미지에서 텍스트를 자동으로 추출하는 서비스 제공합니다.
            </p>
        </div>
    </>
};