#https://pyimagesearch.com/2021/10/27/automatically-ocring-receipts-and-scans/
#https://www.kaggle.com/code/dmitryyemelyanov/receipt-ocr-part-2-text-recognition-by-tesseract

import argparse
import cv2
import imutils
import pytesseract
import re
from imutils.perspective import four_point_transform
import matplotlib.pyplot as plt
import json

from pytesseract import Output

#IMAGE_PATH = "test_receipt.png"

options = "--psm 4"

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'
# Loading the input image from he disk, resizing it an computing the ratio of the 'new' width -> 'old' width

def plot_gray(image):
    plt.figure(figsize=(16,10))
    return plt.imshow(image, cmap='Greys_r')

def plot_rgb(image):
    plt.figure(figsize=(16,10))
    return plt.imshow(cv2.cvtColor(image, cv2.COLOR_BGR2RGB))

def getTotal(IMAGE_PATH):
    image = cv2.imread(IMAGE_PATH, cv2.IMREAD_GRAYSCALE) 
    plot_gray(image)


    d = pytesseract.image_to_data(image, output_type=Output.DICT)
    n_boxes = len(d['level'])
    boxes = cv2.cvtColor(image.copy(), cv2.COLOR_BGR2RGB)
    for i in range(n_boxes):
        (x, y, w, h) = (d['left'][i], d['top'][i], d['width'][i], d['height'][i])    
        boxes = cv2.rectangle(boxes, (x, y), (x + w, y + h), (0, 255, 0), 2)
        
    plot_rgb(boxes)


    extracted_text = pytesseract.image_to_string(image)
    test = extracted_text.split("\n")

    totals = [a for a in test if "TOTAL" in a or "total" in a]
    not_totals = [a for a in test if  "TOTAL" not in a and "total" not in a]

    recomb = "\n".join(totals)
    amounts_total = re.findall(r'\d+\.\d{2}\b', recomb)



    largest_total = max(amounts_total)

    total_dict = dict()
    total_dict["total"] = largest_total
    json_object = json.dumps(total_dict, indent = 4)
    return json_object




