import io
import pytesseract
from PIL import Image
from fastapi import FastAPI,File,UploadFile
from fastapi.responses import JSONResponse

# Tesseract 경로 설정
pytesseract.pytesseract.tesseract_cmd = r'C:\Users\lg\AppData\Local\tesseract.exe'

app = FastAPI()

@app.get("/")
def read_root():
    return JSONResponse(content={"message":"Hello,World!"})

@app.get("/items/{item_id}")
def read_itme(item_id:int,q:str=None):
    return JSONResponse(content={"item_id":item_id,"query":q})

@app.post("/ocr")
async def ocr_image(file:UploadFile=File(...)):
    contents=await file.read()
    image=Image.open(io.BytesIO(contents))
    text=pytesseract.image_to_string(image)
    print(text)
    return JSONResponse(content={"text":text})