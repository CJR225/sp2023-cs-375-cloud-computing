import json
import boto3
from boto3.dynamodb.conditions import Key, Attr


def lambda_handler(event, context):
      #initialize the client
      client = boto3.resource('dynamodb')
      
      # Init the table
      table = client.Table('users')   
      
      # Process the request
      response =table.put_item(
        Item={
          
        # Use request ID from context handler to allow for multiple requests - gives uniqueness
        'request_id': context.aws_request_id,
        
        # Update remaining fields with data supplied in request
        'username': event.get('username'),
        'first_name': event.get('first_name'),
        'last_name': event.get('last_name'),
        'age': event.get('age'),
        'account_type': event.get('account_type')
          }
        )
        
      # Echo the request from the response
      return {
        'statusCode': 201,
        'body': event
      }

