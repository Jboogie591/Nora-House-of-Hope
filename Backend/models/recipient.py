# from sqlalchemy_serializer import SerializerMixin
# from sqlalchemy.ext.associationproxy import association_proxy
# from config import db

# class Recipient (db.Model,SerializerMixin):
#     __tablename__="recipients"
    
#     id = db.Column(db.Integer, primary_key=True)
#     recipientName = db.Column(db.String)
#     email = db.Column(db.Text)
#     username = db.Column(db.Text)
#     password = db.Column(db.Text) 

#     pitches = db.relationship('Pitch',back_populates='recipient')
#     donations = association_proxy('pitches','donations')

   