"""empty message

Revision ID: e09aa65707ea
Revises: 
Create Date: 2023-12-19 17:27:11.585870

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e09aa65707ea'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('recipients',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('recipientName', sa.String(), nullable=True),
    sa.Column('email', sa.Text(), nullable=True),
    sa.Column('username', sa.Text(), nullable=True),
    sa.Column('password', sa.Text(), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('pitches',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('title', sa.String(), nullable=True),
    sa.Column('amountNeeded', sa.Float(), nullable=True),
    sa.Column('description', sa.Text(), nullable=True),
    sa.Column('recipientId', sa.Integer(), nullable=True),
    sa.ForeignKeyConstraint(['recipientId'], ['recipients.id'], name=op.f('fk_pitches_recipientId_recipients')),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_table('donations',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('donorName', sa.String(), nullable=True),
    sa.Column('pitchesId', sa.Integer(), nullable=True),
    sa.Column('amountDonated', sa.Float(), nullable=True),
    sa.ForeignKeyConstraint(['pitchesId'], ['pitches.id'], name=op.f('fk_donations_pitchesId_pitches')),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('donations')
    op.drop_table('pitches')
    op.drop_table('recipients')
    # ### end Alembic commands ###