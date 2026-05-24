from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def dashboard_doncic():
    # Base de datos de Luka (Cada temporada es un bloque de datos independiente)
    temporadas = [
        {"id": "t1", "año": "2018-19", "pts": 21.2, "reb": 7.8, "ast": 6.0, "hito": "Rookie of the Year"},
        {"id": "t2", "año": "2019-20", "pts": 28.8, "reb": 9.4, "ast": 8.8, "hito": "All-Star / All-NBA 1st"},
        {"id": "t3", "año": "2020-21", "pts": 27.7, "reb": 8.0, "ast": 8.6, "hito": "All-NBA 1st Team"},
        {"id": "t4", "año": "2021-22", "pts": 28.4, "reb": 9.1, "ast": 8.7, "hito": "Finales Conferencia W"},
        {"id": "t5", "año": "2022-23", "pts": 32.4, "reb": 8.6, "ast": 8.0, "hito": "Máximo Anotador"},
        {"id": "t6", "año": "2023-24", "pts": 33.9, "reb": 9.2, "ast": 9.8, "hito": "Finalista de la NBA"},
        {"id": "t7", "año": "2024-25", "pts": 28.2, "reb": 8.2, "ast": 7.7, "hito": "Traspasado a Lakers"},
        {"id": "t8", "año": "2025-26", "pts": 33.5, "reb": 7.7, "ast": 8.3, "hito": "Campaña de MVP"}
    ]
    return render_template('index.html', temporadas=temporadas)

if __name__ == '__main__':
    app.run(debug=True, port=5000)