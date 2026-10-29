# 🧱 Class Wall

A small Flask website that shows a card for every student in `students.json`,
with search, language filters and dark mode. You will add **yourself** to the
wall using Git and GitHub.

## 1. Prerequisites

- [Git](https://git-scm.com/downloads)
- [Python 3.9+](https://www.python.org/downloads/) (on Windows, tick "Add Python to PATH")
- A free [GitHub account](https://github.com/signup)

Check they work:

```bash
git --version
python --version
```

## 2. Get the code

```bash
git clone https://github.com/<TEACHER-USERNAME>/<REPO-NAME>.git
cd <REPO-NAME>
```

## 3. Install the requirements

Create an isolated environment (a private folder for this project's packages),
then install everything listed in `requirements.txt`.

**Windows (PowerShell):**

```powershell
python -m venv venv
venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

**Mac / Linux:**

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

> PowerShell blocked the activate script? Run
> `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` once, then retry.

## 4. Run the site

```bash
python app.py
```

Open http://127.0.0.1:5000. Stop the server with `Ctrl + C`.

## 5. Add yourself (the Git exercise)

1. Create a branch: `git checkout -b add-<your-name>`
2. Open `students.json` and add your entry **before the final `]`**
   (put a comma after the previous entry, and none after yours):

   ```json
   {
     "name": "Your Name",
     "github": "your-github-username",
     "emoji": "😎",
     "language": "Python",
     "message": "Hello from <your city>!"
   }
   ```

   `github` shows your real GitHub profile picture. Leave it `""` to get a
   coloured initial instead.
3. Refresh the site and check your card appears.
4. Commit:
   ```bash
   git add students.json
   git commit -m "Add <your name> to the class wall"
   ```
5. Push: `git push -u origin add-<your-name>`
6. On GitHub click **Compare & pull request** and open a PR.

## Project layout

| File | What it does |
| --- | --- |
| `app.py` | Flask server: `/` page and `/api/students` JSON |
| `students.json` | The data. The only file students edit |
| `templates/` | HTML pages |
| `static/` | CSS and JavaScript |
| `requirements.txt` | Python packages to install |
