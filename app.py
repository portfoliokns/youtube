from flask import Flask, render_template

app = Flask(__name__)

# ここへ、観たいyoutube動画のURLを載せる（ショート動画やクリップ動画は不可）
videos = [
  "https://www.youtube.com/watch?v=7XXq6zb74Ss&t=20s",
  "https://www.youtube.com/watch?v=AJRPMmyAEAQ&t=16s",
]

@app.route('/')
def index():
  return render_template('index.html', videos=videos)

if __name__ == "__main__":
  app.run(debug=True)
