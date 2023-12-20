# from sqlalchemy_serializer import SerializerMixin
# from config import db

# class Donation (db.Model,SerializerMixin):
#     __tablename__="donations"
    
#     id = db.Column(db.Integer, primary_key=True)
#     donorName = db.Column(db.String)
#     pitchesId = db.Column(db.Integer,db.ForeignKey('pitches.id'))
#     amountDonated = db.Column(db.Float)
    
#     pitch = db.relationship('Pitch',back_populates='donations')

    

   