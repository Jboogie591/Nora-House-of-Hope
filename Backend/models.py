from sqlalchemy.ext.associationproxy import association_proxy
from config import db
from sqlalchemy_serializer import SerializerMixin
from config import db

class Donation (db.Model,SerializerMixin):
    __tablename__="donations"
    
    id = db.Column(db.Integer, primary_key=True)
    donorName = db.Column(db.String)
    pitchesId = db.Column(db.Integer, db.ForeignKey('pitches.id'))
    amountDonated = db.Column(db.Float)
    
    pitch = db.relationship('Pitch', back_populates='donations')


class Pitch (db.Model,SerializerMixin):
    __tablename__="pitches"
    
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String)
    amountNeeded = db.Column(db.Float)
    description = db.Column(db.Text)
    recipientId = db.Column(db.Integer, db.ForeignKey('recipients.id'))
    
    donations = db.relationship('Donation', back_populates='pitch')
    recipient = db.relationship('Recipient', back_populates='pitches')
    

class Recipient (db.Model,SerializerMixin):
    __tablename__="recipients"
    
    id = db.Column(db.Integer, primary_key=True)
    recipientName = db.Column(db.String)
    email = db.Column(db.Text)
    username = db.Column(db.Text)
    password = db.Column(db.Text) 

    pitches = db.relationship('Pitch', back_populates='recipient')
    donations = association_proxy('pitches','donations')
    
   