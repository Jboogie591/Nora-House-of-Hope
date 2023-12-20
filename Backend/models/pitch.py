# from sqlalchemy_serializer import SerializerMixin
# from config import db

# class Pitch (db.Model,SerializerMixin):
#     __tablename__="pitches"
    
#     id = db.Column(db.Integer, primary_key=True)
#     title = db.Column(db.String)
#     amountNeeded = db.Column(db.Float)
#     description = db.Column(db.Text)
#     recipientId = db.Column(db.Integer,db.ForeignKey('recipients.id'))
    
#     donations = db.relationship('Donation',back_populates='pitch')
#     recipient = db.relationship('Recipient',back_populates='pitches')