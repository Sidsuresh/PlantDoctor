from fastapi import FastAPI, File, HTTPException, UploadFile;
from fastapi.middleware.cors import CORSMiddleware;
import uvicorn;
import numpy as np
from io import BytesIO
from PIL import Image

import tensorflow as tf

from model import Crop


app = FastAPI()

MODEL = tf.keras.models.load_model('../plantdetection7.h5')


from database import (
    fetch_one_crop,
    create_crop
)

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins = origins,
    allow_credentials = True,
    allow_methods = ["*"],
    allow_headers = ["*"]
)

def ret_img(d) -> np.ndarray:
    image = np.array(Image.open(BytesIO(d)))
    print("before resizing")
    print(image)
    print(image.shape)
    image.resize((256,256,3))
    print("after image")
    print(image.shape)
    print(image)
    return image
    # img = Image.open(BytesIO(d))
    # img_resized = img.resize(256,256)
    # image = np.array(img_resized)
    # return image

@app.post('/upload')
async def upload(file: UploadFile = File(...)):
    img = ret_img(await file.read())
    img_batch = np.expand_dims(img, 0)
    predictions = MODEL.predict(img_batch)
    print(predictions)
    ind = np.argmax(predictions[0])
    print(ind)
    print(type(ind))
    int_ind = ind.item()
    str_ind = str(int_ind)
    print('INd: ', int_ind)
    print('type: ', type(int_ind))
    print('strINd: ', str_ind)
    print('type: ', type(str_ind))
    confidence = np.max(predictions[0])
    print(confidence)

    return {
        "cls_ind": str_ind,
        "confidence": float(confidence),
    }

    # response = await fetch_one_crop(str_ind)
    # if response:
    #     print(response['remedy'])
        
    # else:
    #     return {
    #         "cls_ind": int(int_ind),
    #         "cls_name": cls,
    #         "confidence": float(confidence),
    #         "remedy": "Researching..."
    #     }



@app.get('/getCrop/{cls_name}', response_model=Crop)
async def root(cls_name):
    print(type(cls_name))
    response = await fetch_one_crop(cls_name)
    if response:
        return response
    else:
        raise HTTPException(404, "Item not found")


@app.post("/remedy/", response_model=Crop)
async def post_remedy(crop: Crop):
    response = await create_crop(crop.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")