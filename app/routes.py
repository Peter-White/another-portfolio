from app import app, db, login
from flask import render_template, url_for, redirect

# create route for index page, render index.html file
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')
