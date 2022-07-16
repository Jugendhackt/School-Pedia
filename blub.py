from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate, MigrateCommand
from flask_script import Manager
from forum import app, db
from flask import Flask, request, flash, url_for, redirect, render_template


app = Flask (__name__)

db = SQLAlchemy(app)

db.create_all()