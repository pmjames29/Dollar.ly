import os
import json

from datetime import datetime
from flask import Flask, Response, request
from pymongo import MongoClient

app = Flask(__name__)

mongoClient = MongoClient("mongodb://127.0.0.1:27017")
db = mongoClient.get_database("dollar_ly")
expenses = db.get_collection("expenses")


@app.route("/addexpense/<expense>/")
def addexpense(expense):
    expense = {"expense": expense, "date": datetime.now}
    expenses.insert_one(expense)
    return Response(expense, mimetype="application/json", status=200)


@app.route("/getexpenses/")
def getexpenses():
    expenses_json = []
    if expenses.find():
        for expense in expenses.find().sort("date"):
            expenses_json.append(
                {
                    "expense": expense["expense"],
                    "date": expense["date"],
                    "id": str(expense["_id"]),
                }
            )
    return json.dumps(expenses_json)


if __name__ == "__main__":
    app.run(debug=True)
