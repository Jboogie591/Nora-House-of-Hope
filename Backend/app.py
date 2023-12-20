from flask_restful import Resource
from flask import request,make_response
from config import app,db,api
from models import Recipient,Donation,Pitch


class Pitches(Resource):
    def get(self):
        pitches = [pitch.to_dict() for pitch in Pitch.query.all()]
        return make_response(pitches, 200)
    
api.add_resource(Pitches,'/pitches')

class Donations(Resource):
    def get(self):
        donations = [donation.to_dict(rules = ('-pitch',)) for donation in Donation.query.all()]
        return make_response(donations, 200)
    
api.add_resource(Donations,'/donations')

class Recipients(Resource):
    def get(self):
        recipients = [recipient.to_dict() for recipient in Recipient.query.all()]
        return make_response(recipients, 200)
    
api.add_resource(Recipients,'/recipients')

@app.route('/')
def home():
    return ''

if __name__ == '__main__':
    app.run(port=5555, debug=True)

