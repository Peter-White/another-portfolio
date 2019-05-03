# importing Flask class from flask.py file
from flask import Flask


# create an instance of the Flash class, in order to run this application
# name parameter will default to folder name
app = Flask(__name__)


# from the app folder, import the routes.py file, and startup at the index route
from app import routes
