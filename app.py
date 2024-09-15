from flask import Flask, render_template, request

app = Flask(__name__)

default_videoURLs_playlist = [
  "https://www.youtube.com/watch?v=AJRPMmyAEAQ&t=16s", #短編映画
  "https://www.youtube.com/watch?v=PQTjyKtsOuc", #短編映画
]
default_videoURLs_multivideo = [
  "https://www.youtube.com/watch?v=x_fHq3B_UP4", #ライブカメラ映像
  "https://www.youtube.com/watch?v=IBL2Ix3Qjng", #ライブカメラ映像
  "https://www.youtube.com/watch?v=fr1HBimMBlo", #ライブカメラ映像
  "https://www.youtube.com/watch?v=0C2EK3VUdLw", #ライブカメラ映像
]
videoURLs =[]

@app.route('/')
def index():
  return render_template('index.html', videoURLs=videoURLs)

@app.route('/playlist')
def playlist():
  urls = request.args.get('urls', '')
  videoURLs = urls.split(',') if urls else default_videoURLs_playlist
  return render_template('playlist.html', videoURLs=videoURLs)

@app.route('/multivideo')
def multivideo():
  urls = request.args.get('urls', '')
  videoURLs = urls.split(',') if urls else default_videoURLs_multivideo
  return render_template('multivideo.html', videoURLs=videoURLs)

if __name__ == "__main__":
  app.run(debug=True)
