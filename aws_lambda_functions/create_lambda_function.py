#importing packages
import json
import boto3
#function definition
def lambda_handler(event,context):
    dynamodb = boto3.resource('dynamodb')
    #table name
    table = dynamodb.Table('sample')
    #inserting values into table
    response = table.put_item(
       Item={
            'sample': 'bhagi',
             
        }
    )
    return response