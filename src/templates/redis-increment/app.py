from flask import Flask
from redis import Redis, RedisError
import os
import socket

# Connect to Redis
redis = Redis(host="redis", db=0, socket_connect_timeout=2, socket_timeout=2)

app = Flask(__name__)

@app.route("/")
def hello():
    try:
        # Increment on visit
        visits = redis.incr("counter")
        # Handle Redis error
    except RedisError:
        visits = "<i>Error with Redis, counter disaible</i>"

    # Render the html page
    html = "<h3>Hello {name}!</h3>" \
           "<b>Hostname:</b> {hostname}<br/>" \
           "<b>Visit(s): </b> {counter} <br/>" \
           "<p>https://github.com/Piarre!</p>"
    # Return variable
    return html.format(name=os.getenv("NOM", "youtube"), hostname=socket.gethostname(), visites=visites)

# Run server on localhost
if __name__ == "__main__":
    app.run(host='0.0.0.0', port=80)