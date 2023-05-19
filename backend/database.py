from model import Crop

#Mongodb driver
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

database = client.CropList

collection = database.Crop


async def fetch_one_crop(cls_name):
    document = await collection.find_one({'cls': cls_name})
    return document

async def create_crop(crop):
    document = crop
    result = await collection.insert_one(document)
    return document