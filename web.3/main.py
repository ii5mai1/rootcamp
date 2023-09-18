from flask import Flask, request, render_template, jsonify

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/verify', methods=['POST'])
def verify():
    try:
        data = request.json
        if 'number' in data:
            try:
                random=int(data['number'])
                if random==777:
                    return jsonify({"message":"CIT{ch1_t5rbi9a}"})
                else:
                    return jsonify({"message":"Nope!"})
            except:
                return jsonify({"message":"hakker dyal lah y7ssane l3wane"})
    except:
        return jsonify({"message":"number parameter is missing"})
            

if __name__ == '__main__':
    app.run(debug=True)
