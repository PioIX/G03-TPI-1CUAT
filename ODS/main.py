from flask import Flask, render_template, request
import sqlite3
import json
from datetime import datetime



app = Flask(__name__)

@app.route('/')
def index():
  return render_template('index.html')

@app.route('/problematica')
def problematicaindex():
  return render_template('problematica.html')

@app.route('/ayudar')
def ayudarindex():
  return render_template('ayudar.html')

@app.route('/blog')
def blog():
  conn = sqlite3.connect('database.db')
  resu = conn.execute(f"""SELECT * FROM mensaje""")
  resul = resu.fetchall()
  conn.close()
  return render_template('blog.html',
                         resul = resul,
                         long = len(resul))


@app.route('/m', methods=['POST'])
def usuario(): 
  if request.form['inputMensaje'] != "":
    inputMensaje = request.form['inputMensaje']
    now = datetime.now()
    
    if request.form['inputNombre'] == "":
      inputNombre = "Anonimo"
    else:
      inputNombre = request.form['inputNombre']

    e = sqlite3.connect('database.db')
    q = f"""INSERT INTO mensaje(autor, fechayhora, contenido) 
        VALUES ('{inputNombre}', '{now}',  '{inputMensaje}')"""
    e.execute(q)
    e.commit()
    e.close()
      
  conn = sqlite3.connect('database.db')
  resu = conn.execute(f"""SELECT * FROM mensaje""")
  resul = resu.fetchall()
  conn.close()

  return render_template('blog.html',
                         resul = resul,
                         long = len(resul))

if __name__ == '__main__':
      app.run(host='0.0.0.0', port=81)