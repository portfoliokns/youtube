from flask import Flask, render_template

app = Flask(__name__)

# ここへ、観たいyoutube動画のURLを載せる（ショート動画やクリップ動画は不可）
videoURLs = [
  "https://www.youtube.com/watch?v=7XXq6zb74Ss&t=20s",
  "https://www.youtube.com/watch?v=AJRPMmyAEAQ&t=16s",
  # "https://www.youtube.com/watch?v=VIDEO_ID_1", "https://www.youtube.com/watch?v=VIDEO_ID_2", "https://www.youtube.com/watch?v=VIDEO_ID_3"
]

@app.route('/')
def index():
  return render_template('index.html', videoURLs=videoURLs)

if __name__ == "__main__":
  app.run(debug=True)
