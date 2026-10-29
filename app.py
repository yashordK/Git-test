import json
from pathlib import Path

from flask import Flask, jsonify, render_template

app = Flask(__name__)

STUDENTS_FILE = Path(__file__).parent / "students.json"


def load_students():
    with open(STUDENTS_FILE, encoding="utf-8") as f:
        students = json.load(f)
    for s in students:
        s.setdefault("github", "")
        s.setdefault("emoji", "🙂")
        s.setdefault("language", "")
        s.setdefault("message", "")
    return students


@app.route("/")
def home():
    try:
        students = load_students()
    except json.JSONDecodeError as e:
        # A typo in students.json is the most common mistake in class,
        # so show a friendly page instead of a stack trace.
        return render_template("error.html", error=e), 500
    languages = sorted({s["language"] for s in students if s["language"]})
    return render_template("index.html", students=students, languages=languages)


@app.route("/api/students")
def api_students():
    return jsonify(load_students())


if __name__ == "__main__":
    app.run(debug=True)
