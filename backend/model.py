from pydantic import BaseModel

class Crop(BaseModel):
    cls: str
    crop: str
    disease: str
    about: str
    opttemp: str
    optmst: str
    remedy: str