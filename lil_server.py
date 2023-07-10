from http.server import BaseHTTPRequestHandler, HTTPServer

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    temp_file = 'temp.txt'
    temp_dict = {'Lounge': 0,
                 'Office': 0}

    def _set_headers(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT')            
        self.send_header("Access-Control-Allow-Headers", "X-Requested-With, Content-type") 
        self.end_headers()


    def do_OPTIONS(self):
        self._set_headers()
        with open(self.temp_file, 'r') as f:
            temp_value = f.read()
            self.wfile.write(temp_value.encode())


    def do_GET(self):
        self._set_headers()
        with open(self.temp_file, 'r') as f:
            temp_value = f.read()
            self.wfile.write(temp_value.encode())

    def do_PUT(self):
        content_length = int(self.headers['Content-Length'])
        data = self.rfile.read(content_length)
        data_str = data.decode()  # convert bytes to string
        print(f'Received data: {data_str}')

        with open(self.temp_file, 'r') as f:
            temp_value = f.readlines()
            print(temp_value)
        

        with open(self.temp_file, 'w') as f:
            splitted_data = data_str.split(',')
            write_array = [temp_value[0],temp_value[1]]
            
            if splitted_data[0] == 'Lounge':
                write_array[1] = data_str
            else:
                write_array[0] = data_str + '\n'
            f.writelines(write_array)

        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write(b'Hello!')


def run_server():
    host = '0.0.0.0'  # Listen on all network interfaces
    port = 8000  # Use any available port you prefer

    server_address = (host, port)
    httpd = HTTPServer(server_address, SimpleHTTPRequestHandler)
    print(f'Server listening on {host}:{port}')

    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        pass

    httpd.server_close()
    print('Server stopped')


if __name__ == '__main__':
    run_server()
