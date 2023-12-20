from config import db
# from models.recipient import Recipient
# from models.donation import Donation
# from models.pitch import Pitch
from app import app
from models import Recipient,Donation,Pitch


def create_recipients():
    # recipients=  [
    #     {
    #         "recipientName": "Lyana",
    #         "email": "sparkles@aol.com",
    #         "username": "Jmoney",
    #         "password": "spiderman"
    #     },
    #     {
    #         "recipientName": "tim",
    #         "email": "hardlife@yahoo.com",
    #         "username": "toughcookie",
    #         "password": "needcash",
    #     }
    # ]
    recipients = Recipient(recipientName = 'Lyana', email = 'sparkles@aol.com', username = 'Jmoney',password = 'spiderman')
    r = [recipients]
    return r

def create_donations(pitches):
    # donations=  [
    #     {
    #         "donorName": "Lynae",
    #         "pitchesId": 1,
    #         "amountDonated": 50
    #     },
    #     {
    #         "donorName": "james",
    #         "amountDonated": "4000000",
    #         "pitchesId": "1",
    #     }
    # ]

    donations = Donation(donorName = 'Lynae', pitchesId = pitches[0].id, amountDonated = 50.00)
    d = [donations]
    return d

def create_pitches(recipients):
    # pitches=  [
    #     {
    #         "recipientId": recipients[1].id,
    #         "title": "jiberrish",
    #         "amountNeeded": 5000,
    #         "description": "I need to buy my kids icecream yo."
    #     },
    #     {
    #         "recipientId": recipients[2].id,
    #         "title": "no",
    #         "description": "no",
    #         "amountNeeded": 500000,
    #     }
    # ]
    
    pitches = Pitch(recipientId = recipients[0].id, title = 'jiberrish', amountNeeded = 500000.00, description= 'I need to buy my kids icecream yo')
    p = [pitches]
    return p




if __name__ == '__main__':
    with app.app_context():
        print('clearing db...')
        Pitch.query.delete()
        Donation.query.delete()
        Recipient.query.delete()

        print('seeding db...')
        

        recipients = create_recipients()
        db.session.add_all(recipients)
        db.session.commit()

       

        pitches = create_pitches(recipients)
        db.session.add_all(pitches)
        db.session.commit()

        donations = create_donations(pitches)
        db.session.add_all(donations)
        db.session.commit()
        print('done seeding')

    



