# import youtube_dl
from http.server import BaseHTTPRequestHandler

# ydl_opts = {
#   format: 'bestvideo[ext=mp4]+bestaudio[ext=m4a]',
#   'outtmpl': 'tmp/%(id)s.%(ext)s',
#   'restrict-filenames': True,
#   'merge-output-format': 'mp4'
# }

class handler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)

        # with youtube_dl.YoutubeDL(ydl_opts) as ydl:
        #     ydl.download(['BaW_jenozKc'])

        self.send_header('Content-type','text/plain')
        self.end_headers()
        self.wfile.write('BaW_jenozKc'.encode())
        return