import json
import boto3

dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table('visitor-count-db')

def lambda_handler(event, context):
    response = table.get_item(Key={'ID': '1'})
    if 'Item' in response:
        views = response['Item']['views_counter']
        views += 1
        print(f"Current views: {views}")
        table.update_item(
            Key={'ID': '1'},
            UpdateExpression='SET views_counter = :val',
            ExpressionAttributeValues={':val': views}
        )
        return views
    else:
        return "Error: Item not found in DynamoDB table"
