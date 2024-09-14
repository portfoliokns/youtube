from flask import Flask, render_template

app = Flask(__name__)

# ここへ、観たいyoutube動画のURLを載せる（ショート動画やクリップ動画は不可）
videoURLs = [
  "https://www.youtube.com/watch?v=7XXq6zb74Ss",
  "https://www.youtube.com/watch?v=AJRPMmyAEAQ&t=16s",
  # "https://www.youtube.com/watch?v=x_fHq3B_UP4", #ライブカメラ映像
]

@app.route('/')
def index():
  return render_template('index.html', videoURLs=videoURLs)

@app.route('/playlist')
def playlist():
  return render_template('playlist.html', videoURLs=videoURLs)

if __name__ == "__main__":
  app.run(debug=True)
